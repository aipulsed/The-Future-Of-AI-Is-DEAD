import { stripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature') ?? '';

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.warn('[Webhook] STRIPE_WEBHOOK_SECRET not set');
    return new Response('Webhook secret not configured', { status: 500 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('[Webhook] Signature verification failed:', err);
    return new Response('Webhook signature verification failed', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('[Webhook] Checkout completed:', {
      id: session.id,
      email: session.customer_email,
      amount: session.amount_total,
      affiliateCode: session.metadata?.affiliateCode,
    });
    // TODO: Create order, entitlement, and commission records in DB
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object;
    console.log('[Webhook] Subscription cancelled:', sub.id);
    // TODO: Update subscription status in DB
  }

  return new Response('ok', { status: 200 });
}

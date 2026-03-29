import type { NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email?: string; includeBump?: boolean; affiliateCode?: string };
    const { email, includeBump, affiliateCode } = body;

    const baseUrl = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000';

    const lineItems: { price_data: { currency: string; product_data: { name: string }; unit_amount: number }; quantity: number }[] = [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: 'The Future of AI Is Dead — Full Ebook Access' },
          unit_amount: 999,
        },
        quantity: 1,
      },
    ];

    if (includeBump) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: { name: 'AI Reality Toolkit (Order Bump)' },
          unit_amount: 900,
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: email,
      metadata: {
        affiliateCode: affiliateCode ?? '',
        includeBump: String(Boolean(includeBump)),
      },
      success_url: `${baseUrl}/upsell/starter?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error('[Checkout] Stripe error:', err);
    // Fallback: redirect to upsell flow even if Stripe is not configured
    const baseUrl = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000';
    return Response.json({ url: `${baseUrl}/upsell/starter` });
  }
}

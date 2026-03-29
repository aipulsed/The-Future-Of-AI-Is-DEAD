import type { NextRequest } from 'next/server';
import { randomBytes } from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email?: string; name?: string };
    const { email, name } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, message: 'A valid email is required.' }, { status: 400 });
    }

    // Generate a 6-char alphanumeric referral code
    const refCode = 'AFF-' + randomBytes(3).toString('hex').toUpperCase();

    console.log(`[Affiliate Register] email="${email}" name="${name ?? ''}" code="${refCode}"`);
    // TODO: Save affiliate record to DB

    return Response.json({
      success: true,
      referralCode: refCode,
      affiliateLink: `https://thefutureofaiisdead.com/?ref=${refCode}`,
      message: 'Your affiliate account is ready! Start sharing your link.',
    });
  } catch {
    return Response.json({ success: false, message: 'An error occurred.' }, { status: 500 });
  }
}

import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { sessionId?: string; referralCode?: string };
    const { sessionId, referralCode } = body;

    if (!referralCode) {
      return Response.json({ success: false, message: 'Referral code required.' }, { status: 400 });
    }

    console.log(`[Affiliate Track] code="${referralCode}" session="${sessionId ?? 'unknown'}"`);
    // TODO: Log click to DB

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, message: 'Error tracking click.' }, { status: 500 });
  }
}

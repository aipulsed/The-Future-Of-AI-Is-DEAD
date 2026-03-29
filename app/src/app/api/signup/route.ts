import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { name?: string; email?: string; source?: string };
    const { name, email, source } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, message: 'A valid email address is required.' }, { status: 400 });
    }

    // TODO: Integrate with email provider (Resend, ConvertKit, etc.)
    console.log(`[Signup] source=${source ?? 'unknown'} name="${name ?? ''}" email="${email}"`);

    return Response.json({
      success: true,
      message: 'Welcome! Your free access is on its way. Check your inbox.',
    });
  } catch {
    return Response.json({ success: false, message: 'An error occurred. Please try again.' }, { status: 500 });
  }
}

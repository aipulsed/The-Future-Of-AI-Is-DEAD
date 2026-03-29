import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const ref = url.searchParams.get('ref') ?? url.searchParams.get('aff');

  const response = NextResponse.next();

  if (ref) {
    // Set affiliate cookie for 30 days
    response.cookies.set('affiliate', ref, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icons|sw.js|manifest.json).*)'],
};

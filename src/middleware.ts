import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware check for admin route');
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};

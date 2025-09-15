import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  console.log(`Middleware running for: ${req.nextUrl.pathname}`);

  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error("Middleware session error:", sessionError);
    }
    console.log("Middleware session:", session ? "Exists" : "Does NOT exist");
    console.log("User email (if session):", session?.user?.email);

    if (req.nextUrl.pathname.startsWith('/dashboard') && !session) {
      console.log('Middleware: Redirecting to /login from /dashboard (no session)');
      return NextResponse.redirect(new URL('/login', req.url));
    }

    if (req.nextUrl.pathname === '/login' && session) {
      console.log('Middleware: Redirecting to /dashboard from /login (session exists)');
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return res;
  } catch (error) {
    console.error('Middleware caught error:', error);
    return res;
  }
}
export const config = {
  matcher: ['/dashboard/:path*', '/login']
}

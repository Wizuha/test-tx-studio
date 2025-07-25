import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const response = NextResponse.redirect(new URL('/auth/login', request.url))

  response.headers.set('Set-Cookie', 'token=; Path=/; Max-Age=0; HttpOnly')

  return response
}

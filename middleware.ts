import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'mon_secret_de_test'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {

    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  try {
    jwt.verify(token, SECRET)

    return NextResponse.next()
  } catch {

    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
}

export const config = {
  matcher: ['/dashboard'],
}

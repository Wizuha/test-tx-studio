'use client'

import jwt from 'jsonwebtoken'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'


const SECRET = process.env.JWT_SECRET!

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1]
  
    if (!token) {
      router.push('/auth/login')
      return
    }
  
    try {
      const decoded = jwt.verify(token, SECRET)
      console.log('Utilisateur :', decoded)
    } catch (error) {
      router.push('/auth/login')
    }
  }, [router])

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
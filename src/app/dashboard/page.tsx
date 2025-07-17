import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'mon_secret_de_test'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  let firstname = ''
  let lastname = ''
  let mail = ''

  if (token) {
    try {
      const decoded: any = jwt.verify(token, SECRET)
      firstname = decoded.firstname
      lastname = decoded.lastname
      mail = decoded.email
    } catch (e) {
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenue, {firstname} {lastname}!</p>
    </div>
  )
}
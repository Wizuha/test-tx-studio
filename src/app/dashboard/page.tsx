import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import "@/src/app/globals.css";
import Link from "next/link";
import MonCompte from '@/src/components/dashboard/mon_compte';
import InformationsFinancieres from '@/src/components/dashboard/InformationsFinancieres';
import Transactions from '@/src/components/dashboard/transactions';


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
    <div className='h-screen bg-gray-50 p-5'>
      <h1 className="text-black font-bold text-2xl md:text-4xl" >Bonjour , {lastname}</h1>
      <div className='mt-10 text-gray-500'>
        <Link href="#" className='p-3 bg-white transition duration-300 hover:text-blue-800 hover:bg-blue-200 rounded-tl-md rounded-bl-md hover:rounded-md'>Mes prêts</Link>
        <Link href="#" className='p-3 bg-white transition duration-300 hover:text-blue-800 hover:bg-blue-200 rounded-tr-md rounded-br-md hover:rounded-md' >Mes factures</Link>
      </div>
      <MonCompte firstname={firstname} lastname={lastname} />
      <InformationsFinancieres />
      <Transactions />
    </div>
  )
}
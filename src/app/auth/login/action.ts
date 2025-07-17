'use server'

import prisma from "@/src/lib/prisma"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const SECRET = process.env.JWT_SECRET || 'mon_secret_de_test'

export async function loginAccount(formData : FormData){
  try{
    const rawFormData = {
      email : formData.get("email")?.toString(),
      password : formData.get('password')?.toString(),
      }
  
      if(!rawFormData.email || !rawFormData.password){
      throw new Error("Email et mot de passe requis !")
      }
  
    const user = await prisma.user.findUnique({
      where : {
        email : rawFormData.email,
        }
      })
      
    if(!user){
      throw new Error("Cet utilisateur n'existe pas !")
    }
  
    const passwordValid = await bcrypt.compare(rawFormData.password, user.password)
  
    if (!passwordValid) {
      throw new Error("Mot de passe incorrect.")
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, firstname : user.firstname, lastname: user.lastname },
      SECRET,
      { expiresIn: '7d' }
    )

    const cookieStore = await cookies();
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, 
    });

    return{ success : true }
  }catch(error){
    console.log(error)
    return { success: false, message: error instanceof Error ? error.message : "Une erreur est survenue !" }
  }
}


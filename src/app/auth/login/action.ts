'use server'

import prisma from "@/src/lib/prisma"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"

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
    return{ success : true }
  }catch(error){
    console.log(error)
    return { success: false, message: error instanceof Error ? error.message : "Une erreur est survenue !" }
  }
}


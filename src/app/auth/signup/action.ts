'use server'

import prisma from "@/src/lib/prisma"
import bcrypt from "bcryptjs"

export async function createAccount(formData:FormData){
  try{
      const rawFormData = {
          lastname : formData.get('lastname')?.toString(),
          firstname : formData.get('firstname')?.toString(),
          email : formData.get('email')?.toString(),
          password : formData.get('password')?.toString(),
          passwordConfirm : formData.get('passwordConfirm')?.toString(),
      }
  
      if(!rawFormData.email || !rawFormData.password || !rawFormData.passwordConfirm || !rawFormData.lastname || !rawFormData.firstname) {
        throw new Error("Tous les champs n'ont pas éte rempli !")
      }
  
      if (rawFormData.password !== rawFormData.passwordConfirm){
        throw new Error("Les mots de passe ne correspondent pas !");
      }
      const existingUser = await prisma.user.findUnique({
        where: { email: rawFormData.email }
      })
      if(existingUser){
        throw new Error("Cet email est déjà utilisé !")
      }
      const hashedPassword = await bcrypt.hash(rawFormData.password, 10)
      console.log("rawFormData reçu :", rawFormData)
      const user = await prisma.user.create({
        data: {
          email: rawFormData.email,
          password: hashedPassword,
          firstname : rawFormData.firstname,
          lastname: rawFormData.lastname
        }
      })
      console.log(user)
      return { success: true, message: "Compte créé avec succès !" }
  }catch(error){
      console.log(error)
      return { success: false, message: error instanceof Error ? error.message : "Une erreur est survenue !" }
    }
  }   
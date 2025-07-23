"use client"

import { Button } from "@/src/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import "@/src/app/globals.css";
import { Label } from "@/src/components/ui/label"
import { createAccount } from "./action"
import { toast } from "sonner"
import { useRouter } from "next/navigation"


export default function SignUpPage() {
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    const result = await createAccount(formData)

    if (result.success) {
      toast.success(result.message)
      setTimeout(() => {
        router.push("/auth/login")
      }, 2000)
    } else {
      toast.error(result.message)
    }
  }

  return (
    <div className="w-full flex items-center justify-center h-screen p-6 ">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Créer un compte</CardTitle>
          <CardDescription>
            c'est simple et rapide !
          </CardDescription>
          <CardAction>
            <Button variant="link" onClick={() => router.push("/auth/login")} >Se connecter</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} >
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="lastname">Nom</Label>
                  <Input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Dupont"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="firstname">Prénom</Label>
                  <Input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Jean"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                </div>
                <Input id="password" type="password" name="password" placeholder="Mot de passe" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="passwordConfirm">Confirmer votre mot de passe</Label>
                </div>
                <Input id="passwordConfirm" name="passwordConfirm" type="password" placeholder="Confirmer votre mot de passe" required />
              </div>
              <Button type="submit" className="w-full px-3">
                S'inscrire
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
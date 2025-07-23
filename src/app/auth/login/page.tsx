"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription, CardAction } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Button } from "@/src/components/ui/button"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import "@/src/app/globals.css";
import { loginAccount } from "./action"


export default function LoginPage() {
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const result = await loginAccount(formData)

    if (result.success) {
      setTimeout(() => {
        toast.success(result.message)
        router.push("/dashboard")
      }, 2000)
    } else {
      toast.error(result.message)
    }
  }

  return (
    <div className="w-full flex items-center justify-center h-screen p-6 "  >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Se connecter</CardTitle>
          <CardDescription>
            Entrez votre email ci-dessous pour vous connecter à votre compte
          </CardDescription>
          <CardAction>
            <Button variant="link" onClick={() => router.push("/auth/signup")}>S'inscrire</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} >
            <div className="flex flex-col gap-6">
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
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
                <Input id="password" name="password" type="password" placeholder="Mot de passe" required />
              </div>
            </div>
            <div className="flex-col mt-6">
              <Button type="submit" className="w-full">
                Se connecter
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}



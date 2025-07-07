"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription, CardAction } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Button } from "@/src/components/ui/button"
import { useRouter } from "next/navigation"


export default function LoginPage(){
  const router = useRouter()
  
  return(
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
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
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
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Se connecter
          </Button>
        </CardFooter>
    </Card>
    </div>
  )
}



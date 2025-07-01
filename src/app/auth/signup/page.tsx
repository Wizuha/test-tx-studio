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
import { Label } from "@/src/components/ui/label"

export default function SignUpPage(){

  async function createAccount(formData:FormData){
    'use server'

    const rawFormData = {
        email : formData.get('email'),
        password : formData.get('password'),
        passwordConfirm : formData.get('passwordConfirm'),
        status: formData.get('status'),
    }

    if(!rawFormData.email || !rawFormData.password || !rawFormData.passwordConfirm){
      throw new Error("Tous les champs n'ont pas éte rempli !")
    }

    if (rawFormData.password !== rawFormData.passwordConfirm){
      throw new Error("Les mots de passe ne correspondent pas !");
    }


  }


  return(
    <div className="w-full flex items-center justify-center h-screen p-6 ">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Créer un compte</CardTitle>
          <CardDescription>
            c'est simple et rapide !
          </CardDescription>
          <CardAction>
            <Button variant="link">Se connecter</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form action={createAccount} >
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name = "email"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                </div>
                <Input id="password" type="password" name = "password" placeholder="Mot de passe" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirmer votre mot de passe</Label>
                </div>
                <Input id="password" name="passwordConfirm" type="password" placeholder="Confirmer votre mot de passe" required />
              </div>
            </div>
            <CardFooter className="flex-col gap-2 mt-6">
              <Button type="submit" className="w-full">
                S'inscrire
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
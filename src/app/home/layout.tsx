import { ReactNode } from "react";
import "@/src/app/globals.css";
import { Toaster } from "@/src/components/ui/sonner";
import { Button } from "@/src/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/src/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white " >
        <div className="flex justify-between items-center p-4">
          <Link href="/home">
            <img src="/logo.png" alt="logo" />
          </Link>
          <div className="flex hidden xl:flex justify-between items-center gap-60">
            <div className="flex items-center gap-6">
              <Link href="/home/#affacturage_pret" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Prêt</Link>
              <Link href="/home/#affacturage_pret" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Affacturage</Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Simulateur</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</Link>
              <Link href="/home/#avis" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Avis</Link>
            </div>
          </div>
          <div className="xl:flex hidden items-center gap-4">
            <Button className="bg-white text-green-500 border border-green-500 hover:bg-green-500 hover:text-white transition duration-200 active:bg-green-400" ><Link href="/auth/signup">S'inscrire</Link></Button>
            <Button className=" text-white bg-green-500 hover:bg-green-600 transition duration-200 active:bg-green-400" ><Link href="/auth/login">Se connecter</Link></Button>
          </div>
          <div className="flex items-center xl:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full w-10 h-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="flex flex-col gap-3 mt-4">
                      <Button className="bg-white text-green-500 border border-green-500 hover:bg-green-500 hover:text-white transition duration-200 active:bg-green-400">
                        <Link href="/auth/signup">S'inscrire</Link>
                      </Button>
                      <Button className="text-white bg-green-500 hover:bg-green-600 transition duration-200 active:bg-green-400">
                        <Link href="/auth/login">Se connecter</Link>
                      </Button>
                    </div>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <Toaster />
    </div>
  );
}
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col justify-between gap-3">
        <h3 className="text-blue-900 font-bold">FINANCEMENT PROFESSIONNEL À COURT TERME.</h3>
        <h1 className="text-7xl font-bold">Notre intérêt,<br/> c'est le vôtre.</h1>
        <p className="text-gray-400 text-base">Simple, efficace et rapide. Profitez du service Liqtrade<br/>
        sans garantie personnelle.</p>
      </div>
      <div className="flex gap-3 md:flex-row flex-col gap-5">
        <Button className="text-white bg-green-500 hover:bg-green-600 transition duration-300 active:bg-green-400">
          <Link href="/auth/connect">Se connecter</Link>
        </Button>
        <Button className="bg-white text-green-500 border-b-2 border-green-500 hover:bg-green-500 hover:text-white transition duration-300 active:bg-green-400">
          <Link href="/auth/signup">S'inscrire →</Link>
        </Button>
      </div>
    </div>
  );
} 
import { Feature } from "@/components/dashboard/Feature";
import { Hero } from "@/components/dashboard/Hero";
import { HeroImage } from "@/components/dashboard/HeroImage";

function DashboardPage() {
  return (
    <div className="h-screen">
      <div className="flex items-center min-h-screen justify-center gap-30 md:flex-row flex-col align-center p-5">
        <Hero />
        <HeroImage />
      </div>
      <div className="flex justify-between">
        <Feature />
      </div>
    </div>
  );
}

export default DashboardPage;
import { Notice } from "@/src/components/home/Notice";
import { Feature } from "@/src/components/home/Feature";
import { Hero } from "@/src/components/home/Hero";
import { HeroImage } from "@/src/components/home/HeroImage";

function DashboardPage() {
  return (
    <div className="h-screen">
      <div className="flex items-center min-h-screen justify-center gap-30 md:flex-row flex-col align-center p-5">
        <Hero />
        <HeroImage />
      </div>
        <Feature />
        <Notice />
    </div>
  );
}

export default DashboardPage;
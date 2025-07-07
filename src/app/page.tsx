import { Notice } from "@/src/components/dashboard/Notice";
import { Feature } from "@/src/components/dashboard/Feature";
import { Hero } from "@/src/components/dashboard/Hero";
import { HeroImage } from "@/src/components/dashboard/HeroImage";

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
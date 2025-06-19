import { Button } from "../ui/button";

export function Feature() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-100 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold hover:text-green-500 transition-colors cursor-pointer">Prêt →</h2>
            <h2 className="text-2xl font-bold hover:text-green-500 transition-colors cursor-pointer">Affacturage →</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <p className="leading-relaxed">
                Des taux compétitifs en quelques clics.
                Quel que soit votre projet, nous vous accompagnons de manière bienveillante avec les meilleurs
                outils en ligne. Oubliez le parcours du combattant, à vous le financement professionnel à court
                terme. Chez Liqtrade nous vous aidons à évoluer à travers des solutions de financement simples,
                efficaces et compétitives en seulement quelques clics.
              </p>
              <div className="space-y-4">
                <p>
                  TPE/PME, comptez sur nous pour vous aider à :
                </p>
                <ul className="list-disc list-inside text-gray-500">
                  <li>Refinancer son entreprise</li>
                  <li>Ouvrir une nouvelle agence</li>
                  <li>Faire connaitre son entreprise</li>
                  <li>Se lancer à l'international</li>
                  <li>Digitaliser son entreprise</li>
                  <li>Acquérir une entreprise</li>
                  <li>Transformer son entreprise</li>
                  <li>Financer des projets de développements durables</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Button>
                Vidéo de présentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
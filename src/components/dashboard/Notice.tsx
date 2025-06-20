import { Check, BadgeDollarSign ,ClockFading, LucideMessageCircleQuestion } from 'lucide-react';

export function Notice(){
  return(
    <section className="w-full py-12 md:py-24" >
      <div className="container mx-auto px-4 md:p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-md shadow-sm p-6 hover:shadow-md transition duration-300 cursor-pointer ">
            <Check className="bg-green-200 rounded-md mb-4 p-2" color='#2ece84' size={42} />
            <h3 className="text-xl font-bold mb-3" >Evaluation du profil de risque de votre client</h3>
            <p className="leading-relaxed text-gray-600" >Plus de mauvaises surprises lors de la facturation de votre client. Chez
                Liqtrade, nous évaluons son risque débiteur afin de permettre la
                valorisation et l’acceptation rapide de votre facture. Notre approche se
                base sur le profil de risque de votre client et l’échéance de votre facture
                pour vous proposer le meilleur prix de cession de votre créance.</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 hover:shadow-md transition duration-300 cursor-pointer">
            <BadgeDollarSign className="bg-violet-200 rounded-md mb-4 p-2" color='#c1c6e6' size={42} />
            <h3 className="text-xl font-bold mb-3">Meilleur prix de cession de votre créance</h3>
            <p className="leading-relaxed text-gray-600" >Nos algorithmes trouvent pour vous la meilleure offre de financement
                en termes de prix et de taux de commission. En moyenne, nos clients
                perçoivent jusqu’à 97 % de la valeur nominale de leur facture.</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 hover:shadow-md transition duration-300 cursor-pointer">
            <ClockFading className="bg-blue-200 rounded-md mb-4 p-2" color="#37b7cf" size={42} />
            <h3 className="text-xl font-bold mb-3">Paiement en un temps record pour vos factures</h3>
            <p className="leading-relaxed text-gray-600">Après validation et financement de votre facture, votre paiement est
              transféré en seulement quelques minutes. Grâce à notre plateforme de
              paiement, bénéficiez de nouvelles fonctionnalités de paiement instantané
              vous permettant un virement rapide vers la Banque de votre choix.</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 hover:shadow-md transition duration-300 cursor-pointer">
            <LucideMessageCircleQuestion className="bg-orange-200 rounded-md mb-4 p-2" color="#ec8c28" size={42} />
            <h3 className="text-xl font-bold mb-3">Financez vos besoins de trésorerie en temps réel</h3>
            <p className="leading-relaxed text-gray-600" >Faites une demande de financement en ligne via l’envoi électronique
                de facture et obtenez plus rapidement vos fonds via un traitement
                automatisé de vos demandes. Vos factures sont ainsi valorisées,
                validées automatiquement et financées sur notre plateforme.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
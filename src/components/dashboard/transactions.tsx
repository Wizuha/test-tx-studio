"use client";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Progress } from "@/src/components/ui/progress";
import { CheckCircle2, Trophy, PieChart } from "lucide-react";

export default function Transactions() {
  return (
    <section className="p-4 md:p-8 bg-gray-50 min-h-screen space-y-6">
      <h2 className="text-2xl font-bold">Transactions</h2>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="bg-white shadow rounded-md flex gap-2">
          <TabsTrigger value="active" className="flex-1 py-2 px-4 text-sm font-medium data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-md">Actifs</TabsTrigger>
          <TabsTrigger value="pending" className="flex-1 py-2 px-4 text-sm font-medium data-[state=active]:bg-gray-200 rounded-md">En attente (1)</TabsTrigger>
          <TabsTrigger value="closed" className="flex-1 py-2 px-4 text-sm font-medium data-[state=active]:bg-gray-200 rounded-md">Clos</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-4 rounded-lg shadow flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-700">État</h3>
          <div className="text-xs text-gray-500">Prêt Société <span className="text-green-500 font-medium">Validé</span></div>
          <Progress value={100} className="h-2 bg-gray-200" />
          <div className="text-xs text-gray-500">Prêt HotDoggs <span className="text-blue-600 font-medium">En attente</span></div>
          <Progress value={50} className="h-2 bg-gray-200" />
          <a href="#" className="text-sm text-blue-600 underline">Créer un nouveau dossier</a>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Prêt Société</h3>
            <p className="text-2xl font-bold">39 234€</p>
            <p className="text-sm text-gray-400">Montant du prêt en cours</p>
          </div>
          <div className="text-sm text-green-500 mt-4 flex items-center gap-1">
            <CheckCircle2 size={16} /> Prêt validé
          </div>
        </div>


        <div className="bg-white p-4 rounded-lg shadow flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">En attente <span className="text-xs text-gray-500">Prêt HotDoggs</span></h3>
          <img src="/chart-placeholder.png" alt="Donut Chart" className="w-24 h-24 mx-auto" />
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li>✔ Accord ouverture</li>
            <li>✔ Accord demande</li>
            <li>✔ Évaluation des risques</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">Veuillez nous joindre :</p>
          <a href="#" className="text-sm text-blue-600 underline">Dossier super important.pdf</a>
        </div>


        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center gap-2">
          <Trophy size={40} className="text-purple-500" />
          <p className="text-sm font-medium text-gray-700">Prêt Société</p>
          <p className="text-xs text-gray-400 text-center">Estimation de clôture :<br />13/06/2022</p>
        </div>
      </div>


      <div className="overflow-auto rounded-lg shadow bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Numéro de contrat</th>
              <th className="p-3">Identifiant</th>
              <th className="p-3">Montant demandé</th>
              <th className="p-3">Montant du prêt</th>
              <th className="p-3">Mensualité</th>
              <th className="p-3">Durée</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">13452789</td>
              <td className="p-3">UK567UI8</td>
              <td className="p-3">39 234€</td>
              <td className="p-3">39 234€</td>
              <td className="p-3">700€</td>
              <td className="p-3">18 mois</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">67547800</td>
              <td className="p-3">UK567UI8</td>
              <td className="p-3">12 300€</td>
              <td className="p-3">En attente</td>
              <td className="p-3">En attente</td>
              <td className="p-3">14 mois</td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="overflow-auto rounded-lg shadow bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Taux d’intérêt</th>
              <th className="p-3">Commission</th>
              <th className="p-3">TEG</th>
              <th className="p-3">Date demande</th>
              <th className="p-3">Dernière échéance</th>
              <th className="p-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">3%</td>
              <td className="p-3">Lorem Ipsum</td>
              <td className="p-3">3</td>
              <td className="p-3">01/11/2019</td>
              <td className="p-3">01/04/2022</td>
              <td className="p-3 text-green-500 font-medium">Validé</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">8%</td>
              <td className="p-3">Lorem Ipsum</td>
              <td className="p-3">5</td>
              <td className="p-3">04/09/2021</td>
              <td className="p-3">En attente</td>
              <td className="p-3 text-blue-600 font-medium">En attente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

"use client"
import { Pencil, Smile } from "lucide-react"
import Image from "next/image"

export default function MonCompte() {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Mon compte</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg p-4 shadow flex flex-col justify-between relative">
          <button className="absolute top-2 right-2 bg-black text-white p-1 rounded">
            <Pencil size={14} />
          </button>
          <div>
            <h3 className="font-semibold">Paul Dumartin</h3>
            <p className="text-xs text-gray-500 mt-1">14 rue du Louvre<br />PARIS 75001</p>
          </div>
        </div>


        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 mb-2">Segment</p>
          <p className="text-2xl font-bold text-blue-900">RET</p>
        </div>


        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 mb-2">Évaluation des risques</p>
          <p className="text-green-500 font-semibold">Risques faible</p>
          <p className="text-3xl font-bold text-green-500 mt-2">B</p>
        </div>


        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 mb-1">Score risque</p>
          <p className="text-xs font-semibold mb-2">Lorem Ipsum</p>
          <div className="flex items-center justify-between text-xs mb-1">
            <span>A</span>
            <span className="text-gray-600">C</span>
          </div>
          <div className="relative w-full h-3 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-500 rounded-full">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 h-2 bg-white border border-gray-500 rounded-full"></div>
          </div>
        </div>


        <div className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Montant dernière transaction</p>
            <p className="text-2xl font-bold text-blue-900">80K</p>
          </div>
          <Smile className="text-yellow-500 w-8 h-8" />
        </div>
      </div>
    </section>
  )
}

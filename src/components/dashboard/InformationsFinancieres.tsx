"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts"
import { useState } from "react"
import clsx from "clsx"

const chartData = [
  { x: 1, a: 0, b: 0, c: 0 },
  { x: 5, a: 12000, b: 8000, c: 3000 },
  { x: 10, a: 20000, b: 14000, c: 9000 },
  { x: 15, a: 29730, b: 20000, c: 12000 },
  { x: 20, a: 35000, b: 25000, c: 20000 },
  { x: 25, a: 50000, b: 32000, c: 28000 },
]

const tableData = [
  { tenor: "7 DAYS", place: "0.0000", riskDate: "0", riskPrem: "0.0000", change: "0.0000", variation: "1" },
  { tenor: "30 DAYS", place: "0.0000", riskDate: "0", riskPrem: "0.0000", change: "0.0000", variation: "9" },
  { tenor: "90 DAYS", place: "0.0300", riskDate: "0.02345", riskPrem: "0.0300", change: "0.0300", variation: "0.02345" },
  { tenor: "180 DAYS", place: "0.03500", riskDate: "0.03500", riskPrem: "0.03500", change: "0.03500", variation: "0.03500" },
  { tenor: "360 DAYS", place: "0.004400", riskDate: "0.004400", riskPrem: "0.004400", change: "0.004400", variation: "0.004400" },
]

const tabs = ["Euribor1w", "Euribor2w", "Euribor3w", "Average Sector Spread"] as const
type Tab = (typeof tabs)[number]

export default function InformationsFinancieres() {
  const [activeTab, setActiveTab] = useState<Tab>("Euribor1w")

  return (
    <section className="w-full mt-6">
      <h2 className="text-2xl font-bold mb-6">Informations financières</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-4 md:p-6">
          <div className="w-full h-[260px] md:h-[320px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="4 4" vertical={false} />
                <XAxis dataKey="x" tickLine={false} axisLine={false} />
                <YAxis
                  tickFormatter={(v) => `${(v / 1000).toString().padStart(2, "0")}K`}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip formatter={(value: number) => `${value}€`} />
                <Legend verticalAlign="bottom" height={36} />
                {/* Ligne horizontale pointillée à ~30K */}
                <ReferenceLine y={30000} stroke="#d1d5db" strokeDasharray="4 4" />
                <Line
                  type="monotone"
                  dataKey="a"
                  name="Lorem Ipsum"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="b"
                  name="Lorem Ipsum"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="c"
                  name="Lorem Ipsum"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 md:p-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  activeTab === tab
                    ? "bg-indigo-100 text-indigo-600"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tableau */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead>
                <tr className="text-indigo-700 font-semibold border-b border-gray-200">
                  <th className="px-4 py-2">Tenor</th>
                  <th className="px-4 py-2">Market Place</th>
                  <th className="px-4 py-2">
                    Market Risk Free <br />
                    <span className="font-normal text-gray-500">Date</span>
                  </th>
                  <th className="px-4 py-2">
                    Market Risk Free <br />
                    <span className="font-normal text-gray-500">Premium</span>
                  </th>
                  <th className="px-4 py-2">Change %</th>
                  <th className="px-4 py-2">Variation</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="px-4 py-2 whitespace-nowrap">{row.tenor}</td>
                    <td className="px-4 py-2">{row.place}</td>
                    <td className="px-4 py-2">{row.riskDate}</td>
                    <td className="px-4 py-2">{row.riskPrem}</td>
                    <td className="px-4 py-2">{row.change}</td>
                    <td className="px-4 py-2">{row.variation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

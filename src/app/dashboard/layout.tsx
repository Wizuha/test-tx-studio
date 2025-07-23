import { ReactNode } from "react"
import Sidebar from "@/src/components/dashboard/sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
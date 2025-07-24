import { ReactNode } from "react"
import Sidebar from "@/src/components/dashboard/sidebar"


export default async function DashboardLayout({ children }: { children: ReactNode }) {

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside id="default-sidebar" className="hidden md:block w-70 bg-white p-5">
        <Sidebar />
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}
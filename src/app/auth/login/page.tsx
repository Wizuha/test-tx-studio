"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Button } from "@/src/components/ui/button"
import { useRouter } from "next/navigation"

export default function LoginPage(){
  return(
    <div className="w-full flex items-center justify-center h-screen p-6 "  >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Se connecter</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}
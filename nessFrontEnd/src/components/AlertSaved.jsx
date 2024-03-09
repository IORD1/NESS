"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function AlertSaved() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Saved Radius",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo" id="alertRadiusSaved">Undo</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </Button>
  )
}

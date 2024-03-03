import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Radius } from "lucide-react"

"use client"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function SetRadius() {
  const [radius, setradius] = useState(1000)
  const { toast } = useToast()

  function onClick(adjust) {
    setradius(radius + adjust)
  }

  async function postRadiusToBackend(radius) {
    const response = await fetch('https://ness-cpww.onrender.com/receive_radius', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "radius" : radius
    }),
    });
  
    const result = await response.json();
    console.log(result);
  }

  function saveRadius(){
    postRadiusToBackend(radius);
    var cancelRadius = document.getElementById('cancelRadius');
    alert("Radius Saved as "+radius)
    cancelRadius.click();


  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default" id="setRadiusButton" style={{FontFace: "Nunito"}}>
        <Radius className="mr-2 h-4 w-4" />Set Radius</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Set Radius</DrawerTitle>
            <DrawerDescription>Increase or Decrease the Radius considered for searching ammenities. (Increase the radius for remote Areas)</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-200)}
                disabled={radius <= 400}
              >
                <MinusIcon className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {radius}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Meters
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(200)}
                disabled={radius >= 8000}
              >
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
           
          </div>
          <DrawerFooter>
            <Button onClick={()=>{saveRadius()}}>Save</Button>
            <DrawerClose asChild>
              <Button variant="outline" id="cancelRadius" 
                onClick={() => {
                  console.log("calling alert");
                  toast({
                    title: "Saved Radius",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    action: (
                      <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                  })
                }}
              >Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

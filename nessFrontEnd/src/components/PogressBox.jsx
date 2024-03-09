"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressBox(props) {
  const [progress, setProgress] = React.useState(0)

  console.log(props.numberLoaded);

  return <Progress value={(props.numberLoaded/props.totalToBeLoaded)*100} className="w-[60%]" />
}

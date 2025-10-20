"use client";

import Image from "next/image";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-lime-700">Hello world!</h1>
      <br />
      
      <AnimatedGradientText>Animated Gradient Text</AnimatedGradientText>
      <br />

      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}

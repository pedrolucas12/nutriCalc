"use client"

import { cn } from "@/lib/utils"
import { IconBrandWhatsapp } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { Apple, Carrot, Clock, Drumstick, Utensils } from "lucide-react"
import React, { useEffect, useState } from "react"
import { AnimatedList } from "../magicui/animated-list"

// Interface for diet notification items
interface DietItem {
  meal: string
  food: string
  details?: string
  icon: React.ComponentType
  color: string
  time: string
  calories?: number
  protein?: number
  carbs?: number
  fat?: number
}

// Update the DietNotification component to remove the gray background and make it more transparent
const DietNotification = ({ meal, food, details, icon, color, time, calories, protein, carbs, fat }: DietItem) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative mx-auto w-full cursor-pointer overflow-hidden rounded-lg mb-2",
        "bg-transparent backdrop-blur-[2px]",
        "border border-white/10 dark:border-white/5",
      )}
      whileHover={{ scale: 1.02 }}
      onClick={() => setExpanded(!expanded)}
      layout
    >
      {/* Header with meal name and time */}
      <div className="flex items-center justify-between p-2 bg-gradient-to-r from-green-500/10 to-green-400/5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-full" style={{ backgroundColor: color }}>
            <span className="text-white text-xs">{React.createElement(icon)}</span>
          </div>
          <span className="font-bold text-sm">{meal}</span>
        </div>
        <div className="flex items-center text-xs opacity-70">
          <Clock size={10} className="mr-1" />
          {time}
        </div>
      </div>

      {/* Main content */}
      <div className="p-2 bg-gradient-to-b from-white/5 to-transparent dark:from-white/2 dark:to-transparent">
        <div className="flex items-start">
          <div className="flex-1">
            <p className="text-sm font-medium">{food}</p>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: expanded ? "auto" : 0,
                opacity: expanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {details && <p className="text-xs mt-1 opacity-80">{details}</p>}

              {(calories || protein || carbs || fat) && (
                <div className="mt-2 grid grid-cols-4 gap-1 text-center">
                  {calories && (
                    <div className="bg-white/5 rounded p-1 backdrop-blur-sm border border-white/5">
                      <div className="text-xs font-bold">{calories}</div>
                      <div className="text-[10px] opacity-70">kcal</div>
                    </div>
                  )}
                  {protein && (
                    <div className="bg-white/5 rounded p-1 backdrop-blur-sm border border-white/5">
                      <div className="text-xs font-bold">{protein}g</div>
                      <div className="text-[10px] opacity-70">Prot</div>
                    </div>
                  )}
                  {carbs && (
                    <div className="bg-white/5 rounded p-1 backdrop-blur-sm border border-white/5">
                      <div className="text-xs font-bold">{carbs}g</div>
                      <div className="text-[10px] opacity-70">Carb</div>
                    </div>
                  )}
                  {fat && (
                    <div className="bg-white/5 rounded p-1 backdrop-blur-sm border border-white/5">
                      <div className="text-xs font-bold">{fat}g</div>
                      <div className="text-[10px] opacity-70">Gord</div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          <IconBrandWhatsapp className="ml-2 text-green-500 flex-shrink-0" size={16} />
        </div>
      </div>

      {/* Expand indicator */}
      <motion.div className="absolute bottom-1 right-1/2 translate-x-1/2" animate={{ rotate: expanded ? 180 : 0 }}>
        <div className="w-4 h-1 bg-white/10 rounded-full" />
      </motion.div>
    </motion.div>
  )
}

// Update the main component to create a more seamless vertical fade effect
export default function DietNotificationList({
  className,
}: {
  className?: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Diet notification data with detailed information
  const dietNotifications: DietItem[] = [
    {
      meal: "Café da Manhã",
      food: "Omelete de espinafre + Pão integral",
      details: "2 ovos, 30g de espinafre, 1 fatia de pão integral com 10g de manteiga de amêndoas",
      icon: Apple,
      color: "#4ade80",
      time: "07:30",
      calories: 350,
      protein: 22,
      carbs: 28,
      fat: 18,
    },
    {
      meal: "Lanche da Manhã",
      food: "Mix de frutas com iogurte",
      details: "150g de iogurte grego, 100g de frutas vermelhas, 15g de granola low carb",
      icon: Utensils,
      color: "#a3e635",
      time: "10:00",
      calories: 220,
      protein: 15,
      carbs: 25,
      fat: 8,
    },
    {
      meal: "Almoço",
      food: "Frango grelhado com legumes",
      details: "150g de peito de frango, 100g de brócolis, 100g de batata doce, 1 col. de azeite",
      icon: Drumstick,
      color: "#22c55e",
      time: "12:30",
      calories: 420,
      protein: 40,
      carbs: 35,
      fat: 12,
    },
    {
      meal: "Lanche da Tarde",
      food: "Smoothie proteico",
      details: "30g de whey protein, 1 banana, 200ml de leite vegetal, 10g de pasta de amendoim",
      icon: Carrot,
      color: "#84cc16",
      time: "15:30",
      calories: 280,
      protein: 25,
      carbs: 30,
      fat: 7,
    },
    {
      meal: "Jantar",
      food: "Salmão assado com quinoa",
      details: "130g de salmão, 80g de quinoa cozida, mix de folhas verdes, 1 col. de azeite",
      icon: Utensils,
      color: "#16a34a",
      time: "19:00",
      calories: 390,
      protein: 32,
      carbs: 25,
      fat: 18,
    },
    {
      meal: "Ceia",
      food: "Chá + Castanhas",
      details: "Chá de camomila sem açúcar, 15g de mix de castanhas",
      icon: Utensils,
      color: "#65a30d",
      time: "21:30",
      calories: 90,
      protein: 3,
      carbs: 4,
      fat: 8,
    },
  ]

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn("flex flex-col overflow-hidden bg-transparent rounded-xl border border-white/10 p-2", className)}
    >
      {/* WhatsApp header */}
      <div className="flex items-center mb-2 bg-gradient-to-r from-green-600/80 to-green-500/80 backdrop-blur-sm p-2 rounded-lg">
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
          <IconBrandWhatsapp className="h-4 w-4 text-green-600" />
        </div>
        <div className="ml-2">
          <p className="text-xs font-bold text-white">NutriCalc</p>
          <p className="text-[10px] text-white/80">Seu plano alimentar personalizado</p>
        </div>
      </div>

      {/* Loading animation */}
      {!isLoaded ? (
        <div className="flex flex-col space-y-2 p-2">
          <div className="h-20 bg-white/5 animate-pulse rounded-lg border border-white/5"></div>
          <div className="h-20 bg-white/5 animate-pulse rounded-lg border border-white/5"></div>
          <div className="h-20 bg-white/5 animate-pulse rounded-lg border border-white/5"></div>
          <div className="flex items-center justify-center mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150 mx-1"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      ) : (
        <div className="h-full overflow-hidden relative">
          {/* Top fade effect */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-background/30 to-transparent z-10" />

          <AnimatedList delay={3000} >
            {dietNotifications.map((item, idx) => (
              <DietNotification key={idx} {...item} />
            ))}
            {/* Duplicate items for continuous scrolling */}
            {dietNotifications.map((item, idx) => (
              <DietNotification key={`dup-${idx}`} {...item} />
            ))}
          </AnimatedList>

          {/* Bottom fade effect - enhanced for better vertical infinity illusion */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/40 via-background/20 to-transparent" />
        </div>
      )}

      {/* Tech UI elements */}
      <div className="absolute bottom-2 right-2 flex space-x-1">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/70 animate-ping"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/40"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/40"></div>
      </div>
    </div>
  )
}

"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Interface for diet notification items
interface DietItem {
  meal: string
  food: string
  time: string
  isRead?: boolean
}

// Component to render a single diet notification
const DietNotification = ({ meal, food, time, isRead = false }: DietItem) => {
  return (
    <div className={cn("relative w-full max-w-[250px] mb-2.5 flex", "transform transition-all duration-300")}>
      <div
        className={cn(
          "relative rounded-lg py-2 px-3 max-w-full",
          "bg-white dark:bg-[#202c33] shadow-sm",
          "border border-gray-100 dark:border-gray-800",
        )}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-xs text-gray-800 dark:text-white">{meal}</span>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 ml-2">{time}</span>
          </div>
          <p className="text-xs text-gray-700 dark:text-gray-200">{food}</p>
        </div>

        {/* Message tail */}
        <div className="absolute left-[-6px] top-0 w-3 h-3 overflow-hidden">
          <div className="absolute transform rotate-45 bg-white dark:bg-[#202c33] border-l border-t border-gray-100 dark:border-gray-800 w-3 h-3"></div>
        </div>

        {/* Read status */}
        <div className="absolute bottom-0 right-1 flex items-center">
          <Check size={12} className={cn("text-gray-400", isRead && "text-green-500")} />
          {isRead && <Check size={12} className="text-green-500 -ml-[8px]" />}
        </div>
      </div>
    </div>
  )
}

// Main component for the animated diet notification list
export default function DietNotificationList({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Diet notification data
  const dietNotifications: DietItem[] = [
    {
      meal: "Café da Manhã",
      food: "Omelete de espinafre + Pão integral",
      time: "07:30",
      isRead: true,
    },
    {
      meal: "Lanche da Manhã",
      food: "Mix de frutas com iogurte",
      time: "10:00",
      isRead: true,
    },
    {
      meal: "Almoço",
      food: "Frango grelhado com legumes",
      time: "12:30",
      isRead: true,
    },
    {
      meal: "Lanche da Tarde",
      food: "Smoothie proteico",
      time: "15:30",
      isRead: false,
    },
    {
      meal: "Jantar",
      food: "Salmão assado com quinoa",
      time: "19:00",
      isRead: false,
    },
    {
      meal: "Ceia",
      food: "Chá + Castanhas",
      time: "21:30",
      isRead: false,
    },
  ]

  // Duplicate items for continuous scrolling
  const allNotifications = [...dietNotifications, ...dietNotifications, ...dietNotifications]

  // Handle scrolling animation
  useEffect(() => {
    if (isPaused || !containerRef.current) return

    let animationFrameId: number
    let lastTimestamp: number
    const totalHeight = containerRef.current.scrollHeight
    const visibleHeight = containerRef.current.clientHeight
    const speed = 1.5 // pixels per frame

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const elapsed = timestamp - lastTimestamp

      if (elapsed > 16) {
        // ~60fps
        lastTimestamp = timestamp

        // Calculate new scroll position
        let newPosition = scrollPosition + speed

        // Reset when we've scrolled through all items
        if (newPosition > totalHeight - visibleHeight) {
          newPosition = 0
        }

        setScrollPosition(newPosition)

        if (containerRef.current) {
          containerRef.current.scrollTop = newPosition
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [scrollPosition, isPaused])

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* WhatsApp-like background */}
      <div className="absolute inset-0 bg-[#e5ded8] dark:bg-[#0b141a]">
        {/* WhatsApp pattern */}
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
         
        />
      </div>

      {/* Chat container */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden px-4 py-6 [mask-image:linear-gradient(to_bottom,transparent_0%,#000_10%,#000_90%,transparent_100%)]"
      >
        <div className="flex flex-col items-start space-y-1 pt-20 pb-20">
          {/* Date divider */}
          <div className="self-center mb-4 px-3 py-1 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-xs text-gray-500 dark:text-gray-400">
            Hoje
          </div>

          {/* System message */}
          <div className="self-center mb-2 px-3 py-1 rounded-lg bg-[#FFF3C7] dark:bg-yellow-900/30 text-xs text-gray-600 dark:text-yellow-200/80 max-w-[80%] text-center">
            Seu plano alimentar personalizado foi criado com base no seu perfil
          </div>

          {allNotifications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: (idx * 0.05) % 0.3,
                duration: 0.3,
              }}
              className="w-full"
            >
              <DietNotification {...item} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* WhatsApp input bar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#f0f2f5] dark:bg-[#202c33] border-t border-gray-200 dark:border-gray-800 flex items-center px-3">
        <div className="w-full h-9 bg-white dark:bg-[#2a3942] rounded-full flex items-center px-3 text-xs text-gray-400">
          Digite uma mensagem
        </div>
      </div>
    </div>
  )
}

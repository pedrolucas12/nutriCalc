"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface AnimatedListProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down"
  speed?: number
}

export function DietNotificationList({ children, className, delay = 2000, direction = "up", speed = 20 }: AnimatedListProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [listHeight, setListHeight] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)

  // Calculate heights on mount and when children change
  useEffect(() => {
    if (listRef.current) {
      setListHeight(listRef.current.scrollHeight)
      setContainerHeight(listRef.current.clientHeight)
    }
  }, [children])

  // Handle scrolling animation
  useEffect(() => {
    if (isPaused || isHovered || !listRef.current || listHeight <= containerHeight) {
      return
    }

    let animationFrameId: number
    let lastTimestamp: number

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const elapsed = timestamp - lastTimestamp

      if (elapsed > delay) {
        lastTimestamp = timestamp

        // Calculate new scroll position
        let newPosition
        if (direction === "up") {
          newPosition = scrollPosition + 1
          if (newPosition > listHeight) {
            newPosition = 0
          }
        } else {
          newPosition = scrollPosition - 1
          if (newPosition < 0) {
            newPosition = listHeight
          }
        }

        setScrollPosition(newPosition)

        if (listRef.current) {
          listRef.current.scrollTop = newPosition
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [scrollPosition, isPaused, isHovered, listHeight, containerHeight, delay, direction])

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={listRef}
        className="transition-all duration-300"
        style={{
          transform: isHovered ? "translateY(0)" : undefined,
        }}
      >
        {children}
      </div>
    </div>
  )
}

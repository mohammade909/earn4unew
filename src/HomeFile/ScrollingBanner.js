"use client"

import { useEffect, useRef } from "react"

export default function ScrollingBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollBanner = () => {
      if (bannerRef.current) {
        bannerRef.current.style.transform = `translateX(${(-1 * (Date.now() / 50)) % 100}%)`
      }
    }

    const intervalId = setInterval(scrollBanner, 16)
    return () => clearInterval(intervalId)
  }, [])

  const bannerText = "Elevate Your Style with Our Exclusive Collections • "
  const repeatedText = Array(10).fill(bannerText).join(" ")

  return (
    <div className="w-full overflow-hidden bg-lime-500 py-2">
      <div ref={bannerRef} className="whitespace-nowrap inline-block" style={{ willChange: "transform" }}>
        <span className="text-white font-medium">{repeatedText}</span>
      </div>
    </div>
  )
}


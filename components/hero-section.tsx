"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  const [intent, setIntent] = useState("Invest")
  const [assetType, setAssetType] = useState("Off-Plan Villa")

  const handleWhatsAppRedirect = () => {
    const message = `Hi Dune 971! I'm interested in ${intent} for ${assetType}. Can we discuss investment opportunities?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/971501234567?text=${encodedMessage}`, "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-sand/20 rounded-full blur-3xl opacity-60"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-gold/10 rounded-full blur-3xl opacity-50"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight"
        >
          Realize Your Vision. <br />
          <span className="text-primary">Own the Future of Dubai.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
        >
          Dune 971 puts buyers in the driver's seat. We navigate the market to secure high-yield assets and capital appreciation that aligns with your wealth goals.
        </motion.p>

        {/* Action Selector Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-white p-2 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-2 max-w-4xl w-full border border-border/50"
        >
          <div className="flex-1 w-full md:w-auto p-2">
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 px-2">I want to...</label>
            <div className="relative">
              <select 
                className="w-full appearance-none bg-transparent font-serif text-lg font-medium p-2 focus:outline-none cursor-pointer"
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
              >
                <option value="Invest">Invest</option>
                <option value="Sell">Sell</option>
                <option value="Property Management">Property Management</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="h-px w-full bg-border md:hidden" />

          <div className="flex-1 w-full md:w-auto p-2">
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 px-2">Asset type...</label>
            <div className="relative">
              <select 
                className="w-full appearance-none bg-transparent font-serif text-lg font-medium p-2 focus:outline-none cursor-pointer"
                value={assetType}
                onChange={(e) => setAssetType(e.target.value)}
              >
                <option value="Off-Plan Villa">Off-Plan Villa</option>
                <option value="Ready Apartment">Ready Apartment</option>
                <option value="Commercial Space">Commercial Space</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <Button 
            onClick={handleWhatsAppRedirect}
            size="lg" 
            className="w-full md:w-auto h-auto py-4 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-lg whitespace-nowrap"
          >
            Build My Portfolio <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

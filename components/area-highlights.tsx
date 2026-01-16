"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const areas = [
  {
    name: "Palm Jebel Ali",
    yield: "8.5%",
    description: "The new palm island. Double the size of Palm Jumeirah with focus on luxury villas.",
  },
  {
    name: "Dubai Islands",
    yield: "9.2%",
    description: "A chain of 5 islands reshaping the northern coastline. High potential for capital appreciation.",
  },
  {
    name: "Business Bay",
    yield: "7.8%",
    description: "The central business district. High occupancy rates and strong rental demand.",
  },
  {
    name: "Dubai South",
    yield: "11.3%",
    description: "Home to the new Al Maktoum Airport. The future logistic and residential hub.",
  },
]

export function AreaHighlights() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Invest in Growth Hubs</h2>
            <p className="text-muted-foreground">Strategic locations with highest projected yields</p>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory -mx-4 px-4 md:-mx-6 md:px-6 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[400px] lg:min-w-0 snap-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="h-48 bg-muted relative overflow-hidden">
                  {/* Placeholder for Area Image - Using a gradient for now */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-sand/20 to-primary/20 group-hover:scale-105 transition-transform duration-500`} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                    Yield: {area.yield}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{area.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{area.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform">
                    Explore Area <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

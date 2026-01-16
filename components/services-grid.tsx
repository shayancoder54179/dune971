"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Building2, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "The Investor's Edge",
    description: "We don't just show properties; we analyze yields. Access curated, data-backed opportunities for high-ROI capital growth.",
  },
  {
    icon: Shield,
    title: "Hands-Off Wealth",
    description: "Total peace of mind. From discretionary buying to tenant management, we act on your behalf to protect and grow your equity.",
  },
  {
    icon: Building2,
    title: "Strategic Assets",
    description: "Secure high-yield commercial hubs in Dubai's economic centers. Expert navigation for institutional and private investors.",
  },
  {
    icon: ArrowUpRight,
    title: "Exit for Maximum Return",
    description: "List your property with the same precision we use to buy. We position your asset to attract premium global capital.",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

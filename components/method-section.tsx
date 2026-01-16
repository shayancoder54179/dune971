"use client"

import { motion } from "framer-motion"
import { BarChart3, Globe, Lock } from "lucide-react"

const methods = [
  {
    icon: BarChart3,
    title: "Yield First Architecture",
    description: "Every property we suggest is vetted against current market appreciation data.",
  },
  {
    icon: Globe,
    title: "Global Reach, Local Depth",
    description: "Direct access to off-market deals before they hit the portals.",
  },
  {
    icon: Lock,
    title: "Confidential Advisory",
    description: "Bespoke services for HNWIs requiring discretionary portfolio management.",
  },
]

export function MethodSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Dune 971 Method</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="bg-white p-4 rounded-full shadow-md mb-6">
                <method.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{method.title}</h3>
              <p className="text-muted-foreground">{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

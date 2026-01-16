"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-sand">DUNE 971</h3>
            <p className="text-gray-400 mb-6">
              Buyer-focused real estate advisory in Dubai. We secure high-yield assets and provide hands-off wealth management.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-sand transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sand transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sand transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/off-plan" className="text-gray-400 hover:text-sand transition-colors">Off-Plan Properties</Link>
              </li>
              <li>
                <Link href="/secondary-market" className="text-gray-400 hover:text-sand transition-colors">Secondary Market</Link>
              </li>
              <li>
                <Link href="/commercial" className="text-gray-400 hover:text-sand transition-colors">Commercial Real Estate</Link>
              </li>
              <li>
                <Link href="/management" className="text-gray-400 hover:text-sand transition-colors">Property Management</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Popular Areas</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-sand transition-colors">Palm Jebel Ali</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-sand transition-colors">Dubai Islands</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-sand transition-colors">Business Bay</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-sand transition-colors">Dubai South</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Join the Inner Circle</h4>
            <p className="text-gray-400 mb-4">Get exclusive off-market deals and market analysis delivered to your inbox.</p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus-visible:ring-sand"
              />
              <Button className="w-full bg-sand text-charcoal hover:bg-gold transition-colors">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dune 971 Real Estate. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-sand transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-sand transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-sand transition-colors">RERA Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

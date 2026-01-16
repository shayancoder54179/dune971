"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Dune 971 help buyers?",
    answer: "We act as a buyer's agent, providing unbiased advisory, yield analysis, and post-purchase management.",
  },
  {
    question: "What is discretionary buying?",
    answer: "We manage the entire acquisition process on your behalf, from search and negotiation to legal transfer.",
  },
  {
    question: "What areas do you specialize in?",
    answer: "We focus on high-growth zones including Palm Jebel Ali, Dubai Islands, Business Bay, and Dubai South.",
  },
  {
    question: "Do you work with international investors?",
    answer: "Yes, we provide end-to-end support for global investors, including visa guidance and remote portfolio management.",
  },
]

export function FAQSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Expert insights into Dubai's real estate market</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-serif">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  )
}

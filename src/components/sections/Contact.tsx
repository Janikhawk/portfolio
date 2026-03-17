"use client";

import { Github, Mail, Phone, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const contactItems = [
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/janikhawk",
    href: "https://github.com/janikhawk",
    description: "See my open source work",
  },
  {
    Icon: Send,
    label: "Telegram",
    value: "@janikhawk",
    href: "https://t.me/janikhawk",
    description: "Quick messages welcome",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+7 (700) 003-0393",
    href: "tel:+77000030393",
    description: "Available on business days",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "jangeldy@hotmail.com",
    href: "mailto:jangeldy@hotmail.com",
    description: "Best for project inquiries",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Work Together"
            description="Open to new opportunities, interesting projects, and meaningful collaborations. Don't hesitate to reach out."
          />
        </AnimatedSection>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map(({ Icon, label, value, href, description }, i) => (
            <AnimatedSection key={label} delay={i * 0.1}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group block p-6 bg-gray-50 rounded-2xl border border-gray-200/80 hover:bg-white hover:border-gray-300 hover:shadow-card transition-all duration-300 h-full"
              >
                {/* Icon */}
                <div className="mb-5 w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors duration-300">
                  <Icon
                    size={18}
                    className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300"
                  />
                </div>

                {/* Label */}
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  {label}
                </p>

                {/* Value */}
                <p className="text-gray-900 font-semibold text-sm mb-1.5 group-hover:text-blue-700 transition-colors duration-300">
                  {value}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-xs">{description}</p>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.45} className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm">
              Prefer a direct message?
            </p>
            <a
              href="mailto:hello@janikhawk.dev"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              <Mail size={15} />
              Send an Email
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

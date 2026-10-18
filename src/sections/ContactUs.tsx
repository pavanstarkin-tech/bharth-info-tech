import React from "react";
import { assets } from "../data/assets";
import { company } from "../data/company";
import { ContactForm } from "../components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactUsProps {
  preselectedService?: string;
}

export const ContactUs: React.FC<ContactUsProps> = ({ preselectedService }) => {
  return (
    <section id="contact-us" className="relative py-16 sm:py-24 bg-[#082B59] text-white overflow-hidden">
      {/* Background Krishna River & Buddha Statue Panorama from Reference */}
      <div className="absolute inset-0 z-0">
        <img
          src={assets.contact}
          alt="Amaravati Twilight Landscape"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-[#082B59]/85 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column matching reference */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s Build <br />
                <span className="text-[#E59819]">Your Next Big Idea</span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-200 font-medium leading-relaxed max-w-md">
                Get in touch with us. We&apos;re here to turn your vision into powerful digital solutions.
              </p>
            </div>

            {/* 3 Contact Detail Rows matching reference image */}
            <div className="space-y-3.5 pt-2">
              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white text-[#082B59] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <a
                  href={`tel:${company.phone}`}
                  className="font-heading text-sm sm:text-base font-semibold text-white hover:text-[#26B5D8] transition-colors"
                >
                  {company.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white text-[#082B59] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-4 h-4 fill-current" />
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="font-heading text-sm sm:text-base font-semibold text-white hover:text-[#26B5D8] transition-colors"
                >
                  {company.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white text-[#082B59] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4 fill-current" />
                </div>
                <a
                  href={company.locationMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-sm sm:text-base font-semibold text-white hover:text-[#26B5D8] transition-colors"
                >
                  {company.location}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Now Form Card */}
          <div className="lg:col-span-7">
            <ContactForm preselectedService={preselectedService} />
          </div>
        </div>
      </div>
    </section>
  );
};

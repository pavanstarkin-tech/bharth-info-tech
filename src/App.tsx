import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Solutions } from "./sections/Solutions";
import { OurWork } from "./sections/OurWork";
import { AboutUs } from "./sections/AboutUs";
import { WhyChooseUs } from "./sections/WhyChooseUs";
import { Testimonials } from "./sections/Testimonials";
import { ContactUs } from "./sections/ContactUs";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [preselectedService, setPreselectedService] = useState<string>("");

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handler when user clicks any Service / Solution CTA to preselect service and scroll to contact form
  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    scrollToSection("contact-us");
  };

  // ScrollSpy for active navigation item
  useEffect(() => {
    const sectionIds = [
      "home",
      "services",
      "solutions",
      "our-work",
      "about-us",
      "why-choose-us",
      "testimonials",
      "contact-us",
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#26364B]">
      {/* 1. Header & Navigation */}
      <Header activeSection={activeSection} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onStartProject={() => scrollToSection("contact-us")}
          onExploreServices={() => scrollToSection("services")}
        />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Solutions Section */}
        <Solutions onSelectSolution={handleSelectService} />

        {/* 5. Our Work Section */}
        <OurWork onDiscussProject={handleSelectService} />

        {/* 6. About Us Section */}
        <AboutUs onTalkToTeam={() => scrollToSection("contact-us")} />

        {/* 7. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. Contact Us & Contact Now Form */}
        <ContactUs preselectedService={preselectedService} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Back to top floating utility */}
      <BackToTop />
    </div>
  );
}

export default App;

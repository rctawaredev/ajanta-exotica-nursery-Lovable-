import { motion } from "framer-motion";
import heroImg from "@/assets/hero-garden.jpg";
import { Leaf, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Lush garden landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Leaf className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-body text-primary-foreground font-medium">
              Pune's Trusted Plantek Company
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
            We Bring the
            <br />
            <span className="italic">Outdoors In</span> 🪴
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 font-body max-w-2xl mx-auto mb-10 font-light">
            Landscaping, nursery, sugarcane saplings & green solutions — transforming spaces into vibrant, living environments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="bg-primary-foreground text-primary px-8 py-3.5 rounded-full font-semibold font-body hover:scale-105 transition-transform"
            >
              Explore Services
            </a>
            <a
              href="#portfolio"
              className="border-2 border-primary-foreground/60 text-primary-foreground px-8 py-3.5 rounded-full font-semibold font-body hover:bg-primary-foreground/10 transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-primary-foreground/70" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { Sprout, Droplets, Sun, Heart } from "lucide-react";

const highlights = [
  { icon: Sprout, label: "500+ Plant Varieties" },
  { icon: Droplets, label: "Drip Irrigation Experts" },
  { icon: Sun, label: "Sustainable Practices" },
  { icon: Heart, label: "End-to-End Solutions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-semibold font-body text-sm uppercase tracking-widest">About Us</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            More Than Just a Nursery
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed text-lg">
            Ajanta Exotica is your trusted partner in bringing nature closer to everyday life. As a leading nursery and plant business based in Pune, our mission is to transform homes, offices, and urban spaces into green, vibrant, and healthier environments.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mt-4">
            We specialize in indoor and outdoor plants — from low-maintenance greens for beginners to exotic varieties for passionate collectors. Air-purifying plants, flowering plants, succulents, bonsais, herbal plants & more — all nurtured with care and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-leaf-light flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-body font-semibold text-foreground text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

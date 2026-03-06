import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="section-padding bg-gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <Leaf
            key={i}
            className="absolute text-primary-foreground"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 18}%`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Every Corner Deserves<br />a Touch of Green
          </h2>
          <p className="text-primary-foreground/90 font-body text-lg max-w-xl mx-auto mb-8">
            Join the green movement with Ajanta Exotica — because a greener space is a happier, healthier one.
          </p>
          <a
            href="https://wa.me/917499297249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded-full font-semibold font-body hover:scale-105 transition-transform"
          >
            Chat with Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

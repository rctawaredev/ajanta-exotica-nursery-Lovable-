import { motion } from "framer-motion";
import { Leaf, TreePine, Flower2 } from "lucide-react";

const categories = [
  {
    title: "Common Garden Types",
    icon: Leaf,
    types: [
      "Balcony Garden", "Office Garden", "Terrace Garden", "Kitchen Garden",
      "Vertical Garden", "Indoor Garden", "Outdoor Garden", "Backyard Garden",
      "Rooftop Garden", "Patio Garden",
    ],
  },
  {
    title: "Specialized Garden Types",
    icon: Flower2,
    types: [
      "Zen Garden", "Rock Garden", "Herb Garden", "Flower Garden",
      "Vegetable Garden", "Succulent Garden", "Container Garden",
      "Hanging Garden", "Water Garden",
    ],
  },
  {
    title: "Landscaping & Design Services",
    icon: TreePine,
    types: [
      "Residential Garden", "Commercial Garden", "Farmhouse Garden",
      "Resort Garden", "Hotel Garden",
    ],
  },
];

const GardenTypesSection = () => {
  return (
    <section className="section-padding bg-leaf-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold font-body text-sm uppercase tracking-widest">
            Explore
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Garden Types We Create
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.types.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1.5 rounded-full text-sm font-body bg-secondary text-secondary-foreground border border-border"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GardenTypesSection;

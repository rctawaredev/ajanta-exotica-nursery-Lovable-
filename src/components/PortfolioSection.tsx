import { motion } from "framer-motion";
import goaImg from "@/assets/goa-airport.jpg";
import balconyImg from "@/assets/balcony-garden.jpg";
import officeImg from "@/assets/office-garden.jpg";
import terraceImg from "@/assets/terrace-garden.jpg";
import { CheckCircle2 } from "lucide-react";

const workDone = [
  "Design and execution of full-scale soft and hard landscaping",
  "Installation of drip irrigation and automated watering systems",
  "Plantation of over 15,000 native and ornamental plants",
  "Development of green walls and vertical gardens near terminals",
  "Decorative lighting integration with landscape elements",
  "Stone paving and gravel pathways for aesthetic and durability",
];

const portfolioItems = [
  { title: "Balcony Garden", image: balconyImg },
  { title: "Office Garden", image: officeImg },
  { title: "Terrace Garden", image: terraceImg },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-cream">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold font-body text-sm uppercase tracking-widest">Our Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Projects That Inspire
          </h2>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex items-end p-6">
                <h3 className="text-primary-foreground font-display font-bold text-xl">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border"
        >
          <div className="grid lg:grid-cols-2">
            <div className="h-64 lg:h-auto">
              <img src={goaImg} alt="Manohar International Airport, Goa" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 lg:p-12">
              <span className="text-accent font-body font-bold text-sm uppercase tracking-widest">Featured Project</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-2 mb-3">
                Manohar International Airport, Goa
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-2">
                Client: Goa State Infrastructure Development Corporation (GSIDC)
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Full-scale landscaping including drip irrigation, green walls, and decorative lighting. Over 15,000 native and ornamental plants using eco-friendly methods.
              </p>

              <h4 className="font-display font-bold text-foreground mb-3">Work Done</h4>
              <ul className="space-y-2">
                {workDone.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

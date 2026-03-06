import { motion } from "framer-motion";
import balconyImg from "@/assets/balcony-garden.jpg";
import terraceImg from "@/assets/terrace-garden.jpg";
import officeImg from "@/assets/office-garden.jpg";
import sugarcaneImg from "@/assets/sugarcane.jpg";
import microgreensImg from "@/assets/microgreens.jpg";
import hydroponicsImg from "@/assets/hydroponics.jpg";

const services = [
  {
    title: "Balcony Gardens",
    desc: "Vertical gardens, railing planters, hanging baskets, and compact green designs for apartment living.",
    image: balconyImg,
  },
  {
    title: "Terrace & Rooftop Gardens",
    desc: "Lush setups for rooftops and terraces — perfect for herbs, flowers, and relaxing green zones.",
    image: terraceImg,
  },
  {
    title: "Office Gardens",
    desc: "Plant styling and maintenance solutions for modern workspaces that boost air quality and productivity.",
    image: officeImg,
  },
  {
    title: "Full-Scale Landscaping",
    desc: "From layout planning and soil preparation to planting, irrigation, and decorative features for residential and commercial projects.",
    image: balconyImg,
  },
  {
    title: "Sugarcane Saplings",
    desc: "From bud selection and soil enrichment to drip irrigation, transplant support, and field delivery for farms and cooperatives.",
    image: sugarcaneImg,
  },
  {
    title: "Microgreens Projects",
    desc: "Precision-grown Broccoli, Sunflower, Radish, Kale, Pea, Arugula & Basil for urban farms, restaurants, and agri-businesses.",
    image: microgreensImg,
  },
  {
    title: "Hydroponics Projects",
    desc: "High-quality hydroponic farming solutions — fresh, consistent produce for farms, restaurants, and businesses.",
    image: hydroponicsImg,
  },
  {
    title: "Custom Garden Setups",
    desc: "Personalized garden design and installation for homes, villas, resorts, and farmhouses.",
    image: terraceImg,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold font-body text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

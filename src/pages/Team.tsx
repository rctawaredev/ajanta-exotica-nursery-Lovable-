import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowLeft, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Dr. Santosh",
    role: "CEO & Founder",
    email: "santosh@ajantaexotica.com",
    image: "https://res.cloudinary.com/dfhnxabem/image/upload/v1751526256/1516819901194_p7pgxg.jpg",
    featured: true,
    bio: [
      "Dr. Santosh is the Founder of Ajanta Exotica and leads the business operations. A highly respected name in the Indian agriculture sector, he brings deep insight and hands-on expertise to the field of sustainable plant cultivation.",
      "With a strong experimental approach to agri-business, he has played a pivotal role in shaping and driving growth for several leading companies across India. Dr. Santosh holds a Ph.D. in Agriculture along with a second Ph.D. in Biotechnology.",
      "With over 2.5 decades of experience in the agricultural industry, his career spans research, product innovation, business development, and operations. His groundbreaking work in hybrid evaluation across diverse agro-climatic zones laid the foundation for Ajanta Exotica.",
      "A driving force behind the brand's growth, he plays a key role in research, sustainable cultivation practices, branding, and market expansion — including global outreach. He also brings a visionary perspective to landscape design, transforming spaces into green sanctuaries.",
    ],
  },
  {
    name: "Rohit",
    role: "Technical Head",
    email: "rohit@ajantaexotica.com",
    image: "https://res.cloudinary.com/dfhnxabem/image/upload/v1751527305/95b8f001-e808-4126-bd07-9f3b0b36c23d_pppzqx.jpg",
    bio: [
      "Rohit is an engineer turned plant enthusiast with a deep-rooted passion for sustainable living and green spaces. With a background in engineering and a keen interest in nature, he bridges the gap between technology and environmental consciousness.",
      "At Ajanta Exotica, Rohit brings a fresh perspective to plant care, blending innovation with simplicity to make greenery accessible and appealing to modern homes and workspaces.",
    ],
  },
  {
    name: "Sanika",
    role: "Finance Head",
    email: "sanika@ajantaexotica.com",
    image: "https://res.cloudinary.com/dfhnxabem/image/upload/v1751562658/WhatsApp_Image_2025-07-03_at_22.36.45_hzpxxd.jpg",
    bio: [
      "Sanika holds a degree in B.Com and plays a vital role in managing the business and administrative operations at Ajanta Exotica. With a strong understanding of finance, logistics, and customer relations, she ensures smooth coordination between the creative, supply, and sales teams.",
      "Sanika oversees order processing, vendor management, and client communication, helping the brand maintain high service standards. Her organizational skills and dedication to detail make her a key pillar in Ajanta Exotica's mission.",
    ],
  },
  {
    name: "Omkar",
    role: "Logistics Head",
    email: "omkar@ajantaexotica.com",
    image: "https://res.cloudinary.com/dti3zwfma/image/upload/v1752765613/WhatsApp_Image_2025-07-17_at_20.48.43_nww8pk.jpg",
    bio: [
      "Omkar is an engineer by qualification and a nature lover at heart. With a strong foundation in technical problem-solving and a passion for greenery, he brings a unique perspective to landscape planning and execution.",
      "At Ajanta Exotica, Omkar plays a key role in blending structured design with organic aesthetics, ensuring every project is both functional and visually enriching.",
    ],
  },
  {
    name: "Rohan",
    role: "Software & Digital Experience Lead",
    email: "rohan@ajantaexotica.com",
    linkedin: true,
    image: "https://res.cloudinary.com/dti3zwfma/image/upload/v1752765571/WhatsApp_Image_2025-07-17_at_20.20.32_x479ef.jpg",
    bio: [
      "Rohan holds a degree in Computer Science and leads the digital presence at Ajanta Exotica. He focuses on creating intuitive and meaningful online platforms that reflect the brand's deep connection to nature.",
      "From shaping user journeys to ensuring a clean, engaging web experience, Rohan makes sure every digital interaction aligns with Ajanta Exotica's values. His approach blends technology with purpose — bringing greenery into people's lives in simple, accessible, and impactful ways.",
    ],
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero banner */}
      <div className="relative bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <Leaf
              key={i}
              className="absolute text-primary"
              style={{
                width: `${30 + i * 12}px`,
                height: `${30 + i * 12}px`,
                top: `${10 + i * 15}%`,
                left: `${5 + i * 18}%`,
                transform: `rotate(${i * 60}deg)`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold font-body text-sm uppercase tracking-widest">
              Meet Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-3 mb-4">
              The People Behind <br />
              <span className="text-primary">the Green</span>
            </h1>
            <p className="text-primary-foreground/60 font-body max-w-xl text-lg">
              A passionate team of experts dedicated to bringing nature closer to everyday life — leaf by leaf.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Founder section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
          >
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 h-72 lg:h-auto">
                <img
                  src={team[0].image}
                  alt={team[0].name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="lg:col-span-3 p-8 md:p-12">
                <span className="text-accent font-body font-bold text-xs uppercase tracking-widest">
                  Founder & Visionary
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-1">
                  {team[0].name}
                </h2>
                <p className="text-primary font-body font-semibold text-sm mb-6">
                  {team[0].role}
                </p>
                <div className="space-y-3">
                  {team[0].bio.map((p, i) => (
                    <p key={i} className="text-muted-foreground font-body text-sm leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <a
                  href={`mailto:${team[0].email}`}
                  className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:underline font-body font-semibold"
                >
                  <Mail className="w-4 h-4" />
                  {team[0].email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team members */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Core Team
            </h2>
            <p className="text-muted-foreground font-body mt-2">
              The driving force behind every green transformation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.slice(1).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-accent font-body font-bold text-[10px] uppercase tracking-widest">
                      Team Head
                    </span>
                    <h3 className="text-lg font-display font-bold text-foreground mt-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-body font-semibold text-xs mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground font-body text-xs leading-relaxed mb-4">
                      {member.bio[0]}
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      {member.linkedin && (
                        <a
                          href="#"
                          className="text-primary hover:text-primary/80 transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer link */}
      <div className="bg-cream py-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Team;

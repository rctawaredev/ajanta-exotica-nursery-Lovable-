import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const team = [
  {
    name: "Dr. Santosh",
    role: "CEO & Founder",
    email: "santosh@ajantaexotica.com",
    bio: "Founder of Ajanta Exotica with a Ph.D. in Agriculture and Biotechnology. Over 25 years of experience in sustainable plant cultivation, hybrid evaluation, and agri-business. A visionary leader driving research, branding, and global market expansion.",
    image: "https://res.cloudinary.com/dti3zwfma/image/upload/v1753192313/logo.png",
  },
  {
    name: "Rohit",
    role: "Technical Head",
    email: "rohit@ajantaexotica.com",
    bio: "An engineer turned plant enthusiast bridging technology and environmental consciousness. Brings innovation and simplicity to make greenery accessible for modern homes and workspaces.",
  },
  {
    name: "Sanika",
    role: "Finance Head",
    email: "sanika@ajantaexotica.com",
    bio: "B.Com graduate managing business and administrative operations. Oversees order processing, vendor management, and client communication to maintain high service standards.",
  },
  {
    name: "Omkar",
    role: "Logistics Head",
    email: "omkar@ajantaexotica.com",
    bio: "Engineer by qualification and nature lover at heart. Blends structured design with organic aesthetics, ensuring every project is both functional and visually enriching.",
  },
  {
    name: "Rohan",
    role: "Software & Digital Experience Lead",
    email: "rohan@ajantaexotica.com",
    linkedin: true,
    bio: "Computer Science graduate leading digital presence. Crafts seamless, user-friendly platforms that reflect Ajanta Exotica's deep connection to nature and sustainable living.",
  },
];

const getInitials = (name: string) =>
  name.replace("Dr. ", "").charAt(0).toUpperCase();

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold font-body text-sm uppercase tracking-widest">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            The People Behind the Green
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A passionate team of experts dedicated to bringing nature closer to everyday life.
          </p>
        </motion.div>

        {/* Founder - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border shadow-sm p-8 md:p-12 mb-10 max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 text-3xl font-display font-bold text-primary">
            S
          </div>
          <span className="text-accent font-body font-bold text-xs uppercase tracking-widest">
            Team Head
          </span>
          <h3 className="text-2xl font-display font-bold text-foreground mt-1">
            Dr. Santosh
          </h3>
          <p className="text-primary font-body font-semibold text-sm mb-4">
            CEO & Founder
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-sm max-w-xl mx-auto mb-5">
            Founder of Ajanta Exotica with a Ph.D. in Agriculture and Biotechnology. Over 25 years of experience in sustainable plant cultivation, hybrid evaluation, and agri-business. A visionary leader driving research, branding, and global market expansion — transforming spaces into green sanctuaries that blend natural beauty with functionality.
          </p>
          <a
            href="mailto:santosh@ajantaexotica.com"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-body"
          >
            <Mail className="w-4 h-4" />
            santosh@ajantaexotica.com
          </a>
        </motion.div>

        {/* Rest of team */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.slice(1).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border shadow-sm p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-xl font-display font-bold text-primary">
                {getInitials(member.name)}
              </div>
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
                {member.bio}
              </p>
              <div className="flex items-center justify-center gap-3">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

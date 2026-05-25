import expertiseImg from "./assets/ex.png";
import westwoodImg from "./assets/westwood_by_imtiaz_1.jpg";
import ellingtonImg from "./assets/ellington.png";
import pearlImg from "./assets/pearl.jpg";
import terrazzoImg from "./assets/Terrazzo-Residences-by-Taraf.jpg";
import westwoodMainImg from "./assets/westwood.png";
import westwoodGrandeImg from "./assets/westwood-grande-by-imtiaz_mX7N7_xl.jpg";
import myCV from "./assets/Ali_Mohamed_Rashad_Resume.pdf";
import profilePic from "./assets/Rashad_Photo.JPG";
import { motion } from "framer-motion";
export default function ModernCVWebsite() {
  const skills = [
    "Leadership",
      "Electrical Engineering",
      "ELV Systems",
      "CCTV Systems",
      "Access Control",
      "Structured Cabling",
      "Power Distribution",
      "AutoCAD",
      "Testing & Commissioning",
      "Creative Strategy",
      "Project Management",
  ];

  const experiences = [
  {
    role: "Electrical & Low Current Engineer",
    company: "Dove Contracting LLC",
    year: "2023 — Present",
    description:
      "Leading electrical and ELV system implementation across high-end residential and infrastructure projects, including CCTV, access control, structured cabling, lighting, and power systems while ensuring compliance with DEWA and industry standards.",
  },

  {
    role: "Electrical Engineer Intern",
    company: "Noor Al Baheya Electromechanical Works",
    year: "2022 — 2023",
    description:
      "Worked on electrical and low-current systems design, installation, testing, and coordination across multidisciplinary MEP projects including firefighting, HVAC, and plumbing integration.",
  },
];

  const projects = [
  {
    title: "Ellington Beach House",
    category: "Electrical & ELV Systems",
    image: ellingtonImg,
  },

  {
    title: "Pearl House III By Imtiaz",
    category: "Electrical & ELV Systems",
    image: pearlImg,
  },

  {
    title: "Terrazzo Residences",
    category: "Electrical & ELV Systems",
    image: terrazzoImg,
  },

  {
    title: "Westwood Grande I",
    category: "CCTV & Access Control Systems",
    image: westwoodMainImg,
  },

  {
    title: "Westwood Grande II",
    category: "CCTV & Access Control Systems",
    image: westwoodGrandeImg,
  },

  {
    title: "Westwood By Imtiaz",
    category: "Smart Security Systems",
     image: westwoodImg,
  },
];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <motion.section
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative px-8 md:px-20 py-24 border-b border-white/10"
>
        <div className="absolute inset-0 overflow-hidden">

  <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />

  <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] animate-pulse" />

  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

</div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-white/60 mb-6">
              Personal Portfolio / CV
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Hi, I’m <span className="text-white/70">Ali</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
              DM/DEWA-certified Electrical Engineer and SIRA-certified Security Systems Engineer with expertise in electrical and ELV systems integration.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
              href={myCV}
              download
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300"
              >
                 DOWNLOAD CV
                 </a>


              <a
  href="tel:+971505023439"
  className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300"
>
  CONTACT ME
</a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[420px] rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-xl">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h2 className="text-2xl font-bold">Ali Mohamed Rashad</h2>
                <p className="text-white/70">Electrical & ELV Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="px-8 md:px-20 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-white/50 mb-5">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              ELECTRICAL & ELV ENGINEER DRIVEN BY PRECISION AND INNOVATION.
            </h2>
          </div>

          <div>
            <p className="text-white/70 leading-relaxed text-lg mb-8">
              DM/DEWA-certified Electrical Engineer and SIRA-certified Security Systems Engineer passionate about delivering innovative, future-ready electrical and ELV solutions across complex construction and infrastructure projects.

With extensive hands-on experience spanning underground works, installation, testing, commissioning, and final project handover, I specialize in the seamless integration of advanced electrical and low-current systems including power distribution, lighting, CCTV, access control, intercom systems, structured cabling, BGM, and enterprise networking solutions.

Driven by precision, performance, and technical excellence, I am recognized for leading multidisciplinary teams, optimizing system performance, and delivering high-quality engineering solutions that combine reliability, efficiency, and modern technology standards.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 md:px-20 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-sm text-white/50 mb-5">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            Career Journey
          </h2>

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold">{item.role}</h3>
                    <p className="text-white/60">{item.company}</p>
                  </div>

                  <span className="text-white/50">{item.year}</span>
                </div>

                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 md:px-20 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-white/50 mb-5">
                Projects
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                COMPLETED PROJECT
              </h2>
            </div>

            <p className="text-white/60 max-w-md">
              Latest completed projects delivered as a responsible Project Engineer across electrical and ELV systems.
             
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
             <motion.div
  key={index}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  transition={{ duration: 0.4 }}
  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 h-[320px]"
>
                <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover"
/>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-sm text-white/50 mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* Engineering Expertise */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="px-8 md:px-20 py-24 border-b border-white/10"
>
  <div className="max-w-7xl mx-auto">
    
    <div className="mb-14">
      <p className="uppercase tracking-[0.25em] text-sm text-white/50 mb-5">
        Engineering Expertise
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Specialized Electrical & ELV Systems
      </h2>

      <p className="text-white/60 max-w-3xl text-lg">
        Comprehensive expertise across electrical infrastructure,
        low-current systems, security solutions, and smart building technologies.
      </p>
    </div>

    <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5">
      
      <img
        src={expertiseImg}
        alt="Engineering Expertise"
        className="w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
    </div>
  </div>
</motion.section>
      {/* Contact */}
      <section className="px-8 md:px-20 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-white/50 mb-5">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Let’s build something exceptional.
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
            Focused on precision, system integration, and high-performance electrical and ELV infrastructure projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:itsraashad@gmail.com"
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/itsraashad"
  target="_blank"
  rel="noopener noreferrer"
              className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

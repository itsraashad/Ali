import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import expertiseImg from "./assets/ex.png";
import westwoodImg from "./assets/westwood_by_imtiaz_1.jpg";
import ellingtonImg from "./assets/ellington.png";
import pearlImg from "./assets/pearl.jpg";
import terrazzoImg from "./assets/Terrazzo-Residences-by-Taraf.jpg";
import westwoodMainImg from "./assets/westwood.png";
import westwoodGrandeImg from "./assets/westwood-grande-by-imtiaz_mX7N7_xl.jpg";
import myCV from "./assets/Ali_Mohamed_Rashad_Resume.pdf";
import profilePic from "./assets/Rashad_Photo.JPG";
export default function ModernCVWebsite() {
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
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

const technicalSkills = [
  { name: "Electrical Engineering", level: 95 },
  { name: "ELV Systems", level: 95 },
  { name: "CCTV Systems", level: 90 },
  { name: "Access Control", level: 88 },
  { name: "Structured Cabling", level: 92 },
  { name: "AutoCAD", level: 90 },
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
    <>
  <motion.div
    className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 z-[9999]"
    style={{
      scaleX: scrollYProgress,
      transformOrigin: "0%",
    }}
  />
    <div
  className={`min-h-screen font-sans overflow-hidden transition-all duration-500 ${
    darkMode
      ? "bg-black text-white"
      : "bg-white text-black"
  }`}
>
      <nav
  className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${
    darkMode
      ? "bg-black/70 border-white/10"
      : "bg-white/80 border-black/10"
  }`}
>
  <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
    
    <h1 className="font-bold text-xl">
      Ali's Portfolio
    </h1>

    <div className="flex gap-8 text-sm">
      <a
  href="#home"
  className="relative hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
>
  Home
</a>
      <a
  href="#about"
  className="relative hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
>
  About
</a>
      <a
  href="#skills"
  className="relative hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
>
  Skills
</a>
      <a
  href="#experience"
  className="relative hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
>
  Experience
</a>
      <a
  href="#projects"
  className="relative hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
>
  Projects
</a>
      <a
  href="#contact"
  className="relative hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
>
  Contacts
</a>

      <button
  onClick={() => setDarkMode(!darkMode)}
  className="px-4 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>

    </div>

  </div>
</nav>
      {/* Hero Section */}
      <motion.section
  id="home"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative px-8 md:px-20 py-24 border-b border-white/10"
>
        <div className="absolute inset-0 overflow-hidden">

  <motion.div
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.3, 0.5, 0.3],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[180px]"
/>

<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.4, 0.2],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-[-200px] right-[-150px] w-[550px] h-[550px] bg-cyan-400/20 rounded-full blur-[200px]"
/>

  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
<div className="absolute top-[20%] left-[15%] w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-70" />

<div className="absolute top-[40%] right-[20%] w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />

<div className="absolute bottom-[25%] left-[30%] w-4 h-4 bg-white rounded-full animate-bounce opacity-40" />

<div className="absolute top-[60%] right-[35%] w-2 h-2 bg-cyan-300 rounded-full animate-ping opacity-50" />
</div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-white/60 mb-6">
              Personal Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
  Hi, I'm{" "}
  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
    Ali
  </span>
</h1>

           <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
  <TypeAnimation
    sequence={[
      "DM/DEWA-certified Electrical Engineer",
      2000,
      "SIRA-certified Security Systems Engineer",
      2000,
      "ELV Systems Specialist",
      2000,
      "Electrical & ELV Project Engineer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
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
            <motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
relative
w-[360px]
h-[450px]
rounded-[40px]
overflow-hidden
border border-white/20
bg-gradient-to-br
from-white/15
to-white/5
shadow-[0_0_60px_rgba(6,182,212,0.15)]
backdrop-blur-2xl
"
>
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover transition duration-1000 hover:scale-115"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h2 className="text-2xl font-bold">Ali Mohamed Rashad</h2>
                <p className={darkMode ? "text-white/70" : "text-black/70"}>Electrical & ELV Engineer</p>
              </div>
          </motion.div>

</div>

</div>

</motion.section>

      {/* About Section */}
      <motion.section
  id="about"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}

  className="px-8 md:px-20 py-24 border-b border-white/10"
>
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
      </motion.section>

      {/* Experience */}
      <motion.section
  id="experience"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="px-8 md:px-20 py-24 border-b border-white/10"
>

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
      </motion.section>

{/* Skills */}
<motion.section
  id="skills"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="px-8 md:px-20 py-24 border-b border-white/10"
>
  <div className="max-w-6xl mx-auto">
    <p className="uppercase tracking-[0.25em] text-sm text-white/50 mb-5">
      Skills
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-12">
  TECHNICAL EXPERTISE
</h2>

    <div className="space-y-6">
      {technicalSkills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-2">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="w-full bg-white/10 rounded-full h-3">
            <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: `${skill.level}%` }}
  transition={{ duration: 1.2 }}
  viewport={{ once: true }}
  className="bg-cyan-400 h-3 rounded-full"
/>
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.section>

      {/* Projects */}
      <section
  id="projects"
  className="px-8 md:px-20 py-24 border-b border-white/10"
>
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
    y: -15,
    scale: 1.05,
    rotateX: 4,
  }}
  transition={{ duration: 0.4 }}
  style={{
    transformStyle: "preserve-3d",
  }}
  className="
group
relative
overflow-hidden
rounded-[32px]
border
border-white/10
bg-white/5
h-[320px]
hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
transition-all
duration-500
"
>
                <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
/>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-sm text-white/50 mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold transition duration-300 group-hover:text-cyan-300">
  {project.title}
</h3>
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
      <section
  id="contact"
  className="px-8 md:px-20 py-24"
>
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

{/* Footer */}
<footer className="border-t border-white/10 py-8 mt-20">
  <div className="max-w-7xl mx-auto px-8 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">

    <div>
      <h3 className="font-bold text-lg">Ali Mohamed Rashad</h3>
      <p className="text-white/50 text-sm">
        Electrical & ELV Engineer
      </p>
    </div>

    <div className="flex gap-6 text-sm text-white/70">
      <a
        href="mailto:itsraashad@gmail.com"
        className="hover:text-cyan-400 transition"
      >
        Email
      </a>

      <a
        href="https://www.linkedin.com/in/itsraashad"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition"
      >
        LinkedIn
      </a>

      <a
        href="tel:+971505023439"
        className="hover:text-cyan-400 transition"
      >
        Call
      </a>
    </div>

  </div>

  <div className="text-center text-white/40 text-sm mt-6">
    © {new Date().getFullYear()} Ali Mohamed Rashad. All Rights Reserved.
  </div>
</footer>
</div>
</>
);
}

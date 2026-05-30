import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Python Development",
    description:
      "Building scalable backend systems and intelligent applications using modern Python technologies.",
  },
  {
    icon: Rocket,
    title: "AI & Machine Learning",
    description:
      "Developing predictive models, NLP workflows, and data-driven software solutions.",
  },
  {
    icon: Users,
    title: "Problem Solving",
    description: "Applying analytical thinking and software engineering principles to real-world challenges.",
  },
  {
    icon: Lightbulb,
    title: "Full Stack Engineering",
    description:
      "Creating responsive web applications with React.js, REST APIs, and modern development practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building intelligent systems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one solution at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
              I'm a passionate software developer with experience building 
              AI-driven and full-stack applications using Python, React.js, and 
              modern backend technologies. My journey started with curiosity for 
              problem-solving and evolved into a strong focus on intelligent systems, 
              machine learning workflows, and scalable software engineering.
              </p>
              <p>
              I specialize in Python development, NLP workflows, and data-driven applications, 
              building solutions that combine performance, usability, and modern software practices. 
              My work ranges from machine learning projects and predictive analytics to responsive web applications and backend systems.
              </p>
              <p>
              When I'm not coding, you'll find me exploring emerging AI technologies, 
              improving my development skills, and building projects that solve real-world 
              problems through intelligent automation and scalable design.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
              "My mission is to build intelligent software 
              solutions that are not only efficient and scalable, 
              but also impactful for real-world users and businesses."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

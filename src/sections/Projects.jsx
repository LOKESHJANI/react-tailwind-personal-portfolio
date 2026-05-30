import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Patient Survival Prediction",
    description:
      "Developed a patient survival prediction system using the MIT GOSSIS dataset and multiple machine learning algorithms. Achieved nearly 98% accuracy using the Gandalf model by optimizing predictions across different age groups.",
    image: "/projects/project1.png",
    tags: ["Python", "Machine Learning", "DF-Analyzer", "Healthcare AI", "Data Analytics"],
    link: "#",
    github: "#",
  },
  {
    title: "Lymphoma Prediction System",
    description:
      "Built a binary classification model for lymphoma prediction using advanced machine learning techniques and PEFT, achieving 100% prediction accuracy for reliable disease classification.",
    image: "/projects/project2.png",
    tags: ["Python", "PEFT", "Machine Learning", "Medical AI", "Classification Models"],
    link: "#",
    github: "#",
  },
  {
    title: "Football Injury Anticipation",
    description:
      "Designed a predictive analytics model using the Random Forest algorithm to anticipate football player injuries from historical performance data, achieving 96% accuracy.",
    image: "/projects/project3.png",
    tags: ["Python", "Random Forest", "Jupyter Notebook", "Sports Analytics", "Data Visualization"],
    link: "#",
    github: "#",
  },
  {
    title: "DocZen NLP Platform",
    description:
      "Collaborated on developing DocZen, an NLP-powered application that extracts key insights from large unstructured datasets to support decision-making in healthcare and finance industries.",
    image: "/projects/project4.png",
    tags: ["React.js", "Tailwind CSS", "Python", "NLP"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
          Projects that 
            <span className="font-serif italic font-normal text-white">
              {" "}
              create real-world impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
          A collection of machine learning, healthcare AI, 
          and predictive analytics projects focused on solving real-world challenges through intelligent systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
          Explore My Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

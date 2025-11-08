import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Github, Linkedin, Mail, Twitter, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <div className="container mx-auto text-center animate-fade-in">
            <div className="mb-6 inline-block">
              <Sparkles className="w-12 h-12 text-accent animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Hi, I'm <span className="accent-text">Mohak</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-serif text-foreground-secondary mb-8 max-w-2xl mx-auto">
              AI Engineer & Machine Learning Enthusiast
            </p>
            
            <p className="text-base font-serif text-foreground-secondary mb-12 max-w-3xl mx-auto">
              Passionate about building intelligent systems that solve real-world problems.
              Specialized in NLP, Computer Vision, and Deep Learning.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#projects"
                className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border hover:border-foreground text-foreground font-medium rounded-lg transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-background-elevated border-y border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">
              About <span className="accent-text">Me</span>
            </h2>
            
            <div className="card-style p-8 md:p-10">
              <p className="text-base text-foreground-secondary mb-6 leading-relaxed">
                I'm a dedicated AI engineer who recently completed an intensive AI bootcamp where I 
                built <span className="text-accent font-semibold">12+ production-ready projects</span>.
                My journey into artificial intelligence has been driven by curiosity and a desire to 
                create innovative solutions that make a difference.
              </p>
              
              <p className="text-base text-foreground-secondary mb-6 leading-relaxed">
                During the bootcamp, I gained hands-on experience with cutting-edge technologies including 
                natural language processing, computer vision, deep learning frameworks, and deployment 
                platforms. Each project pushed me to learn new concepts and apply them in practical scenarios.
              </p>
              
              <p className="text-base text-foreground-secondary leading-relaxed">
                I'm currently seeking opportunities to work on challenging AI projects where I can contribute 
                my skills and continue growing as an engineer. I believe in writing clean, maintainable code 
                and building systems that are both powerful and user-friendly.
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">12+</div>
                  <div className="text-sm text-foreground-secondary">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-foreground-secondary">Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">AI/ML</div>
                  <div className="text-sm text-foreground-secondary">Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Python</div>
                  <div className="text-sm text-foreground-secondary">Primary</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-4 text-center">
              My <span className="accent-text">Projects</span>
            </h2>
            
            <p className="text-base text-foreground-secondary mb-12 text-center max-w-2xl mx-auto">
              A collection of AI and machine learning projects built during my bootcamp journey.
              Each project is deployed and live on Streamlit Cloud.
            </p>

            {/* 3-column grid - original layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-background-elevated border-t border-border">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif font-bold mb-8">
              Let's <span className="accent-text">Connect</span>
            </h2>
            
            <p className="text-base text-foreground-secondary mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just chatting 
              about AI and technology. Feel free to reach out!
            </p>

            <div className="card-style p-8 md:p-10 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 p-4 border border-border hover:border-border-hover rounded-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-foreground-tertiary">Email</div>
                    <div className="text-sm text-foreground font-medium">your.email@example.com</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border hover:border-border-hover rounded-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-accent" size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-foreground-tertiary">LinkedIn</div>
                    <div className="text-sm text-foreground font-medium">@yourusername</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border hover:border-border-hover rounded-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Github className="text-accent" size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-foreground-tertiary">GitHub</div>
                    <div className="text-sm text-foreground font-medium">@yourusername</div>
                  </div>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border hover:border-border-hover rounded-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Twitter className="text-accent" size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-foreground-tertiary">Twitter</div>
                    <div className="text-sm text-foreground font-medium">@yourusername</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

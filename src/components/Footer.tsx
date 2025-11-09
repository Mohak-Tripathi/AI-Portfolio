import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Mohak-Tripathi",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/mohak-tripathi",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mohaktripathi029@gmail.com",
    },
  ];

  return (
    <footer className="bg-background-elevated border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-secondary hover:text-accent transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-foreground-tertiary text-sm text-center">
            <p>© {currentYear} Mohak. All rights reserved.</p>
            <p className="mt-2">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

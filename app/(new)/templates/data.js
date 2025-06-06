import { BookOpen, Code, Layers, Laptop, PenTool } from "lucide-react";

export const templates = [
  {
    id: "blog-template",
    title: "Blog Template",
    description:
      "Modern blog layout with featured images, categories, and responsive design",
    category: "Content",
    icon: BookOpen,
    gradient: "from-pink-500 to-rose-500",
    features: [
      "Responsive design for all devices",
      "SEO optimized structure",
      "Category and tag system",
      "Featured images support",
      "Rich text editor integration",
      "Comment system ready",
    ],
    techStack: ["Next.js", "Tailwind CSS", "MDX", "Prisma"],
    demoUrl: "#",
    preview: "/resources/blog-template.png",
    longDescription:
      "A modern, fully-featured blog template perfect for content creators and writers. Built with performance and SEO in mind, this template includes everything you need to start publishing your content immediately. Features include a responsive design, category system, featured images, and more.",
  },
  {
    id: "portfolio-template",
    title: "Portfolio Template",
    description: "Showcase your work with this elegant portfolio design",
    category: "Personal",
    icon: PenTool,
    gradient: "from-purple-500 to-indigo-500",
    features: [
      "Project showcase grid",
      "Smooth animations",
      "Contact form",
      "Skills section",
      "Testimonials carousel",
      "Resume/CV section",
    ],
    techStack: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
    demoUrl: "#",
    preview: "/resources/portfolio-template.png",
    longDescription:
      "An elegant and professional portfolio template designed to showcase your work in the best possible way. With smooth animations, project galleries, and integrated contact forms, this template helps you make a lasting impression on potential clients or employers.",
  },
  {
    id: "dashboard-template",
    title: "Dashboard Template",
    description: "Clean and modern admin dashboard with charts and widgets",
    category: "Application",
    icon: Laptop,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Interactive charts and graphs",
      "Real-time data updates",
      "User management system",
      "Dark/Light mode",
      "Responsive tables",
      "Analytics dashboard",
    ],
    techStack: ["Next.js", "Shadcn UI", "React Query", "Chart.js"],
    demoUrl: "#",
    preview: "/resources/dashboard-template.png",
    longDescription:
      "A comprehensive dashboard template with everything you need for building modern admin interfaces. Includes charts, data tables, user management, and more. Perfect for SaaS applications, admin panels, or any data-heavy application.",
  },
  {
    id: "documentation-template",
    title: "Documentation Template",
    description: "Technical documentation layout with sidebar navigation",
    category: "Documentation",
    icon: Code,
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Search functionality",
      "Nested sidebar navigation",
      "Code syntax highlighting",
      "Dark/Light mode",
      "API documentation support",
      "Mobile-responsive design",
    ],
    techStack: ["Next.js", "MDX", "Prism.js", "Algolia Search"],
    demoUrl: "#",
    preview: "/resources/docs-template.png",
    longDescription:
      "A complete documentation template suitable for technical documentation, APIs, or product guides. Features include full-text search, nested navigation, code highlighting, and a clean, readable design that puts your content first.",
  },
  {
    id: "landing-page-template",
    title: "Landing Page Template",
    description: "High-converting landing page with modern sections",
    category: "Marketing",
    icon: Layers,
    gradient: "from-orange-500 to-yellow-500",
    features: [
      "Hero section with CTA",
      "Feature highlights",
      "Testimonials section",
      "Pricing tables",
      "Newsletter integration",
      "Contact form",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "SendGrid"],
    demoUrl: "#",
    preview: "/resources/landing-template.png",
    longDescription:
      "A high-converting landing page template designed to showcase your product or service. With sections for features, testimonials, pricing, and more, this template helps you turn visitors into customers. Includes smooth animations and newsletter integration.",
  },
];

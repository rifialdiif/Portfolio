"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  GraduationCap,
  Award,
  User,
  Briefcase,
  ArrowRight,
  Moon,
  Sun,
  Brain,
  BarChart3,
  TrendingUp,
  Menu,
  X,
  Heart,
  Coffee,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const projectsPerPage = 4;

  // Detect mobile on client
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mapping categories untuk filter
  const categoryMapping: Record<string, string> = {
    "Machine Learning & Website": "AI/ML/Data",
    "Machine Learning & Mobile": "AI/ML/Data",
    "Data Analysis": "AI/ML/Data",
    Website: "Website",
    Mobile: "Mobile",
    Desktop: "Desktop",
    Product: "Product",
  };

  // Get unique categories untuk filter buttons
  const availableCategories = ["All", ...Array.from(new Set(Object.values(categoryMapping)))];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "qualification", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technicalSkills = [
    { name: "Python", category: "Programming Languages" },
    { name: "PHP", category: "Programming Languages" },
    { name: "JavaScript", category: "Programming Languages" },
    { name: "Java", category: "Programming Languages" },
    { name: "SQL", category: "Programming Languages" },
    { name: "React.js", category: "Frontend Frameworks" },
    { name: "Next.js", category: "Frontend Frameworks" },
    { name: "Tailwind", category: "Frontend Frameworks" },
    { name: "Bootstrap", category: "Frontend Frameworks" },
    { name: "Laravel", category: "Backend Technologies" },
    { name: "Node.js", category: "Backend Technologies" },
    { name: "Next.js", category: "Backend Technologies" },
    { name: "FastAPI/FlaskAPI", category: "Backend Technologies" },
    // Machine Learning & Data Analysis
    { name: "TensorFlow", category: "Machine Learning & Data Analysis" },
    { name: "PyTorch", category: "Machine Learning & Data Analysis" },
    { name: "Scikit-learn", category: "Machine Learning & Data Analysis" },
    { name: "Pandas", category: "Machine Learning & Data Analysis" },
    { name: "NumPy", category: "Machine Learning & Data Analysis" },
    { name: "Matplotlib", category: "Machine Learning & Data Analysis" },
    { name: "Seaborn", category: "Machine Learning & Data Analysis" },
    { name: "MySQL", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },

    // Modelling & Analysis
    { name: "UML", category: "Modelling & Analysis" },
    { name: "SDLC", category: "Modelling & Analysis" },
    { name: "Draw.io (Visual Modelling)", category: "Modelling & Analysis" },
    { name: "Bizagi (Business Process Modelling)", category: "Modelling & Analysis" },
    { name: "Business Model Canvas (BMC)", category: "Modelling & Analysis" },

    // Software Engineering Practices
    { name: "Agile & Scrum Methodologies", category: "Project Management" },
    { name: "Waterfall Methodologies", category: "Project Management" },
    { name: "Requirement Analysis", category: "Project Management" },
    { name: "Project Documentation", category: "Project Management" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "Postman (API Testing)", category: "Tools" },
    { name: "Google Collaboratory/ Jupiter Notebook", category: "Tools" },
    { name: "Power BI", category: "Tools" },
    { name: "Jupyter Notebook", category: "Tools" },
    { name: "Trello", category: "Tools" },
    { name: "Notion", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "Google Cloud", category: "Tools" },
  ];

  const softSkills = [
    { name: "Project Leadership", description: "Leading software development teams and managing project timelines" },
    { name: "Data Analysis", description: "Extracting insights from complex datasets and presenting findings" },
    { name: "Problem Solving", description: "Analytical thinking and systematic approach to tech or non-tech challenges" },
    { name: "Team Collaboration", description: "Effective communication and coordination in cross-functional teams" },
    { name: "Product Strategy", description: "Understanding user needs and translating them into solutions" },
    { name: "Analytical Thinking", description: "Breaking down complex problems into logical parts, identifying root causes, and using data-driven reasoning to form clear solutions." },
    { name: "Critical Thinking", description: "Evaluating technical or non-technical decisions and their business impact" },
    { name: "Growth Mindset", description: "Continuously seeking feedback, embracing challenges, and iterating on solutions to improve skills and outcomes." },
    { name: "Adaptability", description: "Quick learning and adapting to new technologies, concepts/theories, and methodologies" },
    { name: "Communication", description: "Clear technical documentation and stakeholder presentations" },
  ];

  const projects = [
    {
      title: "Ranting (Berantas Stunting)",
      description:
        "A mobile application that utilizes machine learning to detect stunting in children based on anthropometric data, providing early intervention or menu recommendations to parents. The project received funding from the Ministry of Higher Education, Science, and Technology (Batch 2) and was developed using Scrum with a CRISP-DM workflow for the ML lifecycle.",
      tech: ["Python", "Scikit-Learn", "PostgreSQL", "REST API", "Docker", "Android Development"],
      image: "/Projects/Ranting.jpg",
      github: "https://github.com/darishafizh/stuntingdetectionapp",
      demo: "https://drive.google.com/file/d/1Pqr3CFrgwq9VWyA6D_bWkkOwOHkGPdhB/view?usp=drivesdk",
      category: "Machine Learning & Android/Mobile",
      // tags allow a project to appear in multiple filter buckets (e.g. AI/ML/Data and Mobile)
      tags: ["AI/ML/Data", "Mobile"],
      role: "Project Lead & ML Engineer",
    },
    {
      title: "DeLuSi",
      description: "A machine learning-based graduation prediction system built using Random Forest with 92% accuracy. Deployed via API on Google Cloud and integrated into a web platform with early-warning notifications for parents.",
      tech: ["Python", "Scikit-Learn", "Laravel", "PostgreSQL", "REST API", "Docker", "GCP"],
      image: "/Projects/Delusi.png",
      github: "https://github.com/rifialdiif/LuWak",
      demo: "https://delusi.site/",
      category: "Machine Learning & Website",
      tags: ["AI/ML/Data", "Website"],
      role: "Researcher, ML & Fullstack Developer",
    },
    {
      title: "SISTER Modul Sarana dan Prasarana",
      description: "Development of the SISTER-SARPRAS system for the Ministry of Higher Education, enabling efficient management of infrastructure and facilities through BPMN-based process analysis and UML-driven system design.",
      tech: ["Laravel", "PostgreSQL", "Docker", "UML", "SRS", "jQuery"],
      image: "/Projects/sister.png",
      github: "",
      demo: "https://sister.kemdikbud.go.id/beranda",
      category: "Website",
      role: "System Analyst & Backend Support",
    },
    {
      title: "SISARPRAS",
      description:
        "Designed and developed SISARPRAS for the Ministry of Higher Education, Science, and Technology, supporting the full planning cycle of university infrastructure with BPMN-based process mapping, scrum methodology, and UML-driven system design.",
      tech: ["Laravel", "Vue.js", "PostgreSQL", "Tailwind", "UML", "SRS"],
      image: "/Projects/sisarpras.png?height=200&width=300",
      github: "",
      demo: "https://sarpras.kemdiktisaintek.go.id/",
      category: "Website",
      role: "System Analyst & Backend Support",
    },
    {
      title: "ASING! (Awas Stunting!)",
      description: "Led the development of ASING!, a mobile application that leverages machine learning to classify food suitability for pregnant women, providing nutrition analysis and education to help reduce stunting in Indonesia.",
      tech: ["Deep Learning", "Tensorflow", "Computer Vision", "Python", "REST API", "Kotlin", "GCP"],
      image: "/Projects/asing.png?height=200&width=300",
      github: "https://github.com/ASING-Awas-Stunting",
      demo: "",
      category: "Machine Learning & Mobile",
      tags: ["AI/ML/Data", "Mobile"],
      role: "Project Lead & ML Engineer",
    },
    {
      title: "Bike-Sharing Dashboard",
      description: "Developed an interactive dashboard to analyze bike-sharing data, providing insights into usage patterns and trends across various times and conditions.",
      tech: ["Python", "Streamlit", "Numpy", "Seaborn", "Matplotlib"],
      image: "/Projects/bikesharing.png?height=200&width=300",
      github: "https://github.com/rifialdiif/Project_DA_Dicoding",
      demo: "https://capital-bikesharing-rifialdiif.streamlit.app/",
      category: "Data Analysis",
      role: "Data Analyst",
    },

    {
      title: "Sistem Informasi PUK",
      description:
        "Built SISTEM INFORMASI PUK, a Laravel-based information system for managing cooperative operations at one of the PUK companies in Purwakarta, featuring member management, transaction tracking, and financial reporting to enhance operational efficiency.",
      tech: ["Laravel", "My SQL", "Javascript", "jQuery", "UML"],
      image: "/Projects/pukindofood.png?height=200&width=300",
      github: "",
      category: "Website",
      role: "Project Lead & System Analyst",
    },

    {
      title: "LaysCake",
      description: "Built LAYSCAKE, a Laravel-based sales management system featuring product and customer tracking, stock monitoring, and revenue analysis with detailed performance reports to support business growth",
      tech: ["Laravel", "My SQL", "Javascript", "jQuery", "UML"],
      image: "/Projects/Layscake demo.png?height=200&width=300",
      github: "https://github.com/darishafizh/layscake",
      category: "Website",
      role: "Full-stack Developer",
    },

    {
      title: "E-Problem PEI",
      description: "Developed E-Problem PEI, an Android application for reporting campus issues at Politeknik Enjinering Indorama, built with an SRS approach to ensure user needs were fully met.",
      tech: ["Kotlin", "Sqlite", "UI/UX", "Figma"],
      image: "/Projects/e_problem.png?height=200&width=300",
      github: "https://github.com/rifialdiif/E-Problem-PEI",
      category: "Mobile",
      role: "Android Developer",
    },

    {
      title: "SIMBARA TRPL",
      description: "Developed SIMBARA TRPL, a Laravel-based web platform for managing goods and room lending, built using the prototype development method to deliver a tailored and dynamic solution.",
      tech: ["Laravel", "My SQL", "Javascript", "jQuery", "UML", "SRS"],
      image: "/Projects/simbara.png?height=200&width=300",
      github: "https://github.com/rifialdiif/SIMBARA",
      category: "Website",
      role: "System Analyst & Full-stack Developer",
    },

    {
      title: "D'Sinta POS",
      description: "Developed D’Sinta POS, a point-of-sales system for a local restaurant, designed with UML and managed using the Scrum methodology to ensure efficient and reliable operations.",
      tech: ["Laravel", "My SQL", "Javascript", "jQuery", "UML", "SRS"],
      image: "/Projects/d'sinta.png?height=200&width=300",
      github: "https://github.com/rifialdiif/D-Sinta-POS",
      category: "Website",
      role: "System Analyst & Full-stack Developer",
    },

    {
      title: "E-Nilai SMANTI PWK",
      description: "Developed E-Nilai SMANTI PWK, an online grading system for a senior high school, utilizing CodeIgniter and SRS IEEE-Based to create a user-friendly platform for teachers and students.",
      tech: ["Codeigniter", "My SQL", "Javascript", "jQuery", "UML", "SRS"],
      image: "/Projects/enilai.png?height=200&width=300",
      github: "",
      category: "Website",
      role: "System Analyst & Full-stack Developer",
    },

    {
      title: "SIPIKA (Sistem Informasi Presensi YPK)",
      description: "Developed SIPIKA, an attendance information system for a vocational school, utilizing Laravel and waterfall methodology to create an efficient and user-friendly platform.",
      tech: ["Laravel", "My SQL", "Javascript", "jQuery", "UML", "SRS"],
      image: "/Projects/SIPIKA.png?height=200&width=300",
      github: "",
      category: "Website",
      role: "Full-stack Developer",
    },

    {
      title: "SiPe-YPK",
      description: "Developed SiPe-YPK, a web-based payment management system for a vocational school, designed with UML to streamline and monitor SPP payment processes.",
      tech: ["Java", "My SQL", "Swing GUI", "UML", "SRS"],
      image: "/Projects/sipe_ypk.png?height=200&width=300",
      category: "Desktop",
      role: "Desktop Developer",
    },

    {
      title: "BingoCode",
      description: "Designed BingoCode, a gamified learning platform for programming languages, designed with UML and IEEE-standard SRS to ensure structured and user-focused development.",
      tech: ["Programming with Gamification", "Self Learning", "Learning by Doing", "SRS", "UML"],
      image: "/Projects/BingoCode.png?height=200&width=300",
      category: "Product",
      role: "Product Lead & System Analyst",
    },

    {
      title: "GoBran",
      description: "Designed GoBran, a personal carbon footprint tracker, by developing its MVP through UI/UX prototypes, Business Model Canvas, and SWOT analysis to promote sustainable lifestyles with gamification and AI-driven concepts.",
      tech: ["Suistanable Living", "Climate Action", "Net-Zero Emissions", "Eco Footprint", "Business Model Canvas", "UI/UX", "Figma", "SDGs"],
      image: "/Projects/GoBran.png?height=200&width=300",
      github: "",
      demo: "",
      category: "Product",
      role: "Product Lead & Researcher",
    },

    {
      title: "BangSo!",
      description:
        "Designed BangSo!, a hackathon project at BI-OJK 2025, aimed at optimizing public services for PPSE social assistance through a chatbot integrated with income monitoring and entrepreneurship/financial literacy tests. Delivered as an MVP with UI/UX mockups, system design for AI integration, and a supporting Business Model Canvas.",
      tech: ["Public Service Optimization", "Financial Literacy", "Financial Solutions", "Resilient Economy", "Business Model Canvas", "UI/UX", "Figma"],
      image: "/Projects/BangSo.png?height=200&width=300",
      github: "",
      demo: "",
      category: "Product",
      role: "Product Lead & Researcher",
    },

    {
      title: "Ecovera",
      description:
        "Designed Ecovera, a sustainability-focused application for managing skincare waste by encouraging users to recycle empty product packaging at partner collection points. The MVP included UI/UX mockups and a reward-based system where users earn points redeemable for vouchers or products, fostering eco-friendly habits while integrating e-commerce features for continuous engagement.",
      tech: ["Zero Waste", "Suistanable Shopper", "Community Points", "Business Model Canvas", "UI/UX", "Figma"],
      image: "/Projects/ecovera.png?height=200&width=300",
      github: "",
      demo: "",
      category: "Product",
      role: "UX Researcher & Business Analyst",
    },
  ];

  // Filter projects berdasarkan kategori yang dipilih
  // A project is included if its mapped category matches the selectedCategory
  // or if it has explicit tags that include the selectedCategory (allows multi-bucket projects)
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => {
          const mapped = categoryMapping[project.category];
          const tags: string[] = (project as any).tags || [];
          return mapped === selectedCategory || tags.includes(selectedCategory);
        });

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    // Smooth scroll to projects section when filter is changed
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  // Keyboard navigation for pagination
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement && event.target.closest("#projects")) {
        if (event.key === "ArrowLeft" && currentPage > 1) {
          setCurrentPage(currentPage - 1);
          document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (event.key === "ArrowRight" && currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
          document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, totalPages]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-cyan-950/20" />

          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />

          {/* Floating Elements */}
          <div className="absolute top-20 left-20">
            <div className="w-2 h-2 bg-blue-400/30 rounded-full animate-float" />
          </div>
          <div className="absolute top-40 right-32">
            <div className="w-3 h-3 bg-purple-400/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <div className="absolute bottom-40 left-32">
            <div className="w-2 h-2 bg-cyan-400/30 rounded-full animate-float" style={{ animationDelay: "3s" }} />
          </div>
          <div className="absolute bottom-32 right-20">
            <div className="w-4 h-4 bg-pink-400/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
          </div>

          {/* Geometric Patterns */}
          <div className="absolute top-1/3 left-10 w-16 h-16 border border-blue-200/20 dark:border-blue-800/20 rotate-45 animate-float" />
          <div className="absolute bottom-1/3 right-10 w-12 h-12 border border-purple-200/20 dark:border-purple-800/20 rounded-full animate-pulse-slow" />

          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center" aria-label="Home">
                <Image src={darkMode ? "/logodark.png" : "/logo-removebg.png"} alt="Logo" width={32} height={32} className="h-8 w-auto" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                {["home", "about", "skills", "qualification", "projects", "contact"].map((section) => (
                  <button key={section} onClick={() => scrollToSection(section)} className={`capitalize transition-colors hover:text-primary ${activeSection === section ? "text-primary font-medium" : ""}`}>
                    {section}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                {/* Dark Mode Toggle */}
                <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                {/* Mobile Menu Button */}
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu - Below navbar */}
            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="py-4 border-t border-border/50 mt-3">
                <div className="flex flex-col space-y-1">
                  {["home", "about", "skills", "qualification", "projects", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => {
                        scrollToSection(section);
                        setMobileMenuOpen(false);
                      }}
                      className={`capitalize text-left py-3 px-4 rounded-lg transition-all duration-200 hover:bg-muted hover:text-primary hover:translate-x-2 ${
                        activeSection === section ? "text-primary font-medium bg-muted/50 border-l-2 border-primary" : ""
                      }`}
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 md:pt-0">
          <div className="container mx-auto px-4 text-center relative z-10 py-8 md:py-0">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute -inset-2 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)] blur-xl" aria-hidden="true" />
                  <div className="absolute inset-0 rounded-full border border-primary/20" aria-hidden="true" />
                  <div className="absolute inset-2 rounded-full border border-secondary/20 opacity-60" aria-hidden="true" />
                  <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden ring-1 ring-primary/20 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)]">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-full opacity-[0.06] mix-blend-soft-light bg-[radial-gradient(circle_at_1px_1px,theme(colors.black/30)_1px,transparent_1px)] [background-size:6px_6px]"
                      aria-hidden="true"
                    />
                    <Image src="/ifal.png" alt="Rifialdi Faturrochman" fill className="object-cover" sizes="128px" priority />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hi, I'm <span className="text-primary">Rifialdi 👋</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6">Software | Machine Learning/AI & Data | Product Development </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">Turning ideas into impactful solutions — with a passion for software, ML/AI, data, and product.</p>
                <p className="text-lg italic text-primary/80 max-w-2xl mx-auto mb-8">"Driven to build solutions that matter."</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" onClick={() => scrollToSection("projects")} className="relative overflow-hidden group">
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                </Button>
                <Button variant="outline" size="lg" asChild className="relative overflow-hidden group bg-transparent">
                  <a href="/CV/[CV-ATS]_Rifialdi Faturrochman.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download CV</span>
                  </a>
                </Button>
              </div>

              <div className="flex justify-center space-x-6">
                <Link href="https://github.com/rifialdiif" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/rifialdi-faturrochman" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=rifialdi.faturrochman@gmail.com" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-80 rounded-lg mb-6 relative overflow-hidden">
                    <div className="absolute -inset-2 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_60%)] blur-xl" aria-hidden="true" />
                    <div className="absolute inset-0 rounded-lg border border-primary/20" aria-hidden="true" />
                    <div className="absolute inset-2 rounded-lg border border-secondary/20 opacity-60" aria-hidden="true" />
                    <div className="relative z-10 w-full h-full rounded-lg overflow-hidden ring-1 ring-primary/20 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)]">
                      <div
                        className="pointer-events-none absolute inset-0 rounded-lg opacity-[0.04] mix-blend-soft-light bg-[radial-gradient(circle_at_1px_1px,theme(colors.black/30)_1px,transparent_1px)] [background-size:8px_8px]"
                        aria-hidden="true"
                      />
                      <Image src="/ifal about crop.jpg" alt="Rifialdi Faturrochman" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm Rifialdi Faturrochman, a Software Engineering graduate with experience as Project Lead, System Analyst, Software Engineer, and Machine Learning Engineer in diverse software projects. Skilled in system design,
                    programming, machine learning or data, and full-stack development, with a strong foundation in SDLC and team collaboration. Dedicated to delivering impactful, reliable, and innovative solutions.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">West Java, Indonesia</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="text-sm">Software Engineering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/30 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>

              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
                  <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                  <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                </TabsList>

                <TabsContent value="technical" className="space-y-8">
                  <div className="space-y-8">
                    {[
                      "Programming Languages",
                      "Frontend Frameworks",
                      "Backend Technologies",
                      "Machine Learning & Data Analysis",
                      "Databases",
                      "System Design & Architecture",
                      "Modelling & Analysis",
                      "Software Engineering & Analysis",
                      "Tools",
                    ].map((category) => (
                      <div key={category}>
                        <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                          {technicalSkills
                            .filter((skill) => skill.category === category)
                            .map((skill, index) => (
                              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                                {skill.name}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="soft" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {softSkills.map((skill, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                          <p className="text-muted-foreground">{skill.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="grid md:grid-cols-4 gap-6 mt-12">
                <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
                  <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Software Development</h3>
                  <p className="text-sm text-muted-foreground">Full-stack development with scalable and innovative frameworks</p>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">ML models and predictive analytics</p>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
                  <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Data Analysis</h3>
                  <p className="text-sm text-muted-foreground">Data visualization and insights extraction</p>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Project Leadership</h3>
                  <p className="text-sm text-muted-foreground">Leading development teams and projects</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Qualification Section */}
        <section id="qualification" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Qualification</h2>

              <Tabs defaultValue="education" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 max-w-lg mx-auto">
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                </TabsList>

                <TabsContent value="education" className="space-y-8">
                  <Card className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10" />
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle>Bachelor of Applied Computer Science (S.Tr.Kom)</CardTitle>
                          <CardDescription className="text-base">Politeknik Enjinering Indorama • 2022 - 2025</CardDescription>
                        </div>
                        <Badge>GPA: 3.90/4.00</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Passionate about Software Engineering and Machine Learning, with hands-on experience in software development and AI/ML research projects.</p>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Database Systems, Enterprise Resource Planning, Software Engineering, Data Mining/Machine Learning, Web Programming
                        </p>
                        <p className="text-sm">
                          <strong>Final Project:</strong> DeLuSi (Deteksi Kelulusan Mahasiswa) with Early Warning System
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">Achievements</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <p className="font-medium">Cumlaude</p>
                          <p className="text-sm text-muted-foreground">Highest GPA among graduates, Class of 2025</p>
                        </div>
                        <div>
                          <p className="font-medium">Distinction Graduate</p>
                          <p className="text-sm text-muted-foreground">Bangkit Academy by Google, GoTo, Traveloka</p>
                        </div>
                        <div>
                          <p className="font-medium">Research Grant Awardee</p>
                          <p className="text-sm text-muted-foreground">Team member of Stunting Detection Research funded by the Ministry of Education, Science, and Technology</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">College Experience</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <p className="font-medium">Project Lead</p>
                          <p className="text-sm text-muted-foreground">Led 2 major software development projects</p>
                        </div>
                        <div>
                          <p className="font-medium">ML Research Assistant & Mentor</p>
                          <p className="text-sm text-muted-foreground">Assisted in ML research and mentored junior students in IT competitions & developments</p>
                        </div>
                        <div>
                          <p className="font-medium">Tech Community Organizer</p>
                          <p className="text-sm text-muted-foreground">Founded a Discord-based student community and organized a technology workshop as lead coordinator</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Card className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10" />
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle>Informatics Engineering</CardTitle>
                          <CardDescription className="text-base">Universitas Pasundan • 2021 - 2022</CardDescription>
                        </div>
                        <Badge>GPA: 3.95/4.00</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Completed foundational coursework in CS and programming.</p>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <strong>Relevant Coursework:</strong> Computational Thinking, Web Development, Algorithms & Programming, and Probability & Statistics.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience" className="space-y-6">
                  <div className="space-y-6">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle>System Analyst Intern</CardTitle>
                            <CardDescription className="text-base">Ministry of Education, Science, and Technology • (Sept 2024 - Jan 2025)</CardDescription>
                          </div>
                          <Badge variant="secondary">Internship</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-3">Led a technical team of six members in designing and developing the SISTER Modul Sarpras and SISARPRAS systems.</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Analyzed project requirements and translated them into a fully functional system that met all specifications</li>
                          <li>• Designed system architecture using UML and documented technical specifications in SRS</li>
                          <li>• Managed system development using the Scrum methodology for efficient project execution</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle>Machine Learning Cohort</CardTitle>
                            <CardDescription className="text-base">Bangkit Academy by Google, GoTo, Traveloka • 1 semester (Feb - Jun 2024)</CardDescription>
                          </div>
                          <Badge variant="secondary">Academic</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-3">Completed a comprehensive machine learning curriculum from basic to advanced using TensorFlow, accompanied by soft skills and English skills training.</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Led a team as the project lead for the capstone project, overseeing the development of a deep learning model that achieved 93% accuracy for the given dataset</li>
                          <li>• Designed and analyzed problems, and determined the Minimum Viable Product (MVP) for the project.</li>
                          <li>• Completed the program with Distinction, as one of the top 10% of graduates</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Code className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle>Compunova</CardTitle>
                            <CardDescription className="text-base">Various Clients • (2022 - Now)</CardDescription>
                          </div>
                          <Badge variant="secondary">Part-Time/Freelance</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-3">
                          Led a team of four in developing custom app solutions for small businesses, managing the full project lifecycle—from requirements and timeline planning to on-time deployment that met user needs.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Determine budgeting for projects, managing to complete around 7 application projects within the assigned budget</li>
                          <li>• Design systems using UML standards for MVC application models, along with SRS following IEEE standards, and develop ERD designs for databases to ensure compatibility and efficiency</li>
                          <li>• Developed backend functions for a web application, primarily using Laravel framework.</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="certifications" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Project Management",
                        issuer: "Google • 2025",
                        description: "Completed Google's Project Management Professional Certificate, gaining skills in Agile project management, project planning, execution, and risk management.",
                        certifPath: "/Certificate/Coursera 1NJZXDN79ISE.pdf",
                      },
                      {
                        title: "Fullstack Programming Learning Path",
                        issuer: "Jawa Barat Istimewa Digital Academy • 2025",
                        description: "Completed intensive training in fullstack development with a focus on Next.js.",
                        certifPath: "/Certificate/Certificate Fase 2 Fullstack Web Programming - JIDA 2025 Rifialdi Faturrochman.pdf",
                      },
                      {
                        title: "Machine Learning Learning Path",
                        issuer: "Bangkit Academy by Google, GoTo, Traveloka • 2024",
                        description: "Completed an industry-recognized program focused on Machine Learning and graduated with Distinction.",
                        certifPath: "/Certificate/Bangkit.pdf",
                      },
                      {
                        title: "Crash Course on Python",
                        issuer: "Google • 2024",
                        description: "Completed Google’s Crash Course on Python, gaining foundational skills in Python programming, problem-solving, and automation.",
                        certifPath: "/Certificate/Coursera_CrashCoursePython.pdf",
                      },
                      {
                        title: "Analyze Data to Answer Questions",
                        issuer: "Google • 2024",
                        description: "Completed Google's Analyze Data to Answer Questions course, gaining skills in organizing data for analysis and performing calculations to derive insights.",
                        certifPath: "/Certificate/Coursera_Analyze Data to Answer Questions.pdf",
                      },
                      {
                        title: "Process Data from Dirty to Clean",
                        issuer: "Google • 2024",
                        description: "Completed Google’s Process Data from Dirty to Clean, gaining skills in data cleaning, data wrangling, and data analysis.",
                        certifPath: "/Certificate/Coursera_Process Data from Dirty to Clean.pdf",
                      },
                      {
                        title: "Share Data Through the Art of Visualization",
                        issuer: "Google • 2024",
                        description: "Completed Google’s Share Data Through the Art of Visualization, gaining skills in data visualization, data storytelling, and data communication.",
                        certifPath: "/Certificate/Coursera_Share Data Through the Art of Visualization.pdf",
                      },
                      {
                        title: "Mathematics for Machine Learning & Data Science Specialization",
                        issuer: "DeepLearning.AI • 2024",
                        description: "Completed the fundamental mathematics behind machine learning and data science, including linear algebra, calculus, and probability, to build and optimize ML models.",
                        certifPath: "/Certificate/Coursera_Mathematics for ML and DS Specialization.pdf",
                      },
                      {
                        title: "Machine Learning Specialization",
                        issuer: "DeepLearning.AI, Coursera, Stanford CPD, UVM • 2023",
                        description: "Completed the Machine Learning Specialization, covering supervised learning, unsupervised learning, deep learning, and ML best practices.",
                        certifPath: "/Certificate/Coursera_ML Specialization.pdf",
                      },
                      {
                        title: "DeepLearning.AI Tensorflow Developer",
                        issuer: "DeepLearning.AI • 2024",
                        description: "Completed in TensorFlow development module, focusing on building, training, and deploying deep learning models with TensorFlow.",
                        certifPath: "/Certificate/Coursera-tf Dev.pdf",
                      },
                      {
                        title: "Belajar Data Analysis Dengan Python",
                        issuer: "Dicoding • 2024",
                        description: "Completed Dicoding’s Data Analysis with Python course, focusing on data processing, visualization, and statistical analysis.",
                        certifPath: "/Certificate/Dicoding_DA.pdf",
                      },
                      {
                        title: " English for Business Communication",
                        issuer: "The British Institute • 2024",
                        description: "Completed The British Institute’s English for Business Communication course, enhancing professional writing, presentation, and workplace communication skills.",
                        certifPath: "/Certificate/Certificate_EnglishTBI.pdf",
                      },
                    ].map((cert, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 relative overflow-hidden h-full flex flex-col">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -translate-y-8 translate-x-8" />
                        <CardHeader>
                          <div className="flex items-start space-x-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Award className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg">{cert.title}</CardTitle>
                              <CardDescription>{cert.issuer}</CardDescription>
                            </div>
                            <Badge variant="secondary">Active</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="flex flex-col grow">
                          <p className="text-sm text-muted-foreground">{cert.description}</p>
                          {cert.certifPath ? (
                            <div className="mt-auto pt-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline">
                                    View Certificate
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl">
                                  <DialogHeader>
                                    <DialogTitle>{cert.title}</DialogTitle>
                                  </DialogHeader>
                                  {cert.certifPath?.toLowerCase().endsWith(".pdf") ? (
                                    <div className="w-full h-[70vh]">
                                      <iframe src={cert.certifPath} title={`${cert.title} certificate`} className="w-full h-full rounded-md" />
                                    </div>
                                  ) : (
                                    <AspectRatio ratio={16 / 9} className="bg-muted">
                                      <Image src={cert.certifPath} alt={`${cert.title} certificate`} fill className="object-contain" />
                                    </AspectRatio>
                                  )}
                                  <div className="flex justify-end">
                                    <Button asChild variant="link" className="px-0">
                                      <Link href={cert.certifPath} target="_blank" rel="noopener noreferrer">
                                        Open Original
                                      </Link>
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          ) : null}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-muted/30 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4" role="tablist" aria-label="Project category filters">
                {availableCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    role="tab"
                    aria-selected={selectedCategory === category}
                    aria-controls="projects-grid"
                    onClick={() => handleCategoryChange(category)}
                    className={`
                      transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105
                      ${selectedCategory === category ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 ring-2 ring-primary/20" : "hover:bg-primary/10 hover:border-primary/30 focus:bg-primary/10 focus:border-primary/30"}
                      rounded-full px-4 md:px-6 py-2 text-xs md:text-sm font-medium
                      min-w-fit active:scale-95
                    `}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Project Counter */}
              <div className="text-center mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border">
                  <span className="text-sm text-muted-foreground">
                    Showing{" "}
                    <span className="font-semibold text-foreground">
                      {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)}
                    </span>{" "}
                    of <span className="font-semibold text-foreground">{filteredProjects.length}</span> projects
                    {selectedCategory !== "All" && (
                      <span className="ml-2">
                        in <span className="font-semibold text-foreground">{selectedCategory}</span>
                      </span>
                    )}
                  </span>
                </div>
              </div>

              {/* Projects Grid */}
              {filteredProjects.length === 0 ? (
                <div className="text-center py-16">
                  <div className="mb-4">
                    <Code className="h-16 w-16 mx-auto text-muted-foreground/50" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                  <p className="text-muted-foreground">No projects match the selected category "{selectedCategory}".</p>
                </div>
              ) : (
                <>
                  <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {paginatedProjects.map((project, index) => (
                      <Card
                        key={`${project.title}-${index}`}
                        className="overflow-hidden hover:shadow-lg transition-all duration-500 hover:scale-105 group relative animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
                          <Image src={project.image || "/placeholder.svg"} alt={project.title} width={300} height={200} className="object-cover w-full h-full" />
                          {/* <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-white text-center">
                          <ExternalLink className="h-8 w-8 mx-auto mb-2" />
                          <p className="text-sm">View Project</p>
                        </div>
                      </div> */}
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <CardTitle className="text-xl">{project.title}</CardTitle>
                              {project.role && (
                                <div className="mt-2">
                                  <Badge variant="outline" className="text-sm">
                                    {project.role}
                                  </Badge>
                                </div>
                              )}
                            </div>
                            <Badge variant="secondary">{project.category}</Badge>
                          </div>
                          <CardDescription className="text-base mt-2">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          {(project.github || project.demo) && (
                            <div className="flex space-x-4">
                              {project.github ? (
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Code
                                  </Link>
                                </Button>
                              ) : null}
                              {project.demo ? (
                                <Button size="sm" asChild>
                                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                  </Link>
                                </Button>
                              ) : null}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex flex-col items-center gap-4 mt-12">
                      <div className="flex items-center gap-1 md:gap-2 flex-wrap justify-center">
                        {/* First Page Button */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setCurrentPage(1);
                            document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          disabled={currentPage === 1}
                          className="h-8 w-8 md:h-9 md:w-9 p-0"
                          title="Go to first page"
                        >
                          <ChevronsLeft className="h-4 w-4" />
                        </Button>

                        {/* Previous Page Button */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setCurrentPage(currentPage - 1);
                            document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          disabled={currentPage === 1}
                          className="h-8 w-8 md:h-9 md:w-9 p-0"
                          title="Previous page"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>

                        {/* Page Numbers */}
                        <div className="flex items-center gap-1 max-w-xs overflow-hidden">
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                            // Smart pagination: show first page, last page, current page and 1 page around it
                            // For mobile, show fewer pages
                            const maxVisiblePages = isMobile ? 3 : 5;

                            if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1) || (!isMobile && page >= currentPage - 2 && page <= currentPage + 2)) {
                              return (
                                <Button
                                  key={page}
                                  variant={currentPage === page ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => {
                                    setCurrentPage(page);
                                    document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                                  }}
                                  className={`h-8 w-8 md:h-9 md:w-9 p-0 transition-all duration-200 ${
                                    currentPage === page ? "bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/20" : "hover:bg-primary/10 hover:border-primary/30"
                                  }`}
                                  title={`Go to page ${page}`}
                                >
                                  {page}
                                </Button>
                              );
                            } else if ((!isMobile && (page === currentPage - 3 || page === currentPage + 3)) || (isMobile && (page === currentPage - 2 || page === currentPage + 2))) {
                              return (
                                <span key={page} className="text-muted-foreground px-1 text-sm">
                                  ...
                                </span>
                              );
                            }
                            return null;
                          })}
                        </div>

                        {/* Next Page Button */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setCurrentPage(currentPage + 1);
                            document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          disabled={currentPage === totalPages}
                          className="h-8 w-8 md:h-9 md:w-9 p-0"
                          title="Next page"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>

                        {/* Last Page Button */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setCurrentPage(totalPages);
                            document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          disabled={currentPage === totalPages}
                          className="h-8 w-8 md:h-9 md:w-9 p-0"
                          title="Go to last page"
                        >
                          <ChevronsRight className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Page Info */}
                      <div className="text-xs md:text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
                        Page {currentPage} of {totalPages}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Work. Learn. Grow — Together!</h2>
              <p className="text-xl text-muted-foreground mb-12">I'm always open to meaningful discussions—whether about career opportunities, project collaborations, or simply sharing experiences. Let's connect and grow together!</p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">rifialdi.faturrochman@gmail.com</p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href="https://wa.me/628996261319"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors duration-200 hover:text-green-600 active:text-green-800 font-medium cursor-pointer"
                    style={{ wordBreak: "break-all" }}
                  >
                    +62 899-6261-319
                  </a>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">West Java, Indonesia</p>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="relative overflow-hidden group">
                  <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=rifialdi.faturrochman@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://www.linkedin.com/in/rifialdi-faturrochman/">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Link>
                </Button>
                <Button size="lg" asChild className="relative overflow-hidden group">
                  <Link href="https://github.com/rifialdiif">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center justify-center">
              <Image src={darkMode ? "/logodark.png" : "/logo-removebg.png"} alt="Logo Rifialdi" width={80} height={80} className="mx-auto mb-2" priority={false} />
              <div className="mt-3 text-primary font-semibold text-base tracking-wide">Curious, Learn, Solve.</div>
              <p className="text-muted-foreground">© {new Date().getFullYear()} Rifialdi Faturrochman</p>
              <div className="mt-3 flex items-center justify-center space-x-2 text-muted-foreground">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-rose-400" />
                <span>using</span>
                <Code className="w-4 h-4 text-primary" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-400" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

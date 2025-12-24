import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Bot, Cpu, Wifi, BrainCircuit } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { ProjectCard } from "@/components/ProjectCard";
import { useCourses } from "@/hooks/use-courses";
import { useProjects } from "@/hooks/use-projects";
import { useTestimonials } from "@/hooks/use-testimonials";

export default function Home() {
  const { data: courses } = useCourses();
  const { data: projects } = useProjects();
  const { data: testimonials } = useTestimonials();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
                Future Ready Skills
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
                Master the Art of <span className="text-gradient">Robotics & AI</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Join the next generation of innovators. Hands-on project based learning in Robotics, IoT, and Artificial Intelligence designed for all ages.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/programs">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.6)] hover:-translate-y-1">
                    Explore Programs
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-card border border-border text-foreground font-bold text-lg hover:border-primary/50 transition-all hover:-translate-y-1">
                    Book a Demo
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
            >
              {/* Unsplash abstract tech image */}
              {/* robotics tech abstract blue futuristic */}
              <div className="relative aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[3rem] rotate-6 opacity-20 blur-xl" />
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" 
                  alt="Futuristic Robot" 
                  className="relative z-10 w-full h-full object-cover rounded-[2.5rem] border border-white/10 shadow-2xl"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 z-20 bg-card/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">1000+</p>
                      <p className="text-xs text-muted-foreground">Students Certified</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Bot, title: "Robotics", desc: "Build and program autonomous robots from scratch." },
              { icon: Cpu, title: "Electronics", desc: "Master Arduino, sensors, and circuit design." },
              { icon: Wifi, title: "IoT Systems", desc: "Connect devices to the cloud and build smart homes." },
              { icon: BrainCircuit, title: "AI & ML", desc: "Train models to make your robots intelligent." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Programs</span></h2>
              <p className="text-muted-foreground max-w-lg">Industry-relevant curriculum designed by experts to take you from beginner to pro.</p>
            </div>
            <Link href="/programs">
              <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                View All Programs <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses?.slice(0, 3).map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
            {!courses && [1, 2, 3].map((n) => (
              <div key={n} className="h-96 rounded-2xl bg-card/50 animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Student <span className="text-primary">Creations</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects?.slice(0, 8).map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What People <span className="text-primary">Say</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 relative"
              >
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
                <p className="text-muted-foreground mb-6 relative z-10">{t.content}</p>
                <div className="flex items-center gap-4">
                  {t.avatarUrl ? (
                    <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <span className="text-xs text-primary">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Start your journey in robotics and AI today. Join thousands of students learning by doing.
          </p>
          <Link href="/contact">
            <button className="px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-lg shadow-primary/25 hover:-translate-y-1">
              Start Learning Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

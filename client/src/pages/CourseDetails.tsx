import { useRoute, Link } from "wouter";
import { useCourse } from "@/hooks/use-courses";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, BarChart, CheckCircle2, DollarSign } from "lucide-react";

export default function CourseDetails() {
  const [, params] = useRoute("/courses/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: course, isLoading } = useCourse(id);

  if (isLoading) return <div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  
  if (!course) return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
      <Link href="/courses"><button className="text-primary hover:underline">Back to Courses</button></Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Header Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full z-20 pb-16 pt-32 bg-gradient-to-t from-background to-transparent">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/courses">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Courses
              </button>
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/20 text-primary font-bold text-sm mb-4">
                {course.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{course.title}</h1>
              <div className="flex flex-wrap gap-6 text-sm md:text-base text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-primary" /> {course.level}
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" /> {course.price}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">About This Course</h2>
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {course.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Understand core robotics concepts",
                "Hands-on circuit building",
                "Programming fundamentals (C++/Python)",
                "Sensor integration and data processing",
                "Troubleshooting and debugging",
                "Final capstone project"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-card border border-border/50 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">{course.price}</h3>
            <p className="text-muted-foreground text-sm mb-6">One-time payment, lifetime access</p>
            
            <Link href="/contact">
              <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all mb-4 shadow-lg shadow-primary/20">
                Enroll Now
              </button>
            </Link>
            <p className="text-xs text-center text-muted-foreground">
              Have questions? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

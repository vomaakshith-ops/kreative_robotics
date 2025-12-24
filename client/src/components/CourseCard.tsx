import { type Course } from "@shared/schema";
import { Link } from "wouter";
import { Clock, BarChart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-primary/20">
            {course.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">
          {course.description}
        </p>

        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-6">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart className="w-4 h-4 text-primary" />
            {course.level}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <span className="text-lg font-bold text-foreground">{course.price}</span>
          <Link href={`/courses/${course.id}`}>
            <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:translate-x-1 transition-transform">
              Details <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

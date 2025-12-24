import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { useCourses } from "@/hooks/use-courses";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Programs() {
  const { data: courses, isLoading } = useCourses();
  const [activeLevel, setActiveLevel] = useState("Beginner");

  const levels = ["Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses?.filter(
    (course) => course.level === activeLevel
  ) || [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24 container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-primary">Programs</span>
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your skill level and master robotics, AI, and IoT. From basics
            to advanced engineering expertise.
          </p>
        </div>

        {/* Level Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {levels.map((level) => (
            <motion.button
              key={level}
              onClick={() => setActiveLevel(level)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeLevel === level
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card border border-border/50 text-foreground hover:border-primary/50"
              }`}
            >
              {level}
            </motion.button>
          ))}
        </div>

        {/* Level Description */}
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-6 rounded-2xl bg-card border border-border/50 text-center"
        >
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {activeLevel === "Beginner" &&
              "Start your journey with fundamental concepts. Learn robotics basics, electronics fundamentals, and hands-on building from the ground up. Perfect for beginners with no prior experience."}
            {activeLevel === "Intermediate" &&
              "Deepen your skills with advanced projects. Build complex systems, integrate multiple technologies, and solve real-world problems. Ideal for those with basic knowledge."}
            {activeLevel === "Advanced" &&
              "Master cutting-edge technologies. Design industrial solutions, implement AI algorithms, and lead innovation projects. For experienced engineers ready to excel."}
          </p>
        </motion.div>

        {/* Courses Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-[400px] rounded-2xl bg-card/50 animate-pulse border border-border/50"
              />
            ))}
          </div>
        ) : filteredCourses.length > 0 ? (
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No programs available for this level yet.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

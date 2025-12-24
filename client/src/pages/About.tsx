import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Intro */}
        <div className="container mx-auto px-4 md:px-6 mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering the <span className="text-primary">Next Generation</span></h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RoboTech Institute was founded with a single mission: to democratize access to cutting-edge technology education. We believe that robotics and AI are not just for scientists in labs, but for anyone with curiosity and imagination.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our curriculum emphasizes "learning by doing". We move beyond textbooks to provide hands-on experiences where students build, break, fix, and innovate.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              {/* diverse group of students working on robot */}
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" 
                alt="Students building robots" 
                className="rounded-2xl border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-secondary/20 py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Excellence", desc: "We strive for the highest quality in education and mentorship." },
                { icon: Users, title: "Community", desc: "We build a supportive network of makers and innovators." },
                { icon: Lightbulb, title: "Innovation", desc: "We encourage creative problem solving and out-of-box thinking." },
                { icon: Rocket, title: "Impact", desc: "We focus on technology that solves real-world problems." },
              ].map((item, i) => (
                <div key={i} className="bg-card p-8 rounded-2xl border border-border/50 text-center hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

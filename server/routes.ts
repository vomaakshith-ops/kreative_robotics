import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const courses = await storage.getCourses();
  if (courses.length === 0) {
    await storage.createCourse({
      title: "Certified Robotics Specialist",
      description: "Master the fundamentals of robotics, from circuit design to microcontroller programming. Build 5 real-world robots.",
      category: "Robotics",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      duration: "12 Weeks",
      level: "Beginner",
      price: "$299"
    });
    await storage.createCourse({
      title: "AI & Machine Learning Masterclass",
      description: "Dive deep into neural networks, computer vision, and predictive analytics. Learn to deploy AI models.",
      category: "AI",
      imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000",
      duration: "16 Weeks",
      level: "Advanced",
      price: "$499"
    });
    await storage.createCourse({
      title: "IoT Home Automation",
      description: "Learn how to connect devices to the internet. Build a smart home system with sensors and cloud integration.",
      category: "IoT",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      duration: "8 Weeks",
      level: "Intermediate",
      price: "$199"
    });
  }

  const projects = await storage.getProjects();
  if (projects.length === 0) {
    await storage.createProject({
      title: "Mars Rover Prototype",
      studentName: "Alex Johnson",
      description: "A 6-wheel rocker-bogie suspension rover capable of traversing rough terrain, controlled via LoRa.",
      category: "Robotics",
      imageUrl: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&q=80&w=1000"
    });
    await storage.createProject({
      title: "Gesture Controlled Arm",
      studentName: "Sarah Lee",
      description: "A 3D-printed robotic arm that mimics human hand movements using EMG sensors and Arduino.",
      category: "Robotics",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000"
    });
    await storage.createProject({
      title: "Smart Traffic System",
      studentName: "Team Delta",
      description: "AI-powered traffic light management system that optimizes flow based on real-time vehicle density.",
      category: "AI / IoT",
      imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000"
    });
  }

  const testimonials = await storage.getTestimonials();
  if (testimonials.length === 0) {
    await storage.createTestimonial({
      name: "James Carter",
      role: "Graduate",
      content: "The hands-on approach at Obotz is unmatched. I went from knowing nothing about electronics to building my own drone in 3 months.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    });
    await storage.createTestimonial({
      name: "Elena Rodriguez",
      role: "Parent",
      content: "My daughter loves the Saturday robotics club. It's amazing to see her so engaged with STEM subjects. Highly recommended!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    });
    await storage.createTestimonial({
      name: "Michael Chang",
      role: "Engineering Student",
      content: "The AI course helped me ace my university projects. The mentors are industry experts who really know their stuff.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  seedDatabase().catch(console.error);

  app.get(api.courses.list.path, async (req, res) => {
    const courses = await storage.getCourses();
    res.json(courses);
  });

  app.get(api.courses.get.path, async (req, res) => {
    const course = await storage.getCourse(Number(req.params.id));
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  });

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      throw err;
    }
  });

  return httpServer;
}

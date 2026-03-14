import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, GraduationCap, Play, Users } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Cooking", "Tailoring", "Art & Craft", "Beauty", "Business", "Language"];

const courses = [
  { id: 1, title: "Pickle Making Masterclass", instructor: "Lakshmi Aunty", students: 234, duration: "2 hours", lessons: 8, category: "Cooking", icon: "🥫", level: "Beginner", free: true },
  { id: 2, title: "Blouse Cutting & Stitching", instructor: "Priya Tailors", students: 567, duration: "5 hours", lessons: 15, category: "Tailoring", icon: "✂️", level: "Intermediate", price: "₹299" },
  { id: 3, title: "Mehendi Design - Basic to Advanced", instructor: "Fatima Arts", students: 389, duration: "3 hours", lessons: 12, category: "Beauty", icon: "💅", level: "All Levels", price: "₹199" },
  { id: 4, title: "Spoken English for Beginners", instructor: "Nisha Teacher", students: 892, duration: "10 hours", lessons: 30, category: "Language", icon: "🗣️", level: "Beginner", free: true },
  { id: 5, title: "How to Start Selling Online", instructor: "Deepa Sharma", students: 456, duration: "1.5 hours", lessons: 6, category: "Business", icon: "💼", level: "Beginner", free: true },
  { id: 6, title: "Warli Art & Traditional Painting", instructor: "Kavitha Desai", students: 178, duration: "4 hours", lessons: 10, category: "Art & Craft", icon: "🎨", level: "Beginner", price: "₹249" },
  { id: 7, title: "Home Baking - Cakes & Cookies", instructor: "Sunita Bakes", students: 612, duration: "6 hours", lessons: 18, category: "Cooking", icon: "🍰", level: "Intermediate", price: "₹349" },
  { id: 8, title: "Pricing Your Skills Right", instructor: "Anitha Coach", students: 321, duration: "1 hour", lessons: 4, category: "Business", icon: "📊", level: "All Levels", free: true },
];

const Learning = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = courses.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              <GraduationCap className="inline h-8 w-8 mr-2 text-primary" />
              Learn & Grow
            </h1>
            <p className="mt-3 text-muted-foreground font-body max-w-lg mx-auto">
              Free and affordable tutorials taught by skilled women. Learn new skills or teach what you know!
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((course) => (
              <Card key={course.id} className="border-border/50 hover:shadow-card-hover transition-all duration-300 flex flex-col">
                <div className="relative h-36 bg-accent flex items-center justify-center">
                  <span className="text-5xl">{course.icon}</span>
                  <div className="absolute top-3 left-3">
                    {course.free ? (
                      <Badge className="bg-green-600 text-white text-xs">Free</Badge>
                    ) : (
                      <Badge className="bg-secondary text-secondary-foreground text-xs">{course.price}</Badge>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-foreground/80 text-background rounded-full p-2">
                    <Play className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <CardContent className="p-4 flex-1">
                  <Badge variant="outline" className="text-xs mb-2">{course.level}</Badge>
                  <h3 className="font-heading font-semibold text-foreground leading-snug">{course.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mt-1">by {course.instructor}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" />{course.lessons} lessons</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5" /> {course.students} students
                  </span>
                  <Button size="sm" variant="default">Start Learning</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Learning;

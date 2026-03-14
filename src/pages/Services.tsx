import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Star } from "lucide-react";
import { useState } from "react";

const serviceCategories = ["All", "Tailoring", "Teaching", "Cooking", "Beauty", "Art & Craft"];

const services = [
  { id: 1, name: "Custom Blouse Stitching", provider: "Priya V.", price: "₹500 onwards", rating: 4.9, reviews: 56, category: "Tailoring", icon: "✂️", time: "2-3 days", location: "Chennai" },
  { id: 2, name: "Math Tuition (Class 1-8)", provider: "Deepa S.", price: "₹1500/month", rating: 4.8, reviews: 34, category: "Teaching", icon: "📚", time: "1 hr/day", location: "Online" },
  { id: 3, name: "Homemade Sweets for Events", provider: "Kamala R.", price: "₹300/kg", rating: 5.0, reviews: 72, category: "Cooking", icon: "🍰", time: "1-2 days", location: "Bangalore" },
  { id: 4, name: "Bridal Mehendi Design", provider: "Fatima A.", price: "₹2000 onwards", rating: 4.9, reviews: 45, category: "Beauty", icon: "💅", time: "2-3 hours", location: "Hyderabad" },
  { id: 5, name: "Rangoli & Kolam Design", provider: "Geetha M.", price: "₹800/session", rating: 4.7, reviews: 19, category: "Art & Craft", icon: "🎨", time: "1-2 hours", location: "Coimbatore" },
  { id: 6, name: "Saree Draping Service", provider: "Revathi K.", price: "₹400/session", rating: 4.6, reviews: 28, category: "Beauty", icon: "👘", time: "30 mins", location: "Mumbai" },
  { id: 7, name: "English Speaking Classes", provider: "Nisha T.", price: "₹2000/month", rating: 4.8, reviews: 40, category: "Teaching", icon: "🗣️", time: "1 hr/day", location: "Online" },
  { id: 8, name: "Alterations & Repairs", provider: "Saroja L.", price: "₹200 onwards", rating: 4.5, reviews: 63, category: "Tailoring", icon: "🧵", time: "1-2 days", location: "Delhi" },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = services.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              <Calendar className="inline h-8 w-8 mr-2 text-primary" />
              Book Services
            </h1>
            <p className="mt-3 text-muted-foreground font-body max-w-lg mx-auto">
              Find and book skilled women for tailoring, teaching, cooking, beauty services and more.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {serviceCategories.map((cat) => (
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

          {/* Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <Card key={service.id} className="border-border/50 hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-xl bg-accent flex items-center justify-center text-3xl shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-foreground">{service.name}</h3>
                      <p className="text-sm text-muted-foreground font-body">by {service.provider}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        <span className="text-sm font-medium text-foreground">{service.rating}</span>
                        <span className="text-xs text-muted-foreground">({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{service.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{service.location}</span>
                  </div>

                  <Badge className="mt-3 bg-accent text-accent-foreground font-heading font-bold">
                    {service.price}
                  </Badge>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button className="w-full" variant="hero" size="sm">Book Now</Button>
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

export default Services;

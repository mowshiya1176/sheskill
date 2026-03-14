import heroImage from "@/assets/hero-illustration.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-12 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-6 animate-fade-up">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              <span className="text-sm font-body font-medium text-accent-foreground">
                Empowering Women, One Skill at a Time
              </span>
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Small Skills,{" "}
              <span className="text-gradient-warm">Big Opportunities</span>
              {" "}for Women
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground font-body leading-relaxed">
              Turn your everyday talents into income. Cook, stitch, teach, create — 
              share your skills and connect with customers right from home.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="hero" size="lg">
                Share Your Skill <ArrowRight className="ml-1" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Explore Skills
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-foreground">2,500+</p>
                <p className="text-sm text-muted-foreground">Women Empowered</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground">Skills Listed</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Cities</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="overflow-hidden rounded-2xl shadow-card-hover">
              <img
                src={heroImage}
                alt="Women sharing their skills - cooking, crafting, teaching, and creating together"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-card md:-bottom-6 md:-left-6">
              <p className="font-heading text-sm font-semibold text-foreground">
                ✨ "I earned my first income from home!"
              </p>
              <p className="text-xs text-muted-foreground">— Priya, Tailoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

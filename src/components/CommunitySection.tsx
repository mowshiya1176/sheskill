import { MessageCircle, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="bg-card py-16 md:py-20">
      <div className="container">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              You're Never Alone on This Journey
            </h2>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              Join a supportive community of women who help each other grow. 
              Ask questions, share experiences, and learn from each other's journeys.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <MessageCircle className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold text-foreground">Community Forum</h4>
                  <p className="text-sm text-muted-foreground">Ask for help, share tips, and connect with women in your area.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                  <BookOpen className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold text-foreground">Learn & Teach</h4>
                  <p className="text-sm text-muted-foreground">Share tutorials, attend workshops, and learn new skills from other women.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Users className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold text-foreground">Mentorship</h4>
                  <p className="text-sm text-muted-foreground">Get guidance from experienced women who've walked this path before.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg">Join the Community</Button>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { name: "Anita", text: "I was nervous to post my first skill, but the community encouraged me so much. Now I have regular customers!", tag: "Cooking" },
              { name: "Rekha", text: "Through SheSkill, I learned how to price my embroidery work fairly. The other women here are so helpful.", tag: "Crafts" },
              { name: "Zainab", text: "I never thought my mehendi skills could earn me money. This platform changed everything for my family.", tag: "Mehendi" },
            ].map((testimonial) => (
              <div key={testimonial.name} className="rounded-xl bg-background p-5 shadow-card">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-warm font-heading text-sm font-bold text-primary-foreground">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">{testimonial.tag}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

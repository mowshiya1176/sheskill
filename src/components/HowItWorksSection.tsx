import { UserPlus, FileText, ShoppingBag, Heart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and tell us about yourself. It's simple and takes just a minute.",
  },
  {
    icon: FileText,
    title: "Post What You Can Do",
    description: "Share your skills — cooking, stitching, teaching, crafts, or anything you're good at.",
  },
  {
    icon: ShoppingBag,
    title: "Get Orders & Bookings",
    description: "Customers nearby find you and order your products or book your services.",
  },
  {
    icon: Heart,
    title: "Earn & Grow",
    description: "Earn income from home and grow your reputation through happy customer testimonials.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground font-body">
            Four simple steps to start earning from your skills. No investment needed.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-warm shadow-lg">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="mb-2 font-heading text-xs font-bold uppercase tracking-widest text-secondary">
                Step {index + 1}
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-8 bg-border lg:block" style={{ right: "-1rem" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

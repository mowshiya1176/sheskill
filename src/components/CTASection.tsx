import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="rounded-2xl bg-gradient-warm p-8 text-center md:p-14">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Your Skills Deserve to Shine
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80 font-body text-lg">
            Whether you cook, stitch, teach, or create — there are people waiting for what you have to offer. Take the first step today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="heroOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Post Your First Skill <ArrowRight className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

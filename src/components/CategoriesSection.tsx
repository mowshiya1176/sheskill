import { UtensilsCrossed, Scissors, Paintbrush, BookOpen, Hand, Sparkles } from "lucide-react";

const categories = [
  { icon: UtensilsCrossed, label: "Cooking & Food", count: "45 skills", color: "bg-primary/20" },
  { icon: Scissors, label: "Tailoring & Stitching", count: "32 skills", color: "bg-secondary/20" },
  { icon: Paintbrush, label: "Crafts & Art", count: "28 skills", color: "bg-primary/20" },
  { icon: BookOpen, label: "Teaching & Tuition", count: "22 skills", color: "bg-secondary/20" },
  { icon: Hand, label: "Mehendi & Beauty", count: "18 skills", color: "bg-primary/20" },
  { icon: Sparkles, label: "Home Decor", count: "15 skills", color: "bg-secondary/20" },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Can You Do?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground font-body">
            Discover categories where women like you are already earning from their everyday talents.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="group flex flex-col items-center gap-3 rounded-xl bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-full ${cat.color} transition-transform duration-300 group-hover:scale-110`}>
                <cat.icon className="h-6 w-6 text-foreground" />
              </div>
              <div className="text-center">
                <p className="font-heading text-sm font-semibold text-foreground">{cat.label}</p>
                <p className="text-xs text-muted-foreground">{cat.count}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

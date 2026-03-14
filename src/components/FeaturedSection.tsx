import cookingImg from "@/assets/featured-cooking.jpg";
import tailoringImg from "@/assets/featured-tailoring.jpg";
import craftsImg from "@/assets/featured-crafts.jpg";
import teachingImg from "@/assets/featured-teaching.jpg";

const featuredSkills = [
  {
    name: "Sunita Devi",
    skill: "Homemade Pickles & Papad",
    description: "Traditional recipes passed down through generations. Fresh, organic, and made with love.",
    image: cookingImg,
    testimonials: 15,
    location: "Jaipur",
  },
  {
    name: "Meena Kumari",
    skill: "Blouse Stitching & Embroidery",
    description: "Expert blouse stitching with beautiful hand embroidery work for all occasions.",
    image: tailoringImg,
    testimonials: 22,
    location: "Lucknow",
  },
  {
    name: "Fatima Begum",
    skill: "Handmade Jewelry & Crafts",
    description: "Beautiful handcrafted jewelry using beads, threads, and traditional techniques.",
    image: craftsImg,
    testimonials: 18,
    location: "Hyderabad",
  },
  {
    name: "Kavita Sharma",
    skill: "Maths & Science Tuition",
    description: "Patient and experienced home tutor for classes 1-8. Making learning fun and simple.",
    image: teachingImg,
    testimonials: 30,
    location: "Delhi",
  },
];

const FeaturedSection = () => {
  return (
    <section className="bg-card py-16 md:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Meet Our Skilled Women
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground font-body">
            Real women turning their everyday skills into thriving home businesses.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group overflow-hidden rounded-xl bg-background shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={skill.image}
                  alt={`${skill.name} - ${skill.skill}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {skill.location}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {skill.testimonials} Testimonials
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{skill.skill}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{skill.name}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                <button className="mt-4 w-full rounded-lg bg-primary py-2.5 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

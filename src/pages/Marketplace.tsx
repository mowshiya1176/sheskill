import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Food", "Crafts", "Clothing", "Jewelry", "Art", "Beauty"];

const products = [
  { id: 1, name: "Homemade Mango Pickle", seller: "Lakshmi S.", price: "₹150", rating: 4.8, reviews: 24, category: "Food", image: "🥫", tag: "Bestseller" },
  { id: 2, name: "Hand-Embroidered Cushion Cover", seller: "Meena R.", price: "₹450", rating: 4.9, reviews: 18, category: "Crafts", image: "🧵", tag: "New" },
  { id: 3, name: "Cotton Kurti - Block Print", seller: "Anjali M.", price: "₹800", rating: 4.7, reviews: 32, category: "Clothing", image: "👗" },
  { id: 4, name: "Terracotta Jewelry Set", seller: "Divya K.", price: "₹350", rating: 4.6, reviews: 15, category: "Jewelry", image: "💍" },
  { id: 5, name: "Homemade Ladoo Box (500g)", seller: "Sunita P.", price: "₹200", rating: 5.0, reviews: 41, category: "Food", image: "🍬", tag: "Bestseller" },
  { id: 6, name: "Warli Art Canvas Painting", seller: "Kavita D.", price: "₹1200", rating: 4.8, reviews: 9, category: "Art", image: "🎨", tag: "Premium" },
  { id: 7, name: "Handmade Silk Thread Bangles", seller: "Priya N.", price: "₹250", rating: 4.5, reviews: 27, category: "Jewelry", image: "📿" },
  { id: 8, name: "Natural Herbal Face Pack", seller: "Radha G.", price: "₹180", rating: 4.7, reviews: 13, category: "Beauty", image: "🌿", tag: "New" },
];

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              <ShoppingBag className="inline h-8 w-8 mr-2 text-primary" />
              Marketplace
            </h1>
            <p className="mt-3 text-muted-foreground font-body max-w-lg mx-auto">
              Discover amazing homemade products crafted with love by talented women across India.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-border/50 hover:shadow-card-hover transition-all duration-300">
                <div className="relative h-40 bg-accent flex items-center justify-center">
                  <span className="text-6xl">{product.image}</span>
                  {product.tag && (
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs">
                      {product.tag}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading font-semibold text-foreground line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground font-body mt-1">by {product.seller}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                  <span className="font-heading font-bold text-lg text-foreground">{product.price}</span>
                  <Button size="sm" variant="default">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">No products found. Try a different search or category.</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Marketplace;

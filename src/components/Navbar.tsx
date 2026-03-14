import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="font-heading text-2xl font-bold text-foreground">
          She<span className="text-gradient-warm">Skill</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="/" className="text-sm font-body text-muted-foreground transition-colors hover:text-foreground">Home</a>
          <a href="/marketplace" className="text-sm font-body text-muted-foreground transition-colors hover:text-foreground">Marketplace</a>
          <a href="/services" className="text-sm font-body text-muted-foreground transition-colors hover:text-foreground">Services</a>
          <a href="/community" className="text-sm font-body text-muted-foreground transition-colors hover:text-foreground">Community</a>
          <a href="/learning" className="text-sm font-body text-muted-foreground transition-colors hover:text-foreground">Learn</a>
          <Button variant="hero" size="sm" onClick={() => navigate("/auth")}>Get Started</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="/" className="text-sm font-body text-muted-foreground transition-colors hover:text-foreground">Home</a>
            <a href="/marketplace" className="text-sm font-body text-muted-foreground transition-colors hover:text-foreground">Marketplace</a>
            <a href="/services" className="text-sm font-body text-muted-foreground transition-colors hover:text-foreground">Services</a>
            <a href="/community" className="text-sm font-body text-muted-foreground transition-colors hover:text-foreground">Community</a>
            <a href="/learning" className="text-sm font-body text-muted-foreground transition-colors hover:text-foreground">Learn</a>
            <Button variant="hero" size="sm" className="w-full" onClick={() => navigate("/auth")}>Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

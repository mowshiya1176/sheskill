const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              She<span className="text-gradient-warm">Skill</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Turning everyday skills into income opportunities for women across India.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Platform</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">Skill Sharing</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Marketplace</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Service Booking</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Learning</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Community</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">Forum</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Success Stories</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Workshops</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Mentorship</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">Help Center</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Contact Us</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© 2026 SheSkill. Made with ❤️ for women who create.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

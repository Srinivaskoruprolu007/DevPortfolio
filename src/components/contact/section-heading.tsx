export function SectionHeading() {
  return (
    <div className="text-center mb-12">
      <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
        📧 Contact Me
      </div>
      <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Have a project in mind or want to collaborate? I'd love to hear from you!
        Let's create something amazing together.
      </p>
    </div>
  );
}

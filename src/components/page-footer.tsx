export default function PageFooter() {
  return (
    <footer className="w-full text-center p-4 mt-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
      <p className="text-xs text-foreground/50">© {new Date().getFullYear()} Ayoub Soudani · Built with intention, from Morocco.</p>
    </footer>
  );
}

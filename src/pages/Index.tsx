import { GraduationCap } from "lucide-react";
import NimSearchForm from "@/components/NimSearchForm";
import heroImage from "@/assets/committee-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/80"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-16 bg-transparent">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-info/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-info" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-info to-blue-400 bg-clip-text text-transparent">P2KFAST2025</h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Cek seleksi wawancara kalian</p>
            </div>

            {/* Form Section */}
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <NimSearchForm />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card/80 border-t border-border/50 py-4">
        <div className="container mx-auto px-10 text-center">
          <p className="text-muted-foreground">© P2K2025</p>
        </div>
      </footer>
    </div>
  );
};
export default Index;
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { findStudentByNim, Student } from "@/data/students";
import { CheckCircle, XCircle, Search, Users } from "lucide-react";
const NimSearchForm = () => {
  const [nim, setNim] = useState("");
  const [result, setResult] = useState<Student | null | "not-found">(null);
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = () => {
    if (!nim.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      const student = findStudentByNim(nim.trim());
      setResult(student || "not-found");
      setIsSearching(false);
    }, 800);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const resetSearch = () => {
    setNim("");
    setResult(null);
  };
  return <div className="w-full max-w-md mx-auto space-y-6">
      <Card className="p-8 bg-gradient-to-br from-card to-secondary/50 border-border/50 shadow-[var(--shadow-card)] backdrop-blur-sm bg-transparent rounded-3xl">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Cek Status Panitia</h2>
            <p className="text-muted-foreground">Semoga rezeki kalian di tahun ini</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="nim-input" className="text-sm font-medium text-foreground">
                Nomor Induk Mahasiswa (NIM)
              </label>
              <Input id="nim-input" type="text" placeholder="Contoh: 2300022222" value={nim} onChange={e => setNim(e.target.value)} onKeyPress={handleKeyPress} className="text-center text-lg font-mono tracking-wider bg-background/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" disabled={isSearching} />
            </div>

            <Button onClick={handleSearch} disabled={!nim.trim() || isSearching} className="w-full text-primary-foreground font-semibold py-3 transition-all duration-200 hover:shadow-[var(--shadow-primary)] disabled:opacity-50 bg-blue-400 hover:bg-blue-300">
              {isSearching ? <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Mencari...
                </div> : <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Cek Status
                </div>}
            </Button>
          </div>
        </div>
      </Card>

      {result && <Card className="p-6 animate-slide-up border-border/50 shadow-[var(--shadow-card)]">
          {result === "not-found" ? <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <XCircle className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">NIM Tidak Ditemukan</h3>
                <p className="text-muted-foreground">
                  NIM <span className="font-mono font-semibold">{nim}</span> tidak terdaftar dalam sistem seleksi panitia.
                </p>
              </div>
              <Button onClick={resetSearch} variant="outline" className="border-border hover:bg-muted">
                Coba Lagi
              </Button>
            </div> : result.status === "accepted" ? <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-success/10 rounded-full flex items-center justify-center animate-glow">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-success mb-2">🎉 Selamat!</h3>
                <p className="text-foreground font-semibold text-lg mb-1">{result.name}</p>
                <p className="text-muted-foreground mb-3">NIM: {result.nim}</p>
                <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-success" />
                    <span className="font-semibold text-success">Divisi</span>
                  </div>
                  <p className="text-xl font-bold text-success">{result.division}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  ACC ya, gajadi balIk kampung  
                </p>
              </div>
              <Button onClick={resetSearch} className="bg-success hover:bg-success/90 text-success-foreground">
                Cek NIM Lain
              </Button>
            </div> : <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <XCircle className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-destructive mb-2">Maaf</h3>
                <p className="text-foreground font-semibold text-lg mb-1">{result.name}</p>
                <p className="text-muted-foreground mb-3">NIM: {result.nim}</p>
                <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                  <p className="text-destructive font-semibold">Maaf ya belum rezeki kamu, jangan sedih maupun berkecil hati yaa</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Terimakasih kamu sudah mencoba. Tetap semangat masih ada tahun depan buat mencoba lagi!
                  </p>
                </div>
              </div>
              <Button onClick={resetSearch} variant="outline" className="border-border hover:bg-muted">
                Cek NIM Lain
              </Button>
            </div>}
        </Card>}
    </div>;
};
export default NimSearchForm;
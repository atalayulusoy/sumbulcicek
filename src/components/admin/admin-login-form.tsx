"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, LockKeyhole } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@sumbulgarden.com");
  const [password, setPassword] = useState("Admin123!");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const raw = await response.text();
      const data = raw ? JSON.parse(raw) : {};

      if (!response.ok) {
        throw new Error(
          typeof data === "object" && data && "error" in data
            ? String(data.error)
            : "Giris yapilamadi.",
        );
      }

      router.push("/dashboard-admin");
      router.refresh();
    } catch (submitError) {
      setError(
        submitError instanceof Error ? submitError.message : "Giris sirasinda bir hata olustu.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-muted text-brand">
          <LockKeyhole className="h-6 w-6" />
        </div>
        <CardTitle className="font-display text-4xl">Gizli Admin Girisi</CardTitle>
        <CardDescription>
          Bu panel vitrinde gosterilmez. Demo modda giris acilir, kaydetme islemleri icin veritabani gerekir.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80">E-posta</label>
            <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80">Sifre</label>
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
          </div>

          {error ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
              {error}
            </div>
          ) : null}

          <Button className="w-full" disabled={loading} type="submit">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            Admin Olarak Giris Yap
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

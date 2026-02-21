import { ArrowRight } from "lucide-react";

import { LandingSections } from "@/components/general/landing-sections";
import { Navbar } from "@/components/general/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50rem_50rem_at_8%_-2%,hsl(208_100%_84%/0.28),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_92%_10%,hsl(284_100%_88%/0.24),transparent_64%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(44rem_44rem_at_45%_95%,hsl(165_85%_78%/0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--secondary)/0.35),hsl(var(--background)))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground))_1px,transparent_0)] bg-size-[24px_24px] opacity-[0.02]" />
      </div>

      <section className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-6 md:px-8">
        <Navbar />

        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center pt-20 text-center md:pt-28">
          <Badge variant="outline" className="mb-6">
            AI-powered PDF Analysis
          </Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Turn complex PDFs into structured data your team can trust.
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
            Extract fields, summarize documents, and validate outputs with an AI
            model designed for real document workflows.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="gap-2 bg-emerald-300 text-emerald-950 shadow-sm hover:bg-emerald-200"
            >
              Upload your first PDF
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-200 bg-emerald-50/60 text-emerald-900 hover:bg-emerald-100/70"
            >
              See how it works
            </Button>
          </div>
        </div>

        <LandingSections />

        <footer className="mt-20 rounded-xl border border-primary/15 bg-background/85 px-6 py-8 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-emerald-300 px-2 py-1 text-xs font-semibold text-emerald-950">
                  P
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight">Parsify</p>
                  <p className="text-xs text-muted-foreground">
                    AI PDF Intelligence
                  </p>
                </div>
              </div>
              <p className="mt-4 hidden max-w-md text-sm text-muted-foreground sm:block">
                Analyze PDFs with AI, extract structured data, and ship reliable
                outputs into your team workflows.
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium">Product</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a className="block transition-colors hover:text-foreground" href="#features">
                  Features
                </a>
                <a className="block transition-colors hover:text-foreground" href="#workflow">
                  Workflow
                </a>
                <a className="block transition-colors hover:text-foreground" href="#pricing">
                  Pricing
                </a>
              </div>
            </div>

            <div className="hidden sm:block">
              <p className="mb-3 text-sm font-medium">Resources</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a className="block transition-colors hover:text-foreground" href="#">
                  Documentation
                </a>
                <a className="block transition-colors hover:text-foreground" href="#">
                  API
                </a>
                <a className="block transition-colors hover:text-foreground" href="#">
                  Privacy
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t pt-5 text-xs text-muted-foreground md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Parsify. All rights reserved.</p>
            <p className="hidden sm:block">
              Made by <span className="font-medium text-foreground">DRSS DEV</span>
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}

import {
  Bot,
  Database,
  FileSearch,
  FileText,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    title: "Upload documents",
    description: "Drop in PDFs from invoices, contracts, reports, and forms.",
    icon: FileText,
  },
  {
    title: "Analyze with AI",
    description:
      "Our model reads layout, text, and context to extract what matters.",
    icon: Bot,
  },
  {
    title: "Ship clean output",
    description:
      "Review extracted fields from each PDF and verify results before moving forward.",
    icon: Workflow,
  },
];

const featureCards = [
  {
    title: "Smart field extraction",
    description:
      "Pull entities, totals, dates, and custom fields with high accuracy.",
    icon: Sparkles,
  },
  {
    title: "Semantic search",
    description: "Ask questions across hundreds of PDFs and get grounded answers.",
    icon: FileSearch,
  },
  {
    title: "Validation rules",
    description: "Apply confidence thresholds and rules before exporting data.",
    icon: ShieldCheck,
  },
  {
    title: "Structured results",
    description:
      "Get clean, readable extracted fields and summaries directly from scanned PDFs.",
    icon: Database,
  },
];

const useCases = [
  {
    title: "Finance teams",
    summary: "Scan invoices and statements for quick field review.",
    details:
      "Finance teams can upload PDF statements or invoices, let the model scan key values, and quickly verify extracted fields before downstream processing.",
  },
  {
    title: "Legal teams",
    summary: "Analyze long PDF agreements and surface key sections.",
    details:
      "Legal users can scan lengthy contracts to identify important clauses and get a faster first-pass review without manual page-by-page reading.",
  },
  {
    title: "Operations teams",
    summary: "Review PDF reports in a consistent, searchable format.",
    details:
      "Operations teams can standardize how report PDFs are analyzed so teams spend less time collecting context and more time taking action.",
  },
];

export function LandingSections() {
  return (
    <div className="mt-20 space-y-20 md:space-y-24">
      <section id="workflow" className="mx-auto w-full max-w-5xl">
        <div className="mb-8 text-center">
          <Badge variant="outline">Workflow</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Simple flow, enterprise-grade results.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Parsify keeps the process minimal while giving teams control over
            data quality and output consistency.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <Card
              key={step.title}
              className="border-primary/15 bg-background/85 backdrop-blur"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 w-fit rounded-md border border-emerald-200 bg-emerald-100/70 p-2 text-emerald-700">
                  <step.icon className="size-4" />
                </div>
                <CardTitle className="text-base">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-5xl">
        <div className="mb-8 text-center">
          <Badge variant="outline">Features</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Built for high-volume PDF analysis.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featureCards.map((feature) => (
            <Card
              key={feature.title}
              className="border-primary/15 bg-background/85"
            >
              <CardHeader className="pb-2">
                <div className="mb-2 w-fit rounded-md border border-emerald-200 bg-emerald-100/70 p-2 text-emerald-700">
                  <feature.icon className="size-4" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="use-cases" className="mx-auto w-full max-w-5xl">
        <Card className="border-primary/20 bg-[linear-gradient(to_bottom_right,hsl(220_100%_90%/0.36),hsl(284_100%_92%/0.3),hsl(var(--background))_65%)]">
          <CardHeader>
            <CardTitle className="text-xl">Who uses Parsify</CardTitle>
            <CardDescription>
              Teams that rely on documents but need structured, trustworthy data.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-primary/15 bg-background/85 px-4 py-3"
              >
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="mt-1 text-sm">{item.summary}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="pricing" className="mx-auto w-full max-w-4xl pb-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Ready to analyze PDFs with AI?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Start with a clean workflow, validate every extraction, and scale from
          a few files to thousands.
        </p>
      </section>
    </div>
  );
}

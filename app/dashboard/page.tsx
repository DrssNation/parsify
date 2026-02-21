export default function DashboardPage() {
  return (
    <div className="rounded-xl border border-primary/15 bg-background/85 p-6 shadow-sm backdrop-blur">
      <h1 className="text-2xl font-semibold tracking-tight">Welcome to your dashboard</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Upload PDFs, review extracted fields, and manage your document workflows from here.
      </p>
    </div>
  );
}

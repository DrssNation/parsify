import { SubmitButton } from "@/components/general/submit-button";
import { signIn } from "@/app/auth";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50rem_50rem_at_8%_-2%,hsl(208_100%_84%/0.28),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_92%_10%,hsl(284_100%_88%/0.24),transparent_64%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(44rem_44rem_at_45%_95%,hsl(165_85%_78%/0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--secondary)/0.35),hsl(var(--background)))]" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 md:px-8">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-primary/15 bg-background/85 p-8 text-center shadow-sm backdrop-blur">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="rounded-md bg-emerald-300 px-2 py-1 text-xs font-semibold text-emerald-950">
                P
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight">Parsify</p>
              </div>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome Back
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Sign in to continue scanning PDFs with AI and reviewing extracted
              fields in one clean workspace.
            </p>

            <div className="mt-8">
              <form action={async () => {
                'use server';
                await signIn('google', { redirectTo: '/' });
              }}>
                <SubmitButton
                  text="Sign in with Google"
                  icon={
                    <svg
                      aria-hidden="true"
                      className="size-4"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.35 11.1h-9.18v2.98h5.27c-.23 1.5-1.8 4.4-5.27 4.4-3.17 0-5.75-2.62-5.75-5.85s2.58-5.85 5.75-5.85c1.8 0 3.01.77 3.7 1.44l2.52-2.42C16.77 4.2 14.67 3.2 12.17 3.2 7.24 3.2 3.25 7.24 3.25 12.23s3.99 9.03 8.92 9.03c5.15 0 8.57-3.62 8.57-8.72 0-.58-.07-1.02-.14-1.44Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                />
              </form>
              <div className="mt-4 border-t border-primary/15 pt-3">
                <p className="text-xs text-muted-foreground">
                  Google-only authentication for a fast and secure sign-in.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
}

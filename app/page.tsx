import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type App = {
  id: string;
  name: string;
  category: string;
  color: string;
  blurb: string;
  features: string[];
};

const apps: App[] = [
  {
    id: "octo",
    name: "Octo",
    category: "Distribution",
    color: "text-blue-700",
    blurb: "A platform for all things distribution.",
    features: [
      "Multi-channel launches",
      "Audience-aware scheduling",
      "Distribution analytics",
    ],
  },
  {
    id: "aris",
    name: "Aris",
    category: "Operations",
    color: "text-purple-700",
    blurb:
      "Maintain all your apps in one platform. Track updates and history.",
    features: [
      "Cross-app status dashboard",
      "Update history and rollback",
      "Release pipelines",
    ],
  },
  {
    id: "peck",
    name: "Peck",
    category: "Intelligence",
    color: "text-green-700",
    blurb: "An app database for analyzing the current apps market.",
    features: [
      "Searchable app database",
      "Market trend signals",
      "Competitive teardowns",
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-semibold">emptea</span>
          <Button asChild size="sm">
            <a href="mailto:emptea.studios@gmail.com">Get early access</a>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-20">
        <section className="max-w-3xl">
          <p className="text-sm font-medium text-blue-700">
            A suite for vibecoding
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl">
            The powerhouse for the businesses of the future.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Three apps for what AI giants won't touch — distribution,
            operations, and market intelligence.
          </p>
        </section>

        <Separator className="my-20" />

        <section id="apps">
          <p className="text-sm font-medium text-blue-700">Apps</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            We start with three.
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Focused tools for the parts of shipping AI giants structurally
            can't win.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {apps.map((app) => (
              <Card key={app.id}>
                <CardHeader>
                  <p className={cn("text-xs font-medium", app.color)}>
                    {app.category}
                  </p>
                  <CardTitle className="mt-2 text-2xl">{app.name}</CardTitle>
                  <CardDescription className="text-base">
                    {app.blurb}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {app.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className={cn("font-medium", app.color)}>—</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-20" />

        <section>
          <p className="text-sm font-medium text-amber-900">Early access</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Get on the early access list.
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Tell us which app matters most to you and we'll get you in first.
          </p>
          <Button asChild className="mt-6">
            <a href="mailto:emptea.studios@gmail.com">
              emptea.studios@gmail.com
            </a>
          </Button>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          emptea · 2026
        </div>
      </footer>
    </div>
  );
}

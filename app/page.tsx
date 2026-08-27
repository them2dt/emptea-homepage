import { Cd } from "@/components/cd";

const apps = [{ name: "crank", href: "https://www.getcrank.app/" }];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20 bg-background px-6 py-24 text-foreground">
      <h1 className="text-2xl font-semibold tracking-tight">emptea studios</h1>
      <ul className="flex flex-wrap items-center justify-center gap-16">
        {apps.map((app) => (
          <li key={app.name}>
            <Cd title={app.name} href={app.href} className="w-64 sm:w-72" />
          </li>
        ))}
      </ul>
    </main>
  );
}

import { Button } from "@ui/button";
import { Code2, Component, Palette } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="grid place-content-center place-items-center gap-6 text-center">
        <h1>
          Next.js 14 Open Source Playground: <br />
          Crafting Modern Web Experiences
        </h1>

        <p className="max-w-2xl">
          Every line of code is open source, offering a collaborative learning
          experience. Join us on this coding journey and contribute to the
          future of web development!
        </p>

        <Button variant="outline" className="rounded-full">
          <Link href="/">GitHub</Link>
        </Button>
      </section>

      <section className="space-y-12">
        <h2 className="text-center">Key Features</h2>

        <div className="text- grid md:grid-cols-3 gap-6">
          <div className="group p-4 sm:p-6 bg-foreground/5 duration-200 transition-colors hover:bg-foreground/[0.065] rounded-lg border space-y-3">
            <Component className="w-10 h-10 duration-300 ease-in-out group-hover:w-6 group-hover:h-6" />

            <h4>Server Components</h4>

            <p className="text-sm">
              Utilize the power of server components for seamless rendering and
              improved performance.
            </p>
          </div>

          <div className="group p-4 sm:p-6 bg-foreground/5 duration-200 transition-colors hover:bg-foreground/[0.065] rounded-lg border space-y-3">
            <Code2 className="w-10 h-10 duration-300 ease-in-out group-hover:w-6 group-hover:h-6" />

            <h4>Open Source</h4>

            <p className="text-sm">
              Contribute to the entire codebase, fostering collaboration in
              development.
            </p>
          </div>

          <div className="group p-4 sm:p-6 bg-foreground/5 duration-200 transition-colors hover:bg-foreground/[0.065] rounded-lg border space-y-3">
            <Palette className="w-10 h-10 duration-300 ease-in-out group-hover:w-6 group-hover:h-6" />

            <h4>Modern UI</h4>

            <p className="text-sm">
              Craft stunning and responsive user interfaces with the latest
              design principles and practices.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 text-center">
        <h2>Completely Open Source</h2>

        <p className="mx-auto max-w-2xl">
          The code for this project is completely open source and available on
          GitHub. Join the community and contribute to the future of web
          development!
        </p>

        <Button size="sm" asChild>
          <a href="https://github.com/SarathAdhi/next-level-ui" target="_blank">
            View on GitHub
          </a>
        </Button>
      </section>
    </div>
  );
}

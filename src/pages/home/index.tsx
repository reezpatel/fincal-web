import { FeatureWithAdvantages } from "@/components/feature-with-advantages";
import { Header } from "../components/header";
import { AnimateHero } from "@/components/animated-hero";
import { Button } from "@/components/ui/button";

export const Home = () => {
  const props = {
    title: "Blocks built with Shadcn & Tailwind",
    description:
      "Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
    imageSrc: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    imageAlt: "placeholder hero",
    buttonPrimary: {
      label: "Get Started",
      href: "https://shadcnblocks.com",
    },
    buttonSecondary: {
      label: "Learn More",
      href: "https://shadcnblocks.com",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-5 lg:py-5 ">
        <AnimateHero />
        <FeatureWithAdvantages />

        <section className="pt-6 pb-18">
          <div className="container">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
                  Take Back Control of Your Finances
                </h1>
                <p className="mb-8 max-w-xl text-foreground/80 text-sm md:text-lg">
                  Join the waitlist for early access to Fincal. It's time for a
                  finance app that's open-source, privacy-first, and built to
                  put you in complete command of your financial future.
                </p>
                <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button>Join the waitlist</Button>
                  <Button variant="outline">Request a feature</Button>
                </div>
              </div>
              <img
                src={props.imageSrc}
                alt={props.imageAlt}
                className="max-h-96 w-full rounded-md object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

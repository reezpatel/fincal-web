import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pill, PillIndicator } from "@/components/ui/pill";

export function AnimateHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Budget",
      "Transactions",
      "Subscriptions",
      "Loans",
      "Investments",
      "Planning",
      "Goals",
      "Assets",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="flex gap-8 items-center justify-center flex-col pt-20 lg:pt-40">
      <div>
        <Pill>
          <PillIndicator variant="success" pulse />
          Coming soon
        </Pill>
      </div>
      <div className="flex gap-4 flex-col">
        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
          <span className="tracking-tight">Your money, your rules</span>
          <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-4">
            &nbsp;
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute font-semibold"
                initial={{ opacity: 0, y: "-100" }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : {
                        y: titleNumber > index ? -150 : 150,
                        opacity: 0,
                      }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>
        </h1>

        <p className="text-sm md:text-lg leading-8 tracking-normal text-foreground/80 max-w-3xl text-center py-4">
          Your financial goals are unique. So why settle for a generic app?
          Fincal empowers you to build a financial plan that truly fits your
          life. Create custom, set meaningful savings goals, and track your net
          worth with confidence, all from one intuitive app that puts you firmly
          in control.
        </p>
      </div>
      <div className="flex flex-row gap-3">
        <Button size="lg" className="gap-4" variant="outline">
          Join the waitlist
          <Sparkles className="h-4 w-4" />
        </Button>
      </div>

      <div className="container pt-8">
        <img
          src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
          className="mx-auto h-full max-h-[524px] w-full max-w-screen-lg rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}

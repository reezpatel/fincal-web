import { Header } from "../components/header";

export const Calculators = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Financial Calculators</h1>
        <p className="mt-4 text-muted-foreground">
          Choose from our collection of financial calculators
        </p>
      </main>
    </div>
  );
};

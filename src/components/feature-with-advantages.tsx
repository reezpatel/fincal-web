import {
  Shield,
  Server,
  Eye,
  Wifi,
  Lock,
  Users,
  Heart,
  Calendar,
  TrendingUp,
  BarChart3,
  PiggyBank,
  Calculator,
  Receipt,
  Target,
  Building2,
  Calculator as CalculatorIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const FeatureWithAdvantages = () => {
  const features = [
    {
      category: "The Foundation: Your Privacy, Your Control",
      title: "True Data Privacy",
      description:
        "Your financial data is yours alone. All processing happens on your device, ensuring it never touches our servers.",
      icon: Shield,
    },
    {
      category: "The Foundation: Your Privacy, Your Control",
      title: "Self-Host for Ultimate Sovereignty",
      description:
        "For unparalleled control, host the app on your own server. Your data, your hardware, your absolute rules.",
      icon: Server,
    },
    {
      category: "The Foundation: Your Privacy, Your Control",
      title: "Transparent & Trusted",
      description:
        "Our code is fully open source, allowing anyone to audit and verify our commitment to your privacy and security.",
      icon: Eye,
    },
    {
      category: "The Foundation: Your Privacy, Your Control",
      title: "Always Accessible, Offline First",
      description:
        "Manage your finances anytime, anywhere, with or without an internet connection, ensuring constant access to your data.",
      icon: Wifi,
    },
    {
      category: "The Foundation: Your Privacy, Your Control",
      title: "Bank-Grade Security",
      description:
        "Your financial data is protected with powerful multi-factor authentication and robust 256-bit AES encryption.",
      icon: Lock,
    },
    {
      category: "Manage Your Life, Together or Apart",
      title: "Isolated Workspaces",
      description:
        "Manage finances for yourself, your parents, or your business in separate, secure workspaces without ever mixing data.",
      icon: Users,
    },
    {
      category: "Manage Your Life, Together or Apart",
      title: "Collaborative Partner Accounts",
      description:
        "Seamlessly link accounts with your partner to plan your shared financial journey and track mutual goals together.",
      icon: Heart,
    },
    {
      category: "Manage Your Life, Together or Apart",
      title: "Flexible Budgets",
      description:
        "Create a dynamic budget that adapts to your life's changes, not one that forces you into a rigid box.",
      icon: Calendar,
    },
    {
      category: "Manage Your Life, Together or Apart",
      title: "Intelligent Bill Management",
      description:
        "Never miss a due date or let forgotten subscriptions drain your account with our smart bill and subscription tracker.",
      icon: Receipt,
    },
    {
      category: "All-in-One Financial Tracking",
      title: "Advanced Expense Insights",
      description:
        "Get a complete picture of your spending with robust tracking, custom categories, and beautiful, easy-to-understand charts.",
      icon: TrendingUp,
    },
    {
      category: "All-in-One Financial Tracking",
      title: "Unified Investment Dashboard",
      description:
        "Track your entire portfolio—stocks, mutual funds, and crypto—in one consolidated view for real-time performance insights.",
      icon: BarChart3,
    },
    {
      category: "All-in-One Financial Tracking",
      title: "Holistic Asset & Net Worth Tracking",
      description:
        "Log all your assets, from savings accounts to real estate, for an accurate, up-to-date calculation of your net worth.",
      icon: PiggyBank,
    },
    {
      category: "All-in-One Financial Tracking",
      title: "Strategic Loan Management",
      description:
        "Track all your loans in one place and use our tools to discover the most efficient strategies for becoming debt-free.",
      icon: Calculator,
    },
    {
      category: "All-in-One Financial Tracking",
      title: "Digital Receipt Hub",
      description:
        "Go paperless by uploading and attaching receipts to your transactions for effortless organization and tax preparation.",
      icon: Receipt,
    },
    {
      category: "Plan for Your Future with Confidence",
      title: "Goal-Oriented Planning",
      description:
        "Define your financial dreams, from a new car to a down payment, and track your progress toward making them a reality.",
      icon: Target,
    },
    {
      category: "Plan for Your Future with Confidence",
      title: "Retirement Forecaster",
      description:
        "Plan for your future with confidence by projecting your savings and investments to ensure you're on track for retirement.",
      icon: Building2,
    },
    {
      category: "Plan for Your Future with Confidence",
      title: "Smart Financial Toolkit",
      description:
        "Make informed decisions with a suite of built-in calculators for loan interest, investment returns (XIRR), and more.",
      icon: CalculatorIcon,
    },
  ];
  return (
    <div className="flex gap-4 py-10 lg:py-25 flex-col items-center">
      <div>
        <Badge>Features</Badge>
      </div>
      <div className="flex gap-1 flex-col">
        <h2 className="text-xl md:text-4xl tracking-tighter lg:max-w-xl font-regular text-center">
          Personal finance done right
        </h2>
        <p className="text-sm md:text-lg leading-8 tracking-normal text-foreground/80 max-w-3xl text-center">
          Releasing in Q4 2025.
        </p>
      </div>
      <div className="flex gap-10 pt-12 flex-col w-full">
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-x-16 gap-y-18">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-row gap-6 items-center"
              >
                <IconComponent className="w-10 h-10 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm md:text-lg">{feature.title}</p>
                  <p className="text-foreground/80 text-sm md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

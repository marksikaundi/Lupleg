"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-green-950 sm:text-5xl xl:text-6xl/none">
                Streamline Your Workflow with Our SaaS Solution
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Boost productivity, collaborate seamlessly, and scale your
                business with our all-in-one platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="https://app.lupleg.org">
                <Button className="inline-flex h-10 items-center justify-center rounded-full bg-green-950 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-green-950">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="resources/session">
                <Button
                  variant="outline"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-input px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <CheckCircle className="text-green-500" />
              <span>14-day free trial</span>
              <CheckCircle className="text-green-500" />
              <span>No credit card required</span>
            </div>
          </div>
          {mounted && (
            <motion.div
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                alt="Product screenshot"
                className="w-full"
                height="550"
                src="/wedo.png"
                width="550"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

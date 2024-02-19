import Link from "next/link";
import React from "react";
import { CardContent, Card } from "@/components/ui/card";

function Sitemap() {
  return (
    <div className="bg-white">
      <section className="py-6 md:py-12 lg:py-20 xl:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl/none font-bold tracking-tighter">
              Lupleg Sitemap
            </h1>
            <p className="p-5 max-w-md mx-auto text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Below you can easily navigate, and explore other pages with single
              click.
            </p>
          </div>
        </div>
        
        <Card className="bg-white">
              <CardContent className="grid gap-2 md:grid-cols-3">
                <div className="grid gap-1 md:gap-2 md:col-span-2">
                  
                  
                  <ul className="space-y-2">
                  <li>
                    
                <Link className="hover:underline" href="academy">
                  Lupleg Academy
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  B2B
                </Link>
              </li>
              <li>
                    
                    <Link className="hover:underline" href="academy">
                      Lupleg Academy
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href="#">
                      B2B
                    </Link>
                  </li>
                  <li>
                    
                    <Link className="hover:underline" href="academy">
                      Lupleg Academy
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href="#">
                      B2B
                    </Link>
                  </li>
              </ul>

                  
                </div>
              </CardContent>
            </Card>

      </section>
    </div>
  );
}

export default Sitemap;

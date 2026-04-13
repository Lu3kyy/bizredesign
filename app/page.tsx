import Image from "next/image";
import Link from "next/link";

import BurgerCarousel from "@/components/BurgerCarousel";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative isolate overflow-hidden bg-[#250910]">
        <div className="relative min-h-[72svh] sm:min-h-[78svh]">
          <Image
            src="/assets/betterhero.png"
            alt="Juicy Burger hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,7,14,0.18)_0%,rgba(33,7,14,0.08)_35%,rgba(33,7,14,0.86)_100%)]" />

          <div className="relative z-10 flex min-h-[72svh] flex-col items-center justify-end px-6 pb-12 text-center text-white sm:min-h-[78svh] sm:pb-16">
            <h1 className="font-heading text-6xl leading-none tracking-tight sm:text-8xl">
              JUICY BURGER
            </h1>
            <p className="mt-2 text-xl tracking-tight text-white/92 sm:text-4xl">
              THE JUICE IS LOOSE
            </p>
            <Button
              asChild
              className="mt-6 h-11 rounded-lg bg-[#6b1730] px-6 font-semibold tracking-wide text-white hover:bg-[#541124]"
            >
              <Link href="/pages/menu">ORDER NOW</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_top,rgba(121,20,47,0.22),transparent_38%),linear-gradient(180deg,#5d1328_0%,#370a18_100%)] px-6 py-12 text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-5xl tracking-tight sm:text-6xl">
            ABOUT US
          </h2>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-12">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.26)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/assets/juicy-burger-hero.png"
                  alt="Juicy Burger close-up"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="max-w-xl text-lg leading-8 text-white/92 sm:text-xl">
              <p>
                At Juicy Burger, we&apos;re all about serving up the juiciest,
                most flavorful burgers made from high-quality ingredients. From
                classic favorites to bold, creative flavors, every burger is
                crafted with care to satisfy your cravings.
              </p>
              <p className="mt-5">
                Our mission is simple: great burgers, great vibes, and a place
                where everyone feels at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-5xl tracking-tight text-[#24171a] sm:text-6xl">
            ALL TIME FAVORITES
          </h2>
          <div className="mt-8">
            <BurgerCarousel />
          </div>
        </div>
      </section>
    </main>
  );
}

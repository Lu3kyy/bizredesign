"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { menuCategories, menuItems, type MenuCategory } from "@/lib/menu-data"

const MenuCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("burgers")

  const visibleItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  )

  const currentCategory =
    menuCategories.find((category) => category.id === activeCategory) ??
    menuCategories[0]

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:items-start">
        <aside className="lg:sticky lg:top-24">
          <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
            {menuCategories.map((category) => {
              const isActive = category.id === activeCategory

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-left font-heading text-3xl leading-none tracking-tight text-[#2d2020] transition-colors sm:text-[2rem] lg:px-3 lg:py-2",
                    isActive
                      ? "bg-[#f4ebe4] text-[#5f1328]"
                      : "text-[#2d2020] hover:bg-[#f8f1ea] hover:text-[#5f1328]"
                  )}
                >
                  {category.label}
                </button>
              )
            })}
          </nav>
        </aside>

        <div className="space-y-5">
          <div className="space-y-2 px-1">
            <h1 className="font-heading text-5xl tracking-tight text-[#2c161b] sm:text-6xl">
              {currentCategory.label}
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-[#6e5b5f] sm:text-base">
              Browse the current section and keep the side menu locked to what
              you are looking for, just like the layout in your screenshot.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleItems.map((item) => (
              <Card
                key={item.id}
                className="flex h-full overflow-hidden rounded-2xl border border-black/8 bg-white py-0 shadow-[0_14px_32px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-black/6 bg-[#f7f1eb]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <CardContent className="flex flex-1 flex-col px-5 py-5">
                  <div className="space-y-2">
                    <h2 className="min-h-[3.5rem] text-[2rem] font-heading leading-none text-[#24171a]">
                      {item.title}
                    </h2>
                    <p className="min-h-[4.5rem] text-sm leading-5 text-[#65565a]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto space-y-3 pt-5">
                    <p className="text-3xl font-heading leading-none text-[#231416]">
                      ${item.price.toFixed(2)}
                    </p>
                    <Button className="h-11 w-full rounded-lg bg-[#631329] font-semibold tracking-wide text-white hover:bg-[#4f0f21]">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuCatalog
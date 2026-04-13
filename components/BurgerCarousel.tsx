import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import { featuredMenuItems } from '@/lib/menu-data'

const BurgerCarousel = () => {
    return (
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMenuItems.map((item) => (
                <Card
                    key={item.id}
                    className="overflow-hidden rounded-2xl border border-black/8 bg-white py-0 shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
                >
                    <div className="relative aspect-4/3 overflow-hidden bg-[#f5eee8]">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>

                    <CardContent className="space-y-3 px-5 py-5 text-left">
                        <h3 className="min-h-[3.5rem] text-[2rem] font-heading leading-none text-[#24171a]">
                            {item.title}
                        </h3>
                        <p className="text-sm leading-5 text-[#65565a]">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default BurgerCarousel
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="flex min-h-screen w-full items-end justify-center bg-hero-home bg-cover bg-center bg-no-repeat text-white">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-7xl font-bold">Bienvenido a CIC</h1>
        <p className="text-balance">
          No importa si eres un principiante o un experto, todos son
          bienvenidos. Descubre, conecta y aprende junto a nosotros en un
          ambiente amigable.
        </p>
        <Button asChild>
          <Link href="#pagos">Unirme ahora</Link>
        </Button>
      </div>
    </section>
  )
}

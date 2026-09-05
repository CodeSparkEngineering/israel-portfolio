import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center"
      style={{ background: '#0C0C0C' }}
    >
      <p className="hero-heading font-black uppercase leading-none" style={{ fontSize: 'clamp(4rem, 20vw, 220px)' }}>
        404
      </p>
      <p className="text-[#D7E2EA] font-light uppercase tracking-widest text-sm sm:text-base">
        Page not found · Página não encontrada · Página no encontrada
      </p>
      <Link
        href="/"
        className="cursor-pointer rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10"
      >
        Home
      </Link>
    </main>
  )
}

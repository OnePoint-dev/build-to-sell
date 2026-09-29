import Image from 'next/image'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 bg-background py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h2
            id="about-title"
            className="text-balance font-heading text-4xl font-black uppercase tracking-tight text-primary md:text-5xl"
          >
            About the session
          </h2>
          <p className="font-heading text-xl font-bold leading-snug text-foreground">
            Could someone buy your business tomorrow?
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Buyers pay a premium for businesses that are predictable and don&apos;t depend on one person. The same
            traits make work calmer, growth faster, and your time your own, even if you never plan to sell.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Over one hour and a good lunch, we&apos;ll unpack the six principles that turn a busy business into a
            valuable asset, and you&apos;ll leave with one action to take this week.
          </p>
        </div>
        <Image
          src="/images/lunch-table.png"
          alt="Lunch spread on a conference table with notebooks, a laptop, and coffee"
          width={1024}
          height={768}
          className="aspect-[4/3] w-full rounded-lg object-cover shadow-xl"
        />
      </div>
    </section>
  )
}

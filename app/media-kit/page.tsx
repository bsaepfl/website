import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Media kit",
  description: "Official BSA EPFL logo assets and brand colors for partners and communications.",
}

const logos = [
  {
    name: "Dark logo",
    description: "Use on white or light backgrounds.",
    asset: "/media-kit/bsa-logo-dark.svg",
    surface: "bg-[#f7f7f4]",
    text: "text-[#162238]",
    border: "border-black/10",
    svgName: "bsa-logo-dark.svg",
    png: "/media-kit/bsa-logo-dark.png",
    pngName: "bsa-logo-dark.png",
    imageClass: "w-full max-w-md",
  },
  {
    name: "White logo",
    description: "Use on BSA Blue or dark backgrounds.",
    asset: "/media-kit/bsa-logo-white.svg",
    surface: "bg-[#152237]",
    text: "text-zinc-50",
    border: "border-white/15",
    svgName: "bsa-logo-white.svg",
    png: "/media-kit/bsa-logo-white.png",
    pngName: "bsa-logo-white.png",
    imageClass: "w-full max-w-md",
  },
  {
    name: "Dark icon",
    description: "Use for compact placements on light backgrounds.",
    asset: "/media-kit/bsa-icon-dark.svg",
    surface: "bg-[#f7f7f4]",
    text: "text-[#162238]",
    border: "border-black/10",
    svgName: "bsa-icon-dark.svg",
    png: "/media-kit/bsa-icon-dark.png",
    pngName: "bsa-icon-dark.png",
    imageClass: "w-32 sm:w-40",
  },
  {
    name: "White icon",
    description: "Use for compact placements on BSA Blue or dark backgrounds.",
    asset: "/media-kit/bsa-icon-white.svg",
    surface: "bg-[#152237]",
    text: "text-zinc-50",
    border: "border-white/15",
    svgName: "bsa-icon-white.svg",
    png: "/media-kit/bsa-icon-white.png",
    pngName: "bsa-icon-white.png",
    imageClass: "w-32 sm:w-40",
  },
]

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MediaKitPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-eyebrow font-mono uppercase tracking-[0.18em] text-zinc-500 mb-sm">
            Partner resources
          </p>
          <div className="max-w-3xl">
            <h1 className="text-hero font-display text-zinc-50 title-shimmer mb-md">Media kit</h1>
            <p className="font-serif text-lead md:text-xl leading-relaxed text-zinc-400 max-w-2xl">
              Official BSA EPFL marks and colors for event pages, partner announcements, press, and shared communications.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-md border-b border-zinc-800 pb-md mb-lg">
            <div>
              <p className="text-eyebrow font-mono uppercase tracking-[0.18em] text-zinc-500 mb-2xs">01 / Logos</p>
              <h2 className="text-display-2 font-display text-zinc-50">The essential marks</h2>
            </div>
            <p className="hidden md:block max-w-xs text-sm leading-relaxed text-zinc-500 text-right">
              SVG is preferred.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {logos.map((variant) => (
              <article key={variant.name} className={`overflow-hidden rounded-xl border ${variant.border} ${variant.surface}`}>
                <div className="min-h-[18rem] p-8 sm:p-12 flex items-center justify-center">
                  <img src={variant.asset} alt={`BSA EPFL ${variant.name}`} className={`${variant.imageClass} h-auto`} />
                </div>
                <div className={`border-t ${variant.border} px-6 py-5 sm:px-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between`}>
                  <div>
                    <h3 className={`font-display text-2xl ${variant.text}`}>{variant.name}</h3>
                    <p className={`mt-1 text-sm ${variant.text} opacity-65`}>{variant.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={variant.asset}
                      download={variant.svgName}
                      className={`inline-flex items-center gap-2 rounded-full border ${variant.border} px-3.5 py-2 text-xs font-medium transition-colors hover:bg-black/10 ${variant.text}`}
                    >
                      <DownloadIcon />
                      SVG
                    </a>
                    <a
                      href={variant.png}
                      download={variant.pngName}
                      className={`inline-flex items-center gap-2 rounded-full border ${variant.border} px-3.5 py-2 text-xs font-medium transition-colors hover:bg-black/10 ${variant.text}`}
                    >
                      <DownloadIcon />
                      PNG
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <p className="text-eyebrow font-mono uppercase tracking-[0.18em] text-zinc-500 mb-2xs">02 / Color</p>
            <h2 className="text-display-2 font-display text-zinc-50 mb-lg">BSA Blue, always.</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="h-32 bg-[#152237]" />
                <div className="bg-zinc-950 px-4 py-4">
                  <p className="text-zinc-50 font-medium">BSA Blue</p>
                  <p className="mt-1 text-eyebrow font-mono text-zinc-500">#152237</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="h-32 bg-[#fafafa]" />
                <div className="bg-zinc-950 px-4 py-4">
                  <p className="text-zinc-50 font-medium">Off white</p>
                  <p className="mt-1 text-eyebrow font-mono text-zinc-500">#FAFAFA</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="h-32 bg-[#162238]" />
                <div className="bg-zinc-950 px-4 py-4">
                  <p className="text-zinc-50 font-medium">Ink</p>
                  <p className="mt-1 text-eyebrow font-mono text-zinc-500">#162238</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="border-l border-zinc-800 pl-6 sm:pl-8 lg:mt-10">
            <p className="text-eyebrow font-mono uppercase tracking-[0.18em] text-zinc-500 mb-2xs">03 / Use</p>
            <h2 className="text-display-3 font-display text-zinc-50 mb-md">Keep it clear.</h2>
            <ul className="space-y-4 text-zinc-400 leading-relaxed">
              <li>Use the full logo when space permits. Use the icon for avatars and compact placements.</li>
              <li>Keep clear space around the mark. Do not crowd it with type, images, or other logos.</li>
              <li>Use the dark logo on light surfaces and the white logo on BSA Blue or dark surfaces.</li>
              <li>Do not recolor, stretch, crop, or add effects to the logo.</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  )
}

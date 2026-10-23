import { ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import logo from "../img/motown_solutions_logo.png"

// "/about/" and "/about" are the same page.
const normalize = (path: string) => path.replace(/\/+$/, "") || "/"

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
]

// Rendered on the server with the real path so the active link is right
// before hydration; pathname is passed in from BaseLayout.
export function Navigation({ pathname: initialPath = "/" }: { pathname?: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [pathname, setPathname] = useState(normalize(initialPath))
  const [isServicesOpen, setIsServicesOpen] = useState(pathname.startsWith("/services"))

  useEffect(() => {
    setPathname(normalize(window.location.pathname))

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const services = [
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI Development", href: "/services/ai-development" },
    { name: "Web Design & Development", href: "/services/web-design" },
    { name: "Mobile Development", href: "/services/mobile-development" },
    { name: "Automation", href: "/services/automation" },
    { name: "Consulting", href: "/services/consulting" },
  ]

  const linkBase =
    "inline-flex items-center font-mono text-xs uppercase tracking-[0.15em] leading-none hover:text-accent transition-colors"
  // A section stays active on its child pages (/blog/some-post marks Blog).
  const inSection = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")
  const current = (href: string) => (pathname === href ? "page" : undefined)
  // linkBase carries no color so the active color can't lose a cascade fight with text-ink.
  const linkState = (href: string) =>
    inSection(href) ? "text-accent underline decoration-[1.5px] underline-offset-[6px]" : "text-ink"

  return (
    <>
      <div aria-hidden className="h-16 md:h-20" />

      <nav
        className={[
          "fixed inset-x-0 top-0 z-50",
          "bg-[#f5f2ea]/95 backdrop-blur-sm supports-[backdrop-filter]:bg-[#f5f2ea]/80",
          "border-b transition-[border-color,box-shadow] duration-200",
          isScrolled
            ? "border-[#0b0b0c] shadow-[0_1px_0_0_#0b0b0c]"
            : "border-[#0b0b0c]/20",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 shrink-0" aria-label="Motown Solutions — home">
              <img src={logo.src} alt="Motown Solutions" className="h-11 md:h-14 w-auto" />
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} aria-current={current(l.href)} className={`${linkBase} ${linkState(l.href)}`}>
                  {l.name}
                </a>
              ))}

              <div className="relative group inline-flex items-center">
                <a
                  href="/services"
                  className={`${linkBase} gap-1 ${linkState("/services")}`}
                  aria-current={current("/services")}
                  aria-haspopup="menu"
                >
                  Services
                  <ChevronDown className="w-3 h-3 transition-transform duration-150 ease-out group-hover:rotate-180" />
                </a>

                <span
                  aria-hidden
                  className="absolute left-0 right-0 top-full h-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                />

                <div
                  role="menu"
                  className="absolute top-full left-0 mt-3 w-72 bg-paper border border-ink py-1 origin-top-left
                            opacity-0 translate-y-1 scale-[0.98] invisible pointer-events-none
                            transition-[opacity,translate,scale,visibility] duration-150 ease-out
                            group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:visible group-hover:pointer-events-auto
                            group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:visible group-focus-within:pointer-events-auto"
                >
                  {services.map((s, idx) => (
                    <a
                      key={s.href}
                      href={s.href}
                      aria-current={current(s.href)}
                      className={`flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium hover:bg-ink hover:text-paper transition-colors ${
                        pathname === s.href ? "bg-paper-2 text-accent" : ""
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[11px] text-ink-muted">
                          0{idx + 1}
                        </span>
                        {s.name}
                      </span>
                      <span aria-hidden>→</span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-ink text-paper font-mono text-xs uppercase tracking-[0.15em] px-5 py-3 border-2 border-ink hover:bg-paper hover:text-ink transition-colors"
              >
                Start Project
                <span className="relative -top-[1px] leading-none transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
              </a>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden text-ink p-2 -mr-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="relative block w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-[opacity,rotate] duration-150 ease-out ${
                    isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-[opacity,rotate] duration-150 ease-out ${
                    isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </span>
            </button>
          </div>

          <div
            className={`md:hidden grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
              isMobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
            inert={!isMobileMenuOpen}
            data-mobile-nav
          >
            <div className="overflow-hidden">
              <div className="pb-6 pt-2 border-t border-ink/20 flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    aria-current={current(l.href)}
                    className={`py-3 font-mono text-xs uppercase tracking-[0.15em] border-b border-ink/10 ${inSection(l.href) ? "text-accent" : "text-ink"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {l.name}
                  </a>
                ))}

                <div className="border-b border-ink/10">
                  <button
                    onClick={() => setIsServicesOpen((v) => !v)}
                    className={`w-full flex items-center justify-between py-3 font-mono text-xs uppercase tracking-[0.15em] ${inSection("/services") ? "text-accent" : "text-ink"}`}
                    aria-expanded={isServicesOpen}
                  >
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ease-out ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                    inert={!isServicesOpen}
                  >
                    <div className="overflow-hidden pl-4 flex flex-col gap-2">
                      {services.map((s, idx) => (
                        <a
                          key={s.href}
                          href={s.href}
                          aria-current={current(s.href)}
                          className={`flex items-center gap-3 text-sm hover:text-accent transition-colors py-1.5 ${pathname === s.href ? "text-accent font-medium" : "text-ink-muted"}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="font-mono text-[11px]">0{idx + 1}</span>
                          {s.name}
                        </a>
                      ))}
                      <div className="pb-3" />
                    </div>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-ink text-paper font-mono text-xs uppercase tracking-[0.15em] px-5 py-3 border-2 border-ink"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Project
                  <span className="relative -top-[1px] leading-none" aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

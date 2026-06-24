import { Languages, Phone } from "lucide-react";
import Link from "next/link";
import { CookieNotice } from "../components/CookieNotice";
import en from "../data/home.en.json";
import fr from "../data/home.fr.json";
import { MenuPlanner } from "./components/MenuPlanner";

export default async function MenuPage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const language = params?.lang === "fr" ? "fr" : "en";
  const isFrench = language === "fr";
  const t = isFrench ? fr : en;
  const homeHref = `/${isFrench ? "?lang=fr" : ""}`;

  return (
    <main className="min-h-screen bg-[#fbfaf6] px-5 pb-8 pt-28 text-[#14251f] sm:px-8">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09251d]/85 text-white backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href={homeHref} className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-[#d6a84f] text-lg font-black text-[#09251d]">
              MM
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a84f]">
                Molly Malone&apos;s
              </span>
              <span className="block text-xs text-white/70">
                {t.header.brandType}
              </span>
            </span>
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium text-white/78 lg:flex">
            <Link href={`${homeHref}#spaces`} className="transition hover:text-white">
              {t.header.spaces}
            </Link>
            <Link href={`${homeHref}#menu`} className="transition hover:text-white">
              {t.header.food}
            </Link>
            <Link href={`${homeHref}#events`} className="transition hover:text-white">
              {t.header.events}
            </Link>
            <Link href={`${homeHref}#visit`} className="transition hover:text-white">
              {t.header.visit}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-full border border-white/12 bg-white/8 p-1 text-xs font-black text-white/70 sm:flex">
              <Link
                className={`rounded-full px-3 py-1 ${
                  !isFrench ? "bg-white/12 text-white" : ""
                }`}
                href="/menu"
              >
                EN
              </Link>
              <Link
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 transition hover:text-white ${
                  isFrench ? "bg-white/12 text-white" : ""
                }`}
                href="/menu?lang=fr"
              >
                <Languages className="size-3.5" aria-hidden="true" />
                FR
              </Link>
            </div>
            <Link
              href={`${homeHref}#reservation`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#d6a84f] px-4 text-sm font-bold text-[#09251d] shadow-lg shadow-black/20 transition hover:bg-[#f0c86b]"
            >
              <Phone className="size-4" aria-hidden="true" />
              {t.header.book}
            </Link>
          </div>
        </nav>
      </header>
      <div className="mx-auto max-w-7xl">
        <section className="py-12">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8a1f2d]">
            {isFrench ? "Demo pratique" : "Practical demo"}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-normal sm:text-6xl">
            {isFrench
              ? "Preparez une demande de table avec la carte."
              : "Prepare a table request from the menu."}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#5c635e]">
            {isFrench
              ? "Ce n'est pas une boutique en ligne. C'est un parcours demo pour montrer comment un groupe pourrait choisir quelques plats et boissons avant de contacter le pub."
              : "This is not ecommerce checkout. It is a demo flow showing how a group can pre-select food and drink ideas before contacting the pub."}
          </p>
        </section>

        <MenuPlanner language={language} />
      </div>
      <CookieNotice language={language} />
    </main>
  );
}

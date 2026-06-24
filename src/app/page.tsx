import {
  CalendarDays,
  Camera,
  Clock,
  GlassWater,
  HeartHandshake,
  Languages,
  MapPin,
  MessageCircle,
  Mic2,
  Music2,
  Phone,
  Star,
  Ticket,
  Trophy,
  Users,
  Utensils,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CookieNotice } from "./components/CookieNotice";
import { HeroCarousel } from "./components/HeroCarousel";
import en from "./data/home.en.json";
import fr from "./data/home.fr.json";

const venuePhotos = {
  front:
    "https://lemap-bordeaux.com/wp-content/uploads/2017/02/molly-malones-bordeaux-1.jpg",
  bar:
    "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48354/1500x750/375505.jpg",
  dining:
    "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48354/1500x750/375519.jpg",
  terrace:
    "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48354/1500x750/375520.jpg",
  stage:
    "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48354/1500x750/375507.jpg",
  crowd:
    "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48354/1500x750/375518.jpg",
  pubFood:
    "https://lemap-bordeaux.com/wp-content/uploads/2017/02/molly-malones-bordeaux-2.jpg",
  burger:
    "https://lemap-bordeaux.com/wp-content/uploads/2017/02/molly-malones-bordeaux-3.jpg",
  drinks:
    "https://lemap-bordeaux.com/wp-content/uploads/2017/02/molly-malones-bordeaux-4.jpg",
  sharing:
    "https://lemap-bordeaux.com/wp-content/uploads/2017/02/molly-malones-bordeaux-5.jpg",
};

const spaceImages = [venuePhotos.terrace, venuePhotos.dining, venuePhotos.stage];
const eventIcons = [Music2, Trophy, Ticket];
const featuredImages = [
  venuePhotos.pubFood,
  venuePhotos.burger,
  venuePhotos.sharing,
];
const visitMomentIcons = [Clock, Music2, HeartHandshake];

const gallery = [
  venuePhotos.front,
  venuePhotos.bar,
  venuePhotos.dining,
  venuePhotos.terrace,
  venuePhotos.stage,
  venuePhotos.crowd,
];

const statIcons = [Star, Users, MapPin, Clock];
const venueFeatureIcons = [Users, Mic2, Wifi];
const visitDetailIcons = [MapPin, Phone, Clock, CalendarDays];

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const language = params?.lang === "fr" ? "fr" : "en";
  const isFrench = language === "fr";
  const t = isFrench ? fr : en;
  const languageQuery = isFrench ? "?lang=fr" : "";
  const whatsappHref = `https://wa.me/33745691946?text=${encodeURIComponent(
    t.whatsappMessage,
  )}`;

  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#14251f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09251d]/85 text-white backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
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
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-white/78 lg:flex">
            <a href="#spaces" className="transition hover:text-white">
              {t.header.spaces}
            </a>
            <a href="#menu" className="transition hover:text-white">
              {t.header.food}
            </a>
            <a href="#events" className="transition hover:text-white">
              {t.header.events}
            </a>
            <a href="#visit" className="transition hover:text-white">
              {t.header.visit}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-full border border-white/12 bg-white/8 p-1 text-xs font-black text-white/70 sm:flex">
              <Link
                className={`rounded-full px-3 py-1 ${
                  !isFrench ? "bg-white/12 text-white" : ""
                }`}
                href="/"
              >
                EN
              </Link>
              <Link
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 transition hover:text-white ${
                  isFrench ? "bg-white/12 text-white" : ""
                }`}
                href="/?lang=fr"
                aria-label="Switch language to French"
              >
                <Languages className="size-3.5" aria-hidden="true" />
                FR
              </Link>
            </div>
            <a
              href="#reservation"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#d6a84f] px-4 text-sm font-bold text-[#09251d] shadow-lg shadow-black/20 transition hover:bg-[#f0c86b]"
            >
              <Phone className="size-4" aria-hidden="true" />
              {t.header.book}
            </a>
          </div>
        </nav>
      </header>

      <HeroCarousel copy={t.hero} plannerHref={`/menu${languageQuery}`} />

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-black/25 transition hover:scale-105"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>

      <section className="bg-[#f4f0e7] px-5 py-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-[8px] border border-[#ded8ca] bg-white shadow-sm md:grid-cols-4">
          {t.stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
            <div
              key={stat.label}
              className="group relative min-h-28 border-b border-r border-[#e5dfd2] p-4 transition hover:bg-[#fbfaf6] even:border-r-0 md:min-h-32 md:border-b-0 md:border-r-0 md:border-l md:p-6 md:first:border-l-0"
            >
              <div className="absolute inset-x-4 top-0 h-1 origin-left scale-x-0 rounded-b-full bg-[#d6a84f] transition group-hover:scale-x-100 md:inset-x-6" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-2xl font-black leading-none text-[#8a1f2d] sm:text-3xl md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-5 text-[#14251f] md:mt-3 md:text-base">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#6c716c] md:text-sm">
                    {stat.detail}
                  </p>
                </div>
                <div className="grid size-9 shrink-0 place-items-center rounded-[8px] bg-[#f3efe5] text-[#8a1f2d] transition group-hover:bg-[#8a1f2d] group-hover:text-white md:size-11">
                  <Icon className="size-4 md:size-5" aria-hidden="true" />
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </section>

      <section id="spaces" className="bg-[#fbfaf6] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8a1f2d]">
                {t.spaces.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                {t.spaces.title}
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5c635e]">
              {t.spaces.text}
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.spaces.items.map((space, index) => (
              <article
                key={space.title}
                className="overflow-hidden rounded-[8px] border border-[#dde0d5] bg-white shadow-sm"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={spaceImages[index]}
                    alt={space.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a1f2d]">
                    {space.meta}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">{space.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c635e]">
                    {space.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#0d2f26] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d6a84f]">
                {t.menu.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                {t.menu.title}
              </h2>
            </div>
            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-lg leading-8 text-white/75">{t.menu.intro}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.menu.featured.map((dish, index) => (
              <article
                key={dish.name}
                className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.06]"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={featuredImages[index]}
                    alt={dish.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#09251d]/45 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-black/20 backdrop-blur-md">
                    {dish.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black">{dish.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {dish.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_360px]">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {t.menu.categories.map((category) => (
                <article
                  key={category.title}
                  className="rounded-[8px] border border-white/10 bg-white/[0.055] p-5 transition hover:border-[#d6a84f]/50 hover:bg-white/[0.08]"
                >
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-xl font-black">{category.title}</h3>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#d6a84f]">
                        {category.note}
                      </p>
                    </div>
                    <Utensils
                      className="mt-1 size-5 shrink-0 text-[#d6a84f]"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-5 grid gap-4">
                    {category.items.map(([name, description]) => (
                      <div
                        key={name}
                        className="grid gap-1 border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                      >
                        <h4 className="font-black text-white">{name}</h4>
                        <p className="text-sm leading-6 text-white/66">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <aside className="grid content-start gap-5">
              <div className="rounded-[8px] bg-[#d6a84f] p-7 text-[#09251d] shadow-xl shadow-black/15">
                <p className="text-sm font-black uppercase tracking-[0.2em]">
                  {t.menu.matchCard.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl font-black leading-tight">
                  {t.menu.matchCard.title}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#2f3524]">
                  {t.menu.matchCard.text}
                </p>
                <a
                  href="#reservation"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#09251d] px-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#16362c]"
                >
                  {t.menu.matchCard.cta}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#f3efe5] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[8px] border border-[#ded8ca] bg-white shadow-sm lg:grid-cols-[0.72fr_1.28fr]">
            <div className="bg-[#8a1f2d] p-7 text-white sm:p-9">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d6a84f]">
                {t.visitMoments.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                {t.visitMoments.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/72">
                {t.visitMoments.text}
              </p>
            </div>
            <div className="grid md:grid-cols-3">
              {t.visitMoments.items.map((moment, index) => {
                const Icon = visitMomentIcons[index];
                return (
                <article
                  key={moment.title}
                  className="border-b border-[#e5dfd2] p-7 last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0"
                >
                  <div className="grid size-11 place-items-center rounded-[8px] bg-[#f3efe5] text-[#8a1f2d]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[#14251f]">
                    {moment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c635e]">
                    {moment.text}
                  </p>
                </article>
              );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d2f26] pb-24 pt-[72px] text-white sm:pt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d6a84f]">
              {t.bar.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
              {t.bar.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              {t.bar.text}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-72 w-full overflow-hidden rounded-[8px]">
              <Image
                src={venuePhotos.bar}
                alt="Molly Malone's bar"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-10 h-72 w-full overflow-hidden rounded-[8px]">
              <Image
                src={venuePhotos.drinks}
                alt="Molly Malone's drinks and pub interior"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8a1f2d]">
                {t.events.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                {t.events.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-[#5c635e]">
                {t.events.text}
              </p>
            </div>
            <div className="grid gap-4">
              {t.events.items.map((event, index) => {
                const Icon = eventIcons[index];
                return (
                <article
                  key={event.title}
                  className="grid gap-5 rounded-[8px] border border-[#dde0d5] bg-[#fbfaf6] p-5 sm:grid-cols-[auto_1fr]"
                >
                  <div className="grid size-12 place-items-center rounded-[8px] bg-[#8a1f2d] text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a1f2d]">
                      {event.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-black">{event.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5c635e]">
                      {event.text}
                    </p>
                  </div>
                </article>
              );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="reservation" className="bg-[#f3efe5] py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="relative min-h-[520px] overflow-hidden rounded-[8px]">
            <Image
              src={venuePhotos.crowd}
              alt="Guests at Molly Malone's"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-[8px] bg-white p-6 shadow-xl shadow-[#14251f]/10 sm:p-9">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8a1f2d]">
              {t.reservation.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal">
              {t.reservation.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5c635e]">
              {t.reservation.text}
            </p>
            <form className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  {t.reservation.name}
                  <input
                    className="min-h-12 rounded-[8px] border border-[#cfd5ca] px-4 font-normal outline-none transition focus:border-[#8a1f2d]"
                    placeholder={t.reservation.namePlaceholder}
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  {t.reservation.guests}
                  <input
                    className="min-h-12 rounded-[8px] border border-[#cfd5ca] px-4 font-normal outline-none transition focus:border-[#8a1f2d]"
                    placeholder={t.reservation.guestsPlaceholder}
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  {t.reservation.date}
                  <input
                    type="date"
                    className="min-h-12 rounded-[8px] border border-[#cfd5ca] px-4 font-normal outline-none transition focus:border-[#8a1f2d]"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  {t.reservation.time}
                  <input
                    type="time"
                    className="min-h-12 rounded-[8px] border border-[#cfd5ca] px-4 font-normal outline-none transition focus:border-[#8a1f2d]"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-bold">
                {t.reservation.occasion}
                <select className="min-h-12 rounded-[8px] border border-[#cfd5ca] px-4 font-normal outline-none transition focus:border-[#8a1f2d]">
                  {t.reservation.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+33557870672"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#8a1f2d] px-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#6f1824]"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {t.reservation.call}
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Molly+Malone%27s+83+Quai+des+Chartrons+Bordeaux"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#cfd5ca] px-5 text-sm font-bold text-[#14251f] transition hover:bg-[#fbfaf6]"
                >
                  <MapPin className="size-4" aria-hidden="true" />
                  {t.reservation.directions}
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[8px] border border-[#dde0d5] bg-[#fbfaf6] shadow-sm lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative min-h-80 overflow-hidden bg-[#09251d] p-8 text-white sm:p-10">
              <Image
                src={venuePhotos.stage}
                alt="Molly Malone's event setup"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover opacity-[0.38]"
              />
              <div className="absolute inset-0 bg-[#09251d]/72" />
              <div className="relative">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d6a84f]">
                  {t.venueFeatures.eyebrow}
                </p>
                <h2 className="mt-4 text-4xl font-black leading-tight">
                  {t.venueFeatures.title}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/72">
                  {t.venueFeatures.text}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3">
              {t.venueFeatures.items.map((feature, index) => {
                const Icon = venueFeatureIcons[index];
                return (
                <article
                  key={feature.title}
                  className="border-b border-[#e5dfd2] p-7 last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0"
                >
                  <div className="grid size-12 place-items-center rounded-[8px] bg-[#8a1f2d] text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-[#14251f]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c635e]">
                    {feature.text}
                  </p>
                </article>
              );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d2f26] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d6a84f]">
                {t.gallery.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                {t.gallery.title}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/70">
              {t.gallery.text}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-6">
            {gallery.map((image, index) => (
              <div
                key={image}
                className={`relative h-56 w-full overflow-hidden rounded-[8px] ${
                  index === 0 || index === 3 ? "lg:col-span-2" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`Molly Malone's venue photo ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 17vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[#fbfaf6] py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8a1f2d]">
              {t.visit.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
              {t.visit.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5c635e]">
              {t.visit.text}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.visit.details.map(([title, text], index) => {
                const Icon = visitDetailIcons[index];
                return (
                <div
                  key={title}
                  className="rounded-[8px] border border-[#dde0d5] bg-white p-5"
                >
                  <Icon className="size-5 text-[#8a1f2d]" aria-hidden="true" />
                  <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#8a1f2d]">
                    {title}
                  </p>
                  <p className="mt-2 font-semibold">{text}</p>
                </div>
              );
              })}
            </div>
          </div>
          <div className="rounded-[8px] border border-[#dde0d5] bg-white p-6 shadow-xl shadow-[#14251f]/10">
            <div className="flex items-center gap-3">
              <Star className="size-5 fill-[#d6a84f] text-[#d6a84f]" />
              <Star className="size-5 fill-[#d6a84f] text-[#d6a84f]" />
              <Star className="size-5 fill-[#d6a84f] text-[#d6a84f]" />
              <Star className="size-5 fill-[#d6a84f] text-[#d6a84f]" />
              <Star className="size-5 text-[#d6a84f]" />
            </div>
            <blockquote className="mt-6 text-2xl font-black leading-9">
              {t.visit.quote}
            </blockquote>
            <div className="mt-8 grid gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#14251f] px-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#243c34]"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                {t.visit.whatsapp}
              </a>
              <a
                href="https://www.instagram.com/molly_malones_bordeaux/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#cfd5ca] px-5 text-sm font-bold transition hover:bg-[#fbfaf6]"
              >
                <Camera className="size-4" aria-hidden="true" />
                {t.visit.instagram}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#09251d] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-black">Molly Malone&apos;s</p>
            <p className="mt-1 text-sm text-white/65">
              {t.footer.brandType}
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="https://www.instagram.com/molly_malones_bordeaux/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white/15"
              >
                <Camera className="size-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white/15"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Molly+Malone%27s+83+Quai+des+Chartrons+Bordeaux"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Maps"
                className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white/15"
              >
                <MapPin className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <GlassWater className="size-4 text-[#d6a84f]" />
                {t.footer.pubClassics}
              </span>
              <span className="inline-flex items-center gap-2">
                <Music2 className="size-4 text-[#d6a84f]" />
                {t.footer.liveMusic}
              </span>
              <span className="inline-flex items-center gap-2">
                <Trophy className="size-4 text-[#d6a84f]" />
                {t.footer.sports}
              </span>
            </div>
          </div>
        </div>
      </footer>
      <CookieNotice language={language} />
    </main>
  );
}


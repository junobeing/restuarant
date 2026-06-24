"use client";

import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Music2,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Irish Pub & Restaurant",
    title: "Molly Malone's",
    text: "A modern Irish pub experience on the Chartrons quays: terrace pints, pub classics, live music, match nights and group reservations until late.",
    image:
      "https://lemap-bordeaux.com/wp-content/uploads/2017/02/molly-malones-bordeaux-1.jpg",
    icon: MapPin,
    detail: "83 Quai des Chartrons, Bordeaux",
    bullets: [
      "Terrace on the Chartrons quays",
      "Lunch, dinner and after-hours drinks",
      "Reservations for groups up to 100",
    ],
  },
  {
    eyebrow: "Live Football & Rugby",
    title: "World Cup match nights",
    text: "Turn big fixtures into a full pub night with cold pints, screens, friends, chants and a table ready before kick-off.",
    image:
      "https://leftlion.co.uk/media/vtgjoz4m/football_13.jpg?autoorient=true&format=jpg&height=596&quality=80&sourceHeight=1191&sourceWidth=2127&v=1dab11e25c93710&width=1064",
    icon: Trophy,
    detail: "Big screens, big fixtures, big atmosphere",
    bullets: [
      "Football, rugby and tournament broadcasts",
      "Group tables for fans and afterworks",
      "Reserve early for headline matches",
    ],
  },
  {
    eyebrow: "Live Music",
    title: "Live acoustic nights",
    text: "Stage, microphone and sound setup make Molly's a natural stop for live music, singalongs and late-night Bordeaux plans.",
    image:
      "https://cdn.prod.website-files.com/68cd349259dd965bb1c69ee4/68cd349259dd965bb1c6a39d_Katie%20O%27Brien%27s%20Leeds.jpg",
    icon: Music2,
    detail: "Stage, mic, piano and sound system",
    bullets: [
      "Live concerts and acoustic sets",
      "Warm pub room with close-up atmosphere",
      "Dinner, drinks and music in one place",
    ],
  },
  {
    eyebrow: "Groups & Parties",
    title: "Birthdays, afterworks & student nights",
    text: "Bring the crew for terrace drinks, sharing boards, match nights or a festive table in the heart of Chartrons.",
    image:
      "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48354/1500x750/375511.jpg",
    icon: Users,
    detail: "Group reservations up to 100 guests",
    bullets: [
      "Afterworks, birthdays and private groups",
      "Terrace, dining room and event corner",
      "Open daily from 10:30 to 02:00",
    ],
  },
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];
  const Icon = slide.icon;
  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };
  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pb-10 pt-28 text-white lg:min-h-[650px]"
    >
      <div className="absolute inset-0 -z-20">
        {slides.map((item, index) => (
          <Image
            key={item.title}
            src={item.image}
            alt={item.title}
            fill
            priority
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,22,17,0.97),rgba(5,22,17,0.76)_43%,rgba(5,22,17,0.18)),linear-gradient(0deg,rgba(5,22,17,0.28),rgba(5,22,17,0.28))]" />

      <button
        type="button"
        aria-label="Previous hero slide"
        onClick={showPreviousSlide}
        className="absolute left-4 top-1/2 z-20 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 lg:grid"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next hero slide"
        onClick={showNextSlide}
        className="absolute right-4 top-1/2 z-20 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 lg:grid"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      <div className="mx-auto grid max-w-7xl gap-7 px-5 pt-8 sm:px-8 lg:grid-cols-[1fr_0.66fr] lg:items-center lg:pt-12">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/86 backdrop-blur">
            <Icon className="size-4 text-[#d6a84f]" aria-hidden="true" />
            {slide.detail}
          </div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#d6a84f] sm:text-sm">
            {slide.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-white/82 sm:text-xl">
            {slide.text}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#reservation"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d6a84f] px-6 text-sm font-black uppercase tracking-[0.14em] text-[#09251d] transition hover:bg-[#f0c86b]"
            >
              Reserve your table
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#events"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white/18"
            >
              See what&apos;s on
            </a>
          </div>
        </div>

        <aside className="grid gap-4 rounded-[8px] border border-white/14 bg-white/10 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[8px] bg-[#fbfaf6] p-5 text-[#14251f] shadow-xl shadow-black/10">
            <div className="flex items-center justify-between gap-4">
              <div className="grid size-11 place-items-center rounded-[8px] bg-[#8a1f2d] text-white">
                <Clock className="size-5" aria-hidden="true" />
              </div>
              <span className="rounded-full bg-[#efe7d5] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#8a1f2d]">
                Daily
              </span>
            </div>
            <p className="mt-4 text-3xl font-black">10:30 - 02:00</p>
            <p className="mt-2 text-sm leading-6 text-[#5c635e]">
              Lunch, dinner, after-hours drinks and late reservations.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-white/88">
            {slide.bullets.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 size-4 shrink-0 text-[#d6a84f]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.eyebrow} slide`}
                onClick={() => setActiveSlide(index)}
                className={`h-2 flex-1 rounded-full transition ${
                  index === activeSlide ? "bg-[#d6a84f]" : "bg-white/28"
                }`}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 lg:hidden">
            <button
              type="button"
              onClick={showPreviousSlide}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNextSlide}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}

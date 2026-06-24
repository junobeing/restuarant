import {
  CalendarDays,
  Clock,
  GlassWater,
  HeartHandshake,
  MapPin,
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
import { HeroCarousel } from "./components/HeroCarousel";

const venuePhotos = {
  front:
    "https://lemap-bordeaux.com/wp-content/uploads/2017/02/molly-malones-bordeaux-1.jpg",
  bar:
    "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48354/1500x750/375505.jpg",
  dining:
    "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48354/1500x750/375507.jpg",
  terrace:
    "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48354/1500x750/375511.jpg",
  stage:
    "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/48354/1500x750/375514.jpg",
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

const spaces = [
  {
    title: "Front terrace",
    text: "Sunny tables facing the quays, made for market-day pints, casual lunches and long Bordeaux evenings.",
    image: venuePhotos.terrace,
    meta: "Outdoor seating",
  },
  {
    title: "Pub dining room",
    text: "A warm Irish pub room for burgers, fish and chips, steak and ale pie, afterwork rounds and late dinners.",
    image: venuePhotos.dining,
    meta: "Lunch, dinner, drinks",
  },
  {
    title: "Event corner",
    text: "Stage-ready setup with piano, microphone and sound equipment for live sets, birthdays and work gatherings.",
    image: venuePhotos.stage,
    meta: "Music and private events",
  },
];

const events = [
  {
    icon: Music2,
    label: "Live music",
    title: "Acoustic sessions and pub concerts",
    text: "Weekly live music energy with the easy, noisy charm of a proper Irish pub.",
  },
  {
    icon: Trophy,
    label: "Match nights",
    title: "Football, rugby and World Cup screens",
    text: "Big-game atmosphere for France, Ireland, Premier League nights and tournament fixtures.",
  },
  {
    icon: Ticket,
    label: "Groups",
    title: "Birthdays, afterworks and student nights",
    text: "Reserve tables for a small crew or bring the whole team for a relaxed Chartrons gathering.",
  },
];

const featuredDishes = [
  {
    name: "Galway Fish & Chips",
    description:
      "Beer-battered fish, fries and proper Irish pub comfort for terrace lunches and match nights.",
    image: venuePhotos.pubFood,
    tag: "Pub classic",
  },
  {
    name: "Big Irish Breakfast",
    description:
      "Sausage, bacon, eggs, baked beans, fries and tomato for the table that came hungry.",
    image: venuePhotos.burger,
    tag: "Hearty plates",
  },
  {
    name: "Dublin Tapas",
    description:
      "Calamari, onion rings, spicy cheese bites and prawns for a group-friendly pub start.",
    image: venuePhotos.sharing,
    tag: "To share",
  },
];

const menuCategories = [
  {
    title: "Irish pub mains",
    note: "Comfort plates",
    items: [
      ["Steak & Chips", "Grilled beef with sauce and fries or salad"],
      ["Galway Fish & Chips", "Beer-battered fish fillet, Irish classic"],
      ["Lamb Brochette", "Grilled lamb skewer with rice and tzatziki"],
      ["Big Irish Breakfast", "Sausage, bacon, eggs, beans, fries and tomato"],
    ],
  },
  {
    title: "Tapas to share",
    note: "Before music or kick-off",
    items: [
      ["Dublin Tapas", "Calamari, onion rings, spicy cheese bites and prawns"],
      ["Spicy Chicken Wings", "A bowl of spicy chicken wings made for groups"],
      ["Terrace snacks", "Simple plates for pints, afterworks and late tables"],
    ],
  },
  {
    title: "Sweet finish",
    note: "Dessert and coffee",
    items: [
      ["Baileys Cheesecake", "Creamy cheesecake with an Irish pub signature"],
      ["Coffee and hot chocolate", "A softer landing after dinner or music"],
    ],
  },
  {
    title: "Draught beers",
    note: "On tap",
    items: [
      ["Kilkenny", "Creamy Irish red ale"],
      ["Carlsberg", "Blonde lager for easy rounds"],
      ["Guinness", "Classic Irish stout"],
    ],
  },
  {
    title: "Irish whiskey",
    note: "Old Ireland pours",
    items: [
      ["Jameson and Paddy", "Familiar Irish blends"],
      ["Tullamore Dew", "A dependable Irish whiskey staple"],
      ["Connemara", "Peated single malt character"],
      ["Blackbush and Bushmills", "Smooth reserve-style pours"],
    ],
  },
  {
    title: "Softs and easy extras",
    note: "For every table",
    items: [
      ["Sodas and juices", "Coca, Perrier, Orangina, Schweppes and Pago"],
      ["Tea and coffee", "Choice of teas, cafe and hot chocolate"],
      ["Celebration bottles", "Champagne for bigger moments"],
    ],
  },
];

const visitMoments = [
  {
    icon: Clock,
    title: "Lunch on the quays",
    text: "Fast pub plates for work breaks, tourists and Sunday market visits.",
  },
  {
    icon: Music2,
    title: "Dinner before music",
    text: "Come early for warm plates before the room turns into a live set.",
  },
  {
    icon: HeartHandshake,
    title: "Food for groups",
    text: "Sharing plates and casual dishes keep bigger tables easy to manage.",
  },
];

const gallery = [
  venuePhotos.front,
  venuePhotos.bar,
  venuePhotos.dining,
  venuePhotos.terrace,
  venuePhotos.stage,
  venuePhotos.crowd,
];

const statHighlights = [
  {
    icon: Star,
    value: "4.4/5",
    label: "Google rating via Privateaser",
    detail: "Trusted local listing",
  },
  {
    icon: Users,
    value: "100",
    label: "Group reservation capacity",
    detail: "Bring the whole crew",
  },
  {
    icon: MapPin,
    value: "120 m",
    label: "From Tram B Chartrons",
    detail: "Easy quay-side arrival",
  },
  {
    icon: Clock,
    value: "Daily",
    label: "10:30 - 02:00",
    detail: "Lunch through late drinks",
  },
];

const venueFeatures = [
  {
    icon: Users,
    title: "Group friendly",
    text: "Afterworks, birthdays, student nights and casual business drinks without making the booking feel complicated.",
  },
  {
    icon: Mic2,
    title: "Ready for sound",
    text: "Stage, microphone and sound equipment make concerts, speeches and event moments feel natural.",
  },
  {
    icon: Wifi,
    title: "Easy essentials",
    text: "Wi-Fi, table service, television, terrace seating and accessible listing features for a smoother visit.",
  },
];

export default function Home() {
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
                Irish Pub & Restaurant
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-white/78 lg:flex">
            <a href="#spaces" className="transition hover:text-white">
              Spaces
            </a>
            <a href="#menu" className="transition hover:text-white">
              Food & drink
            </a>
            <a href="#events" className="transition hover:text-white">
              Events
            </a>
            <a href="#visit" className="transition hover:text-white">
              Visit
            </a>
          </div>
          <a
            href="tel:+33557870672"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#d6a84f] px-4 text-sm font-bold text-[#09251d] shadow-lg shadow-black/20 transition hover:bg-[#f0c86b]"
          >
            <Phone className="size-4" aria-hidden="true" />
            Book a table
          </a>
        </nav>
      </header>

      <HeroCarousel />

      <section className="bg-[#f4f0e7] px-5 py-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[8px] border border-[#ded8ca] bg-white shadow-sm md:grid-cols-4">
          {statHighlights.map((stat) => (
            <div
              key={stat.label}
              className="group relative min-h-32 border-b border-[#e5dfd2] p-6 transition hover:bg-[#fbfaf6] md:border-b-0 md:border-l md:first:border-l-0"
            >
              <div className="absolute inset-x-6 top-0 h-1 origin-left scale-x-0 rounded-b-full bg-[#d6a84f] transition group-hover:scale-x-100" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-4xl font-black leading-none text-[#8a1f2d]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-base font-bold text-[#14251f]">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm text-[#6c716c]">{stat.detail}</p>
                </div>
                <div className="grid size-11 shrink-0 place-items-center rounded-[8px] bg-[#f3efe5] text-[#8a1f2d] transition group-hover:bg-[#8a1f2d] group-hover:text-white">
                  <stat.icon className="size-5" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="spaces" className="bg-[#fbfaf6] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8a1f2d]">
                The pub
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                Quay-side terrace, warm dining room and space for a proper
                night out.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5c635e]">
              Built for everything from one pint after the Sunday market to a
              full birthday table, with indoor seating, terrace space and a
              group-friendly layout.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {spaces.map((space) => (
              <article
                key={space.title}
                className="overflow-hidden rounded-[8px] border border-[#dde0d5] bg-white shadow-sm"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={space.image}
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
                Menu
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                Real pub plates, pints and whiskey without the boring menu wall.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/75 lg:justify-self-end">
              A customer should understand the offer in seconds: hearty mains,
              shareable tapas, draught beer, Irish whiskey and the easy extras
              that keep a table around for another round.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {featuredDishes.map((dish) => (
              <article
                key={dish.name}
                className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.06]"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-[#d6a84f] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#09251d]">
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
              {menuCategories.map((category) => (
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
                  Match night move
                </p>
                <h3 className="mt-4 text-3xl font-black leading-tight">
                  Book a table before the fixture fills the room.
                </h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#2f3524]">
                  Pair pints with Galway Fish & Chips, Dublin Tapas or wings,
                  then stay for the final whistle.
                </p>
                <a
                  href="#reservation"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#09251d] px-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#16362c]"
                >
                  Reserve now
                </a>
              </div>
              <div className="rounded-[8px] border border-white/10 bg-white/[0.055] p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d6a84f]">
                  Full menu
                </p>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  This section highlights the main offer. The full printed menu
                  can be added later as a PDF, photo gallery or live menu page.
                </p>
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
                Plan the visit
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                One pub, three easy reasons to come in.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/72">
                The site should push clear moments: lunch, music and groups.
                These are the fastest decisions for guests browsing on mobile.
              </p>
            </div>
            <div className="grid md:grid-cols-3">
              {visitMoments.map((moment) => (
                <article
                  key={moment.title}
                  className="border-b border-[#e5dfd2] p-7 last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0"
                >
                  <div className="grid size-11 place-items-center rounded-[8px] bg-[#f3efe5] text-[#8a1f2d]">
                    <moment.icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[#14251f]">
                    {moment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c635e]">
                    {moment.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d2f26] pb-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d6a84f]">
              Behind the bar
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
              Cold pints, whisky shelves and a room that keeps moving.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              The bar is the anchor: pints for the terrace, whisky for slower
              evenings, and easy rounds for match-night tables.
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
                What&apos;s on
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                Live music, football nights and a crowd that knows the chorus.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#5c635e]">
                Molly Malone&apos;s is set up for atmosphere: screens for major
                sports, a stage for concerts and enough space for big groups
                without losing the pub feel.
              </p>
            </div>
            <div className="grid gap-4">
              {events.map((event) => (
                <article
                  key={event.title}
                  className="grid gap-5 rounded-[8px] border border-[#dde0d5] bg-[#fbfaf6] p-5 sm:grid-cols-[auto_1fr]"
                >
                  <div className="grid size-12 place-items-center rounded-[8px] bg-[#8a1f2d] text-white">
                    <event.icon className="size-5" aria-hidden="true" />
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
              ))}
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
              Book a table
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal">
              Reserve for dinner, match night or a private group.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5c635e]">
              For the fastest confirmation, call the pub directly. For larger
              groups, include your preferred space, event type and timing.
            </p>
            <form className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  Name
                  <input
                    className="min-h-12 rounded-[8px] border border-[#cfd5ca] px-4 font-normal outline-none transition focus:border-[#8a1f2d]"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Guests
                  <input
                    className="min-h-12 rounded-[8px] border border-[#cfd5ca] px-4 font-normal outline-none transition focus:border-[#8a1f2d]"
                    placeholder="2, 8, 30..."
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  Date
                  <input
                    type="date"
                    className="min-h-12 rounded-[8px] border border-[#cfd5ca] px-4 font-normal outline-none transition focus:border-[#8a1f2d]"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Time
                  <input
                    type="time"
                    className="min-h-12 rounded-[8px] border border-[#cfd5ca] px-4 font-normal outline-none transition focus:border-[#8a1f2d]"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-bold">
                Occasion
                <select className="min-h-12 rounded-[8px] border border-[#cfd5ca] px-4 font-normal outline-none transition focus:border-[#8a1f2d]">
                  <option>Dinner reservation</option>
                  <option>Terrace drinks</option>
                  <option>Live music night</option>
                  <option>Football or World Cup screening</option>
                  <option>Birthday or afterwork</option>
                  <option>Private group enquiry</option>
                </select>
              </label>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+33557870672"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#8a1f2d] px-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#6f1824]"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call now
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Molly+Malone%27s+83+Quai+des+Chartrons+Bordeaux"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#cfd5ca] px-5 text-sm font-bold text-[#14251f] transition hover:bg-[#fbfaf6]"
                >
                  <MapPin className="size-4" aria-hidden="true" />
                  Get directions
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
                  Venue essentials
                </p>
                <h2 className="mt-4 text-4xl font-black leading-tight">
                  Built for the way pub nights actually happen.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/72">
                  A strong landing page should turn practical venue features
                  into reasons to book: groups, sound, screens and easy comfort.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3">
              {venueFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="border-b border-[#e5dfd2] p-7 last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0"
                >
                  <div className="grid size-12 place-items-center rounded-[8px] bg-[#8a1f2d] text-white">
                    <feature.icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-[#14251f]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c635e]">
                    {feature.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d2f26] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d6a84f]">
                Gallery
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                A look inside Molly&apos;s.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/70">
              Public venue photography from Bordeaux listing pages, selected to
              show the real facade, seating, bar, terrace and event atmosphere.
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
              Visit
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
              On the quays in historic Chartrons.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5c635e]">
              Drop in before or after a walk along the Garonne, meet friends
              after the Sunday market, or make Molly Malone&apos;s the base for
              your next match night.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [MapPin, "Address", "83 Quai des Chartrons, 33300 Bordeaux"],
                [Phone, "Phone", "+33 5 57 87 06 72"],
                [Clock, "Hours", "Monday to Sunday, 10:30 - 02:00"],
                [CalendarDays, "Transit", "Tram B, Chartrons stop"],
              ].map(([Icon, title, text]) => (
                <div
                  key={title as string}
                  className="rounded-[8px] border border-[#dde0d5] bg-white p-5"
                >
                  <Icon className="size-5 text-[#8a1f2d]" aria-hidden="true" />
                  <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#8a1f2d]">
                    {title as string}
                  </p>
                  <p className="mt-2 font-semibold">{text as string}</p>
                </div>
              ))}
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
              A lively Irish pub for terrace drinks, live concerts and match
              nights in one of Bordeaux&apos;s best walking districts.
            </blockquote>
            <div className="mt-8 grid gap-3">
              <a
                href="tel:+33557870672"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#14251f] px-5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#243c34]"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call to reserve
              </a>
              <a
                href="https://www.instagram.com/molly_malones_bordeaux/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#cfd5ca] px-5 text-sm font-bold transition hover:bg-[#fbfaf6]"
              >
                Follow Molly Malone&apos;s Bordeaux
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
              Irish Pub & Restaurant - Chartrons, Bordeaux
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <GlassWater className="size-4 text-[#d6a84f]" />
              Pub classics
            </span>
            <span className="inline-flex items-center gap-2">
              <Music2 className="size-4 text-[#d6a84f]" />
              Live music
            </span>
            <span className="inline-flex items-center gap-2">
              <Trophy className="size-4 text-[#d6a84f]" />
              Sports nights
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

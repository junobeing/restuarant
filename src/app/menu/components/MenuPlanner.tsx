"use client";

import { Check, Minus, MessageCircle, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Language = "en" | "fr";
const storageKey = "molly-menu-request";

const menuGroups = [
  {
    title: "Main plates",
    titleFr: "Plats principaux",
    items: [
      ["Steak & Chips", "Grilled beef with sauce, fries or salad", "9.90"],
      ["Galway Fish & Chips", "Beer-battered fish fillet", "9.40"],
      ["Lamb Brochette", "Lamb skewer with rice and tzatziki", "9.70"],
      ["Big Irish Breakfast", "Sausage, bacon, eggs, beans and fries", "9.40"],
    ],
  },
  {
    title: "To share",
    titleFr: "A partager",
    items: [
      ["Dublin Tapas", "Calamari, onion rings, cheese bites and prawns", "7.50"],
      ["Spicy Chicken Wings", "Spicy wings for the table", "7.50"],
      ["Baileys Cheesecake", "Irish pub dessert finish", "5.20"],
    ],
  },
  {
    title: "Drinks",
    titleFr: "Boissons",
    items: [
      ["Guinness", "Classic Irish stout", "6.20"],
      ["Kilkenny", "Irish red ale", "6.20"],
      ["Carlsberg", "Blonde lager", "6.00"],
      ["Jameson", "Irish whiskey", "5.60"],
      ["Soft drinks", "Soda, juice or lemonade", "3.00"],
    ],
  },
];

export function MenuPlanner({ language = "en" }: { language?: Language }) {
  const [selected, setSelected] = useState<Record<string, number>>({});
  const isFrench = language === "fr";
  const labels = {
    select: isFrench ? "Ajouter a la demande" : "Add to table request",
    remove: isFrench ? "Retirer" : "Remove",
    summary: isFrench ? "Demande de table" : "Table request",
    empty: isFrench
      ? "Selectionnez quelques elements pour preparer une demande de reservation."
      : "Select a few items to prepare a practical reservation request.",
    total: isFrench ? "Estimation indicative" : "Indicative estimate",
    whatsapp: isFrench ? "Envoyer sur WhatsApp" : "Send via WhatsApp",
  };

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (!stored) {
      return;
    }

    try {
      setSelected(JSON.parse(stored));
    } catch {
      localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(selected));
  }, [selected]);

  const selectedRows = useMemo(() => {
    return menuGroups
      .flatMap((group) => group.items)
      .map(([name, description, price]) => ({
        name,
        description,
        price: Number(price),
        quantity: selected[name] || 0,
      }))
      .filter((item) => item.quantity > 0);
  }, [selected]);

  const total = selectedRows.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const message = encodeURIComponent(
    isFrench
      ? `Bonjour Molly Malone's, je souhaite preparer une demande de table avec : ${selectedRows
          .map((item) => `${item.quantity} x ${item.name}`)
          .join(", ")}`
      : `Hello Molly Malone's, I would like to plan a table request with: ${selectedRows
          .map((item) => `${item.quantity} x ${item.name}`)
          .join(", ")}`,
  );

  const updateQuantity = (name: string, change: number) => {
    setSelected((current) => {
      const nextValue = Math.max(0, (current[name] || 0) + change);
      const next = { ...current };
      if (nextValue === 0) {
        delete next[name];
      } else {
        next[name] = nextValue;
      }
      return next;
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <div className="grid gap-5">
        {menuGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-[8px] border border-[#dde0d5] bg-white p-5"
          >
            <h2 className="text-2xl font-black">
              {isFrench ? group.titleFr : group.title}
            </h2>
            <div className="mt-5 grid gap-3">
              {group.items.map(([name, description, price]) => (
                <article
                  key={name}
                  className="grid gap-4 rounded-[8px] border border-[#ece6d8] bg-[#fbfaf6] p-4 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-black">{name}</h3>
                      <span className="rounded-full bg-[#efe7d5] px-3 py-1 text-xs font-black text-[#8a1f2d]">
                        {price} EUR
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#5c635e]">
                      {description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label={labels.remove}
                      onClick={() => updateQuantity(name, -1)}
                      className="grid size-10 place-items-center rounded-full border border-[#d7d0c2] bg-white"
                    >
                      <Minus className="size-4" aria-hidden="true" />
                    </button>
                    <span className="grid size-10 place-items-center rounded-full bg-[#09251d] text-sm font-black text-white">
                      {selected[name] || 0}
                    </span>
                    <button
                      type="button"
                      aria-label={labels.select}
                      onClick={() => updateQuantity(name, 1)}
                      className="grid size-10 place-items-center rounded-full bg-[#d6a84f] text-[#09251d]"
                    >
                      <Plus className="size-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <aside className="h-fit rounded-[8px] bg-[#09251d] p-6 text-white lg:sticky lg:top-24">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d6a84f]">
          {labels.summary}
        </p>
        <div className="mt-5 grid gap-3">
          {selectedRows.length === 0 ? (
            <p className="text-sm leading-6 text-white/70">{labels.empty}</p>
          ) : (
            selectedRows.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-3 border-b border-white/10 pb-3"
              >
                <span className="inline-flex items-center gap-2 text-sm font-bold">
                  <Check className="size-4 text-[#d6a84f]" aria-hidden="true" />
                  {item.quantity} x {item.name}
                </span>
                <span className="text-sm text-white/70">
                  {(item.quantity * item.price).toFixed(2)} EUR
                </span>
              </div>
            ))
          )}
        </div>
        <div className="mt-6 rounded-[8px] bg-white/8 p-4">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/55">
            {labels.total}
          </p>
          <p className="mt-2 text-3xl font-black">{total.toFixed(2)} EUR</p>
        </div>
        <a
          href={`https://wa.me/33745691946?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 text-sm font-black uppercase tracking-[0.14em] text-white"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          {labels.whatsapp}
        </a>
      </aside>
    </div>
  );
}

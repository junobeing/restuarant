"use client";

import { useEffect, useState } from "react";

type Language = "en" | "fr";

const copy = {
  en: {
    title: "Privacy preferences",
    short:
      "We use essential storage for language, menu selections and cookie preferences.",
    settings: "Settings",
    accept: "OK",
    save: "Save",
    essential: "Essential storage",
    preferences: "Remember menu selections",
  },
  fr: {
    title: "Preferences de confidentialite",
    short:
      "Nous utilisons un stockage essentiel pour la langue, la selection de carte et les preferences.",
    settings: "Reglages",
    accept: "OK",
    save: "Enregistrer",
    essential: "Stockage essentiel",
    preferences: "Memoriser les selections",
  },
};

export function CookieNotice({ language = "en" }: { language?: Language }) {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const labels = copy[language];

  useEffect(() => {
    setVisible(localStorage.getItem("molly-cookie-preferences") !== "saved");
  }, []);

  const save = () => {
    localStorage.setItem("molly-cookie-preferences", "saved");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-5 z-50 max-w-[calc(100vw-112px)] rounded-[8px] border border-[#ded8ca] bg-white/95 p-4 text-[#14251f] shadow-2xl shadow-black/20 backdrop-blur sm:max-w-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black">{labels.title}</p>
          <p className="mt-1 text-xs leading-5 text-[#5c635e]">
            {labels.short}
          </p>
        </div>
        <button
          type="button"
          onClick={save}
          className="rounded-full bg-[#09251d] px-3 py-1 text-xs font-black text-white"
        >
          {labels.accept}
        </button>
      </div>
      {expanded ? (
        <div className="mt-3 grid gap-2 border-t border-[#ece6d8] pt-3 text-xs">
          <label className="flex items-center justify-between gap-3">
            {labels.essential}
            <input type="checkbox" checked readOnly />
          </label>
          <label className="flex items-center justify-between gap-3">
            {labels.preferences}
            <input type="checkbox" defaultChecked />
          </label>
          <button
            type="button"
            onClick={save}
            className="mt-1 min-h-9 rounded-full bg-[#d6a84f] px-4 font-black text-[#09251d]"
          >
            {labels.save}
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-2 text-xs font-black text-[#8a1f2d]"
        >
          {labels.settings}
        </button>
      )}
    </div>
  );
}

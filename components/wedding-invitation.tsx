"use client"

import { useState, useEffect } from "react"

export default function WeddingInvitation() {
  const [currentSection, setCurrentSection] = useState("main")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const lotusIllustration = encodeURIComponent(`
    <svg width="320" height="320" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="petalGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stop-color="#f9c5d5"/>
          <stop offset="55%" stop-color="#f17ba8"/>
          <stop offset="100%" stop-color="#d2577c"/>
        </linearGradient>
        <linearGradient id="leafGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stop-color="#c9e0a6"/>
          <stop offset="100%" stop-color="#7aa168"/>
        </linearGradient>
      </defs>
      <g transform="translate(160 190)">
        <g fill="url(#petalGradient)" stroke="#b75d7b" stroke-width="2">
          <path d="M0-120 C20-80, 60-40, 0 0 C-60-40, -20-80, 0-120" />
          <path d="M-70-90 C-50-70, -40-30, 0 10 C-40-20, -60-60, -70-90" />
          <path d="M70-90 C50-70, 40-30, 0 10 C40-20, 60-60, 70-90" />
          <path d="M-110-40 C-90-50, -50-20, -10 30 C-60 10, -90-20, -110-40" />
          <path d="M110-40 C90-50, 50-20, 10 30 C60 10, 90-20, 110-40" />
        </g>
        <g fill="url(#leafGradient)" stroke="#648055" stroke-width="2" opacity="0.9">
          <path d="M-130 40 C-160-30, -110-80, -30-10 C-70 10, -110 20, -130 40" />
          <path d="M130 40 C160-30, 110-80, 30-10 C70 10, 110 20, 130 40" />
          <path d="M0 40 C40 20, 90 40, 0 130 C-90 40, -40 20, 0 40" />
        </g>
        <ellipse cx="0" cy="30" rx="26" ry="18" fill="#f6e5b8" stroke="#c59b54" stroke-width="2" />
        <ellipse cx="0" cy="38" rx="14" ry="9" fill="#fff4ce" />
      </g>
    </svg>
  `)

  const backgroundPattern = encodeURIComponent(`
    <svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#d4b570" stroke-width="1.2" opacity="0.5">
        <path d="M80 12 L94 40 L126 40 L100 60 L108 92 L80 74 L52 92 L60 60 L34 40 L66 40 Z" />
        <circle cx="80" cy="80" r="28" />
        <path d="M80 0 V160 M0 80 H160" opacity="0.25" />
      </g>
    </svg>
  `)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff7e6] font-serif text-maroon">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,${backgroundPattern}")`,
          backgroundSize: "180px 180px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffdf6] via-transparent to-[#f7e5c9]" />

      <div className="relative z-10">
        {/* Main Invitation Card */}
      <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden px-4 py-10 md:py-12">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,${backgroundPattern}")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cream/70 to-transparent" />

        <div className="relative w-full max-w-4xl mx-auto px-2 sm:px-4">
          <div className="absolute inset-0 rounded-[48px] md:rounded-[64px] border-[6px] sm:border-[8px] md:border-[10px] border-[#d4a762] bg-gradient-to-b from-[#fff9ef] via-[#fff2dc] to-[#f7e0b9] shadow-[0_20px_50px_rgba(122,73,27,0.2)] md:shadow-[0_25px_70px_rgba(122,73,27,0.25)]" />
          <div className="absolute -top-12 sm:-top-14 md:-top-16 left-1/2 -translate-x-1/2 w-[160px] sm:w-[200px] md:w-[240px] h-[100px] sm:h-[120px] md:h-[140px] rounded-t-[240px] border-[6px] sm:border-[7px] md:border-[8px] border-[#d4a762] bg-[#fff6e7] shadow-[0_15px_30px_rgba(122,73,27,0.18)] md:shadow-[0_20px_40px_rgba(122,73,27,0.2)]" />

          <div
            className="pointer-events-none absolute -top-16 md:-top-24 -left-8 sm:-left-10 md:-left-14 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-no-repeat bg-contain"
            style={{ backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")` }}
          />
          <div
            className="pointer-events-none absolute -top-16 md:-top-24 -right-8 sm:-right-10 md:-right-14 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-no-repeat bg-contain"
            style={{ backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`, transform: "scaleX(-1)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 md:-bottom-20 -left-8 sm:-left-10 md:-left-12 w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 bg-no-repeat bg-contain"
            style={{ backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`, transform: "scaleY(-1)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 md:-bottom-20 -right-8 sm:-right-10 md:-right-12 w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`,
              transform: "scale(-1, -1)",
            }}
          />

          {/* Main Content */}
          <div className="relative rounded-[44px] md:rounded-[52px] bg-[#fffaf2] px-5 py-12 sm:px-7 sm:py-14 md:px-14 md:py-16 text-maroon shadow-[inset_0_0_25px_rgba(255,255,255,0.55)] md:shadow-[inset_0_0_30px_rgba(255,255,255,0.6)]">
            {/* Om Symbol and Blessings */}
            <div className="text-center mb-8 sm:mb-10 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-gold/70 to-gold/30 text-4xl sm:text-5xl text-maroon shadow-md">
                ॐ
              </div>
              <p className="mt-4 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.35em] text-maroon font-sans uppercase">
              ॐ શ્રી ગણેશાય નમઃ
              </p>
            </div>

            {/* Shubh Vivah */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-maroon font-bold mb-8 sm:mb-10 text-center drop-shadow-lg tracking-wide">
            શુભ વિવાહ
            </h1>

            {/* Bride and Groom Names */}
            <div className="mb-10 sm:mb-12 text-center">
              <div className="inline-block px-6 sm:px-8 md:px-10 py-5 sm:py-6 border-y-2 border-gold">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">ચિ.અમિષા</p>
                <p className="text-base sm:text-lg text-gold font-sans mb-3 sm:mb-4">&</p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">ચિ.નિશિ</p>
              </div>
            </div>
            

            {/* Date */}
            <div className="mb-12 text-center">
              <p className="text-lg sm:text-xl font-sans tracking-wide">Sunday, February 22, 2026</p>
            </div>

            {/* Decorative element */}
            <div
              className="w-24 sm:w-28 h-1 mx-auto mb-14 sm:mb-16 transition-all duration-300"
              style={{
                background: `linear-gradient(to right, transparent, #B8860B, transparent)`,
                boxShadow: `0 0 ${Math.min(scrollY / 2, 40)}px rgba(184, 134, 11, ${Math.min(scrollY / 450, 0.85)})`,
                opacity: Math.min(scrollY / 300 + 0.35, 1),
              }}
            />

            <p className="text-center text-xs sm:text-sm text-maroon/80 font-sans tracking-[0.2em] uppercase">ભગવાન ગણેશના આશીર્વાદ સાથે</p>

            <div className="mt-8 sm:mt-10 flex justify-center">
              <a
                href="https://goo.gl/maps/sy4sbJGpHTQuZaRu5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-gold px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-maroon transition duration-300 hover:bg-gold hover:text-maroon/90 bg-[#fff7e6]/70 shadow-[0_8px_20px_rgba(234,192,112,0.25)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                લોકેશન માટે અહીં ક્લિક કરો
              </a>
            </div>

            <div className="mt-12 sm:mt-14 space-y-12 sm:space-y-14">
              {/* Invited By & Blessings */}
              <div className="rounded-[36px] border border-[#d4a76a]/70 bg-[#fff8e9]/90 px-6 py-10 sm:px-8 sm:py-12 shadow-[0_14px_40px_rgba(140,80,30,0.18)] text-center">
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.28em] uppercase text-maroon">💐આમંત્રક</h2>
                  <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-[#d8aa66] bg-gradient-to-b from-[#fff4d7] to-[#f9d79a] shadow-inner" />
                  <p className="text-base sm:text-lg leading-relaxed font-sans">
                    શ્રી પિંકેશભાઈ જયંતિલાલ પટેલ
                    <br />
                    શ્રીમતી કલ્પનાબેન પિંકેશભાઈ પટેલ
                  </p>
                  <p className="text-xs sm:text-sm font-sans leading-relaxed">
                    મુ. મઠ, તાલુકો. લુણાવાડા,
                    <br />
                    જિલ્લો મહીસાગર
                  </p>
                  <p className="text-xs sm:text-sm text-gold font-sans font-semibold">
                    Ph no.:
                    <a href="tel:+919106075993" className="underline-offset-4 hover:underline">
                      9106075993
                    </a>
                    ,
                    <a href="tel:+919825666564" className="underline-offset-4 hover:underline">
                      9825666564
                    </a>
                  </p>
                </div>

                <div className="mx-auto my-8 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />

                <div className="space-y-5">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.25em] uppercase">🌼 હૃદયથી આશીર્વાદ</h2>
                  <p className="text-base sm:text-lg leading-relaxed font-sans text-center">
                    અતિ આનંદ અને હૃદયપૂર્વકના આશીર્વાદ સાથે, શ્રી પિંકેશભાઈ પટેલ અને શ્રીમતી કલ્પનાબેન પટેલ પોતાની લાડકી પુત્રીના લગ્ન પ્રસંગે આપને હાર્દિક આમંત્રણ આપે છે.
                  </p>
                  <div className="inline-flex flex-col items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-semibold tracking-wide">ઝીલ</span>
                    <span className="text-xs sm:text-sm uppercase tracking-[0.45em] sm:tracking-[0.6em] text-gold">ના શુભ લગ્ન</span>
                    <span className="text-3xl sm:text-4xl font-semibold tracking-wide">કોમિલ</span>
                    <span className="mt-3 text-xs sm:text-sm font-sans text-maroon/80">
                      શ્રી બિપિનચંદ્ર પટેલ અને શ્રીમતી ભારતીબેન પટેલના પુત્ર
                    </span>
                  </div>
                  <div className="mx-auto mt-6 h-1 w-14 sm:w-16 rounded-full bg-gradient-to-r from-gold via-maroon to-gold opacity-80" />
                </div>
              </div>

              {/* Family Blessings */}
              <div className="rounded-[36px] border border-[#d3a964]/70 bg-[#fff9ef]/90 px-6 py-10 sm:px-8 sm:py-12 shadow-[0_14px_40px_rgba(143,85,39,0.18)]">
                <div className="mx-auto mb-5 sm:mb-6 w-20 sm:w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" />
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-center mb-8 sm:mb-10">💐પરિવારના આશીર્વાદ રૂપે જોડાયેલા</h2>

                <div className="grid grid-cols-1 gap-5 sm:gap-7 text-left md:grid-cols-2">
                  <div className="rounded-3xl border border-[#e3c189] bg-[#fff4de]/70 px-6 sm:px-8 py-6 shadow-inner">
                    <p className="font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-4 text-center">દર્શનાભિલાષી</p>
                    <p className="font-sans text-xs sm:text-sm leading-7 text-center">
                      અ.નિ જયંતિલાલ પટેલ
                      <br />
                      અ.નિ શાંતિલાલ પટેલ
                      <br />
                      શ્રી ભરતભાઈ પટેલ
                      <br />
                      શ્રી જીતેન્દ્રભાઈ પટેલ
                      <br />
                      શ્રી મયંકભાઈ પટેલ
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#e3c189] bg-[#fff4de]/70 px-6 sm:px-8 py-6 shadow-inner flex flex-col justify-center">
                    <p className="font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-4 text-center">સ્નેહાધીન</p>
                    <p className="font-sans text-xs sm:text-sm leading-7 text-center">
                      ગં.સ્વ જશોદબેન પટેલ
                      <br />
                      ગં.સ્વ લિલાબેન પટેલ
                      <br />
                      શ્રીમતી નીરુબેન પટેલ
                      <br />
                      શ્રીમતી સ્મિતાબેન પટેલ
                      <br />
                      શ્રીમતી સોનલબેન પટેલ
                    </p>
                  </div>
                </div>

                <div className="relative mx-auto mt-8 max-w-xl border-t border-dashed border-gold pt-6 sm:pt-8 text-center">
                  <div className="absolute -top-4 left-1/2 h-6 w-6 sm:h-8 sm:w-8 -translate-x-1/2 rotate-45 rounded-sm border border-gold bg-[#fff5db]" />
                  <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                    ટહુકો: ઘર અમારું મંદિર, સંસ્કાર અમારી શોભા, મૌન અમારી ભાષા, પ્રેમ અમારી પરિભાષા. શાનમાં કહીએ કે કાને... અમારી દીદી/માસીના લગ્નમાં જરૂર હાજર રહેજો.
                  </p>
                  <p className="font-sans text-xs sm:text-sm tracking-[0.24em] sm:tracking-[0.32em] uppercase">
                    વ્રજ · ક્રિશ · દીપ · શ્રીજા · પવિથ · હેત · દેવ્યાની · ધ્રુવી · નીલ · મૌર્ય · ખનીકા · રુદ્ર · હાર્દી
                  </p>
                </div>
              </div>

              {/* Functions & Ceremonies */}
              <div className="rounded-[36px] border border-[#d29f52]/70 bg-[#fff8ea]/95 px-6 py-10 sm:px-8 sm:py-12 shadow-[0_14px_40px_rgba(142,87,37,0.2)]">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 sm:mb-5 tracking-[0.22em] sm:tracking-[0.28em] uppercase">માગલિક પ્રસંગો</h2>
                <a
                  href="https://goo.gl/maps/sy4sbJGpHTQuZaRu5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mb-10 sm:mb-12 block w-fit rounded-full border border-gold px-6 sm:px-8 py-2.5 sm:py-3 text-center text-xs sm:text-sm uppercase tracking-[0.24em] sm:tracking-[0.3em] text-gold transition duration-300 hover:bg-gold hover:text-maroon"
                >
                  મુ. મઠ, તાલુકો. લુણાવાડા, જિલ્લો મહીસાગર
                </a>

                <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="relative overflow-hidden rounded-[28px] border-[4px] border-[#c07a4d] bg-gradient-to-b from-[#fff3dd] via-[#fce3bf] to-[#f6cea5] px-6 sm:px-8 md:px-10 py-10 sm:py-12 shadow-[0_18px_40px_rgba(142,87,37,0.18)]">
                    <div className="absolute inset-x-8 sm:inset-x-10 md:inset-x-12 top-0 h-1.5 sm:h-2 rounded-b-full bg-gradient-to-r from-transparent via-[#c07a4d]/60 to-transparent" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 border-b border-[#c07a4d]/40 pb-3 sm:pb-4 uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                      શુક્રવાર, 28-11-2025
                    </h3>
                    <div className="space-y-5 sm:space-y-6 font-sans text-xs sm:text-sm">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="max-w-[80%]">
                          <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">ગણેશ સ્થાપના</p>
                          <p className="text-gold mt-1 text-xs sm:text-sm">08:00 a.m.</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="max-w-[80%]">
                          <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">મંડપ મુહૂર્ત</p>
                          <p className="text-gold mt-1 text-xs sm:text-sm">10:00 a.m.</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="max-w-[80%]">
                          <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">ગ્રહ શાંતિ</p>
                          <p className="text-gold mt-1 text-xs sm:text-sm">01:00 p.m.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border-[4px] border-[#d2a55a] bg-gradient-to-b from-[#fff4d8] via-[#fce4b5] to-[#f3cb88] px-6 sm:px-8 md:px-10 py-10 sm:py-12 shadow-[0_18px_40px_rgba(154,102,43,0.18)]">
                    <div className="absolute inset-x-8 sm:inset-x-10 md:inset-x-12 top-0 h-1.5 sm:h-2 rounded-b-full bg-gradient-to-r from-transparent via-[#d2a55a]/60 to-transparent" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 border-b border-[#d2a55a]/40 pb-3 sm:pb-4 uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                      શનિવાર, 29-11-2025
                    </h3>
                    <div className="space-y-5 sm:space-y-6 font-sans text-xs sm:text-sm">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="max-w-[80%]">
                          <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">મામેરું</p>
                          <p className="text-gold mt-1 text-xs sm:text-sm">12:00 p.m.</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="max-w-[80%]">
                          <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">સ્વરુચિ ભોજન</p>
                          <p className="text-gold mt-1 text-xs sm:text-sm">11:30 a.m.</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="max-w-[80%]">
                          <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">રાસ-ગરબા</p>
                          <p className="text-gold mt-1 text-xs sm:text-sm">09:30 p.m.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border-[4px] border-[#c4933c] bg-gradient-to-b from-[#fff6dc] via-[#fbe6b8] to-[#f0c686] px-6 sm:px-8 md:px-10 py-10 sm:py-12 shadow-[0_18px_40px_rgba(154,102,43,0.18)]">
                    <div className="absolute inset-x-8 sm:inset-x-10 md:inset-x-12 top-0 h-1.5 sm:h-2 rounded-b-full bg-gradient-to-r from-transparent via-[#c4933c]/60 to-transparent" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 border-b border-[#c4933c]/40 pb-3 sm:pb-4 uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                    રવિવાર, 30-11-2025
                    </h3>
                    <div className="space-y-5 sm:space-y-6 font-sans text-xs sm:text-sm">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="max-w-[80%]">
                          <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">જાન આગમન</p>
                          <p className="text-gold mt-1 text-xs sm:text-sm">09:00 a.m.</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="max-w-[80%]">
                          <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">હસ્તમેળાપ</p>
                          <p className="text-gold mt-1 text-xs sm:text-sm">11:00 a.m.</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="max-w-[80%]">
                          <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">સ્વરુચિ ભોજન</p>
                          <p className="text-gold mt-1 text-xs sm:text-sm">11:00 a.m.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

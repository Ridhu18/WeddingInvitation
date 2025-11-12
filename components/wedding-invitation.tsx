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
      <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden px-4 py-12 md:py-16">
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
          <div className="relative rounded-[44px] md:rounded-[52px] bg-[#fffaf2] px-6 py-16 sm:px-8 sm:py-20 md:px-20 md:py-28 text-maroon shadow-[inset_0_0_25px_rgba(255,255,255,0.55)] md:shadow-[inset_0_0_30px_rgba(255,255,255,0.6)]">
            {/* Om Symbol and Blessings */}
            <div className="text-center mb-8 sm:mb-10 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-gold/70 to-gold/30 text-4xl sm:text-5xl text-maroon shadow-md">
                ॐ
              </div>
              <p className="mt-4 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.35em] text-maroon font-sans uppercase">
                Om Shri Ganeshay Namah
              </p>
            </div>

            {/* Shubh Vivah */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-maroon font-bold mb-8 sm:mb-10 text-center drop-shadow-lg tracking-wide">
              Shubh Vivah
            </h1>

            {/* Bride and Groom Names */}
            <div className="mb-10 sm:mb-12 text-center">
              <div className="inline-block px-6 sm:px-8 md:px-10 py-5 sm:py-6 border-y-2 border-gold">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Zeel</p>
                <p className="text-base sm:text-lg text-gold font-sans mb-3 sm:mb-4">&</p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">Komil</p>
              </div>
            </div>

            {/* Date */}
            <div className="mb-12 text-center">
              <p className="text-lg sm:text-xl font-sans tracking-wide">Sunday, November 30, 2025</p>
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

            <p className="text-center text-xs sm:text-sm text-maroon/80 font-sans tracking-[0.2em] uppercase">
              With blessings of Lord Ganesha
            </p>

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
                Get Location
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2">
            <div className="text-center text-gold text-xs sm:text-sm font-sans">
              <p className="animate-bounce tracking-[0.25em] sm:tracking-[0.3em] uppercase">Scroll to explore</p>
            </div>
          </div>
        </div>
      </div>

      {/* Invited By Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${backgroundPattern}")`,
            backgroundSize: "220px 220px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#fff3da]/80 to-transparent" />
        <div
          className="pointer-events-none absolute -top-24 -left-20 w-48 h-48 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`, transform: "scale(0.8)" }}
        />
        <div
          className="pointer-events-none absolute -top-24 -right-20 w-48 h-48 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`,
            transform: "scale(-0.8, 0.8)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-16 w-52 h-52 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`,
            transform: "scale(0.85, -0.85)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-16 w-52 h-52 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`,
            transform: "scale(-0.85, -0.85)",
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center rounded-[32px] sm:rounded-[40px] border-[5px] sm:border-[6px] border-[#d8aa66] bg-[#fff9ec]/90 px-6 py-12 sm:px-10 sm:py-16 shadow-[0_18px_45px_rgba(122,73,27,0.18)] md:shadow-[0_25px_60px_rgba(122,73,27,0.18)] backdrop-blur-sm">
          <div className="mx-auto mb-6 sm:mb-8 h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" />
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.28em] sm:tracking-[0.35em] uppercase text-maroon">
            Invited By
          </h2>
          <div className="mx-auto my-6 sm:my-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-[#d8aa66] bg-gradient-to-b from-[#fff4d7] to-[#f9d79a] shadow-inner" />
          <p className="text-base sm:text-lg mb-6 leading-relaxed font-sans">
            Mr. Pinkeshbhai Jayantilal Patel
            <br />
            Mrs. Kalpnaben Pinkeshbhai Patel
          </p>
          <p className="text-xs sm:text-sm font-sans leading-relaxed mb-6">
            At. Math, Taluka. Lunawada,
            <br />
            Dist. Mahisagar
          </p>
          <p className="text-xs sm:text-sm text-gold font-sans font-semibold">
            Ph no.:{" "}
            <a href="tel:+919106075993" className="underline-offset-4 hover:underline">
              9106075993
            </a>
            ,{" "}
            <a href="tel:+919825666564" className="underline-offset-4 hover:underline">
              9825666564
            </a>
          </p>
        </div>
      </section>

      {/* Blessings Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${backgroundPattern}")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fdf4dd]/80 via-transparent to-[#fde4c0]/70" />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-60 h-60 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`,
            transform: "scale(0.9)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`,
            transform: "scale(1, -1)",
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center rounded-[36px] sm:rounded-[48px] border-[5px] sm:border-[6px] border-[#d1a55c] bg-[#fff9ef]/95 px-6 py-14 sm:px-10 sm:py-20 shadow-[0_18px_45px_rgba(138,78,32,0.16)] md:shadow-[0_25px_60px_rgba(138,78,32,0.18)] backdrop-blur-sm">
          <div className="mx-auto mb-5 sm:mb-6 w-16 sm:w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" />
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.22em] sm:tracking-[0.3em] uppercase mb-8 sm:mb-10">
            Blessings From Afar
          </h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-sans">
            With immense joy and heartfelt blessings, Mr. Pinkeshbhai Patel and Mrs. Kalpnaben Patel invite you to the
            wedding celebration of their beloved daughter
          </p>
          <div className="relative inline-flex flex-col items-center gap-3 mb-10 sm:mb-12">
            <span className="text-3xl sm:text-4xl font-semibold tracking-wide">Zeel</span>
            <span className="text-xs sm:text-sm uppercase tracking-[0.45em] sm:tracking-[0.6em] text-gold">with</span>
            <span className="text-3xl sm:text-4xl font-semibold tracking-wide">Komil</span>
            <span className="mt-3 text-xs sm:text-sm font-sans text-maroon/80">
              son of Mr. Bipinchandra Patel and Mrs. Bhartiben Patel
            </span>
          </div>
          <div className="mx-auto mt-6 sm:mt-8 h-1 w-14 sm:w-16 rounded-full bg-gradient-to-r from-gold via-maroon to-gold opacity-80" />
        </div>
      </section>

      {/* Family Blessings Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${backgroundPattern}")`,
            backgroundSize: "210px 210px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fdebd1]/90 via-transparent to-[#f8d7a5]/80" />
        <div
          className="pointer-events-none absolute -top-16 left-12 w-40 h-40 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`, transform: "scale(0.7)" }}
        />
        <div
          className="pointer-events-none absolute -top-16 right-12 w-40 h-40 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`, transform: "scale(-0.7, 0.7)" }}
        />

        <div className="relative max-w-4xl mx-auto rounded-[36px] sm:rounded-[48px] border-[5px] sm:border-[6px] border-[#d3a964] bg-[#fff9ef]/95 px-6 py-14 sm:px-10 md:px-12 sm:py-20 shadow-[0_18px_45px_rgba(143,85,39,0.17)] md:shadow-[0_25px_60px_rgba(143,85,39,0.18)] backdrop-blur-sm">
          <div className="mx-auto mb-6 sm:mb-8 w-20 sm:w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" />
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-center mb-10 sm:mb-12">
            Family Blessings
          </h2>

          <div className="mb-12 sm:mb-16 text-center">
            <p className="text-xs sm:text-sm font-sans mb-6 sm:mb-8 leading-relaxed">
             
            </p>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 text-left md:grid-cols-2">
              <div className="rounded-3xl border border-[#e3c189] bg-[#fff4de]/70 px-6 sm:px-8 py-6 shadow-inner">
                <p className="font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-4 text-center">Grandparents</p>
                <p className="font-sans text-xs sm:text-sm leading-7 text-center">
                  Mr. Jayantilal Patel & Mrs. Jashodaben Patel
                  <br />
                  Mr. Shantilal Patel & Mrs. Lilabenn Patel
                  <br />
                  
                </p>
              </div>
              <div className="rounded-3xl border border-[#e3c189] bg-[#fff4de]/70 px-6 sm:px-8 py-6 shadow-inner flex flex-col justify-center">
                <p className="font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-4 text-center">Relatives</p>
              <p className="font-sans text-xs sm:text-sm leading-7 text-center">
                Mr. Bharatbhai Patel & Mrs. Niruben Patel
                <br />
                Mr. Jitendrabhai Patel & Mrs. Smitaben Patel
                <br />
                Mr. Mayankbhai Patel & Mrs. Sonalben Patel
              </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-xl border-t border-dashed border-gold pt-8 sm:pt-10 text-center">
            <div className="absolute -top-4 left-1/2 h-6 w-6 sm:h-8 sm:w-8 -translate-x-1/2 rotate-45 rounded-sm border border-gold bg-[#fff5db]" />
            <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
              With hearts pure as sunshine and laughter that fills the home,
              <br />
              our beloved little stars joyfully invite you to witness their sister and masi&apos;s wedding.
            </p>
            <p className="font-sans text-xs sm:text-sm tracking-[0.24em] sm:tracking-[0.32em] uppercase">
              Vraj · Krish · Deep · Shreeja · Pavith · Het · Devyani · Dhruvi · Neel · Maurya · Khanika · Rudra · Hardi 
            </p>
          </div>
        </div>
      </section>

      {/* Functions & Ceremonies */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${backgroundPattern}")`,
            backgroundSize: "240px 240px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fde9cc]/85 via-transparent to-[#f5cf95]/80" />
        <div
          className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-64 h-64 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`, transform: "scale(0.95)" }}
        />

        <div className="relative max-w-5xl mx-auto rounded-[36px] sm:rounded-[52px] border-[6px] sm:border-[7px] border-[#d29f52] bg-[#fff8ea]/95 px-6 py-14 sm:px-10 md:px-12 sm:py-20 shadow-[0_22px_55px_rgba(142,87,37,0.2)] md:shadow-[0_30px_70px_rgba(142,87,37,0.2)] backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-5 sm:mb-6 tracking-[0.22em] sm:tracking-[0.28em] uppercase">
            Functions & Ceremonies
          </h2>
          <div className="mx-auto mb-10 sm:mb-12 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gold">
            <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            Divine Celebrations
            <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <a
            href="https://goo.gl/maps/sy4sbJGpHTQuZaRu5"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mb-12 sm:mb-14 block w-fit rounded-full border border-gold px-6 sm:px-8 py-3 text-center text-xs sm:text-sm uppercase tracking-[0.24em] sm:tracking-[0.3em] text-gold transition duration-300 hover:bg-gold hover:text-maroon"
          >
            At. Math, Taluka. Lunawada, Dist. Mahisagar
          </a>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Monday Events */}
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border-[4px] sm:border-[5px] border-[#c07a4d] bg-gradient-to-b from-[#fff3dd] via-[#fce3bf] to-[#f6cea5] px-6 sm:px-8 md:px-10 py-10 sm:py-12 shadow-[0_18px_40px_rgba(142,87,37,0.18)]">
              <div className="absolute inset-x-8 sm:inset-x-10 md:inset-x-12 top-0 h-1.5 sm:h-2 rounded-b-full bg-gradient-to-r from-transparent via-[#c07a4d]/60 to-transparent" />
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 border-b border-[#c07a4d]/40 pb-3 sm:pb-4 uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                Friday, 28-11-2025
              </h3>
              <div className="space-y-5 sm:space-y-6 font-sans text-xs sm:text-sm">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="max-w-[80%]">
                    <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Ganesh Sthapana</p>
                    <p className="text-gold mt-1 text-xs sm:text-sm">08:00 a.m.</p>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="max-w-[80%]">
                    <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Mandap Muhurat</p>
                    <p className="text-gold mt-1 text-xs sm:text-sm">10:00 a.m.</p>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="max-w-[80%]">
                    <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Grah Shanti</p>
                    <p className="text-gold mt-1 text-xs sm:text-sm">01:00 p.m.</p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Tuesday Events */}
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border-[4px] sm:border-[5px] border-[#d2a55a] bg-gradient-to-b from-[#fff4d8] via-[#fce4b5] to-[#f3cb88] px-6 sm:px-8 md:px-10 py-10 sm:py-12 shadow-[0_18px_40px_rgba(154,102,43,0.18)]">
              <div className="absolute inset-x-8 sm:inset-x-10 md:inset-x-12 top-0 h-1.5 sm:h-2 rounded-b-full bg-gradient-to-r from-transparent via-[#d2a55a]/60 to-transparent" />
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 border-b border-[#d2a55a]/40 pb-3 sm:pb-4 uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                Saturday, 29-11-2025
              </h3>
              <div className="space-y-5 sm:space-y-6 font-sans text-xs sm:text-sm">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="max-w-[80%]">
                    <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Mameru</p>
                    <p className="text-gold mt-1 text-xs sm:text-sm">12:00 p.m.</p>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="max-w-[80%]">
                    <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Lunch</p>
                    <p className="text-gold mt-1 text-xs sm:text-sm">11:30 a.m.</p>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="max-w-[80%]">
                    <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Raas</p>
                    <p className="text-gold mt-1 text-xs sm:text-sm">09:30 p.m.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunday Events */}
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border-[4px] sm:border-[5px] border-[#c4933c] bg-gradient-to-b from-[#fff6dc] via-[#fbe6b8] to-[#f0c686] px-6 sm:px-8 md:px-10 py-10 sm:py-12 shadow-[0_18px_40px_rgba(154,102,43,0.18)]">
              <div className="absolute inset-x-8 sm:inset-x-10 md:inset-x-12 top-0 h-1.5 sm:h-2 rounded-b-full bg-gradient-to-r from-transparent via-[#c4933c]/60 to-transparent" />
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 border-b border-[#c4933c]/40 pb-3 sm:pb-4 uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                Sunday, 30-11-2025
              </h3>
              <div className="space-y-5 sm:space-y-6 font-sans text-xs sm:text-sm">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="max-w-[80%]">
                    <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Jaan Aagman</p>
                    <p className="text-gold mt-1 text-xs sm:text-sm">09:00 a.m.</p>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="max-w-[80%]">
                    <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Hastmelap</p>
                    <p className="text-gold mt-1 text-xs sm:text-sm">11:00 a.m.</p>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="max-w-[80%]">
                    <p className="font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Lunch</p>
                    <p className="text-gold mt-1 text-xs sm:text-sm">11:00 a.m.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Closing Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#6d1f29] via-[#4e1018] to-[#2f070b] py-16 md:py-24 px-4 text-center text-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${backgroundPattern}")`,
            backgroundSize: "160px 160px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#a04532_0%,transparent_55%)]" />
        <div
          className="pointer-events-none absolute -top-24 sm:-top-28 left-1/2 h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 -translate-x-1/2 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,${lotusIllustration}")`,
            transform: "scale(1.1)",
            opacity: 0.35,
          }}
        />

        <div className="relative mx-auto max-w-3xl rounded-[36px] sm:rounded-[48px] border-[5px] sm:border-[6px] border-[#e9c27b]/80 bg-gradient-to-b from-[#7b1f23f2] via-[#67161df2] to-[#4a0c16f2] px-6 py-12 sm:px-10 md:px-12 sm:py-16 shadow-[0_25px_60px_rgba(0,0,0,0.45)] md:shadow-[0_35px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <p className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 tracking-wide">
            Excited to join you in celebrating this special occasion!
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#f4d990] mb-10 sm:mb-12 uppercase tracking-[0.28em] sm:tracking-[0.35em]">
            Your presence is our blessing
          </p>

          <a
            href="https://goo.gl/maps/sy4sbJGpHTQuZaRu5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full border border-[#f1c879] bg-gradient-to-r from-[#f7d9a0] via-[#f4c374] to-[#e8a84d] px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] sm:tracking-[0.3em] text-maroon transition duration-300 hover:shadow-[0_10px_26px_rgba(232,168,77,0.4)]"
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
            Get Location
          </a>

          <div className="mt-10 sm:mt-12 rounded-[24px] border border-[#f1c879]/50 bg-[#7b1f23]/40 px-6 py-6 text-left text-sm sm:text-base font-sans leading-relaxed">
            <p className="text-[#f4d990] uppercase tracking-[0.28em] text-center mb-4">About Us</p>
            <p className="text-cream/90 text-center">
              For invitation updates or design inquiries, reach us at{" "}
              <a
                href="mailto:buildsite.tech@gmail.com"
                className="text-gold underline-offset-4 hover:underline"
              >
                buildsite.tech@gmail.com
              </a>
              {""}  or
              <br />
              Call{" "}
              <a
                href="tel:+918780326820"
                className="text-gold font-semibold underline-offset-4 hover:underline"
              >
                +91 8780326820
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}

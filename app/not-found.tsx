import Link from "next/link";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] px-6 py-20 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/[0.08] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <section className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <Link
          href="/"
          aria-label="بازگشت به صفحه اصلی"
          className="mb-12 flex items-center gap-2 text-sm font-bold tracking-tight text-white/70 transition-colors hover:text-white"
        >
          <span className="text-xl">
            HP<span className="text-rose-500">.</span>
          </span>
          <span className="text-white/20">/</span>
          <span>Hami Parsa</span>
        </Link>

        <div className="relative select-none">
          <div className="absolute inset-0 flex items-center justify-center text-[clamp(9rem,32vw,20rem)] font-black leading-none text-rose-500/20 blur-3xl">
            404
          </div>

          <h1
            dir="ltr"
            className="relative text-[clamp(9rem,32vw,20rem)] font-black leading-[0.8] tracking-[-0.09em] text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(244,63,94,0.7)",
            }}
          >
            404
          </h1>

          <span className="absolute -right-3 top-0 h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_24px_#f43f5e]" />
        </div>

        <div className="mt-12">
          <p className="mb-4 text-[10px] font-bold tracking-[0.4em] text-rose-400">
            LOST IN THE VOID
          </p>

          <h2 className="text-2xl font-black sm:text-4xl">
            اینجا چیزی برای دیدن نیست!
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-8 text-white/45 sm:text-base">
            صفحه‌ای که دنبالش می‌گردی پیدا نشد؛ شاید آدرس اشتباهه یا صفحه دیگه
            وجود نداره.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-rose-600 px-6 text-sm font-bold text-white shadow-[0_0_35px_rgba(225,29,72,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:shadow-[0_0_45px_rgba(225,29,72,0.3)]"
          >
            <span>برگشت به صفحه اصلی</span>

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M19 12H5m7-7-7 7 7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-bold text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            بازگشت به خانه
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-white/25">
          <span className="h-px w-8 bg-white/10" />
          <span>HAMI PARSA</span>
          <span className="text-rose-500">©</span>
          <span className="h-px w-8 bg-white/10" />
        </div>
      </section>
    </main>
  );
}

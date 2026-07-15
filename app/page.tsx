const features = [
  {
    title: "פותחת פרויקטים מקומיים",
    text: "בחרו תיקייה, והמערכת מזהה אם זה Next.js, Vite, React, HTML סטטי ועוד.",
  },
  {
    title: "מריצה את השרת הנכון",
    text: "האפליקציה מזהה סקריפטים כמו dev, start, serve ו-preview ומציגה את האתר מיד.",
  },
  {
    title: "עוזרת עם תלויות ו-DB",
    text: "בודקת התקנות חסרות, Prisma ו-PostgreSQL מקומי, ומציגה לוגים ברורים במקום מסך תקלה.",
  },
]

const steps = [
  "הורידו את קובץ ההתקנה שמתאים למק שלכם.",
  "פתחו את קובץ ה-PKG ועברו את ההתקנה.",
  "פתחו את LiveFolder Preview מתוך תיקיית Applications.",
  "בחרו תיקיית פרויקט ותראו Preview חי במחשב, אייפון, אנדרואיד או אייפד.",
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070a0f] text-white" dir="rtl">
      <section className="relative isolate min-h-screen px-5 py-8 sm:px-8 lg:px-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(72,198,239,0.18),transparent_34%),radial-gradient(circle_at_82%_4%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,#0b1118_0%,#070a0f_52%,#05070a_100%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/brand/app-icon.png"
                alt=""
                className="h-12 w-12 rounded-[14px] shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
              />
              <div>
                <p className="text-sm font-semibold text-cyan-200">LiveFolder Preview</p>
                <p className="text-xs text-slate-400">תצוגה חיה לפרויקטים מקומיים</p>
              </div>
            </div>
            <a
              href="#download"
              className="rounded-lg border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/12"
            >
              הורדה
            </a>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-100">
                אפליקציית Mac למפתחים, בוני אתרים ויוצרי פרויקטים
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
                פותחים תיקייה ורואים את הפרויקט עובד.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                LiveFolder Preview מזהה פרויקטים מקומיים, מפעילה את השרת המתאים,
                ומציגה Preview חי בגדלי Desktop, iPhone, Android ו-iPad.
              </p>

              <div id="download" className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#download-note"
                  className="rounded-xl bg-cyan-300 px-6 py-4 text-center text-base font-extrabold text-slate-950 shadow-[0_16px_44px_rgba(34,211,238,0.22)] transition hover:bg-cyan-200"
                >
                  התקנה למק חדש M1/M2/M3/M4
                </a>
                <a
                  href="#download-note"
                  className="rounded-xl border border-white/12 bg-white/8 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-white/12"
                >
                  התקנה למק Intel
                </a>
              </div>

              <p id="download-note" className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
                קובצי ההתקנה מוכנים. כדי שהכפתורים יורידו אותם ישירות מהאתר,
                צריך לארח את קבצי ה-PKG הגדולים ב-Google Drive או אחסון קבצים
                ציבורי אחר. אם macOS מציג אזהרת אבטחה, פתחו דרך קליק ימני ואז Open.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-[44px] bg-cyan-300/8 blur-3xl" />
              <div className="rounded-[30px] border border-white/10 bg-[#0d141c]/88 p-5 shadow-[0_32px_120px_rgba(0,0,0,0.52)] backdrop-blur">
                <div className="mb-4 flex items-center gap-2 border-b border-white/8 pb-4">
                  <span className="h-3 w-3 rounded-full bg-[#f97066]" />
                  <span className="h-3 w-3 rounded-full bg-[#f7b955]" />
                  <span className="h-3 w-3 rounded-full bg-[#35d399]" />
                  <span className="mr-3 rounded-md bg-black/30 px-3 py-1 text-xs text-slate-400">
                    localhost:3000
                  </span>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-cyan-300/18 bg-cyan-300/8 p-5">
                    <p className="text-sm font-semibold text-cyan-100">Project detected</p>
                    <p className="mt-2 text-2xl font-black text-white">Next.js + Prisma</p>
                    <p className="mt-2 text-sm text-slate-300">PostgreSQL checked · server running</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center text-sm font-semibold">
                    <div className="rounded-xl bg-white/7 px-3 py-5">Desktop</div>
                    <div className="rounded-xl bg-white/7 px-3 py-5">iPhone</div>
                    <div className="rounded-xl bg-white/7 px-3 py-5">iPad</div>
                  </div>
                  <div className="rounded-2xl bg-black/24 p-4 font-mono text-xs leading-6 text-slate-300">
                    <p className="text-cyan-200">✓ Starting dev server</p>
                    <p>✓ Local PostgreSQL reachable</p>
                    <p>✓ Preview ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
                <h2 className="text-lg font-extrabold text-white">{feature.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{feature.text}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.045] p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
            <div>
              <p className="text-sm font-bold text-cyan-200">איך מתקינים?</p>
              <h2 className="mt-2 text-3xl font-black">ארבעה צעדים קצרים</h2>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => (
                <li key={step} className="rounded-2xl bg-black/20 p-4 text-slate-200">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </section>
    </main>
  )
}

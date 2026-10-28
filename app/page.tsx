"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import emailjs from "@emailjs/browser";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiHtml5,
} from "react-icons/si";
import Image from "next/image";

const EMAILJS_SERVICE_ID = "service_np5zft2";
const EMAILJS_TEMPLATE_ID = "template_m9immuc";
const EMAILJS_PUBLIC_KEY = "q1s3x3DSUxpAVErUh";

const navItems = [
  { href: "#home", label: "خانه" },
  { href: "#about", label: "درباره من" },
  { href: "#expertise", label: "تخصص‌ها" },
  { href: "#technologies", label: "تکنولوژی‌ها" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#journey", label: "مسیر من" },
  { href: "#contact", label: "ارتباط" },
];

const technologies = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
  { name: "Django", Icon: SiDjango },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Vercel", Icon: SiVercel },
  { name: "Figma", Icon: SiFigma },
  { name: "HTML5", Icon: SiHtml5 },
];

const expertise = [
  {
    id: "01",
    eyebrow: "INTERFACE ENGINEERING",
    title: "فرانت‌اند",
    description:
      "تجربه‌هایی سریع، واکنش‌گرا و دقیق؛ با توجه به جزئیات بصری، دسترس‌پذیری و تجربه‌ی کاربر.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "02",
    eyebrow: "APPLICATION LOGIC",
    title: "بک‌اند",
    description:
      "ساخت منطق برنامه، ارتباط با APIها و پیاده‌سازی ساختارهایی که قابل فهم و توسعه باشند.",
    tags: ["Node.js", "Python", "Django", "REST API"],
  },
  {
    id: "03",
    eyebrow: "DATA & DEPLOYMENT",
    title: "داده و استقرار",
    description:
      "مدیریت داده، کنترل نسخه و آماده‌سازی پروژه برای انتشار و استفاده‌ی واقعی.",
    tags: ["PostgreSQL", "MongoDB", "Supabase", "Git"],
  },
];

const principles = [
  {
    id: "A",
    title: "درک مسئله",
    description:
      "قبل از انتخاب ابزار، مسئله را می‌فهمم و نیاز واقعی را مشخص می‌کنم.",
  },
  {
    id: "B",
    title: "سادگی هوشمندانه",
    description:
      "راه‌حل خوب باید قابل فهم، قابل نگهداری و متناسب با نیاز پروژه باشد.",
  },
  {
    id: "C",
    title: "رشد مداوم",
    description:
      "هر پروژه فرصتی برای یادگیری، بازبینی تصمیم‌ها و بهتر شدن است.",
  },
];

const milestones = [
  {
    id: "01",
    label: "اکنون",
    title: "عمیق‌تر یاد گرفتن",
    description: "تقویت مبانی مهندسی نرم‌افزار و بهتر کردن مهارت‌های فول‌استک.",
  },
  {
    id: "02",
    label: "قدم بعدی",
    title: "ساختن محصولات واقعی",
    description: "تبدیل دانش به پروژه‌های کاربردی با تصمیم‌های فنی قابل توضیح.",
  },
  {
    id: "03",
    label: "چشم‌انداز",
    title: "رشد حرفه‌ای",
    description:
      "تجربه‌ی کار تیمی، مشارکت در محصولات جدی و گسترش مسیر حرفه‌ای.",
  },
];

type IconProps = {
  size?: number;
  className?: string;
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type FormData = {
  name: string;
  number: string;
  message: string;
};

function ArrowIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SendIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        d="m22 2-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M22 2 11 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        d="m5 12 4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="section-heading">
      <div className="section-index">
        <span>{index}</span>
        <span className="section-index-line" />
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading-bottom">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </Reveal>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({
    x: 0,
    y: 0,
    active: false,
  });
  const [form, setForm] = useState<FormData>({
    name: "",
    number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalStatus, setModalStatus] = useState<"success" | "error" | null>(
    null,
  );

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
      setProgress(100);
      return;
    }

    let current = 0;
    const interval = window.setInterval(() => {
      current = Math.min(current + Math.random() * 18 + 6, 100);
      setProgress(Math.round(current));

      if (current >= 100) {
        window.clearInterval(interval);
        window.setTimeout(() => setLoading(false), 400);
      }
    }, 120);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setScrolled(window.scrollY > 28);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!modalStatus) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalStatus(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalStatus]);

  const updateField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),
          number: form.number.trim(),
          message: form.message.trim(),
        },
        EMAILJS_PUBLIC_KEY,
      );

      setForm({ name: "", number: "", message: "" });
      setModalStatus("success");
    } catch (error) {
      console.error("EmailJS error:", error);
      setModalStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main dir="rtl" className="portfolio-shell">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap");

        :root {
          color-scheme: dark;
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #07080a;
          font-family: "Vazirmatn", Tahoma, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        button,
        input,
        textarea {
          font: inherit;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ::selection {
          color: #fff;
          background: rgba(220, 20, 60, 0.45);
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #07080a;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 20px;
          background: linear-gradient(180deg, #dc143c, #8a0f26 50%, #4a0612);
          border: 1px solid #07080a;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #dc143c;
        }

        .portfolio-shell {
          --accent: #dc143c;
          --accent-bright: #f43f5e;
          --accent-deep: #4a0612;
          --silver: #9ca3af;
          --silver-bright: #d1d5db;
          --surface-1: #0f1115;
          --surface-2: #171a20;
          --surface-3: #0b0d10;
          --muted: rgba(238, 240, 243, 0.6);
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          overflow: clip;
          color: #eef0f3;
          background:
            radial-gradient(
              ellipse 70% 45% at 50% -15%,
              rgba(220, 20, 60, 0.12),
              transparent 60%
            ),
            radial-gradient(
              ellipse 55% 35% at 88% 12%,
              rgba(220, 20, 60, 0.08),
              transparent 55%
            ),
            radial-gradient(
              ellipse 60% 40% at 5% 85%,
              rgba(74, 6, 18, 0.14),
              transparent 60%
            ),
            #07080a;
        }

        .ambient-grid {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: 0.35;
          background-image:
            linear-gradient(rgba(238, 240, 243, 0.02) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(238, 240, 243, 0.02) 1px,
              transparent 1px
            );
          background-size: 64px 64px;
          mask-image: radial-gradient(
            ellipse 80% 70% at 50% 30%,
            #000 40%,
            transparent 85%
          );
        }

        .grain {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          opacity: 0.022;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
        }

        .page-progress {
          position: fixed;
          inset: 0 0 auto;
          z-index: 120;
          height: 2px;
          background: rgba(238, 240, 243, 0.04);
        }

        .page-progress > span {
          display: block;
          height: 100%;
          background: linear-gradient(
            90deg,
            #4a0612,
            #8a0f26 35%,
            #dc143c 70%,
            #f43f5e
          );
          box-shadow:
            0 0 16px rgba(220, 20, 60, 0.7),
            0 0 32px rgba(220, 20, 60, 0.35);
          transition: width 80ms linear;
        }

        .site-header {
          position: fixed;
          inset: 0 0 auto;
          z-index: 100;
          border-bottom: 1px solid rgba(238, 240, 243, 0.06);
          background: rgba(7, 8, 10, 0.65);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          transition:
            background 250ms ease,
            box-shadow 250ms ease,
            border-color 250ms ease;
        }

        .site-header.is-scrolled {
          background: rgba(7, 8, 10, 0.92);
          border-bottom-color: rgba(220, 20, 60, 0.12);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.5),
            0 1px 0 rgba(220, 20, 60, 0.08) inset;
        }

        .header-inner {
          display: flex;
          width: min(100% - 40px, 1280px);
          min-height: 82px;
          margin-inline: auto;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          transition: min-height 250ms ease;
        }

        .is-scrolled .header-inner {
          min-height: 68px;
        }

        .brand-mark {
          position: relative;
          display: grid;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          place-items: center;
          overflow: hidden;
          border: 1px solid rgba(220, 20, 60, 0.32);
          border-radius: 10px;
          background: linear-gradient(
            145deg,
            rgba(220, 20, 60, 0.15),
            rgba(74, 6, 18, 0.08)
          );
          font-size: 12px;
          font-weight: 900;
          color: #fff;
          box-shadow:
            0 0 20px rgba(220, 20, 60, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .brand-mark::after {
          position: absolute;
          inset: 0;
          content: "";
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.18),
            transparent 65%
          );
          transform: translateX(-120%);
          transition: transform 700ms ease;
        }

        .brand-link:hover .brand-mark::after {
          transform: translateX(120%);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.5vw, 23px);
        }

        .nav-link {
          position: relative;
          padding-block: 10px;
          color: rgba(238, 240, 243, 0.55);
          font-size: 11px;
          white-space: nowrap;
          transition: color 200ms ease;
        }

        .nav-link::after {
          position: absolute;
          right: 0;
          bottom: 3px;
          width: 0;
          height: 1px;
          content: "";
          background: linear-gradient(90deg, transparent, #dc143c, #f43f5e);
          box-shadow: 0 0 10px rgba(220, 20, 60, 0.7);
          transition: width 250ms ease;
        }

        .nav-link:hover,
        .nav-link.is-active {
          color: #fff;
        }

        .nav-link.is-active::after,
        .nav-link:hover::after {
          width: 100%;
        }

        .header-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 16px;
          overflow: hidden;
          border: 1px solid rgba(220, 20, 60, 0.35);
          border-radius: 10px;
          background: linear-gradient(
            145deg,
            rgba(220, 20, 60, 0.16),
            rgba(74, 6, 18, 0.08)
          );
          color: rgba(238, 240, 243, 0.95);
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition: 250ms ease;
        }

        .header-cta::before {
          position: absolute;
          inset: 0;
          content: "";
          background: linear-gradient(
            110deg,
            transparent 30%,
            rgba(255, 255, 255, 0.12),
            transparent 70%
          );
          transform: translateX(-120%);
          transition: transform 600ms ease;
        }

        .header-cta:hover {
          border-color: rgba(220, 20, 60, 0.65);
          box-shadow:
            0 0 25px rgba(220, 20, 60, 0.3),
            0 4px 15px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .header-cta:hover::before {
          transform: translateX(120%);
        }

        .mobile-toggle {
          display: none;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(238, 240, 243, 0.1);
          border-radius: 10px;
          background: rgba(238, 240, 243, 0.03);
          color: #eef0f3;
        }

        .mobile-menu {
          padding: 12px 20px 18px;
          border-top: 1px solid rgba(238, 240, 243, 0.06);
          background: rgba(7, 8, 10, 0.98);
          animation: menu-in 220ms ease both;
        }

        .mobile-menu-grid {
          display: grid;
          width: min(100%, 1280px);
          margin-inline: auto;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 7px;
        }

        .mobile-nav-link {
          padding: 13px 14px;
          border: 1px solid transparent;
          border-radius: 10px;
          color: rgba(238, 240, 243, 0.7);
          font-size: 13px;
          transition: 200ms ease;
        }

        .mobile-nav-link.is-active,
        .mobile-nav-link:hover {
          border-color: rgba(220, 20, 60, 0.25);
          background: rgba(220, 20, 60, 0.1);
          color: #fff;
        }

        .brand-text-desktop {
          display: block;
        }

        .hero-section {
          position: relative;
          display: flex;
          min-height: max(760px, 100svh);
          align-items: center;
          padding: 150px 20px 105px;
          scroll-margin-top: 100px;
        }

        .hero-section::before {
          position: absolute;
          top: 5%;
          left: 50%;
          width: min(95%, 1000px);
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(220, 20, 60, 0.1),
            rgba(220, 20, 60, 0.04) 35%,
            transparent 65%
          );
          content: "";
          pointer-events: none;
          transform: translateX(-50%);
          filter: blur(90px);
          animation: hero-aura 8s ease-in-out infinite;
        }

        @keyframes hero-aura {
          0%,
          100% {
            opacity: 0.7;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.05);
          }
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          width: min(100%, 1280px);
          margin-inline: auto;
          align-items: center;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(50px, 8vw, 120px);
        }

        .hero-copy {
          position: relative;
          z-index: 2;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          padding: 10px 14px;
          border: 1px solid rgba(238, 240, 243, 0.1);
          border-radius: 6px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.01)
          );
          color: rgba(238, 240, 243, 0.8);
          font-size: 11px;
          backdrop-filter: blur(12px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .status-dot {
          position: relative;
          width: 7px;
          height: 7px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #dc143c;
          box-shadow:
            0 0 12px rgba(220, 20, 60, 0.9),
            0 0 24px rgba(220, 20, 60, 0.45);
        }

        .status-dot::after {
          position: absolute;
          inset: -4px;
          border: 1px solid rgba(220, 20, 60, 0.5);
          border-radius: 50%;
          content: "";
          animation: dot-pulse 2.2s ease-out infinite;
        }

        .hero-overline {
          margin: 28px 0 12px;
          color: rgba(238, 240, 243, 0.45);
          font-size: 11px;
          letter-spacing: 0.2em;
        }

        .hero-title {
          margin: 0;
          font-size: clamp(64px, 8.4vw, 112px);
          font-weight: 900;
          line-height: 1.14;
          letter-spacing: -0.055em;
        }

        .hero-title-line {
          display: block;
        }

        .hero-title-accent {
          position: relative;
          display: inline-block;
          padding-bottom: 8px;
          background: linear-gradient(135deg, #fff 30%, #f43f5e 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-title-accent::after {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 58%;
          height: 3px;
          border-radius: 0;
          background: linear-gradient(90deg, transparent, #dc143c);
          box-shadow:
            0 0 18px rgba(220, 20, 60, 0.7),
            0 0 40px rgba(220, 20, 60, 0.3);
          content: "";
        }

        .hero-period {
          color: #dc143c;
          text-shadow:
            0 0 30px rgba(220, 20, 60, 0.7),
            0 0 60px rgba(220, 20, 60, 0.3);
        }

        .hero-role {
          margin-top: 30px;
          color: rgba(238, 240, 243, 0.9);
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 600;
        }

        .hero-description {
          max-width: 590px;
          margin-top: 18px;
          color: rgba(238, 240, 243, 0.6);
          font-size: 14px;
          line-height: 2.35;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .button-primary,
        .button-secondary {
          position: relative;
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 0 22px;
          overflow: hidden;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          transition:
            transform 250ms ease,
            border-color 250ms ease,
            background 250ms ease,
            box-shadow 250ms ease;
        }

        .button-primary {
          background: linear-gradient(145deg, #dc143c 0%, #a11238 55%, #4a0612 100%);
          color: #fff;
          box-shadow:
            0 0 28px rgba(220, 20, 60, 0.3),
            0 6px 18px rgba(0, 0, 0, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.22),
            inset 0 -1px 0 rgba(0, 0, 0, 0.25);
        }

        .button-primary::before {
          position: absolute;
          inset: 0;
          content: "";
          background: linear-gradient(
            110deg,
            transparent 30%,
            rgba(255, 255, 255, 0.28),
            transparent 70%
          );
          transform: translateX(-120%);
          transition: transform 600ms ease;
        }

        .button-primary:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 40px rgba(220, 20, 60, 0.55),
            0 10px 28px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(0, 0, 0, 0.25);
        }

        .button-primary:hover::before {
          transform: translateX(120%);
        }

        .button-secondary {
          border: 1px solid rgba(238, 240, 243, 0.14);
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.015)
          );
          color: rgba(238, 240, 243, 0.9);
          backdrop-filter: blur(12px);
          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .button-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(220, 20, 60, 0.5);
          background: linear-gradient(
            145deg,
            rgba(220, 20, 60, 0.14),
            rgba(74, 6, 18, 0.06)
          );
          box-shadow:
            0 0 22px rgba(220, 20, 60, 0.2),
            0 6px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .hero-meta {
          display: grid;
          max-width: 510px;
          margin-top: 48px;
          padding-top: 22px;
          border-top: 1px solid rgba(238, 240, 243, 0.1);
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .hero-meta-item strong {
          display: block;
          color: rgba(238, 240, 243, 0.95);
          font-size: 12px;
          letter-spacing: 0.14em;
        }

        .hero-meta-item span {
          display: block;
          margin-top: 8px;
          color: rgba(238, 240, 243, 0.42);
          font-size: 10px;
          line-height: 1.8;
        }

        .hero-visual {
          position: relative;
          width: min(100%, 420px);
          margin-inline: auto;
          aspect-ratio: 0.79;
          animation: portrait-float 7s ease-in-out infinite;
        }

        .portrait-aura {
          position: absolute;
          inset: -15%;
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(220, 20, 60, 0.32),
            rgba(220, 20, 60, 0.14) 40%,
            transparent 70%
          );
          filter: blur(70px);
          animation: aura-pulse 5s ease-in-out infinite;
        }

        @keyframes aura-pulse {
          0%,
          100% {
            opacity: 0.85;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.06);
          }
        }

        .portrait-orbit {
          position: absolute;
          inset: -5%;
          border: 1px solid rgba(238, 240, 243, 0.08);
          border-radius: 46% 54% 48% 52%;
          transform: rotate(-15deg);
        }

        .portrait-orbit::after {
          position: absolute;
          top: 16%;
          left: 12%;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #dc143c;
          box-shadow:
            0 0 18px rgba(220, 20, 60, 1),
            0 0 36px rgba(220, 20, 60, 0.6),
            0 0 54px rgba(220, 20, 60, 0.3);
          content: "";
        }

        .portrait-frame {
          position: absolute;
          inset: 5%;
          z-index: 1;
          overflow: hidden;
          border: 1px solid rgba(238, 240, 243, 0.1);
          border-radius: 20px;
          background: radial-gradient(
              ellipse at 50% 25%,
              rgba(220, 20, 60, 0.32),
              rgba(74, 6, 18, 0.18) 40%,
              transparent 60%
            ),
            #0f1115;
          box-shadow:
            0 25px 100px rgba(0, 0, 0, 0.7),
            0 0 60px rgba(220, 20, 60, 0.1),
            inset 0 0 40px rgba(255, 255, 255, 0.015);
        }

        .portrait-frame::before {
          position: absolute;
          z-index: 3;
          inset: -1px;
          border: 1px solid rgba(220, 20, 60, 0.42);
          border-radius: inherit;
          content: "";
          pointer-events: none;
          box-shadow:
            inset 0 0 24px rgba(220, 20, 60, 0.1),
            0 0 20px rgba(220, 20, 60, 0.22);
        }

        .portrait-frame::after {
          position: absolute;
          z-index: 2;
          inset: 0;
          background: linear-gradient(
            to top,
            #07080a 0%,
            rgba(7, 8, 10, 0.6) 25%,
            transparent 60%
          );
          content: "";
          pointer-events: none;
        }

        .portrait-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 800ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .hero-visual:hover .portrait-image {
          transform: scale(1.04);
        }

        .portrait-caption {
          position: absolute;
          z-index: 4;
          right: 24px;
          bottom: 23px;
          left: 24px;
        }

        .portrait-caption small {
          color: rgba(238, 240, 243, 0.5);
          font-size: 9px;
          letter-spacing: 0.2em;
        }

        .portrait-caption h2 {
          margin: 10px 0 4px;
          font-size: 26px;
          font-weight: 900;
          direction: ltr;
          text-align: right;
        }

        .portrait-caption p {
          margin: 0;
          color: rgba(238, 240, 243, 0.6);
          font-size: 11px;
          direction: ltr;
          text-align: right;
        }

        .floating-tech {
          position: absolute;
          z-index: 5;
          display: grid;
          width: 49px;
          height: 49px;
          place-items: center;
          border: 1px solid rgba(238, 240, 243, 0.12);
          border-radius: 12px;
          background: linear-gradient(
            145deg,
            rgba(16, 17, 21, 0.95),
            rgba(12, 13, 16, 0.9)
          );
          color: rgba(238, 240, 243, 0.9);
          box-shadow:
            0 15px 35px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px) saturate(180%);
          animation: tech-drift 5s ease-in-out infinite;
        }

        .floating-tech.tech-one {
          top: 14%;
          left: -3%;
        }

        .floating-tech.tech-two {
          top: 39%;
          right: -3%;
          animation-delay: -1.8s;
        }

        .floating-tech.tech-three {
          bottom: 23%;
          left: -5%;
          animation-delay: -3.2s;
        }

        .portrait-badge {
          position: absolute;
          z-index: 6;
          right: 14%;
          bottom: -1%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          border: 1px solid rgba(220, 20, 60, 0.22);
          border-radius: 10px;
          background: linear-gradient(
            145deg,
            rgba(16, 17, 21, 0.95),
            rgba(12, 13, 16, 0.9)
          );
          color: rgba(238, 240, 243, 0.85);
          font-size: 9px;
          letter-spacing: 0.14em;
          box-shadow:
            0 15px 35px rgba(0, 0, 0, 0.5),
            0 0 22px rgba(220, 20, 60, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px) saturate(180%);
        }

        .section {
          position: relative;
          padding: 115px 20px;
          scroll-margin-top: 90px;
        }

        .section-inner {
          width: min(100%, 1180px);
          margin-inline: auto;
        }

        .section-muted {
          border-block: 1px solid rgba(238, 240, 243, 0.06);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.018),
            rgba(255, 255, 255, 0.004)
          );
        }

        .section-index {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(238, 240, 243, 0.48);
          font-size: 10px;
          letter-spacing: 0.18em;
        }

        .section-index > span:first-child {
          color: rgba(238, 240, 243, 0.85);
          font-weight: 700;
        }

        .section-index-line {
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #dc143c);
          box-shadow: 0 0 10px rgba(220, 20, 60, 0.5);
        }

        .section-heading-bottom {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
          margin-top: 24px;
        }

        .section-heading h2 {
          max-width: 720px;
          margin: 0;
          font-size: clamp(30px, 4.5vw, 54px);
          font-weight: 900;
          line-height: 1.5;
          letter-spacing: -0.035em;
        }

        .section-heading-bottom > p {
          max-width: 440px;
          margin: 0 0 7px;
          color: rgba(238, 240, 243, 0.58);
          font-size: 13px;
          line-height: 2.2;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 90px;
        }

        .about-title {
          margin: 22px 0 0;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 900;
          line-height: 1.55;
        }

        .about-title span {
          color: rgba(238, 240, 243, 0.48);
        }

        .about-copy {
          color: rgba(238, 240, 243, 0.66);
          font-size: 14px;
          line-height: 2.5;
        }

        .about-copy p {
          margin: 0 0 17px;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 25px;
        }

        .soft-tag {
          padding: 8px 13px;
          border: 1px solid rgba(238, 240, 243, 0.1);
          border-radius: 6px;
          background: rgba(238, 240, 243, 0.03);
          color: rgba(238, 240, 243, 0.72);
          font-size: 10px;
          transition: 200ms ease;
        }

        .soft-tag:hover {
          border-color: rgba(220, 20, 60, 0.35);
          background: rgba(220, 20, 60, 0.08);
          color: #fff;
          box-shadow: 0 0 20px rgba(220, 20, 60, 0.12);
        }

        .expertise-grid {
          display: grid;
          margin-top: 48px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
        }

        .expertise-card {
          position: relative;
          min-height: 340px;
          padding: 28px;
          overflow: hidden;
          border: 1px solid rgba(238, 240, 243, 0.08);
          border-radius: 14px;
          background: linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.035),
              rgba(255, 255, 255, 0.008)
            ),
            #0f1115;
          transition:
            transform 350ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }

        .expertise-card::before {
          position: absolute;
          top: -70px;
          left: -70px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(220, 20, 60, 0.13),
            transparent 65%
          );
          filter: blur(50px);
          content: "";
          transition: background 350ms ease;
          z-index: 0;
        }

        .expertise-card::after {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            250px circle at var(--spotlight-x) var(--spotlight-y),
            rgba(220, 20, 60, 0.18),
            transparent 60%
          );
          opacity: var(--spotlight-opacity);
          transition: opacity 200ms ease;
          pointer-events: none;
          z-index: 1;
          content: "";
        }

        .expertise-card > * {
          position: relative;
          z-index: 2;
        }

        .expertise-card:hover {
          transform: translateY(-5px);
          border-color: rgba(220, 20, 60, 0.3);
          box-shadow:
            0 30px 60px rgba(0, 0, 0, 0.55),
            0 0 50px rgba(220, 20, 60, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .expertise-card:hover::before {
          background: radial-gradient(
            ellipse,
            rgba(220, 20, 60, 0.25),
            transparent 65%
          );
        }

        .expertise-card-top {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .expertise-number {
          color: rgba(238, 240, 243, 0.42);
          font-size: 11px;
          letter-spacing: 0.22em;
        }

        .expertise-symbol {
          display: grid;
          width: 40px;
          height: 40px;
          place-items: center;
          border: 1px solid rgba(238, 240, 243, 0.1);
          border-radius: 10px;
          background: rgba(238, 240, 243, 0.03);
          color: rgba(238, 240, 243, 0.9);
        }

        .expertise-eyebrow {
          position: relative;
          margin-top: 35px;
          color: rgba(238, 240, 243, 0.42);
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        .expertise-card h3 {
          position: relative;
          margin: 12px 0 0;
          font-size: 23px;
          font-weight: 800;
        }

        .expertise-card > p {
          position: relative;
          min-height: 94px;
          margin: 14px 0 0;
          color: rgba(238, 240, 243, 0.58);
          font-size: 12px;
          line-height: 2.2;
        }

        .expertise-tags {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 22px;
        }

        .expertise-tags span {
          padding: 7px 9px;
          border: 1px solid rgba(238, 240, 243, 0.08);
          border-radius: 5px;
          color: rgba(238, 240, 243, 0.68);
          font-size: 9px;
        }

        .tech-marquee {
          position: relative;
          overflow: hidden;
          padding: 26px 0;
          border-block: 1px solid rgba(238, 240, 243, 0.07);
          background: rgba(238, 240, 243, 0.014);
        }

        .tech-marquee::before,
        .tech-marquee::after {
          position: absolute;
          inset-block: 0;
          z-index: 2;
          width: clamp(35px, 8vw, 120px);
          content: "";
          pointer-events: none;
        }

        .tech-marquee::before {
          right: 0;
          background: linear-gradient(to left, #07080a, transparent);
        }

        .tech-marquee::after {
          left: 0;
          background: linear-gradient(to right, #07080a, transparent);
        }

        .marquee-label {
          margin-bottom: 21px;
          color: rgba(238, 240, 243, 0.38);
          font-size: 9px;
          letter-spacing: 0.34em;
          text-align: center;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-move 40s linear infinite;
        }

        .tech-marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-group {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: 42px;
          padding-left: 42px;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(238, 240, 243, 0.58);
          font-size: 11px;
          white-space: nowrap;
          transition: color 200ms ease;
        }

        .marquee-item:hover {
          color: #fff;
        }

        .marquee-item svg {
          width: 19px;
          height: 19px;
          transition: transform 200ms ease;
        }

        .marquee-item:hover svg {
          transform: scale(1.12);
        }

        .tool-groups {
          display: grid;
          margin-top: 48px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .tool-group {
          padding: 27px;
          border: 1px solid rgba(238, 240, 243, 0.08);
          border-radius: 14px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.025),
            rgba(255, 255, 255, 0.006)
          );
          transition:
            border-color 250ms ease,
            box-shadow 250ms ease;
        }

        .tool-group:hover {
          border-color: rgba(220, 20, 60, 0.28);
          box-shadow: 0 0 40px rgba(220, 20, 60, 0.08);
        }

        .tool-group-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .tool-group-header h3 {
          margin: 0;
          font-size: 17px;
          font-weight: 800;
          direction: ltr;
          text-align: right;
        }

        .tool-group-header span {
          color: rgba(238, 240, 243, 0.42);
          font-size: 10px;
        }

        .tool-group > p {
          margin: 9px 0 0;
          color: rgba(238, 240, 243, 0.52);
          font-size: 11px;
        }

        .tool-items {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 24px;
        }

        .tool-chip {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 12px;
          border: 1px solid rgba(238, 240, 243, 0.08);
          border-radius: 8px;
          background: #0b0d10;
          color: rgba(238, 240, 243, 0.78);
          font-size: 10px;
          transition:
            border-color 200ms ease,
            background 200ms ease,
            box-shadow 200ms ease;
        }

        .tool-chip:hover {
          border-color: rgba(220, 20, 60, 0.4);
          background: rgba(220, 20, 60, 0.08);
          box-shadow: 0 0 20px rgba(220, 20, 60, 0.15);
        }

        .tool-chip svg {
          width: 16px;
          height: 16px;
          color: rgba(238, 240, 243, 0.9);
        }

        .project-feature {
          position: relative;
          margin-top: 45px;
          padding: clamp(26px, 5vw, 65px);
          overflow: hidden;
          border: 1px solid rgba(238, 240, 243, 0.1);
          border-radius: 20px;
          background: radial-gradient(
              ellipse at 15% 10%,
              rgba(220, 20, 60, 0.22),
              transparent 45%
            ),
            radial-gradient(
              ellipse at 90% 90%,
              rgba(74, 6, 18, 0.22),
              transparent 50%
            ),
            #0b0d10;
          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.6),
            0 0 70px rgba(220, 20, 60, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .project-feature::after {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(220, 20, 60, 0.7),
            transparent
          );
          content: "";
          box-shadow: 0 0 20px rgba(220, 20, 60, 0.5);
        }

        .project-grid {
          position: relative;
          display: grid;
          align-items: center;
          grid-template-columns: 1fr 0.75fr;
          gap: 40px;
        }

        .project-label {
          color: rgba(238, 240, 243, 0.42);
          font-size: 9px;
          letter-spacing: 0.25em;
        }

        .project-feature h3 {
          margin: 23px 0 0;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 900;
          line-height: 1.65;
        }

        .project-feature h3 span {
          color: rgba(238, 240, 243, 0.5);
        }

        .project-feature p {
          max-width: 520px;
          margin: 16px 0 0;
          color: rgba(238, 240, 243, 0.58);
          font-size: 13px;
          line-height: 2.3;
        }

        .project-visual {
          position: relative;
          display: grid;
          width: min(100%, 310px);
          margin-inline: auto;
          aspect-ratio: 1;
          place-items: center;
        }

        .project-ring {
          position: absolute;
          inset: 5%;
          border: 1px solid rgba(238, 240, 243, 0.08);
          border-radius: 50%;
        }

        .project-ring:nth-child(2) {
          inset: 17%;
          border-style: dashed;
          border-color: rgba(220, 20, 60, 0.3);
          animation: slow-spin 28s linear infinite;
        }

        .project-ring:nth-child(3) {
          inset: 30%;
          border-color: rgba(238, 240, 243, 0.08);
        }

        .project-monogram {
          position: relative;
          display: grid;
          width: 95px;
          height: 95px;
          place-items: center;
          border: 1px solid rgba(220, 20, 60, 0.5);
          border-radius: 18px;
          background: linear-gradient(
              145deg,
              rgba(220, 20, 60, 0.22),
              rgba(74, 6, 18, 0.2)
            ),
            #0f1115;
          font-size: 27px;
          font-weight: 900;
          color: #fff;
          box-shadow:
            0 0 55px rgba(220, 20, 60, 0.3),
            0 8px 25px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
        }

        .project-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 25px;
          padding: 9px 12px;
          border: 1px solid rgba(220, 20, 60, 0.3);
          border-radius: 6px;
          background: rgba(220, 20, 60, 0.1);
          color: rgba(238, 240, 243, 0.82);
          font-size: 10px;
        }

        .project-status span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #dc143c;
          box-shadow:
            0 0 10px rgba(220, 20, 60, 0.9),
            0 0 20px rgba(220, 20, 60, 0.5);
        }

        .principles-grid {
          display: grid;
          margin-top: 48px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
        }

        .principle-card {
          padding: 12px 28px 12px 20px;
        }

        .principle-card + .principle-card {
          border-right: 1px solid rgba(238, 240, 243, 0.08);
        }

        .principle-id {
          color: rgba(238, 240, 243, 0.36);
          font-size: 11px;
          letter-spacing: 0.22em;
        }

        .principle-card h3 {
          margin: 25px 0 0;
          font-size: 19px;
          font-weight: 800;
        }

        .principle-card p {
          max-width: 300px;
          margin: 12px 0 0;
          color: rgba(238, 240, 243, 0.58);
          font-size: 12px;
          line-height: 2.25;
        }

        .journey-grid {
          display: grid;
          margin-top: 45px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .journey-card {
          position: relative;
          min-height: 225px;
          padding: 25px;
          overflow: hidden;
          border: 1px solid rgba(238, 240, 243, 0.08);
          border-radius: 14px;
          background: linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.025),
              rgba(255, 255, 255, 0.006)
            ),
            #0b0d10;
          transition:
            border-color 250ms ease,
            transform 250ms ease,
            box-shadow 250ms ease;
        }

        .journey-card:hover {
          transform: translateY(-3px);
          border-color: rgba(220, 20, 60, 0.35);
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(220, 20, 60, 0.1);
        }

        .journey-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .journey-card-number {
          color: rgba(238, 240, 243, 0.2);
          font-size: 31px;
          font-weight: 900;
        }

        .journey-card-label {
          padding: 6px 10px;
          border: 1px solid rgba(238, 240, 243, 0.1);
          border-radius: 6px;
          color: rgba(238, 240, 243, 0.58);
          font-size: 9px;
        }

        .journey-card h3 {
          margin: 22px 0 0;
          font-size: 16px;
          font-weight: 800;
        }

        .journey-card p {
          margin: 11px 0 0;
          color: rgba(238, 240, 243, 0.58);
          font-size: 12px;
          line-height: 2.2;
        }

        .contact-section {
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          position: absolute;
          z-index: -1;
          top: 20%;
          left: 25%;
          width: 550px;
          height: 550px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(220, 20, 60, 0.18),
            rgba(74, 6, 18, 0.1) 40%,
            transparent 65%
          );
          filter: blur(130px);
          content: "";
          pointer-events: none;
          animation: aura-pulse 6s ease-in-out infinite;
        }

        .contact-grid {
          display: grid;
          align-items: start;
          grid-template-columns: 0.85fr 1.15fr;
          gap: clamp(35px, 7vw, 90px);
        }

        .contact-title {
          margin: 23px 0 0;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 900;
          line-height: 1.55;
        }

        .contact-copy {
          max-width: 430px;
          margin-top: 19px;
          color: rgba(238, 240, 243, 0.6);
          font-size: 13px;
          line-height: 2.35;
        }

        .contact-ready {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 32px;
        }

        .contact-ready-icon {
          display: grid;
          width: 47px;
          height: 47px;
          place-items: center;
          border: 1px solid rgba(220, 20, 60, 0.32);
          border-radius: 10px;
          background: linear-gradient(
            145deg,
            rgba(220, 20, 60, 0.14),
            rgba(74, 6, 18, 0.06)
          );
          box-shadow:
            0 0 22px rgba(220, 20, 60, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .contact-ready-icon span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #dc143c;
          box-shadow:
            0 0 14px rgba(220, 20, 60, 1),
            0 0 28px rgba(220, 20, 60, 0.5);
        }

        .contact-ready strong {
          display: block;
          font-size: 12px;
        }

        .contact-ready small {
          display: block;
          margin-top: 5px;
          color: rgba(238, 240, 243, 0.48);
          font-size: 10px;
        }

        .contact-rule {
          height: 1px;
          margin-top: 35px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(220, 20, 60, 0.5)
          );
          box-shadow: 0 0 15px rgba(220, 20, 60, 0.3);
        }

        .contact-card-wrap {
          position: relative;
        }

        .contact-card-wrap::before {
          position: absolute;
          inset: -1px;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(220, 20, 60, 0.45),
            rgba(220, 20, 60, 0.1) 30%,
            transparent 70%
          );
          content: "";
          pointer-events: none;
        }

        .contact-card {
          position: relative;
          padding: clamp(23px, 4vw, 38px);
          overflow: hidden;
          border: 1px solid rgba(238, 240, 243, 0.08);
          border-radius: 19px;
          background: rgba(16, 17, 21, 0.95);
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.6),
            0 0 60px rgba(220, 20, 60, 0.08);
          backdrop-filter: blur(28px) saturate(180%);
        }

        .contact-card::before {
          position: absolute;
          top: -90px;
          right: -60px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(220, 20, 60, 0.2),
            transparent 65%
          );
          filter: blur(65px);
          content: "";
          pointer-events: none;
        }

        .contact-card-head {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 27px;
        }

        .contact-card-head small {
          color: rgba(238, 240, 243, 0.42);
          font-size: 9px;
          letter-spacing: 0.25em;
        }

        .contact-card-head h3 {
          margin: 11px 0 0;
          font-size: 23px;
          font-weight: 800;
        }

        .contact-card-head p {
          margin: 8px 0 0;
          color: rgba(238, 240, 243, 0.52);
          font-size: 11px;
          line-height: 1.9;
        }

        .contact-send-icon {
          display: grid;
          width: 44px;
          height: 44px;
          flex: 0 0 auto;
          place-items: center;
          border: 1px solid rgba(238, 240, 243, 0.1);
          border-radius: 10px;
          background: rgba(238, 240, 243, 0.03);
        }

        .form-field {
          position: relative;
          display: block;
          margin-top: 18px;
        }

        .form-field label {
          display: block;
          margin-bottom: 9px;
          color: rgba(238, 240, 243, 0.72);
          font-size: 11px;
        }

        .form-control {
          display: block;
          width: 100%;
          min-height: 49px;
          padding: 13px 14px;
          border: 1px solid rgba(238, 240, 243, 0.1);
          border-radius: 8px;
          outline: none;
          background: rgba(238, 240, 243, 0.03);
          color: #eef0f3;
          font-size: 12px;
          transition:
            border-color 200ms ease,
            background 200ms ease,
            box-shadow 200ms ease;
        }

        .form-control::placeholder {
          color: rgba(238, 240, 243, 0.3);
        }

        .form-control:hover {
          border-color: rgba(238, 240, 243, 0.2);
        }

        .form-control:focus {
          border-color: rgba(220, 20, 60, 0.7);
          background: rgba(220, 20, 60, 0.05);
          box-shadow:
            0 0 0 3px rgba(220, 20, 60, 0.1),
            0 0 24px rgba(220, 20, 60, 0.2);
        }

        textarea.form-control {
          min-height: 130px;
          resize: vertical;
          line-height: 2;
        }

        .message-counter {
          float: left;
          color: rgba(238, 240, 243, 0.35);
          font-size: 9px;
        }

        .submit-button {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 51px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 22px;
          overflow: hidden;
          border: 1px solid rgba(220, 20, 60, 0.5);
          border-radius: 10px;
          background: linear-gradient(145deg, #dc143c 0%, #a11238 55%, #4a0612 100%);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow:
            0 0 28px rgba(220, 20, 60, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          transition:
            border-color 250ms ease,
            box-shadow 250ms ease;
        }

        .submit-button::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -60%;
          width: 40%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          content: "";
          transform: skewX(-18deg);
          transition: left 650ms ease;
        }

        .submit-button:hover:not(:disabled) {
          box-shadow:
            0 0 45px rgba(220, 20, 60, 0.55),
            0 8px 25px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .submit-button:hover::before {
          left: 120%;
        }

        .submit-button:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .form-note {
          margin: 14px 0 0;
          color: rgba(238, 240, 243, 0.35);
          font-size: 9px;
          line-height: 1.9;
          text-align: center;
        }

        .site-footer {
          position: relative;
          padding: 28px 20px 18px;
          border-top: 1px solid rgba(238, 240, 243, 0.06);
          background: rgba(238, 240, 243, 0.006);
        }

        .site-footer::before {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(220, 20, 60, 0.3),
            transparent
          );
          content: "";
        }

        .footer-inner {
          display: flex;
          width: min(100%, 1280px);
          margin-inline: auto;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .social-link {
          display: grid;
          width: 40px;
          height: 40px;
          place-items: center;
          border: 1px solid rgba(238, 240, 243, 0.08);
          border-radius: 10px;
          color: rgba(238, 240, 243, 0.62);
          transition:
            color 200ms ease,
            border-color 200ms ease,
            background 200ms ease,
            box-shadow 200ms ease;
        }

        .social-link:hover {
          border-color: rgba(220, 20, 60, 0.4);
          background: rgba(220, 20, 60, 0.1);
          color: #fff;
          box-shadow: 0 0 22px rgba(220, 20, 60, 0.2);
        }

        .footer-caption {
          color: rgba(238, 240, 243, 0.42);
          font-size: 10px;
          line-height: 1.9;
          text-align: center;
        }

        .footer-bottom {
          width: min(100%, 1280px);
          margin: 22px auto 0;
          padding-top: 17px;
          border-top: 1px solid rgba(238, 240, 243, 0.05);
          color: rgba(238, 240, 243, 0.3);
          font-size: 9px;
          letter-spacing: 0.15em;
          text-align: center;
        }

        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: grid;
          place-items: center;
          background: #07080a;
          transition:
            opacity 500ms ease,
            visibility 500ms ease;
        }

        .loading-screen.is-done {
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
        }

        .hp-loader-shell {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: grid;
          place-items: center;
          overflow: hidden;
          background: #07080a;
          color: #eef0f3;
        }

        .hp-loader-grid {
          position: absolute;
          inset: 0;
          opacity: 0.07;
          background-image:
            linear-gradient(0deg, transparent 49%, #fff 50%, transparent 51%),
            linear-gradient(90deg, transparent 49%, #fff 50%, transparent 51%);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse at center, #000, transparent 80%);
        }

        .hp-loader-glow-a {
          position: absolute;
          top: 33%;
          left: -10rem;
          width: 24rem;
          height: 24rem;
          border-radius: 50%;
          background: #000;
          filter: blur(130px);
        }

        .hp-loader-glow-b {
          position: absolute;
          right: -10rem;
          bottom: 0;
          width: 24rem;
          height: 24rem;
          border-radius: 50%;
          background: rgba(220, 20, 60, 0.03);
          filter: blur(120px);
        }

        .hp-loader-top {
          position: absolute;
          top: 1.75rem;
          left: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .hp-loader-top-right {
          position: absolute;
          top: 2rem;
          right: 1.5rem;
          font-family: ui-monospace, monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          color: rgba(238, 240, 243, 0.3);
        }

        .hp-loader-bar {
          width: 3px;
          height: 20px;
          background: #dc143c;
        }

        .hp-loader-emblem {
          position: relative;
          width: 10rem;
          height: 10rem;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hp-loader-diamond-outer {
          position: absolute;
          inset: 0;
          transform: rotate(45deg);
          border: 1px solid #000;
        }

        .hp-loader-diamond-inner {
          position: absolute;
          inset: 0.75rem;
          transform: rotate(45deg);
          border: 1px solid rgba(220, 20, 60, 0.5);
        }

        .hp-loader-ring {
          position: absolute;
          inset: 0;
          border-top: 2px solid rgba(220, 20, 60, 0.8);
          animation: hp-spin 5s linear infinite;
        }

        @keyframes hp-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .hp-loader-emblem-glow {
          position: absolute;
          inset: 2rem;
          background: #000;
          filter: blur(24px);
        }

        .hp-loader-logo {
          position: relative;
          z-index: 10;
          width: 6rem;
          height: 6rem;
          object-fit: contain;
          background: #fff;
          border-radius: 1rem;
          filter: grayscale(1) contrast(1.3);
        }

        .hp-loader-est {
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          background: #07080a;
          padding: 0 0.75rem;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.3em;
          color: #dc143c;
        }

        .hp-loader-title {
          font-size: clamp(2.25rem, 5vw, 3.75rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          text-align: center;
        }

        .hp-loader-title span {
          margin-left: 0.75rem;
          color: #dc143c;
        }

        .hp-loader-tagline {
          margin-top: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .hp-loader-tagline span.line {
          display: block;
          width: 2.5rem;
          height: 1px;
          background: #8a0f26;
        }

        .hp-loader-tagline p {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.4em;
          color: rgba(238, 240, 243, 0.42);
        }

        .hp-loader-progress {
          margin-top: 3.5rem;
          width: 100%;
          max-width: 24rem;
        }

        .hp-loader-progress-top {
          margin-bottom: 0.75rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .hp-loader-progress-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: rgba(238, 240, 243, 0.58);
        }

        .hp-loader-progress-sub {
          margin-top: 0.25rem;
          font-size: 8px;
          letter-spacing: 0.14em;
          color: rgba(238, 240, 243, 0.22);
        }

        .hp-loader-progress-value {
          font-family: ui-monospace, monospace;
          font-size: 1.5rem;
          font-weight: 900;
          font-variant-numeric: tabular-nums;
          color: #fff;
        }

        .hp-loader-progress-value span {
          margin-left: 0.25rem;
          font-size: 0.875rem;
          color: #dc143c;
        }

        .hp-loader-track {
          position: relative;
          height: 3px;
          overflow: hidden;
          background: #000;
        }

        .hp-loader-fill {
          position: absolute;
          inset-block: 0;
          right: 0;
          background: linear-gradient(to left, #4a0612, #dc143c, #f43f5e);
          transition: width 100ms linear;
        }

        .hp-loader-meta {
          margin-top: 0.75rem;
          display: flex;
          justify-content: space-between;
          font-family: ui-monospace, monospace;
          font-size: 8px;
          letter-spacing: 0.15em;
          color: rgba(238, 240, 243, 0.22);
        }

        .hp-loader-motto {
          margin-top: 2.5rem;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.3em;
          color: rgba(238, 240, 243, 0.22);
        }

        .hp-loader-motto span {
          margin: 0 0.5rem;
          color: #dc143c;
        }

        .hp-loader-foot {
          position: absolute;
          left: 1.5rem;
          bottom: 2rem;
          font-size: 8px;
          letter-spacing: 0.2em;
          color: rgba(238, 240, 243, 0.22);
        }

        .hp-loader-status {
          position: absolute;
          right: 1.5rem;
          bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hp-loader-status-dot {
          width: 6px;
          height: 6px;
          background: #dc143c;
        }

        .hp-loader-status-text {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: rgba(238, 240, 243, 0.38);
        }

        @media (min-width: 640px) {
          .hp-loader-top {
            top: 2.5rem;
            left: 3rem;
          }

          .hp-loader-top-right {
            top: 2.5rem;
            right: 3rem;
          }

          .hp-loader-emblem {
            width: 12rem;
            height: 12rem;
          }

          .hp-loader-logo {
            width: 7rem;
            height: 7rem;
          }

          .hp-loader-tagline p {
            font-size: 10px;
          }

          .hp-loader-foot {
            left: 3rem;
            bottom: 2.5rem;
          }

          .hp-loader-status {
            right: 3rem;
            bottom: 2.5rem;
          }
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 220;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(13px);
          animation: fade-in 180ms ease both;
        }

        .modal-card {
          position: relative;
          width: min(100%, 420px);
          padding: 38px 30px 30px;
          overflow: hidden;
          border: 1px solid rgba(220, 20, 60, 0.2);
          border-radius: 20px;
          background: #0f1115;
          text-align: center;
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.7),
            0 0 60px rgba(220, 20, 60, 0.1);
          animation: modal-in 260ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .modal-card::before {
          position: absolute;
          top: -110px;
          left: 50%;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(220, 20, 60, 0.38),
            transparent 65%
          );
          filter: blur(75px);
          content: "";
          transform: translateX(-50%);
          pointer-events: none;
        }

        .modal-close {
          position: absolute;
          top: 13px;
          left: 13px;
          display: grid;
          width: 35px;
          height: 35px;
          place-items: center;
          border: 1px solid rgba(238, 240, 243, 0.08);
          border-radius: 8px;
          background: rgba(238, 240, 243, 0.03);
          color: rgba(238, 240, 243, 0.68);
          cursor: pointer;
        }

        .modal-icon {
          position: relative;
          display: grid;
          width: 72px;
          height: 72px;
          margin-inline: auto;
          place-items: center;
          border: 1px solid rgba(220, 20, 60, 0.45);
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(220, 20, 60, 0.22),
            rgba(74, 6, 18, 0.12)
          );
          color: #fff;
          box-shadow: 0 0 30px rgba(220, 20, 60, 0.3);
        }

        .modal-eyebrow {
          margin-top: 24px;
          color: rgba(238, 240, 243, 0.42);
          font-size: 9px;
          letter-spacing: 0.28em;
        }

        .modal-card h3 {
          position: relative;
          margin: 11px 0 0;
          font-size: 25px;
          font-weight: 900;
        }

        .modal-card p {
          position: relative;
          margin: 13px 0 0;
          color: rgba(238, 240, 243, 0.6);
          font-size: 12px;
          line-height: 2.2;
        }

        .modal-action {
          width: 100%;
          min-height: 47px;
          margin-top: 25px;
          border: 1px solid rgba(220, 20, 60, 0.45);
          border-radius: 10px;
          background: linear-gradient(145deg, #dc143c 0%, #a11238 55%, #4a0612 100%);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow:
            0 0 25px rgba(220, 20, 60, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: box-shadow 200ms ease;
        }

        .modal-action:hover {
          box-shadow:
            0 0 40px rgba(220, 20, 60, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes portrait-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes tech-drift {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(3deg);
          }
        }

        @keyframes dot-pulse {
          0% {
            transform: scale(0.7);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.9);
            opacity: 0;
          }
        }

        @keyframes marquee-move {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(50%);
          }
        }

        @keyframes slow-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes menu-in {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modal-in {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 1100px) {
          .nav-links {
            gap: 13px;
          }
          .nav-link {
            font-size: 10px;
          }
          .header-cta {
            padding-inline: 11px;
          }
          .hero-inner {
            gap: 55px;
          }
          .hero-title {
            font-size: clamp(64px, 8vw, 90px);
          }
          .about-grid {
            gap: 55px;
          }
        }

        @media (max-width: 900px) {
          .header-inner {
            min-height: 72px;
          }
          .is-scrolled .header-inner {
            min-height: 65px;
          }
          .nav-links,
          .header-cta {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
          .brand-text-desktop {
            display: none;
          }
          .hero-section {
            min-height: auto;
            padding-top: 135px;
          }
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 65px;
          }
          .hero-copy {
            order: 2;
          }
          .hero-visual-wrap {
            order: 1;
          }
          .hero-visual {
            width: min(78%, 365px);
          }
          .hero-copy {
            text-align: center;
          }
          .hero-description,
          .hero-meta {
            margin-inline: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .status-pill {
            margin-inline: auto;
          }
          .hero-meta {
            text-align: right;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }
          .expertise-grid {
            grid-template-columns: 1fr 1fr;
          }
          .expertise-card:last-child {
            grid-column: 1 / -1;
          }
          .project-grid {
            grid-template-columns: 1fr;
          }
          .project-visual {
            grid-row: 1;
            width: min(70%, 260px);
          }
          .project-copy {
            text-align: center;
          }
          .project-feature p {
            margin-inline: auto;
          }
          .project-status {
            margin-inline: auto;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }
          .contact-copy {
            max-width: 600px;
          }
          .contact-rule {
            max-width: 500px;
          }
        }

        @media (max-width: 640px) {
          .header-inner {
            width: calc(100% - 30px);
          }
          .section {
            padding: 82px 18px;
          }
          .hero-section {
            padding: 120px 18px 78px;
          }
          .hero-inner {
            gap: 48px;
          }
          .hero-visual {
            width: min(80%, 315px);
          }
          .floating-tech {
            width: 42px;
            height: 42px;
            border-radius: 10px;
          }
          .portrait-caption {
            right: 17px;
            bottom: 18px;
            left: 17px;
          }
          .portrait-caption h2 {
            font-size: 22px;
          }
          .hero-overline {
            font-size: 9px;
          }
          .hero-title {
            font-size: clamp(59px, 15vw, 82px);
          }
          .hero-role {
            font-size: 16px;
          }
          .hero-description {
            font-size: 12px;
            line-height: 2.3;
          }
          .hero-meta {
            gap: 9px;
            margin-top: 36px;
          }
          .hero-meta-item strong {
            font-size: 10px;
          }
          .hero-meta-item span {
            font-size: 9px;
          }
          .section-heading-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }
          .section-heading h2 {
            font-size: 33px;
          }
          .section-heading-bottom > p {
            font-size: 12px;
          }
          .expertise-grid {
            grid-template-columns: 1fr;
            margin-top: 32px;
          }
          .expertise-card,
          .expertise-card:last-child {
            grid-column: auto;
            min-height: auto;
            padding: 24px;
          }
          .expertise-card > p {
            min-height: 0;
          }
          .tool-groups {
            grid-template-columns: 1fr;
            margin-top: 32px;
          }
          .tool-group {
            padding: 22px;
          }
          .marquee-group {
            gap: 27px;
            padding-left: 27px;
          }
          .marquee-item {
            font-size: 10px;
          }
          .project-feature {
            padding: 25px 20px 30px;
            border-radius: 15px;
          }
          .project-feature h3 {
            font-size: 32px;
          }
          .project-feature p {
            font-size: 12px;
          }
          .project-visual {
            width: min(75%, 235px);
          }
          .principles-grid {
            grid-template-columns: 1fr;
            margin-top: 25px;
          }
          .principle-card {
            padding: 23px 0;
          }
          .principle-card + .principle-card {
            border-top: 1px solid rgba(238, 240, 243, 0.08);
            border-right: 0;
          }
          .principle-card h3 {
            margin-top: 15px;
          }
          .principle-card p {
            max-width: 100%;
          }
          .journey-grid {
            grid-template-columns: 1fr;
            margin-top: 30px;
          }
          .journey-card {
            min-height: auto;
            padding: 22px;
          }
          .contact-title {
            font-size: 43px;
          }
          .contact-card {
            padding: 23px 18px;
          }
          .footer-inner {
            flex-direction: column;
          }
          .footer-caption {
            max-width: 300px;
          }
          .footer-bottom {
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }

          .expertise-card::after {
            display: none;
          }
        }
      `}</style>

      <div className="ambient-grid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div
        className={`loading-screen ${loading ? "" : "is-done"}`}
        aria-hidden={!loading}
      >
        <div className="hp-loader-shell">
          <div className="hp-loader-grid" aria-hidden="true" />
          <div className="hp-loader-glow-a" aria-hidden="true" />
          <div className="hp-loader-glow-b" aria-hidden="true" />

          <div className="hp-loader-top">
            <span className="hp-loader-bar" />
            <div>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 900,
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.8)",
                  margin: 0,
                }}
              >
                HP / SYSTEM
              </p>
              <p
                style={{
                  marginTop: 4,
                  fontSize: 8,
                  letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.3)",
                  margin: "4px 0 0",
                }}
              >
                PRIVATE DIGITAL SPACE
              </p>
            </div>
          </div>

          <span className="hp-loader-top-right">NO. 001 — 2026</span>

          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "6rem 1.25rem",
            }}
          >
            <div className="hp-loader-emblem">
              <div className="hp-loader-diamond-outer" />
              <div className="hp-loader-diamond-inner" />
              <div className="hp-loader-ring" />
              <div className="hp-loader-emblem-glow" />
              <Image
                width={1000}
                height={1000}
                src="https://yourimageshare.com/cdn-cgi/image/width=1280,fit=scale-down,quality=85,format=auto,onerror=redirect/https://i.yourimageshare.com/K3Bqsm9a8f.png"
                alt="Hami Parsa"
                className="hp-loader-logo"
              />
              <span className="hp-loader-est">EST. 2026</span>
            </div>

            <div style={{ textAlign: "center" }}>
              <h1 className="hp-loader-title">
                HAMI
                <span>PARSA</span>
              </h1>

              <div className="hp-loader-tagline">
                <span className="line" />
                <p>BUILT DIFFERENT</p>
                <span className="line" />
              </div>
            </div>

            <div className="hp-loader-progress">
              <div className="hp-loader-progress-top">
                <div>
                  <p className="hp-loader-progress-label">
                    INITIALIZING SYSTEM
                  </p>
                  <p className="hp-loader-progress-sub">PLEASE STAND BY</p>
                </div>
                <span className="hp-loader-progress-value">
                  {String(progress).padStart(2, "0")}
                  <span>%</span>
                </span>
              </div>

              <div className="hp-loader-track">
                <div
                  className="hp-loader-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="hp-loader-meta">
                <span>SECURE CONNECTION</span>
                <span>HP_CORE.SYS</span>
              </div>
            </div>

            <p className="hp-loader-motto">
              DISCIPLINE <span>/</span> PRECISION <span>/</span> EXECUTION
            </p>
          </div>

          <div className="hp-loader-foot">INDEPENDENT BY DESIGN</div>
          <div className="hp-loader-status">
            <span className="hp-loader-status-dot" />
            <span className="hp-loader-status-text">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>

      <div className="page-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="header-inner" aria-label="منوی اصلی">
          <a
            href="#home"
            className="brand-link"
            onClick={closeMenu}
            aria-label="Hami Parsa - خانه"
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span className="brand-mark">
                <Image
                  width={1000}
                  height={1000}
                  src="https://yourimageshare.com/cdn-cgi/image/width=1280,fit=scale-down,quality=85,format=auto,onerror=redirect/https://i.yourimageshare.com/K3Bqsm9a8f.png"
                  alt="Hami Parsa"
                  style={{
                    width: 28,
                    height: 28,
                    objectFit: "contain",
                    background: "#fff",
                    borderRadius: 8,
                  }}
                  onError={(e) => {
                    console.error("Image failed to load:", e.currentTarget.src);
                  }}
                />
              </span>
              <span className="brand-text-desktop">
                <span
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                  }}
                >
                  HAMI PARSA
                </span>
                <span
                  style={{
                    marginTop: 4,
                    display: "block",
                    fontSize: 8,
                    letterSpacing: "0.2em",
                    color: "rgba(250,245,243,0.35)",
                  }}
                >
                  FULL-STACK DEVELOPER
                </span>
              </span>
            </div>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  activeSection === item.href.slice(1) ? "is-active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="header-cta">
            ارتباط با من
            <ArrowIcon size={14} />
          </a>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" width={20} height={20}>
              {menuOpen ? (
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-grid">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`mobile-nav-link ${
                    activeSection === item.href.slice(1) ? "is-active" : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="hero-section">
        <div
          style={{
            position: "absolute",
            left: "-10rem",
            top: "12%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(74,8,24,0.2)",
            filter: "blur(130px)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            right: "20%",
            bottom: 0,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "rgba(239,45,86,0.15)",
            filter: "blur(110px)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="status-dot" />
              <span>در حال ساختن فصل بعدی مسیرم</span>
            </div>

            <p className="hero-overline">ایده را بفهم. راه‌حل را بساز.</p>

            <h1 className="hero-title">
              <span className="hero-title-line">حامی</span>
              <span className="hero-title-line">
                <span className="hero-title-accent">پارسا</span>
                <span className="hero-period">.</span>
              </span>
            </h1>

            <h2 className="hero-role">توسعه‌دهنده‌ی فول‌استک وب</h2>

            <p className="hero-description">
              از ایده تا پیاده‌سازی؛ روی ساخت تجربه‌های دیجیتال مدرن، رابط‌های
              دقیق و برنامه‌های کاربردی تمرکز می‌کنم. برای من کدنویسی فقط نوشتن
              دستور نیست؛ راهی برای حل مسئله و ساختن چیزهایی است که واقعاً ارزش
              استفاده دارند.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button-primary">
                کاوش در فضای من
                <ArrowIcon size={16} />
              </a>
              <a href="#contact" className="button-secondary">
                شروع یک گفت‌وگو
                <SendIcon size={16} />
              </a>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <strong>FULL-STACK</strong>
                <span>نگاه به کل محصول</span>
              </div>
              <div className="hero-meta-item">
                <strong>BUILD FIRST</strong>
                <span>یادگیری با ساختن</span>
              </div>
              <div className="hero-meta-item">
                <strong>ALWAYS GROW</strong>
                <span>حرکت رو به جلو</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <div className="hero-visual">
              <div className="portrait-aura" />
              <div className="portrait-orbit" />

              <div className="portrait-frame">
                <Image
                  width={1000}
                  height={1000}
                  src="https://i.yourimageshare.com/KZCvAeEfV2.jpg"
                  alt="تصویر حامی پارسا"
                  className="portrait-image"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />
                <div className="portrait-caption">
                  <small>PERSONAL PROFILE / 001</small>
                  <h2>Hami Parsa</h2>
                  <p>Full-Stack Web Developer</p>
                </div>
              </div>

              <div className="floating-tech tech-one">
                <SiNextdotjs size={20} />
              </div>
              <div className="floating-tech tech-two">
                <SiReact size={20} />
              </div>
              <div className="floating-tech tech-three">
                <SiTypescript size={20} />
              </div>

              <div className="portrait-badge">
                <span className="status-dot" />
                <span>ALWAYS EVOLVING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-marquee" aria-label="تکنولوژی‌ها">
        <div className="marquee-label">TOOLS I BUILD WITH</div>
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
              {technologies.map((tech) => (
                <div className="marquee-item" key={`${copy}-${tech.name}`}>
                  <tech.Icon size={19} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-inner about-grid">
          <Reveal>
            <div className="section-index">
              <span>01</span>
              <span className="section-index-line" />
              <span>درباره‌ی من</span>
            </div>
            <h2 className="about-title">
              مهندسی با
              <br />
              <span>هدف و معنا.</span>
            </h2>
            <div
              style={{
                marginTop: 28,
                height: 1,
                width: 96,
                background:
                  "linear-gradient(to left, rgba(239,45,86,0.8), transparent)",
              }}
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="about-copy">
              <p>
                من حامی پارسا هستم؛ توسعه‌دهنده‌ی فول‌استک وب با علاقه به ساخت
                محصولات دیجیتال، طراحی رابط‌های کاربری دقیق و حل مسئله با کمک
                فناوری.
              </p>
              <p>
                برای من برنامه‌نویسی فقط کنار هم قرار دادن چند خط کد نیست. دوست
                دارم بفهمم یک محصول چرا ساخته می‌شود، چه مشکلی را حل می‌کند و
                چطور می‌توان آن را بهتر، سریع‌تر و قابل نگهداری‌تر ساخت.
              </p>
              <p>
                در مسیرم روی توسعه‌ی فرانت‌اند و بک‌اند، ساختار مناسب پروژه‌ها و
                تبدیل ایده‌ها به تجربه‌های قابل استفاده تمرکز دارم. رشد حرفه‌ای
                را یک مسیر مستمر می‌دانم؛ مسیری که با تمرین، بازخورد و ساختن
                پروژه‌های واقعی جلو می‌رود.
              </p>
            </div>

            <div className="tag-row">
              {[
                "حل مسئله",
                "یادگیری مستمر",
                "ساخت محصول",
                "توجه به جزئیات",
              ].map((tag) => (
                <span className="soft-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="expertise" className="section section-muted">
        <div className="section-inner">
          <SectionHeading
            index="02"
            eyebrow="حوزه‌های تخصصی"
            title="از رابط تا زیرساخت"
            description="تمرکز من روی ساخت تجربه‌های کامل است؛ از آنچه کاربر می‌بیند تا منطق و داده‌هایی که پشت صحنه کار می‌کنند."
          />

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <article
                  className="expertise-card"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={() =>
                    setSpotlightPos((p) => ({ ...p, active: false }))
                  }
                  style={
                    {
                      "--spotlight-x": `${spotlightPos.x}px`,
                      "--spotlight-y": `${spotlightPos.y}px`,
                      "--spotlight-opacity": spotlightPos.active ? 1 : 0,
                    } as React.CSSProperties
                  }
                >
                  <div className="expertise-card-top">
                    <span className="expertise-number">{item.id}</span>
                    <span className="expertise-symbol">
                      <ArrowIcon size={16} />
                    </span>
                  </div>
                  <div className="expertise-eyebrow">{item.eyebrow}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="expertise-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="section">
        <div className="section-inner">
          <SectionHeading
            index="03"
            eyebrow="جعبه‌ابزار"
            title="ابزارهایی برای ساختن"
            description="تکنولوژی‌ها ابزارند؛ انتخاب درست آن‌ها به مسئله، نیاز محصول و محدودیت‌های پروژه بستگی دارد."
          />

          <div className="tool-groups">
            {[
              {
                title: "Frontend",
                subtitle: "رابط کاربری و تجربه‌ی کاربر",
                code: "CLIENT_SIDE",
                items: technologies.slice(0, 5),
              },
              {
                title: "Backend & Data",
                subtitle: "منطق برنامه و مدیریت داده",
                code: "SERVER_SIDE",
                items: technologies.slice(5, 11),
              },
              {
                title: "Tools & Workflow",
                subtitle: "توسعه، همکاری و انتشار",
                code: "DEVELOPER_TOOLS",
                items: technologies.slice(11, 15),
              },
              {
                title: "Web Foundations",
                subtitle: "پایه‌های توسعه‌ی وب",
                code: "CORE_FOUNDATIONS",
                items: technologies.slice(15, 16),
              },
            ].map((group, index) => (
              <Reveal key={group.title} delay={index * 70}>
                <article
                  className="tool-group"
                  style={{
                    position: "relative",
                    isolation: "isolate",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background:
                        "linear-gradient(to left, transparent, rgba(239,45,86,0.7), transparent)",
                      opacity: 0.6,
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: -64,
                      left: -64,
                      zIndex: -1,
                      width: 160,
                      height: 160,
                      borderRadius: "50%",
                      background: "rgba(239,45,86,0.07)",
                      filter: "blur(75px)",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    className="tool-group-header"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <span
                        style={{
                          marginBottom: 8,
                          display: "block",
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: "0.18em",
                          color: "#ef2d56",
                        }}
                      >
                        /{String(index + 1).padStart(2, "0")} — {group.code}
                      </span>
                      <h3>{group.title}</h3>
                    </div>
                    <span
                      style={{
                        flexShrink: 0,
                        border: "1px solid #000",
                        padding: "6px 12px",
                        fontSize: 10,
                        fontVariantNumeric: "tabular-nums",
                        color: "rgba(250,245,243,0.55)",
                      }}
                    >
                      {String(group.items.length).padStart(2, "0")} ابزار
                    </span>
                  </div>

                  <p style={{ position: "relative" }}>{group.subtitle}</p>

                  <div className="tool-items" style={{ position: "relative" }}>
                    {group.items.map((tech) => (
                      <div
                        className="tool-chip"
                        key={tech.name}
                        title={tech.name}
                        style={{ position: "relative", overflow: "hidden" }}
                      >
                        <span style={{ flexShrink: 0 }}>
                          <tech.Icon size={16} />
                        </span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderTop: "1px solid rgba(250,245,243,0.07)",
                      paddingTop: 16,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 8,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        color: "rgba(250,245,243,0.25)",
                      }}
                    >
                      HAMI PARSA
                    </span>
                    <span
                      style={{
                        fontSize: 8,
                        letterSpacing: "0.14em",
                        color: "rgba(250,245,243,0.25)",
                      }}
                    >
                      STACK / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 12,
              border: "1px solid rgba(250,245,243,0.07)",
              background: "#08080a",
              padding: "20px 20px",
            }}
          >
            <span style={{ fontSize: 20, color: "#ef2d56" }}>✳</span>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.9,
                color: "rgba(250,245,243,0.45)",
                margin: 0,
              }}
            >
              ابزارها تغییر می‌کنند؛{" "}
              <strong
                style={{
                  fontWeight: 700,
                  color: "rgba(250,245,243,0.85)",
                }}
              >
                طرز فکر مهندسی باقی می‌ماند.
              </strong>
            </p>
            <span
              style={{
                marginRight: "auto",
                fontSize: 8,
                fontWeight: 600,
                letterSpacing: "0.16em",
                color: "rgba(250,245,243,0.25)",
              }}
            >
              HP — 2026
            </span>
          </div>
        </div>
      </section>

      <section id="projects" className="section section-muted">
        <div className="section-inner">
          <SectionHeading
            index="04"
            eyebrow="پروژه‌ها"
            title="چیزهای خوب، زمان می‌برند."
            description="به‌جای نمایش نمونه‌های ساختگی به‌عنوان پروژه‌ی واقعی، این بخش را برای کارهایی نگه می‌دارم که واقعاً ارزش ارائه دارند."
          />

          <Reveal>
            <div className="project-feature">
              <div className="project-grid">
                <div className="project-copy">
                  <div className="project-label">
                    WORK IN PROGRESS / PERSONAL LAB
                  </div>
                  <h3>
                    پروژه‌های بعدی
                    <br />
                    <span>در حال شکل‌گیری‌اند.</span>
                  </h3>
                  <p>
                    ویترین پروژه‌ها با آماده شدن کارهای قابل ارائه تکمیل می‌شود؛
                    همراه با جزئیات فنی، تصمیم‌های طراحی و لینک مشاهده‌ی نسخه‌ی
                    واقعی.
                  </p>
                  <div className="project-status">
                    <span />
                    در حال آماده‌سازی
                  </div>
                  <div style={{ marginTop: 28 }}>
                    <a href="#contact" className="button-secondary">
                      پیشنهاد همکاری
                      <ArrowIcon size={16} />
                    </a>
                  </div>
                </div>

                <div className="project-visual" aria-hidden="true">
                  <div className="project-ring" />
                  <div className="project-ring" />
                  <div className="project-ring" />
                  <div className="project-monogram">HP</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading
            index="05"
            eyebrow="طرز فکر"
            title="کد، فقط بخشی از ماجراست."
            description="کیفیت یک محصول فقط با تعداد خطوط کد سنجیده نمی‌شود؛ شیوه‌ی فکر کردن و تصمیم گرفتن هم اهمیت دارد."
          />

          <div className="principles-grid">
            {principles.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <article className="principle-card">
                  <span className="principle-id">{item.id} / 03</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="section section-muted">
        <div className="section-inner">
          <SectionHeading
            index="06"
            eyebrow="مسیر من"
            title="هنوز در حال رشد."
            description="مسیر حرفه‌ای یک مقصد ثابت نیست؛ مجموعه‌ای از تجربه‌ها، یادگیری‌ها و قدم‌هایی است که به‌مرور ساخته می‌شوند."
          />

          <div className="journey-grid">
            {milestones.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <article className="journey-card">
                  <div className="journey-card-top">
                    <span className="journey-card-number">{item.id}</span>
                    <span className="journey-card-label">{item.label}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-inner contact-grid">
          <Reveal>
            <div className="section-index">
              <span>07</span>
              <span className="section-index-line" />
              <span>ارتباط مستقیم</span>
            </div>

            <h2 className="contact-title">
              حرفی برای
              <br />
              گفتن داری؟
            </h2>

            <p className="contact-copy">
              برای همکاری، پیشنهاد پروژه یا یک گفت‌وگوی فنی، پیامت رو بفرست. فرم
              سمت مقابل مستقیماً از طریق EmailJS پیام رو ارسال می‌کنه.
            </p>

            <div className="contact-ready">
              <div className="contact-ready-icon">
                <span />
              </div>
              <div>
                <strong>آماده‌ی ارتباط</strong>
                <small>همکاری، پروژه و گفت‌وگوی فنی</small>
              </div>
            </div>

            <div className="contact-rule" />
          </Reveal>

          <Reveal delay={100}>
            <div className="contact-card-wrap">
              <div className="contact-card">
                <div className="contact-card-head">
                  <div>
                    <small>SEND A MESSAGE</small>
                    <h3>شروع یک ارتباط</h3>
                    <p>فرم رو کامل کن تا پیامت رو دریافت کنم.</p>
                  </div>
                  <div className="contact-send-icon">
                    <SendIcon size={20} />
                  </div>
                </div>

                <form onSubmit={sendEmail}>
                  <div className="form-field">
                    <label htmlFor="contact-name">نام و نام خانوادگی</label>
                    <input
                      id="contact-name"
                      className="form-control"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="اسمت رو وارد کن"
                      value={form.name}
                      onChange={updateField}
                      required
                      maxLength={100}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-number">شماره تماس</label>
                    <input
                      id="contact-number"
                      className="form-control"
                      name="number"
                      type="tel"
                      autoComplete="tel"
                      placeholder="شماره تماس برای ارتباط"
                      value={form.number}
                      onChange={updateField}
                      required
                      maxLength={30}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-message">
                      پیام تو
                      <span className="message-counter">
                        {form.message.length}/3000
                      </span>
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="درباره‌ی پیشنهاد یا ایده‌ات بنویس..."
                      value={form.message}
                      onChange={updateField}
                      required
                      maxLength={3000}
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          width={16}
                          height={16}
                          style={{
                            animation: "slow-spin 1s linear infinite",
                          }}
                          aria-hidden="true"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeOpacity=".2"
                            strokeWidth="2"
                          />
                          <path
                            d="M21 12a9 9 0 0 0-9-9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        در حال ارسال...
                      </>
                    ) : (
                      <>
                        ارسال پیام
                        <SendIcon size={16} />
                      </>
                    )}
                  </button>

                  <p className="form-note">
                    اطلاعات فرم برای پاسخ‌گویی به همین پیام استفاده می‌شود.
                  </p>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <a href="#home" className="brand-link" aria-label="بازگشت به خانه">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Image
                width={1000}
                height={1000}
                src="https://yourimageshare.com/cdn-cgi/image/width=1280,fit=scale-down,quality=85,format=auto,onerror=redirect/https://i.yourimageshare.com/K3Bqsm9a8f.png"
                alt="Hami Parsa"
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "contain",
                  background: "#fff",
                  borderRadius: 12,
                  filter: "grayscale(1) contrast(1.25)",
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                }}
              >
                HAMI PARSA
              </span>
            </div>
          </a>

          <p className="footer-caption">
            ساخته‌شده با دقت، کنجکاوی و اشتیاق به یادگیری.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/HamiParsa"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <SiGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/hamiparsa"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={16}
                height={16}
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>

            <a
              href="mailto:parsa.developer001@gmail.com"
              aria-label="Email"
              className="social-link"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width={16}
                height={16}
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">HAMI PARSA · PERSONAL SPACE · 2026</div>
      </footer>

      {modalStatus && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setModalStatus(null);
            }
          }}
        >
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="بستن"
              onClick={() => setModalStatus(null)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width={16}
                height={16}
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="modal-icon">
              {modalStatus === "success" ? (
                <CheckIcon size={32} />
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  width={32}
                  height={32}
                  aria-hidden="true"
                >
                  <path
                    d="M12 8v5m0 4h.01M10.3 3.9 1.9 18.1A2 2 0 0 0 3.6 21h16.8a2 2 0 0 0 1.7-2.9L13.7 3.9a2 2 0 0 0-3.4 0Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            <div className="modal-eyebrow">
              {modalStatus === "success" ? "MESSAGE SENT" : "SEND FAILED"}
            </div>

            <h3 id="contact-modal-title">
              {modalStatus === "success" ? "پیامت رسید." : "ارسال انجام نشد."}
            </h3>

            <p>
              {modalStatus === "success"
                ? "ممنون که پیام دادی. پیام با موفقیت ارسال شد و در اولین فرصت بررسیش می‌کنم."
                : "ارسال پیام موفق نبود. اتصال اینترنت و تنظیمات سرویس و قالب EmailJS رو بررسی کن و دوباره تلاش کن."}
            </p>

            <button
              type="button"
              className="modal-action"
              onClick={() => setModalStatus(null)}
            >
              متوجه شدم
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
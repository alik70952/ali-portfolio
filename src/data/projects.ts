export type Project = {
  title: string;
  category: string;
  description: string;
  persianSummary: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
  previewImage?: string;
  previewPosition?: string;
};

export const projects: Project[] = [
  {
    title: "TCM Diagnostic & Regression Analysis Tool",
    category: "Automotive Data Analysis",
    description:
      "A Python-based tool for processing TCM diagnostic logs, reading regression checklist data, validating signal behavior, and generating structured reports for gearbox computer testing.",
    persianSummary:
      "ابزار تحلیل لاگ‌های TCM و بررسی تست‌های No Regression برای کامپیوتر گیربکس.",
    highlights: [
      "Processes .dat automotive log files",
      "Reads Excel regression checklists",
      "Parses acceptance criteria and signal conditions",
      "Generates JSON, CSV, HTML, and TXT reports",
      "Calculates PASS / FAIL status and confidence scores",
      "Supports signal analysis and diagnostic reporting",
    ],
    technologies: [
      "Python",
      "pandas",
      "asammdf",
      "Excel Processing",
      "Data Validation",
      "Automotive Diagnostics",
      "Report Generation",
    ],
    featured: true,
  },
  {
    title: "Swiss Car Display",
    category: "Automotive Web Platform",
    description:
      "A premium automotive display-upgrade website for the Swiss market, presenting Apple CarPlay and Android Auto retrofit options through a polished, brand-led browsing experience.",
    persianSummary:
      "وب‌سایت معرفی و انتخاب سیستم‌های نمایش خودرو، اپل کارپلی و اندروید اتو برای بازار سوئیس.",
    highlights: [
      "Vehicle-brand selection experience",
      "Responsive retrofit service presentation",
      "Clear consultation and contact journeys",
      "Premium dark automotive visual system",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    previewImage: "/project-assets/swiss-car-display/hero.png",
    previewPosition: "center top",
  },
  {
    title: "Premium Restaurant App",
    category: "Frontend / Mobile UI",
    description:
      "A premium restaurant app interface built with React, Vite, and TypeScript, focused on a polished food ordering and reservation experience.",
    persianSummary:
      "طراحی رابط کاربری اپ رستوران با ظاهر مدرن، دسته‌بندی غذاها، فرم رزرو و آماده‌سازی برای خروجی اندروید.",
    highlights: [
      "Food category filtering",
      "Reservation form validation",
      "Responsive mobile-first app shell",
      "Android packaging experiments with Capacitor",
    ],
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Capacitor"],
  },
  {
    title: "Game Club Accounting System",
    category: "Python Desktop App",
    description:
      "A desktop accounting and management tool for a game club, designed to track play sessions, pricing, inventory, and monthly reports.",
    persianSummary:
      "نرم‌افزار دسکتاپ برای مدیریت گیم‌کلاب، ثبت جلسات بازی، قیمت‌گذاری، موجودی و گزارش‌گیری.",
    highlights: [
      "Session start and stop management",
      "Pricing configuration",
      "Snack and inventory tracking",
      "Monthly reports and desktop GUI workflow",
    ],
    technologies: [
      "Python",
      "SQLite",
      "Tkinter",
      "ttkbootstrap",
      "Data Management",
    ],
  },
  {
    title: "Iranian Online Store in Switzerland",
    category: "WordPress / WooCommerce",
    description:
      "A Persian-language online store concept for selling Iranian food and products in Switzerland, focused on simple UX, product presentation, and WooCommerce-based commerce.",
    persianSummary:
      "ایده و طراحی فروشگاه آنلاین فارسی برای فروش محصولات و خوراکی‌های ایرانی در سوئیس.",
    highlights: [
      "Persian storefront concept",
      "WooCommerce structure planning",
      "Product category planning",
      "Theme evaluation and customization planning",
    ],
    technologies: ["WordPress", "WooCommerce", "UI/UX Planning", "eCommerce"],
    previewImage: "/project-assets/iranian-store/hero.png",
    previewPosition: "center top",
  },
  {
    title: "ESP32 / Arduino IoT Experiments",
    category: "IoT / Embedded",
    description:
      "A collection of embedded and IoT experiments using ESP32 and Arduino, including relay control, local web servers, RF communication, and OLED display integration.",
    persianSummary:
      "مجموعه پروژه‌های اینترنت اشیا با ESP32 و Arduino برای کنترل رله، وب‌سرور محلی، RF433 و نمایشگر OLED.",
    highlights: [
      "ESP32 local web server",
      "Relay control experiments",
      "RF433 receiver and transmitter testing",
      "OLED integration and hardware troubleshooting",
    ],
    technologies: ["ESP32", "Arduino", "C/C++", "RF433", "OLED", "Web Server"],
  },
  {
    title: "Academic Programming & Engineering Projects",
    category: "University Projects",
    description:
      "A set of academic projects and exercises covering MATLAB programming, business intelligence presentations, IoT in e-commerce, compiler concepts, and engineering problem solving.",
    persianSummary:
      "تمرین‌ها و پروژه‌های دانشگاهی در زمینه MATLAB، هوش تجاری، IoT، کامپایلر و حل مسائل مهندسی.",
    highlights: [
      "MATLAB functions and matrix processing",
      "BI and IoT presentation work",
      "Compiler grammar exercises",
      "Structured academic reports and slide content",
    ],
    technologies: [
      "MATLAB",
      "BI",
      "IoT",
      "Compiler Design",
      "Technical Writing",
    ],
  },
];

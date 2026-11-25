
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        talk: "Let's talk"
      },
      hero: {
        availability: "AVAILABLE FOR OPPORTUNITIES",
        eyebrow: "BACKEND ENGINEERING / INTERNET OF THINGS",
        line1: "I BUILD",
        line2: "SYSTEMS THAT",
        line3: "CONNECT.",
        description: "I build backend systems, develop IoT solutions and connect software with the physical world. Turning ideas into practical technology.",
        explore: "Explore my work",
        contact: "Contact me",
        software: "SOFTWARE × HARDWARE",
        ready: "Ready to build",
        caption1: "BUILDING THE",
        caption2: "DIGITAL + PHYSICAL",
        caption3: "WORLD",
        scroll: "SCROLL TO EXPLORE"
      },
      about: {
        eyebrow: "01 / ABOUT ME",
        title1: "Software meets",
        title2: "the real world.",
        p1: "I'm a developer interested in building systems that bring software and hardware together.",
        p2: "My work spans backend development, API design, embedded programming and IoT solutions. I enjoy solving practical problems and turning complex ideas into working products."
      },
      experience: {
        eyebrow: "02 / EXPERIENCE",
        title1: "Where I've",
        title2: "worked.",
        intro: "Professional experience in backend development, IoT systems and software engineering.",
        segDate: "Aug 2025 — Present",
        segRole: "IoT & Backend Developer",
        segCompany: "SEG · IoT & Technology",
        segDescription: "Developing IoT solutions, embedded systems and backend services. Working with ESP32, MQTT, C++ and web technologies to build connected products.",
        previousDate: "Previous Experience",
        previousRole: "Backend Developer",
        previousCompany: "Quchan University of Technology · Digital Marketing Team",
        previousDescription: "Developed backend services and supported web-based applications as the primary developer."
      },
      skills: {
        eyebrow: "03 / TECHNICAL SKILLS",
        title1: "Tools of",
        title2: "my trade.",
        intro: "Technologies and tools I use to design, develop and build practical solutions."
      },
      projects: {
        eyebrow: "04 / SELECTED WORK",
        title1: "Things I've",
        title2: "been building.",
        intro: "A selection of projects where software, automation and hardware come together. Select a project to explore its details.",
        category1: "Automation · Python",
        description1: "A job discovery platform that automates searching, analyzing and matching job opportunities across recruitment websites.",
        overview1: "An automation platform that searches recruitment websites, evaluates job listings against resume profiles and sends relevant opportunities through Telegram.",
        features1: [
          "Automated browser workflows with Playwright",
          "Resume parsing and job-to-profile matching",
          "Telegram-based interaction and notifications",
          "Separate automation flows for supported recruitment platforms"
        ],
        category2: "IoT · Embedded Systems",
        description2: "An ESP32-based smart air conditioner controller with Wi-Fi connectivity, MQTT communication and remote control.",
        overview2: "An ESP32-based controller designed to connect an air conditioner to a network and provide remote control through an embedded web interface and MQTT communication.",
        features2: [
          "Wi-Fi configuration and network connectivity",
          "Infrared command transmission and reception",
          "MQTT-based remote communication",
          "Embedded web interface and local configuration storage"
        ],
        category3: "IoT · Backend",
        description3: "An access control system combining an ESP32 fingerprint device with a Django-based web backend and REST API.",
        overview3: "A hardware and software access-control solution. The embedded device handles fingerprint-sensor communication, while the web application provides backend services and management interfaces.",
        features3: [
          "Fingerprint sensor integration with ESP32",
          "Backend services and REST API",
          "Web-based management interface",
          "Separation of embedded firmware and web application"
        ],
        category4: "Desktop · Backend · Database",
        description4: "A university student-management system built with a Windows desktop client and a centralized ASP.NET Core API.",
        overview4: "A client-server application for university student administration. The Windows desktop client communicates with a centralized REST API, which is responsible for application data access and database operations.",
        features4: [
          "Windows desktop client built with WPF and .NET 8",
          "Centralized ASP.NET Core Web API and Entity Framework Core",
          "PostgreSQL database with EF Core migrations",
          "JWT authentication and BCrypt password hashing",
          "Windows DPAPI protection for local configuration",
          "Temporary account lockout after repeated failed login attempts",
          "Excel import/export support",
          "Docker-based server deployment and PowerShell maintenance scripts"
        ],
        sourceAvailable: "Source available",
        noDemo: "Source available · No live demo",
        privateProject: "Private academic project",
        mainRepository: "Main repository",
        githubRepository: "GitHub repository",
        deviceRepository: "Device repository",
        webRepository: "Web application repository",
        keyFeatures: "Key features",
        technologyStack: "Technology stack",
        screenshots: "Screenshots",
        close: "Close project details",
        closeImage: "Close image",
        image1: "Main AC dashboard",
        image2: "AC mode and fan settings",
        image3: "Scheduling and environment monitoring",
        image4: "IR remote learning interface",
        image5: "Registered devices",
        image6: "System activity logs",
        image7: "User management interface",
        image8: "ESP32 onboard file manager",
        studentImage1: "Student Management login screen",
        studentImage2: "Student Management dashboard",
        studentImage3: "Student archive and records table",
        studentImage4: "Student registration form",
        studentImage5: "Bulk student registration from Excel",
        studentLabel1: "Login screen",
        studentLabel2: "Dashboard",
        studentLabel3: "Student archive",
        studentLabel4: "Student registration",
        studentLabel5: "Excel import"
      },
      contact: {
        eyebrow: "05 / CONTACT",
        title1: "Let's start a",
        title2: "conversation.",
        intro: "Have a project, an idea or an opportunity? I'm open to meaningful collaborations and interesting technical challenges.",
        sendEmail: "Send me an email",
        email: "Email",
        phone: "Phone",
        linkedin: "Professional Profile",
        github: "Source Code & Projects",
        footer: "Designed & built with React"
      },
      common: {
        backend: "Backend",
        iot: "IoT Systems",
        copyright: "© 2026 Nima Mojarradi"
      }
    }
  },

  fa: {
    translation: {
      nav: {
        about: "درباره من",
        experience: "سوابق کاری",
        skills: "مهارت‌ها",
        projects: "پروژه‌ها",
        contact: "تماس",
        talk: "شروع همکاری"
      },

      hero: {
        availability: "آماده همکاری در پروژه‌های جدید",
        eyebrow: "توسعه بک‌اند و اینترنت اشیا",
        line1: "ایده‌ها را",
        line2: "به سیستم‌های",
        line3: "کاربردی تبدیل می‌کنم.",
        description: "در زمینه توسعه بک‌اند و ساخت راهکارهای اینترنت اشیا فعالیت می‌کنم؛ از طراحی سرویس‌های نرم‌افزاری و API گرفته تا برنامه‌نویسی سخت‌افزار و اتصال آن به شبکه.",
        explore: "مشاهده پروژه‌ها",
        contact: "تماس با من",
        software: "نرم‌افزار × سخت‌افزار",
        ready: "آماده ساخت راهکارهای جدید",
        caption1: "از ایده تا",
        caption2: "اتصال دنیای دیجیتال",
        caption3: "به دنیای واقعی",
        scroll: "برای مشاهده بیشتر، اسکرول کنید"
      },

      about: {
        eyebrow: "۰۱ / درباره من",
        title1: "جایی که نرم‌افزار",
        title2: "به دنیای واقعی می‌رسد.",
        p1: "من یک توسعه‌دهنده نرم‌افزار هستم که به طراحی و ساخت سیستم‌هایی علاقه دارم که نرم‌افزار و سخت‌افزار را به یکدیگر متصل می‌کنند.",
        p2: "فعالیت من حوزه‌هایی مثل توسعه بک‌اند، طراحی API، برنامه‌نویسی سیستم‌های نهفته و اینترنت اشیا را در بر می‌گیرد. در پروژه‌هایم تلاش می‌کنم مسائل واقعی را به راهکارهایی قابل‌اجرا و قابل‌استفاده تبدیل کنم."
      },

      experience: {
        eyebrow: "۰۲ / سوابق کاری",
        title1: "تجربه‌هایی که",
        title2: "مسیرم را ساخته‌اند.",
        intro: "تجربه عملی در توسعه نرم‌افزار، طراحی سرویس‌های بک‌اند و پیاده‌سازی سیستم‌های اینترنت اشیا.",
        segDate: "مرداد ۱۴۰۴ تا امروز",
        segRole: "توسعه‌دهنده بک‌اند و اینترنت اشیا",
        segCompany: "SEG · حوزه فناوری و اینترنت اشیا",
        segDescription: "توسعه راهکارهای اینترنت اشیا، برنامه‌نویسی سیستم‌های نهفته و پیاده‌سازی سرویس‌های بک‌اند. کار با ESP32، MQTT، زبان C++ و فناوری‌های وب برای ساخت محصولات و سیستم‌های متصل.",
        previousDate: "سوابق پیشین",
        previousRole: "توسعه‌دهنده بک‌اند",
        previousCompany: "دانشگاه صنعتی قوچان · تیم بازاریابی دیجیتال",
        previousDescription: "طراحی و توسعه سرویس‌های سمت سرور و پیاده‌سازی قابلیت‌های بک‌اند اپلیکیشن‌های تحت وب به‌عنوان توسعه‌دهنده اصلی تیم."
      },

      skills: {
        eyebrow: "۰۳ / مهارت‌های فنی",
        title1: "ابزارهایی برای",
        title2: "ساختن راهکارها.",
        intro: "زبان‌ها، فناوری‌ها و ابزارهایی که در طراحی و توسعه نرم‌افزار، سرویس‌های بک‌اند و سیستم‌های متصل به کار می‌گیرم."
      },

      projects: {
        eyebrow: "۰۴ / پروژه‌های منتخب",
        title1: "بخشی از کارهایی که",
        title2: "توسعه داده‌ام.",
        intro: "منتخبی از پروژه‌های من در زمینه توسعه نرم‌افزار، اتوماسیون و اینترنت اشیا. برای آشنایی بیشتر با جزئیات فنی هر پروژه، آن را انتخاب کنید.",

        category1: "اتوماسیون · پایتون",
        description1: "سامانه‌ای برای جست‌وجو و بررسی آگهی‌های استخدامی و پیدا کردن فرصت‌های شغلی متناسب با رزومه کاربران.",
        overview1: "یک سامانه اتوماسیون کاریابی که وب‌سایت‌های استخدامی را بررسی می‌کند، آگهی‌ها را بر اساس اطلاعات رزومه ارزیابی می‌کند و فرصت‌های مرتبط را از طریق تلگرام در اختیار کاربر قرار می‌دهد.",
        features1: [
          "خودکارسازی فرایندهای مرورگر با Playwright",
          "استخراج اطلاعات رزومه و تطبیق آن با آگهی‌های شغلی",
          "تعامل با کاربر و ارسال اعلان از طریق تلگرام",
          "پیاده‌سازی فرایندهای مستقل برای وب‌سایت‌های کاریابی مختلف"
        ],

        category2: "اینترنت اشیا · سیستم‌های نهفته",
        description2: "کنترلر هوشمند کولر مبتنی بر ESP32 با قابلیت اتصال به Wi-Fi، ارتباط MQTT و کنترل از راه دور.",
        overview2: "یک کنترلر مبتنی بر ESP32 که امکان اتصال کولر به شبکه و مدیریت آن از راه دور را فراهم می‌کند. این سیستم از ارتباط مادون قرمز، پروتکل MQTT و یک رابط وب داخلی برای کنترل و تنظیمات استفاده می‌کند.",
        features2: [
          "پیکربندی Wi-Fi و اتصال به شبکه",
          "ارسال و دریافت فرمان‌های مادون قرمز",
          "ارتباط و کنترل از راه دور با استفاده از MQTT",
          "رابط وب داخلی و ذخیره‌سازی تنظیمات روی دستگاه"
        ],

        category3: "اینترنت اشیا · بک‌اند",
        description3: "سیستم کنترل تردد با دستگاه ثبت اثر انگشت مبتنی بر ESP32 و پنل مدیریتی تحت وب با Django و REST API.",
        overview3: "راهکاری ترکیبی از سخت‌افزار و نرم‌افزار برای مدیریت و کنترل تردد. دستگاه مبتنی بر ESP32 ارتباط با حسگر اثر انگشت را مدیریت می‌کند و اپلیکیشن وب، سرویس‌های بک‌اند و امکانات مدیریتی سیستم را در اختیار قرار می‌دهد.",
        features3: [
          "راه‌اندازی و ارتباط حسگر اثر انگشت با ESP32",
          "توسعه سرویس‌های بک‌اند و REST API",
          "طراحی رابط تحت وب برای مدیریت سیستم",
          "تفکیک فریم‌ور دستگاه از اپلیکیشن وب"
        ],

        category4: "نرم‌افزار دسکتاپ · بک‌اند · پایگاه داده",
        description4: "سامانه مدیریت دانشجویان با نرم‌افزار دسکتاپ ویندوز و یک API مرکزی مبتنی بر ASP.NET Core.",
        overview4: "یک نرم‌افزار با معماری کلاینت-سرور برای مدیریت اطلاعات دانشجویان. برنامه دسکتاپ ویندوز از طریق REST API با سرور مرکزی ارتباط برقرار می‌کند و پردازش اطلاعات و عملیات پایگاه داده در سمت سرور انجام می‌شود.",
        features4: [
          "توسعه نرم‌افزار دسکتاپ ویندوز با WPF و .NET 8",
          "پیاده‌سازی ASP.NET Core Web API و Entity Framework Core",
          "استفاده از PostgreSQL و Migrationهای EF Core",
          "احراز هویت با JWT و هش‌کردن رمزهای عبور با BCrypt",
          "محافظت از تنظیمات محلی با Windows DPAPI",
          "قفل موقت حساب پس از چند تلاش ناموفق برای ورود",
          "قابلیت ورود و خروج اطلاعات از فایل‌های Excel",
          "استقرار سرور با Docker و اسکریپت‌های مدیریتی PowerShell"
        ],

        sourceAvailable: "مشاهده کد منبع",
        noDemo: "کد منبع موجود است · نسخه آنلاین ندارد",
        privateProject: "پروژه دانشگاهی · کد منبع خصوصی",
        mainRepository: "مخزن اصلی پروژه",
        githubRepository: "مخزن گیت‌هاب",
        deviceRepository: "مخزن کد دستگاه",
        webRepository: "مخزن اپلیکیشن وب",
        keyFeatures: "قابلیت‌های کلیدی",
        technologyStack: "فناوری‌های استفاده‌شده",
        screenshots: "تصاویر محیط برنامه",
        close: "بستن جزئیات پروژه",
        closeImage: "بستن تصویر",

        image1: "داشبورد اصلی کنترل کولر",
        image2: "تنظیم حالت عملکرد و سرعت فن",
        image3: "زمان‌بندی و پایش شرایط محیط",
        image4: "رابط یادگیری فرمان‌های ریموت مادون قرمز",
        image5: "فهرست دستگاه‌های ثبت‌شده",
        image6: "گزارش فعالیت‌های سیستم",
        image7: "بخش مدیریت کاربران",
        image8: "مدیریت فایل‌های داخلی ESP32",

        studentImage1: "صفحه ورود به سامانه مدیریت دانشجویان",
        studentImage2: "داشبورد اصلی سامانه",
        studentImage3: "بایگانی و فهرست اطلاعات دانشجویان",
        studentImage4: "فرم ثبت اطلاعات دانشجو",
        studentImage5: "ثبت گروهی اطلاعات دانشجویان از فایل Excel",

        studentLabel1: "صفحه ورود",
        studentLabel2: "داشبورد",
        studentLabel3: "بایگانی دانشجویان",
        studentLabel4: "ثبت اطلاعات دانشجو",
        studentLabel5: "ورود اطلاعات از Excel"
      },

      contact: {
        eyebrow: "۰۵ / ارتباط",
        title1: "برای شروع یک",
        title2: "همکاری آماده‌ام.",
        intro: "اگر ایده‌ای برای توسعه یک محصول، پروژه‌ای فنی یا پیشنهادی برای همکاری دارید، خوشحال می‌شوم درباره آن صحبت کنیم.",
        sendEmail: "ارسال پیام از طریق ایمیل",
        email: "ایمیل",
        phone: "شماره تماس",
        linkedin: "پروفایل حرفه‌ای",
        github: "پروژه‌ها و کدهای من",
        footer: "طراحی و توسعه با React"
      },

      common: {
        backend: "بک‌اند",
        iot: "اینترنت اشیا",
        copyright: "© ۲۰۲۶ نیما مجرادی"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

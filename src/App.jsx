
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Mail,
  ArrowUpRight,
  Code2,
  Cpu,
  Server,
  Globe,
  ChevronDown,
  X,
  ExternalLink,
  LockKeyhole,
  Monitor,
  Image as ImageIcon,
  Sun,
  Moon,
  Network,
  Boxes,
} from "lucide-react";

import {
  SiGithub,
  SiPython,
  SiDjango,
  SiFastapi,
  SiCplusplus,
  SiArduino,
  SiEspressif,
  SiMqtt,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiLinux,
  SiSharp
} from "react-icons/si";

import "./App.css";
import "./theme.css";

/* =========================
   Skills
========================= */

const skills = [
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB"
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "#44A36F"
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688"
  },
  {
    name: "REST API",
    icon: Network,
    color: "#9B83FF"
  },
  {
    name: "C#",
    icon: SiSharp,
    color: "#9B4F96"
  },
  {
    name: ".NET 8",
    icon: Boxes,
    color: "#512BD4"
  },
  {
    name: "WPF",
    icon: Monitor,
    color: "#7B68EE"
  },
  {
    name: "ASP.NET Core",
    icon: Server,
    color: "#512BD4"
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1"
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C"
  },
  {
    name: "Arduino",
    icon: SiArduino,
    color: "#00979D"
  },
  {
    name: "ESP32",
    icon: SiEspressif,
    color: "#E7352C"
  },
  {
    name: "MQTT",
    icon: SiMqtt,
    color: "#660066"
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED"
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032"
  },
  {
    name: "Linux",
    icon: SiLinux,
    color: "#FCC624"
  }
];

/* =========================
   Projects
========================= */

const projects = [
  {
    number: "01",
    title: "Job Hunter",
    categoryKey: "category1",
    descriptionKey: "description1",
    overviewKey: "overview1",
    featuresKey: "features1",
    tags: ["Python", "Playwright", "Telegram", "FastAPI"],
    icon: Globe,
    technologies: [
      "Python",
      "Playwright",
      "FastAPI",
      "Telegram Bot API"
    ],
    links: [
      {
        labelKey: "mainRepository",
        url: "https://github.com/nima-mojarradi/Job_hunter.git"
      }
    ],
    statusKey: "sourceAvailable"
  },
  {
    number: "02",
    title: "Smart AC Controller",
    categoryKey: "category2",
    descriptionKey: "description2",
    overviewKey: "overview2",
    featuresKey: "features2",
    tags: ["ESP32", "C++", "MQTT", "Arduino"],
    icon: Cpu,
    technologies: [
      "ESP32-WROVER",
      "C++",
      "Arduino",
      "MQTT",
      "WiFiManager",
      "LittleFS"
    ],
    images: [
      {
        src: "https://raw.githubusercontent.com/nima-mojarradi/ac_mqtt_controller/main/brave_screenshot_my-ac.local.png",
        altKey: "image1",
        labelKey: "image1"
      },
      {
        src: "https://raw.githubusercontent.com/nima-mojarradi/ac_mqtt_controller/main/brave_screenshot_my-ac.local%20(2).png",
        altKey: "image2",
        labelKey: "image2"
      },
      {
        src: "https://raw.githubusercontent.com/nima-mojarradi/ac_mqtt_controller/main/brave_screenshot_my-ac.local%20(1).png",
        altKey: "image3",
        labelKey: "image3"
      },
      {
        src: "https://raw.githubusercontent.com/nima-mojarradi/ac_mqtt_controller/main/brave_screenshot_my-ac.local%20(6).png",
        altKey: "image4",
        labelKey: "image4"
      },
      {
        src: "https://raw.githubusercontent.com/nima-mojarradi/ac_mqtt_controller/main/brave_screenshot_my-ac.local%20(7).png",
        altKey: "image5",
        labelKey: "image5"
      },
      {
        src: "https://raw.githubusercontent.com/nima-mojarradi/ac_mqtt_controller/main/brave_screenshot_my-ac.local%20(4).png",
        altKey: "image6",
        labelKey: "image6"
      },
      {
        src: "https://raw.githubusercontent.com/nima-mojarradi/ac_mqtt_controller/main/brave_screenshot_my-ac.local%20(3).png",
        altKey: "image7",
        labelKey: "image7"
      },
      {
        src: "https://raw.githubusercontent.com/nima-mojarradi/ac_mqtt_controller/main/brave_screenshot_my-ac.local%20(5).png",
        altKey: "image8",
        labelKey: "image8"
      }
    ],
    links: [
      {
        labelKey: "githubRepository",
        url: "https://github.com/nima-mojarradi/ac_mqtt_controller.git"
      }
    ],
    statusKey: "sourceAvailable"
  },
  {
    number: "03",
    title: "Fingerprint Access Control",
    categoryKey: "category3",
    descriptionKey: "description3",
    overviewKey: "overview3",
    featuresKey: "features3",
    tags: ["ESP32", "Django", "Python", "REST API"],
    icon: Server,
    technologies: [
      "ESP32",
      "C++",
      "Django",
      "Python",
      "REST API"
    ],
    links: [
      {
        labelKey: "deviceRepository",
        url: "https://github.com/nima-mojarradi/finger_print_device.git"
      },
      {
        labelKey: "webRepository",
        url: "https://github.com/nima-mojarradi/finger_print-web.git"
      }
    ],
    statusKey: "noDemo"
  },
  {
    number: "04",
    title: "Student Management System",
    categoryKey: "category4",
    descriptionKey: "description4",
    overviewKey: "overview4",
    featuresKey: "features4",
    tags: [
      "C#",
      ".NET 8",
      "WPF",
      "ASP.NET Core",
      "PostgreSQL"
    ],
    icon: Monitor,
    technologies: [
      "C#",
      ".NET 8",
      "WPF",
      "MaterialDesignThemes",
      "ASP.NET Core 8",
      "EF Core 8",
      "PostgreSQL 17",
      "Npgsql",
      "JWT",
      "BCrypt",
      "DPAPI",
      "ClosedXML",
      "Docker",
      "PowerShell"
    ],
    images: [
      {
        src: "/images/student-login.png",
        altKey: "studentImage1",
        labelKey: "studentLabel1"
      },
      {
        src: "/images/student-dashboard.png",
        altKey: "studentImage2",
        labelKey: "studentLabel2"
      },
      {
        src: "/images/student-archive.png",
        altKey: "studentImage3",
        labelKey: "studentLabel3"
      },
      {
        src: "/images/student-form.png",
        altKey: "studentImage4",
        labelKey: "studentLabel4"
      },
      {
        src: "/images/student-excel.png",
        altKey: "studentImage5",
        labelKey: "studentLabel5"
      }
    ],
    statusKey: "privateProject"
  }
];

/* =========================
   Project Details Modal
========================= */

function ProjectDetails({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(null);
  const { t } = useTranslation();
  const Icon = project.icon;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (activeImage) {
          setActiveImage(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage, onClose]);

  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={t("projects.close")}
        >
          <X size={21} />
        </button>

        <div className="modal-heading">
          <div className="project-icon modal-project-icon">
            <Icon size={27} />
          </div>

          <div>
            <p className="project-category">
              {t(`projects.${project.categoryKey}`)}
            </p>

            <h2 id="project-modal-title">
              {project.title}
            </h2>

            <span className="project-status">
              <LockKeyhole size={13} />
              {t(`projects.${project.statusKey}`)}
            </span>
          </div>
        </div>

        <p className="modal-overview">
          {t(`projects.${project.overviewKey}`)}
        </p>

        <div className="modal-section">
          <h3>
            <Code2 size={17} />
            {t("projects.keyFeatures")}
          </h3>

          <ul className="feature-list">
            {t(`projects.${project.featuresKey}`, {
              returnObjects: true
            }).map((feature) => (
              <li key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h3>
            <Cpu size={17} />
            {t("projects.technologyStack")}
          </h3>

          <div className="project-tags modal-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>

        {project.images && (
          <div className="modal-section">
            <h3>
              <ImageIcon size={17} />
              {t("projects.screenshots")}
            </h3>

            <div className="project-gallery">
              {project.images.map((image) => (
                <button
                  className="gallery-item"
                  key={image.src}
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    src={image.src}
                    alt={t(`projects.${image.altKey}`)}
                  />

                  <span>
                    {t(`projects.${image.labelKey}`)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {project.links?.length > 0 && (
          <div className="modal-links">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                <SiGithub size={17} />
                {t(`projects.${link.labelKey}`)}
                <ExternalLink size={15} />
              </a>
            ))}
          </div>
        )}
      </section>

      {activeImage && (
        <div
          className="lightbox"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveImage(null);
            }
          }}
        >
          <button
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label={t("projects.closeImage")}
          >
            <X size={24} />
          </button>

          <img
            src={activeImage.src}
            alt={t(`projects.${activeImage.altKey}`)}
          />

          <p>
            {t(`projects.${activeImage.labelKey}`)}
          </p>
        </div>
      )}
    </div>
  );
}

/* =========================
   Main App
========================= */

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const { t, i18n } = useTranslation();
  const isFa = i18n.language.startsWith("fa");

  /* Theme management */

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  /* Language management */

  useEffect(() => {
    const language = isFa ? "fa" : "en";

    document.documentElement.lang = language;
    document.documentElement.dir = isFa ? "rtl" : "ltr";

    localStorage.setItem("language", language);
  }, [isFa]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <main>
      {/* Navbar */}

      <nav className="navbar container">
        <a href="#" className="brand">
          NM<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">{t("nav.about")}</a>
          <a href="#experience">{t("nav.experience")}</a>
          <a href="#skills">{t("nav.skills")}</a>
          <a href="#projects">{t("nav.projects")}</a>
          <a href="#contact">{t("nav.contact")}</a>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <div
            className="language-toggle"
            aria-label="Language selector"
          >
            <button
              className={!isFa ? "active" : ""}
              onClick={() => changeLanguage("en")}
              aria-pressed={!isFa}
            >
              EN
            </button>

            <button
              className={isFa ? "active" : ""}
              onClick={() => changeLanguage("fa")}
              aria-pressed={isFa}
            >
              FA
            </button>
          </div>

          <a className="nav-button" href="#contact">
            {t("nav.talk")}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero */}

      <section className="hero container">
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="status-dot"></span>
            {t("hero.availability")}
          </div>

          <p className="eyebrow">
            {t("hero.eyebrow")}
          </p>

          <h1>
            {t("hero.line1")}<br />
            {t("hero.line2")}<br />
            <span>{t("hero.line3")}</span>
          </h1>

          <p className="hero-description">
            {t("hero.description")}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              {t("hero.explore")}
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              {t("hero.contact")}
            </a>
          </div>

          <div className="hero-bottom">
            <div className="social-links">
              <a
                href="https://github.com/nima-mojarradi"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub size={19} />
                GitHub
              </a>

              <a href="mailto:nima.mojarradi83@gmail.com">
                <Mail size={19} />
                Email
              </a>
            </div>

            <span className="hero-location">
              {t("hero.software")}
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-grid"></div>
          <div className="visual-glow"></div>

          <div className="visual-index">
            01<span> / 04</span>
          </div>

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="code-card">
            <div className="code-header">
              <div className="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span>developer.py</span>
              <span className="code-header-type">PYTHON</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">class</span> Developer:
              </p>

              <p className="indent">
                <span className="code-purple">def</span> __init__(self):
              </p>

              <p className="indent double">
                self.name = <span className="code-green">"Nima"</span>
              </p>

              <p className="indent double">
                self.focus = [
              </p>

              <p className="indent triple">
                <span className="code-green">"Backend"</span>,
              </p>

              <p className="indent triple">
                <span className="code-green">"IoT"</span>,
              </p>

              <p className="indent triple">
                <span className="code-green">"Embedded Systems"</span>
              </p>

              <p className="indent double">]</p>

              <p className="indent double">
                self.building = <span className="code-blue">True</span>
              </p>

              <p className="code-comment">
                # Always learning, always building.
              </p>
            </div>

            <div className="code-footer">
              <span>
                <span className="status-dot"></span>
                {t("hero.ready")}
              </span>

              <span>ESP32 · API · MQTT</span>
            </div>
          </div>

          <div className="floating-chip chip-top">
            <Code2 size={18} />
            {t("common.backend")}
          </div>

          <div className="floating-chip chip-bottom">
            <Cpu size={18} />
            {t("common.iot")}
          </div>

          <div className="visual-caption">
            <span>{t("hero.caption1")}</span>
            <strong>{t("hero.caption2")}</strong>
            <span>{t("hero.caption3")}</span>
          </div>
        </div>

        <a href="#about" className="scroll-indicator">
          <ChevronDown size={18} />
          {t("hero.scroll")}
        </a>
      </section>

      {/* About */}

      <section id="about" className="section container">
        <p className="eyebrow">
          {t("about.eyebrow")}
        </p>

        <div className="section-heading">
          <h2>
            {t("about.title1")}<br />
            <span>{t("about.title2")}</span>
          </h2>

          <div className="about-text">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
        </div>
      </section>

      {/* Experience */}

      <section id="experience" className="section container">
        <p className="eyebrow">
          {t("experience.eyebrow")}
        </p>

        <div className="section-heading">
          <h2>
            {t("experience.title1")}<br />
            <span>{t("experience.title2")}</span>
          </h2>

          <p className="section-intro">
            {t("experience.intro")}
          </p>
        </div>

        <div className="experience-list">
          <article className="experience-card">
            <div className="experience-date">
              {t("experience.segDate")}
            </div>

            <div className="experience-details">
              <h3>{t("experience.segRole")}</h3>

              <p className="experience-company">
                {t("experience.segCompany")}
              </p>

              <p>{t("experience.segDescription")}</p>

              <div className="project-tags">
                {["ESP32", "C++", "MQTT", "Python", "Backend"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="experience-card">
            <div className="experience-date">
              {t("experience.previousDate")}
            </div>

            <div className="experience-details">
              <h3>{t("experience.previousRole")}</h3>

              <p className="experience-company">
                {t("experience.previousCompany")}
              </p>

              <p>{t("experience.previousDescription")}</p>

              <div className="project-tags">
                {["Python", "Django", "REST API"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Skills */}

      <section id="skills" className="section container">
        <p className="eyebrow">
          {t("skills.eyebrow")}
        </p>

        <div className="section-heading">
          <h2>
            {t("skills.title1")}<br />
            <span>{t("skills.title2")}</span>
          </h2>

          <p className="section-intro">
            {t("skills.intro")}
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                className="skill-item"
                key={skill.name}
                style={{
                  "--skill-color": skill.color
                }}
              >
                <span className="skill-icon">
                  <Icon size={27} />
                </span>

                <span className="skill-name">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects */}

      <section id="projects" className="section container">
        <p className="eyebrow">
          {t("projects.eyebrow")}
        </p>

        <div className="projects-heading">
          <h2>
            {t("projects.title1")}<br />
            <span>{t("projects.title2")}</span>
          </h2>

          <p className="section-intro">
            {t("projects.intro")}
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <button
                type="button"
                className="project-card project-card-button"
                key={project.number}
                onClick={() => setSelectedProject(project)}
              >
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-icon">
                  <Icon size={27} />
                </span>

                <span className="project-info">
                  <span className="project-category">
                    {t(`projects.${project.categoryKey}`)}
                  </span>

                  <span className="project-title">
                    {project.title}
                  </span>

                  <span className="project-description">
                    {t(`projects.${project.descriptionKey}`)}
                  </span>

                  <span className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </span>
                </span>

                <ArrowUpRight
                  className="project-arrow"
                  size={23}
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* Contact */}

      <section id="contact" className="contact-section">
        <div className="container contact-content">
          <p className="eyebrow">
            {t("contact.eyebrow")}
          </p>

          <div className="contact-layout">
            <div className="contact-intro">
              <h2>
                {t("contact.title1")}<br />
                <span>{t("contact.title2")}</span>
              </h2>

              <p>{t("contact.intro")}</p>

              <a
                href="mailto:nima.mojarradi83@gmail.com"
                className="primary-button"
              >
                {t("contact.sendEmail")}
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contact-methods">
              <a
                href="mailto:nima.mojarradi83@gmail.com"
                className="contact-method"
              >
                <Mail size={22} />

                <div>
                  <span>{t("contact.email")}</span>
                  <strong>nima.mojarradi83@gmail.com</strong>
                </div>

                <ArrowUpRight size={18} />
              </a>

              <a
                href="tel:+989355882436"
                className="contact-method"
              >
                <Globe size={22} />

                <div>
                  <span>{t("contact.phone")}</span>
                  <strong dir="ltr">+98 935 588 2436</strong>
                </div>

                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/nima-mojarradi-004397246/"
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >
                <ExternalLink size={22} />

                <div>
                  <span>LinkedIn</span>
                  <strong>{t("contact.linkedin")}</strong>
                </div>

                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://github.com/nima-mojarradi"
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >
                <SiGithub size={22} />

                <div>
                  <span>GitHub</span>
                  <strong>{t("contact.github")}</strong>
                </div>

                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="contact-footer">
            <span>{t("common.copyright")}</span>

            <a
              href="https://github.com/nima-mojarradi"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub size={17} />
              GitHub
            </a>

            <span>{t("contact.footer")}</span>
          </div>
        </div>
      </section>

      {/* Project Modal */}

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}

export default App;

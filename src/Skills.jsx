
import { useTranslation } from "react-i18next";
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiCplusplus,
  SiArduino,
  SiEspressif,
  SiMqtt,
  SiPostgresql,
  SiGit,
  SiLinux,
  SiJavascript
} from "react-icons/si";
import { Network } from "lucide-react";

const skills = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "REST API", icon: Network, color: "#9B83FF" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Arduino", icon: SiArduino, color: "#00979D" },
  { name: "ESP32", icon: SiEspressif, color: "#E7352C" },
  { name: "MQTT", icon: SiMqtt, color: "#660066" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section container">
      <div className="section-heading">
        <div>
          <span className="section-eyebrow">
            {t("skills.eyebrow")}
          </span>

          <h2>
            {t("skills.title1")} <br />
            <span>{t("skills.title2")}</span>
          </h2>
        </div>

        <p className="section-intro">
          {t("skills.intro")}
        </p>
      </div>

      <div className="skills-grid">
        {skills.map(({ name, icon: Icon, color }) => (
          <div
            className="skill-item"
            key={name}
            style={{ "--skill-color": color }}
          >
            <span className="skill-icon">
              <Icon size={25} />
            </span>

            <span className="skill-name">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

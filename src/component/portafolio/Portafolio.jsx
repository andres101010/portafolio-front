import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react"; import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../../assets/img/andres.jpg"
/*
  CÓMO PERSONALIZAR:
  1. Busca "[Tu Nombre]" y reemplázalo (aparece en NAME más abajo, ya centralizado).
  2. Cambia ROLE, STACK y STATUS si quieres otro mensaje en el hero.
  3. En AVATAR, reemplaza el placeholder por tu foto: <img src="/tu-foto.jpg" className="w-full h-full object-cover rounded-xl" />
  4. Edita el array PROJECTS con tus proyectos reales (título, descripción, tecnologías, links de GitHub/demo).
  5. Edita CONTACT con tu email, usuario de GitHub y LinkedIn.
*/

const NAME = "Andres Ricardo Morales";
const ROLE = "Full Stack JavaScript Developer";
const STACK = ["React", "React native", "Next.js", "Vue", "Angular", "Node", "Express", "MySql", "SQL", "Mongo DB"];
const STATUS = "Disponible para nuevos proyectos";

const PROJECTS = [
  {
  "file": "Alquiler de casetas Para Mercados",
  "tag": "Node · Express · React · MongoDB",
  "title": "Sistema Para El Control De Pago De Alquiler Para Mercados",
  "desc": "He desarrollado una plataforma integral para la gestión eficiente de mercados y arrendatarios. Con este sistema, los administradores pueden optimizar el cobro de rentas y mejorar el control financiero de los puestos de mercado.\n\n🔹 Funcionalidades principales:\n✅ Inicio de sesión y gestión de usuarios 👥\n✅ Registro y administración de mercados y arrendatarios 📋\n✅ Pagos digitales de los puestos asignados 💳\n✅ Generación de actas de entrega 📄\n✅ Historial de pagos y observaciones 🔍\n✅ Gráficos de estadísticas para análisis financiero 📊\n\n💡 Tecnología utilizada:\nDesarrollado con Node.js, Express, React.js y MongoDB, garantizando un sistema escalable, rápido y seguro.",
  "tech": ["React.js", "Node", "Express", "MongoDB", "JWT"],
  "github": "https://github.com/andres101010/mercados-front",
  "demo": "https://mercados-front.vercel.app/",
  "credenciales": { user: "admin@gmail.com", password: "1234"}
},

  {
    file: "🌍 Proyecto de Localización y Moneda",
    tag: "React · Node · Express",
    title: "Localización y Moneda",
    desc: "El proyecto permite obtener automáticamente la moneda local del usuario con base en su dirección IP. Se utiliza una combinación de APIs para determinar el país y luego consultar la moneda correspondiente. Se obtiene la IP desde el backend usando req.ip o una API externa. Consultar la API de geolocalización. Se usa una API similar para obtener el país del usuario. Determinar la moneda del país. Se consulta restcountries.com para obtener el código y símbolo de la moneda. Mostrar la moneda en la interfaz de usuario. El frontend en React muestra la información en tiempo real. Al igual que guarda el registro de las monedas buscadas en una base de datos MySql",
    tech: ["React", "Tailwind", "Node", "Express", "MySql"],
    github: "https://github.com/andres101010/geolocation",
    demo: "https://lnkd.in/eFmQeSW6",
   

  },
  {
    file: "Gestor de Tareas",
    tag: "Next",
    title: "Gestor de Tareas colaborativo",
    desc: "Este proyecto busca demostrar el uso integrado de herramientas modernas para construir una aplicación web completa, segura y funcional desde cero. Fue pensado tanto como una práctica de arquitectura full stack como una muestra de habilidades en interfaces limpias y desarrollo orientado al usuario.",
    tech: ["Next", "Tailwind CSS", "TypeScript", "Backend / API"],
    github: "https://github.com/andres101010/lista-de-tareas",
    demo: "https://lista-de-tareas-roan.vercel.app/",

  },
  {
    file: "crm-interno",
    tag: "angular",
    title: "CRM interno",
    desc: "Sistema interno para gestión de clientes y seguimiento de ventas, con reportes exportables.",
    tech: ["Angular", "RxJS", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
];

const CONTACT = {
  email: "andreschapu5295@email.com",
  github: "github.com/andres101010",
  linkedin: "linkedin.com/in/andres-ricardo-morales-b56830234/",
};

const CODE_LINES = [
  [{ c: "text-violet-400", t: "const" }, { c: "text-slate-300", t: " developer = {" }],
  [{ c: "text-sky-300", t: "  name" }, { c: "text-slate-400", t: ": " }, { c: "text-emerald-400", t: `"${NAME}"` }, { c: "text-slate-400", t: "," }],
  [{ c: "text-sky-300", t: "  role" }, { c: "text-slate-400", t: ": " }, { c: "text-emerald-400", t: `"${ROLE}"` }, { c: "text-slate-400", t: "," }],
  [
    { c: "text-sky-300", t: "  stack" },
    { c: "text-slate-400", t: ": [" },
    { c: "text-emerald-400", t: STACK.map((s) => `"${s}"`).join(", ") },
    { c: "text-slate-400", t: "]," },
  ],
  [{ c: "text-sky-300", t: "  status" }, { c: "text-slate-400", t: ": " }, { c: "text-emerald-400", t: `"${STATUS}"` }, { c: "text-slate-400", t: "," }],
  [{ c: "text-slate-300", t: "};" }],
];

const TABS = [
  { id: "inicio", label: "portfolio.js" },
  { id: "sobre-mi", label: "sobre-mi.js" },
  { id: "proyectos", label: "proyectos.js" },
  { id: "contacto", label: "contacto.js" },
];

export default function Portfolio() {
  const [active, setActive] = useState("inicio");
  const [visibleLines, setVisibleLines] = useState(0);
  const refs = useRef({});

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisibleLines(CODE_LINES.length);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= CODE_LINES.length) clearInterval(id);
    }, 380);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let current = TABS[0].id;
      TABS.forEach(({ id }) => {
        const el = refs.current[id];
        if (el && window.scrollY >= el.offsetTop - 140) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Tab bar */}
      <nav className="sticky top-0 z-20 flex items-center gap-0.5 bg-slate-900 border-b border-slate-800 px-3 overflow-x-auto">
        <div className="flex items-center gap-1.5 pr-3 mr-2 border-r border-slate-800 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.id)}
            className={
              "font-mono text-[13px] px-4 pt-3 pb-2.5 border-t-2 whitespace-nowrap transition-colors " +
              (active === tab.id
                ? "text-slate-100 border-amber-400 bg-slate-950"
                : "text-slate-500 border-transparent hover:text-slate-200")
            }
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Hero */}
      <section
        id="inicio"
        ref={(el) => (refs.current.inicio = el)}
        className="px-6 pt-16 pb-14 max-w-5xl mx-auto grid md:grid-cols-[1.3fr_0.9fr] gap-12 items-center"
      >
        <div className="rounded-lg border border-slate-800 bg-slate-900 overflow-hidden">
          <div className="font-mono text-xs text-slate-500 px-4 py-2 border-b border-slate-800">
            portfolio.js
          </div>
          <div className="font-mono text-[15px] px-5 py-6 overflow-x-auto">
            {CODE_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="flex gap-4 min-h-[1.6em]">
                <span className="text-slate-700 text-right w-5 shrink-0 select-none">{i + 1}</span>
                <span>
                  {line.map((seg, j) => (
                    <span key={j} className={seg.c}>
                      {seg.t}
                    </span>
                  ))}
                  {i === visibleLines - 1 && (
                    <span className="inline-block w-1.75 h-[1.1em] bg-amber-400 align-text-bottom ml-0.5 animate-pulse" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AVATAR: reemplaza el contenido interior por tu <img> real */}
        <div className="aspect-square rounded-full border border-dashed border-slate-700 bg-slate-900 flex flex-col items-center justify-center gap-2 text-slate-500 max-w-70 mx-auto">
          <img src={img} alt="andres" className="w-full h-full rounded-full object-cover" />
        </div>
      </section>

      {/* Sobre mí */}
      <section
        id="sobre-mi"
        ref={(el) => (refs.current["sobre-mi"] = el)}
        className="px-6 py-20 max-w-3xl mx-auto"
      >
        <h2 className="font-mono text-base text-slate-500 mb-8 pb-3 border-b border-slate-800">
          <span className="text-slate-100">sobre-mi.js</span> — quién soy
        </h2>
        <div className="flex gap-5 max-w-[65ch]">
          <div className="font-mono text-slate-700 text-right leading-loose select-none pt-0.5">
            1<br />2<br />3<br />4
          </div>
          <div>
            <p className="mb-4">
              Soy <strong className="text-slate-100 font-semibold">{NAME}</strong>, desarrollador full
              stack especializado en el ecosistema JavaScript. Trabajo cómodo en cualquier punto del
              stack: desde una API en Node y Express hasta interfaces en React, Next.js, Vue o Angular.
            </p>
            <p>
              Me interesa escribir código claro y mantenible, y entender bien el problema antes de
              escribir la solución. Disfruto tanto armar la arquitectura de un backend como pulir el
              último detalle de una interfaz.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Node.js", "Express", "React", "Next.js", "Vue", "Angular", "TypeScript", "MongoDB / PostgreSQL"].map(
                (s) => (
                  <span
                    key={s}
                    className="font-mono text-xs bg-slate-800/60 border border-slate-800 text-slate-100 px-3 py-1 rounded"
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section
        id="proyectos"
        ref={(el) => (refs.current.proyectos = el)}
        className="px-6 py-20 max-w-5xl mx-auto"
      >
        <h2 className="font-mono text-base text-slate-500 mb-8 pb-3 border-b border-slate-800">
          <span className="text-slate-100">proyectos.js</span> — algunos trabajos
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <article
              key={p.file}
              className="rounded-lg border border-slate-800 bg-slate-900 hover:border-slate-600 hover:-translate-y-0.5 transition-all flex flex-col"
            >
              <div className="font-mono text-xs text-slate-500 px-4 py-2.5 border-b border-slate-800 flex justify-between gap-3">
                <span className="text-amber-400">{p.file}</span>
                <span>{p.tag}</span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-[17px] mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-violet-300 bg-violet-400/10 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 font-mono text-sm">
                  <a href={p.github} className="text-violet-300 hover:underline">
                    GitHub
                  </a>
                  <a href={p.demo} className="text-violet-300 hover:underline">
                    Demo
                  </a>
                </div>
                {
                   p.credenciales ?
                 ( <div className="flex flex-col gap-2 font-mono text-sm mt-3">
                    <span className="font-semibold text-[17px]">Credenciales: </span>
                    {Object.entries(p.credenciales).map(([key, value]) => (
                      <span key={key} className="text-violet-300">
                        {key}: {value}
                      </span>
                    ))}
                  </div>)
                  :
                  null
                }
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        ref={(el) => (refs.current.contacto = el)}
        className="px-6 py-20 max-w-3xl mx-auto"
      >
        <h2 className="font-mono text-base text-slate-500 mb-8 pb-3 border-b border-slate-800">
          <span className="text-slate-100">contacto.js</span> — hablemos
        </h2>
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-6 font-mono text-sm max-w-md">
          <div className="text-slate-500">{"{"}</div>
          <div className="pl-5 flex items-center gap-2">
            <Mail size={14} className="text-slate-500" />
            <span className="text-sky-300">email</span>
            <span className="text-slate-500">:</span>
            <a href={`mailto:${CONTACT.email}`} className="text-emerald-400 hover:underline">
              {CONTACT.email}
            </a>
            <span className="text-slate-500">,</span>
          </div>
          <div className="pl-5 flex items-center gap-2">
            <FaGithub size={14} className="text-slate-500" />
            <span className="text-sky-300">github</span>
            <span className="text-slate-500">:</span>
            <a
              href={`https://${CONTACT.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              {CONTACT.github}
            </a>
            <span className="text-slate-500">,</span>
          </div>
          <div className="pl-5 flex items-center gap-2">
            <FaLinkedin size={14} className="text-slate-500" />
            <span className="text-sky-300">linkedin</span>
            <span className="text-slate-500">:</span>
            <a
              href={`https://${CONTACT.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              {CONTACT.linkedin}
            </a>
          </div>
          <div className="text-slate-500">{"}"}</div>
        </div>
      </section>

      <footer className="px-6 pb-16 pt-6 text-center text-slate-500 text-sm max-w-5xl mx-auto border-t border-slate-800">
        © {new Date().getFullYear()} {NAME}. Construido con React.
      </footer>
    </div>
  );
}
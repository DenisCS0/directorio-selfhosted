# SelfHostDeck 🚀

> Directorio moderno de herramientas *self-hosted* y alternativas de código abierto a software SaaS comercial, con recetas de Docker Compose listas para desplegar.

🌐 **Web en producción:** [selfhostdeck.com](https://selfhostdeck.com)

---

## ⚡ Características

- **Catálogo Curado:** Alternativas directas a servicios comerciales (Google Photos, Notion, Trello, etc.).
- **Despliegue Inmediato:** Archivos `docker-compose.yml` listos para usar con volúmenes persistentes y botón de copiado rápido.
- **Búsqueda en Tiempo Real:** Filtrado instantáneo por nombre, software comercial y categoría temática.
- **Métricas Actualizadas:** Conteo de estrellas de GitHub y badges de dificultad técnica (*Fácil, Media, Avanzada*).
- **Rendimiento Máximo:** Frontend estático ultraligero construido sobre la arquitectura de islas de Astro.

---

## 🛠️ Stack Tecnológico

- **Frontend:** [Astro](https://astro.build/) + TypeScript + CSS nativo modular.
- **Base de Datos:** [Supabase](https://supabase.com/) (PostgreSQL) con Row Level Security (RLS).
- **Automatización:** Scripts en Python para análisis e ingesta de datos.
- **Despliegue & DNS:** Cloudflare / Vercel con proxy seguro y protección anti-scrapers.

---

## 💻 Instalación en Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/DenisCS0/directorio-selfhosted.git
   cd directorio-selfhosted
# 📚 Book Library

Aplicación web para buscar libros mediante la API de Google Books, ver detalles y dejar reseñas. Desarrollada con **Vite + React + TypeScript**, y simulación de backend con **MSW** para producción.

---

## 🚀 Deploy en Vercel

La app está desplegada en:

👉 [https://book-library.vercel.app](https://book-library.vercel.app)

---

## 🧪 API simulada con MSW

En producción, las llamadas a la API de reseñas (`json-server`) se simulan usando [Mock Service Worker (MSW)](https://mswjs.io). Esto permite desplegar la app sin necesidad de un backend real.

- Las reseñas se almacenan en memoria y se reinician al recargar la página.
- Las rutas simuladas incluyen:
  - `GET /reviews?bookId=...`
  - `POST /reviews`
  - `PATCH /reviews/:id`

---

## 🧱 Tecnologías utilizadas

- **Vite** como bundler
- **React + TypeScript** para la UI
- **TailwindCSS** para estilos
- **React Router** para navegación
- **Axios** para llamadas HTTP
- **MSW** para simular la API
- **json-server** para desarrollo local

---

## 🧑‍💻 Cómo correr el proyecto localmente

```bash
# Clonar el repositorio
git clone https://github.com/blomer52/book-library.git
cd book-library

# Instalar dependencias
npm install

# Correr el frontend
npm run dev

# (Opcional) Correr el backend local
npm run api
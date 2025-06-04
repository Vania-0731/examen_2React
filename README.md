
# Dribble

Breve descripción del proyecto.  
 Este proyecto es una SPA (Single Page Application) que utiliza React con Vite para mostrar una galería de Diseños gráficos con funcionalidades de búsqueda, favoritos, y un formulario de contacto.

---
# Deploy

   ```bash
   https://examen-2-react-vtco.vercel.app/
   ```

## Tecnologías y Versiones

- React 18.x
- Vite (última versión)
- Bootstrap 5.x
- React Router Dom 6.x
- react-toastify
- react-loading-skeleton
- react-hook-form (opcional)
- Otros: (menciona aquí si usas más librerías)

---

## Instalación y Ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Vania-0731/examen_2React.git 
   cd examen_2React
   cd Dribbble_04_06_2025-2pm 
   ```

2. Por si presenta problemas con las dependencias:

   ```bash
   npm install
   npm install react-loading-skeleton
   npm install react-router-dom@6
   npm install bootstrap@v5.3.6
   npm install --save react-toastify
   ```

3. Ejecutar la aplicación:

   ```bash
   npm run dev
   ```

4. Abrir el navegador en:

   ```
   http://localhost:5173/
   ```

---

## Navegación

- **Inicio:** Página principal con carrusel de proyectos destacados y lista de diseños.
- **Diseños:** Página con listado completo, buscador con debounce y gestión de favoritos.
- **Contacto:** Formulario accesible con validación y mensajes de éxito.
  
Usa el menú de navegación para moverte entre estas páginas.



## Notas

- Los favoritos se guardan en `localStorage`.
- La búsqueda usa debounce para mejorar el rendimiento.
- El tema de diseño está inspirado en Dribbble con colores vivos y modernos.
- El proyecto utiliza componentes reutilizables y hooks personalizados para mejor mantenimiento.

---

## Autor
Vania

---

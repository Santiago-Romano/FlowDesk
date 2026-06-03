English:

What is it for?

FlowDesk is a project management platform designed for development, product, and operations teams.
It allows you to centralize the planning, tracking, and coordination of work, providing a clear view of the status of each task, the overall project progress, and team performance.

How does it work?

The application uses a Kanban board divided into five stages that represent the lifecycle of a task: Backlog → In Progress → Under Review → QA/Testing → Completed.

Each card contains relevant information such as a unique identifier, priority level, category tags, assigned owner, comments, and subtask progress via checklists.

At the top is a navigation system with different work views (Board, List, Gantt, Calendar, and Reports), mimicking the tools used in professional project management platforms.

It also includes information about the active project, quick filters, and search tools.

Below is a global progress bar that displays the project's completion percentage, along with the delivery deadline and current sprint details.

The lower section presents real-time operational metrics, including the total number of tasks, items in progress, blocked tasks, completed tasks, and sprint velocity, facilitating continuous monitoring of team performance.

Note: 
All data, names, projects, metrics, users, and statistics displayed in the interface are entirely fictitious and for illustrative purposes only.
They do not represent actual information and are not related to any existing companies, organizations, or individuals.

Below is the link so you can visit the page:
https://fllowdesk.netlify.app/

Español:

Descripción General:FlowDesk es una plataforma de gestión de proyectos interactiva, diseñada para equipos de desarrollo, producto y operaciones. Implementa un tablero Kanban visual que facilita la planificación, el seguimiento y la coordinación del trabajo, ofreciendo una visión clara del estado de cada tarea, el avance general del proyecto y el rendimiento del equipo. Este proyecto destaca la capacidad para desarrollar aplicaciones web altamente interactivas con funcionalidades de arrastrar y soltar (drag & drop) y gestión de estado compleja en el frontend.

Características Destacadas:

- Tablero Kanban Interactivo: Gestión visual de tareas a través de columnas personalizables que representan el ciclo de vida de una tarea (Backlog, En Progreso, En Revisión, QA / Testing, Completado).

- Funcionalidad Drag & Drop: Permite a los usuarios mover tarjetas de tareas entre columnas de forma intuitiva, con feedback visual durante el arrastre y actualización automática de los contadores de tareas.

- Modal de Detalle de Tarea: Al hacer clic en una tarjeta, se abre un modal que muestra información detallada como ID, prioridad, columna actual, asignado, etiquetas y descripción, con la posibilidad de futuras ediciones.

- Gestión de Estado Dinámica: Actualización en tiempo real de los contadores de tareas por columna y las métricas operativas globales (tareas totales, en progreso, bloqueadas, completadas, velocidad del sprint).

- Creación Dinámica de Tareas: Botón para añadir nuevas tareas al tablero, las cuales son inmediatamente funcionales con drag & drop y el modal de detalle.

- Notificaciones Toast: Sistema de feedback visual para acciones como el movimiento de tareas.

- Diseño Responsivo: Adaptación del tablero y sus componentes para una experiencia óptima en diferentes tamaños de pantalla, desde escritorio hasta dispositivos móviles.

Stack Tecnológico:

Este proyecto fue desarrollado utilizando un stack de frontend puro, demostrando un dominio avanzado de las tecnologías web fundamentales y la implementación de patrones de interacción complejos:

- HTML5: Estructuración semántica del tablero y sus componentes.

- CSS3: Estilización moderna con variables CSS, transiciones, animaciones y un sistema de diseño responsivo que asegura la usabilidad en diversos dispositivos.

- JavaScript (ES6+): Implementación de la lógica central del drag & drop (eventos dragstart, dragover, dragleave, drop), manipulación dinámica del DOM para la creación y actualización de tarjetas, gestión del estado del modal de detalle, y control de las métricas del tablero.

Arquitectura de Datos y Simulación de API:

Los datos de las tareas y el estado del tablero en FlowDesk son simulados (mock data) y gestionados en el frontend. Esta implementación tiene varios propósitos clave:

1. Validar la lógica de interacción del usuario y la gestión de estado del frontend en un entorno controlado.

2. Demostrar la capacidad de la interfaz para manejar datos estructurados y complejos (tareas con ID, prioridad, etiquetas, etc.) de manera dinámica.

3. Preparar la aplicación para una integración fluida con una API RESTful de backend. La arquitectura del código está diseñada para que la persistencia de datos pueda ser fácilmente migrada a un servicio de backend, donde cada acción del usuario (crear, mover, editar, eliminar tareas) se traduciría en una llamada a la API.



A continuacion dejo el link para que pueda visitar la pagina:
https://fllowdesk.netlify.app/

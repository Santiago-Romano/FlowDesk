English:

Overview:FlowDesk is an interactive project management platform designed for development, product, and operations teams. It implements a visual Kanban board that facilitates work planning, tracking, and coordination, offering a clear view of each task's status, overall project progress, and team performance. This project highlights the ability to develop highly interactive web applications with drag & drop functionalities and complex frontend state management.

Key Features:

- Interactive Kanban Board: Visual task management through customizable columns representing the task lifecycle (Backlog, In Progress, In Review, QA / Testing, Completed).

- Drag & Drop Functionality: Allows users to intuitively move task cards between columns, with visual feedback during dragging and automatic updates of task counters.

- Task Detail Modal: Clicking on a card opens a modal displaying detailed information such as ID, priority, current column, assigned person, tags, and description, with the possibility of future edits.

- Dynamic State Management: Real-time updates of task counters per column and global operational metrics (total tasks, in progress, blocked, completed, sprint velocity).

- Dynamic Task Creation: Button to add new tasks to the board, which are immediately functional with drag & drop and the detail modal.

- Toast Notifications: Visual feedback system for actions such as moving tasks.

- Responsive Design: Adaptation of the board and its components for an optimal experience on different screen sizes, from desktop to mobile devices.

Technology Stack:

This project was developed using a pure frontend stack, demonstrating advanced mastery of fundamental web technologies and the implementation of complex interaction patterns:

- HTML5: Semantic structuring of the board and its components.

- CSS3: Modern styling with CSS variables, transitions, animations, and a responsive design system that ensures usability across various devices.

- JavaScript (ES6+): Implementation of the core drag & drop logic (dragstart, dragover, dragleave, drop events), dynamic DOM manipulation for card creation and updates, management of the detail modal's state, and control of board metrics.

Data Architecture and API Simulation:

Task data and board state in FlowDesk are simulated (mock data) and managed in the frontend. This implementation serves several key purposes:

- Validating user interaction logic and frontend state management in a controlled environment.

- Demonstrating the interface's ability to handle structured and complex data (tasks with ID, priority, tags, etc.) dynamically.

- Preparing the application for seamless integration with a RESTful backend API. The code architecture is designed so that data persistence can be easily migrated to a backend service, where each user action (create, move, edit, delete tasks) would translate into an API call.


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

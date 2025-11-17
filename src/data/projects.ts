export interface ProjectType {
  name: string
  slug: string
  smallDescription: string
  description: string
  learnings: string
  userData?: string
  images: string[]
  technologies: string[]
  url: string
  id: number
}
export interface ProjectsLanguages {
  es: ProjectType
  en: ProjectType
}

const projects: ProjectsLanguages[] = [
  {
    es: {
      name: 'Quiosco de Comida',
      slug: 'quiosco',
      smallDescription: 'Creador y Gestor de pedidos para restaurantes',
      description: `
      <p class="mb-4">
        <strong>Quiosco de Comida</strong> es una aplicación completa para la
        <strong>gestión de pedidos en restaurantes y bares</strong>. Fue el primer
        proyecto donde trabajé con <strong>Next.js</strong>, explorando a fondo el
        renderizado <strong>SSR</strong>, las <strong>Server Actions</strong> y la
        combinación de <strong>CSR + SSR</strong> en distintas secciones del sistema.
      </p>
      <p class="mb-4">
        La aplicación cuenta con un <strong>panel administrativo</strong> donde se
        pueden <strong>agregar, editar, eliminar y gestionar productos</strong>, así
        como administrar pedidos en tiempo real. Cada pedido puede marcarse como
        completado, y el cliente lo visualiza en una <strong>pantalla pública</strong>
        que indica que su orden está lista para retirar.
      </p>
      <p class="mb-4">
        Incluye una <strong>galería de productos</strong> con paginación,
        <strong>buscador</strong> instantáneo, y una interfaz totalmente construida
        con <strong>TailwindCSS</strong>. Todo el código está escrito en
        <strong>TypeScript</strong> con validaciones mediante <strong>Zod</strong> y
        un modelo de datos gestionado con <strong>Prisma</strong> conectado a
        <strong>PostgreSQL</strong>.
      </p>
      <p class="mb-4">
        Todos los apartados del proyecto están diseñados como
        <strong>componentes reutilizables</strong>, con un orden y estructura clara.
        Fue una experiencia clave para comprender cómo configurar y desplegar
        <strong>Next.js</strong> con bases de datos reales y tipado estricto de punta
        a punta.
      </p>`,
      learnings: `
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li class="pl-2">
          Primer uso de <strong>Next.js</strong> comprendiendo el flujo de
          <strong>Server Components</strong>, <strong>SSR</strong> y
          <strong>Server Actions</strong>.
        </li>
        <li class="pl-2">
          Integración de <strong>Prisma</strong> con <strong>PostgreSQL</strong> y
          aprendizaje de su configuración completa (schemas, migraciones, seeds).
        </li>
        <li class="pl-2">
          Validación estricta de formularios y datos con <strong>Zod</strong> y
          <strong>TypeScript</strong>.
        </li>
        <li class="pl-2">
          Implementación de <strong>paginación</strong> y <strong>búsqueda</strong> en
          consultas server-side.
        </li>
        <li class="pl-2">
          Construcción de un <strong>panel administrativo</strong> con control total
          de productos (crear, editar, eliminar) y gestión de pedidos con estados.
        </li>
        <li class="pl-2">
          Creación de una <strong>pantalla pública</strong> que actualiza pedidos en
          tiempo real para los clientes.
        </li>
        <li class="pl-2">
          Diseño modular y <strong>componentes reutilizables</strong> con estructura
          clara, priorizando mantenibilidad y escalabilidad.
        </li>
        <li class="pl-2">
          Comprensión profunda de cómo combinar <strong>SSR</strong> y
          <strong>CSR</strong> en un mismo flujo de renderizado.
        </li>
        <li class="pl-2">
          Configuración, despliegue y buenas prácticas de <strong>Next.js</strong> en
          entornos productivos.
        </li>
      </ul>`,
      images: [
        '/projects/quiosco-1.webp',
        '/projects/quiosco-2.webp',
        '/projects/quiosco-3.webp',
        '/projects/quiosco-4.webp'
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Zod',
        'React',
        'Prisma',
        'PostgreSQL'
      ],
      url: 'https://quiosco-vs89.vercel.app/admin/products',
      id: 0
    },
    en: {
      name: 'Food Kiosk',
      slug: 'quiosco',
      smallDescription: 'Order creator and manager for restaurants',
      description: `
      <p class="mb-4">
        <strong>Food Kiosk</strong> is a complete application for
        <strong>restaurant and bar order management</strong>. It was my first
        project working with <strong>Next.js</strong>, exploring
        <strong>SSR rendering</strong>, <strong>Server Actions</strong>, and the
        combination of <strong>CSR + SSR</strong> across different sections of the system.
      </p>
      <p class="mb-4">
        The app includes an <strong>admin dashboard</strong> to
        <strong>add, edit, delete, and manage products</strong>, as well as
        handle orders in real time. Each order can be marked as completed, and
        customers see it on a <strong>public screen</strong> that shows when
        their order is ready for pickup.
      </p>
      <p class="mb-4">
        It features a <strong>product gallery</strong> with pagination,
        instant <strong>search</strong>, and a fully built interface using
        <strong>TailwindCSS</strong>. The entire codebase is in
        <strong>TypeScript</strong> with validations via <strong>Zod</strong> and
        a data model built with <strong>Prisma</strong> connected to
        <strong>PostgreSQL</strong>.
      </p>
      <p class="mb-4">
        All sections of the project are designed as
        <strong>reusable components</strong>, with a clear structure and order.
        It was a key experience for understanding how to configure and deploy
        <strong>Next.js</strong> with real databases and strict end-to-end typing.
      </p>
      `,
      learnings: `
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li class="pl-2">
          First use of <strong>Next.js</strong>, understanding the flow of
          <strong>Server Components</strong>, <strong>SSR</strong>, and
          <strong>Server Actions</strong>.
        </li>
        <li class="pl-2">
          Integration of <strong>Prisma</strong> with <strong>PostgreSQL</strong>
          and full configuration (schemas, migrations, seeds).
        </li>
        <li class="pl-2">
          Strict form and data validation using <strong>Zod</strong> +
          <strong>TypeScript</strong>.
        </li>
        <li class="pl-2">
          Implementation of <strong>pagination</strong> and <strong>search</strong>
          in server-side queries.
        </li>
        <li class="pl-2">
          Building an <strong>admin dashboard</strong> with full control over
          products and order status management.
        </li>
        <li class="pl-2">
          Creation of a <strong>public screen</strong> updating orders in real time.
        </li>
        <li class="pl-2">
          Modular design and <strong>reusable components</strong> prioritizing
          scalability and maintainability.
        </li>
        <li class="pl-2">
          Deep understanding of how to combine <strong>SSR</strong> and
          <strong>CSR</strong> in the same rendering flow.
        </li>
        <li class="pl-2">
          Configuration, deployment, and best practices for
          <strong>Next.js</strong> in production environments.
        </li>
      </ul>
      `,
      images: [
        '/projects/quiosco-1.webp',
        '/projects/quiosco-2.webp',
        '/projects/quiosco-3.webp',
        '/projects/quiosco-4.webp'
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Zod',
        'React',
        'Prisma',
        'PostgreSQL'
      ],
      url: 'https://quiosco-vs89.vercel.app/admin/products',
      id: 0
    }
  },
  {
    es: {
      name: 'Zniply',
      slug: 'zniply',
      smallDescription: 'Gestor de snippets online',
      description: `
      <p class="mb-4">
        <strong>Zniply</strong> es mi proyecto personal: un gestor de
        <strong>snippets</strong> pensado para desarrolladores que olvidamos
        estructuras poco frecuentes. Lo hice <strong>completamente solo</strong>,
        cuidando hasta el más mínimo detalle. Es un proyecto mediano-grande con
        <strong>stack MERN</strong> y TypeScript en todo el flujo.
      </p>
      <p class="mb-2">
        Funcionalidades clave: <strong>autenticación tradicional</strong> y
        <strong>OAuth (GitHub / Google via Passport)</strong>, creación y edición
        de snippets con <strong>TipTap</strong> (soporte de bloques de código y
        resaltado), favoritos, landing, tutoriales, página de contacto y todo el proyecto contiene SEO.
      </p>
      <p class="mb-2">
        Soporta hasta <strong>3 snippets como invitado</strong>. Al iniciar sesión
        se te pregunta si querés conservarlos, eliminarlos o asignarlos a otra
        cuenta — esa decisión no se vuelve a pedir hasta que te vuelvas a
        <strong>loguear</strong>. La búsqueda está <strong>indexada</strong> y los
        resultados se priorizan por cantidad de <strong>likes</strong> (los más
        populares aparecen primero).
      </p>
      <p class="mb-4">
        Implementé sanitización, validaciones robustas para contenido de usuario y
        manejo de sesiones seguro. Lo desplegué el frontend en Vercel y el backend en Render.
      </p>`,
      learnings: `<ul class="list-disc list-inside space-y-2 mb-4">
        <li class="pl-2">
          Integración de <strong>OAuth</strong> con <strong>Passport</strong> (Google y GitHub) y su flujo UX.
        </li>
        <li class="pl-2">
          Uso avanzado de <strong>TipTap</strong> para edición de snippets y manejo de bloques de código con highlighting (Prism/Lowlight).
        </li>
        <li class="pl-2">
          Diseñar y ejecutar una <strong>estrategia de migración de datos</strong> para snippets de invitado al crear cuentas (opciones: conservar, eliminar o transferir).
        </li>
        <li class="pl-2">
          Construcción de una <strong>búsqueda indexada</strong> que ordena resultados por likes — diseño de índices y pipeline de consulta para ranking.
        </li>
        <li class="pl-2">
          Fortalecimiento de la seguridad en contenido generado por usuarios usando <strong>sanitize-html</strong> y validaciones server-side.
        </li>
        <li class="pl-2">
          Prácticas de optimización y escalabilidad en un proyecto full-stack desarrollado íntegramente por mí: rendimiento, detalles UX y entrega producible.
        </li>
      </ul>`,
      userData: `
      <div class="mb-2 space-y-2">
        <p><strong>Cuenta de prueba:</strong> nico@correo.com</p>
        <p><strong>Contraseña:</strong> 55115511</p>
      </div>`,
      images: [
        '/projects/zniply-1.webp',
        '/projects/zniply-2.webp',
        '/projects/zniply-3.webp',
        '/projects/zniply-4.webp'
      ],
      technologies: [
        'TypeScript',
        'Zod',
        'Tailwind CSS',
        'React',
        'React Query',
        'React Router Dom',
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'Passport',
        'express-validator',
        'express-session',
        'sanitize-html'
      ],
      url: 'https://zniply.vercel.app/',
      id: 1
    },
    en: {
      name: 'Zniply',
      slug: 'zniply',
      smallDescription: 'Online snippet manager',
      description: `
      <p class="mb-4">
        <strong>Zniply</strong> is my personal project: a
        <strong>snippet manager</strong> built for developers who often forget
        less common structures. I built it <strong>entirely on my own</strong>,
        paying attention to every detail. It's a medium-large project using the
        <strong>MERN stack</strong> with TypeScript across the entire flow.
      </p>
      <p class="mb-2">
        Key features include: <strong>traditional authentication</strong> and
        <strong>OAuth (GitHub / Google via Passport)</strong>, snippet creation
        and editing using <strong>TipTap</strong> (code blocks + highlighting),
        favorites, landing page, tutorials, contact page, and SEO for the entire project.
      </p>
      <p class="mb-2">
        Guests can create up to <strong>3 snippets</strong>. When logging in, the app
        asks whether you want to keep them, delete them, or assign them to another
        account — and the app won't ask again until the next login. Search is
        <strong>indexed</strong>, and results are ranked by number of
        <strong>likes</strong> (most popular first).
      </p>
      <p class="mb-4">
        I implemented sanitization, strong user-content validations, and secure
        session handling. The frontend is deployed on Vercel and the backend on Render.
      </p>
      `,
      learnings: `
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li class="pl-2">
          OAuth integration with <strong>Passport</strong> (Google + GitHub) and UX flow.
        </li>
        <li class="pl-2">
          Advanced use of <strong>TipTap</strong> for snippet editing and
          code block handling with highlighting.
        </li>
        <li class="pl-2">
          Designing and executing a <strong>data migration strategy</strong>
          for guest snippets on account creation.
        </li>
        <li class="pl-2">
          Building an <strong>indexed search system</strong> ranking results by likes.
        </li>
        <li class="pl-2">
          Strong security for user-generated content using
          <strong>sanitize-html</strong> and server-side validation.
        </li>
        <li class="pl-2">
          Performance, UX polish, and scalability in a full-stack project fully
          built by me.
        </li>
      </ul>
      `,
      userData: `
      <div class="mb-2 space-y-2">
        <p><strong>Test Account:</strong> nico@correo.com</p>
        <p><strong>Password:</strong> 55115511</p>
      </div>
      `,
      images: [
        '/projects/zniply-1.webp',
        '/projects/zniply-2.webp',
        '/projects/zniply-3.webp',
        '/projects/zniply-4.webp'
      ],
      technologies: [
        'TypeScript',
        'Zod',
        'Tailwind CSS',
        'React',
        'React Query',
        'React Router Dom',
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'Passport',
        'express-validator',
        'express-session',
        'sanitize-html'
      ],
      url: 'https://zniply.vercel.app/',
      id: 1
    }
  },
  {
    es: {
      name: 'UpTask',
      slug: 'up-task',
      smallDescription: 'Administrador de Tareas en Equipo',
      description: `
          <p class="mb-4">
            <strong>UpTask</strong> es una aplicación web para la
            <strong>gestión de tareas colaborativas</strong>. Cuenta con dos roles
            principales:
          </p>
          <p class="mb-2">
            <strong>Manager:</strong> puede crear, editar y eliminar proyectos,
            tareas y notas. También gestiona colaboradores.
          </p>
          <p class="mb-4">
            <strong>Colaborador:</strong> puede mover tareas entre estados y
            administrar sus propias notas.
          </p>
          <p class="mb-4">
            Todo el sistema cuenta con <strong>validaciones completas</strong>
            tanto en el cliente como en el servidor. Fue desarrollado íntegramente
            en <strong>TypeScript</strong> (frontend y backend), con todas las
            rutas protegidas y una página personalizada para errores 404.
          </p>
          `,
      learnings: `<ul class="list-disc list-inside space-y-2 mb-4">
            <li class="pl-2">
              Uso avanzado de <strong>@tanstack/react-query</strong> para manejo
              de datos.
            </li>
            <li class="pl-2">
              Formularios complejos con <strong>react-hook-form</strong>.
            </li>
            <li class="pl-2">
              Implementación de la arquitectura <strong>MVC</strong>.
            </li>
            <li class="pl-2">
              Modelado complejo en <strong>MongoDB</strong> con
              <strong>Mongoose</strong>, usando filtros avanzados como
              <code>$in</code>, <code>$or</code>, etc.
            </li>
            <li class="pl-2">
              Estructura backend escalable y bien organizada.
            </li>
            <li class="pl-2">
              Gestión de múltiples endpoints: en la vista de tareas se consumen
              entre <strong>8 y 10 endpoints</strong>.
            </li>
          </ul>`,
      userData: `
          <div class="mb-2 space-y-2">
            <p>Manager: correo@correo.com</p>
            <p>Contraseña: 55115511</p>
          </div>
          <div class="mb-2 space-y-2">
            <p>Colaborador: martin@correo.com</p>
            <p>Contraseña: 55115511</p>
          </div>`,
      images: [
        '/projects/up-task-1.webp',
        '/projects/up-task-2.webp',
        '/projects/up-task-3.webp',
        '/projects/up-task-4.webp'
      ],
      technologies: [
        'React',
        'React Router Dom',
        'React Hook Form',
        'React Query',
        'TypeScript',
        'Tailwind CSS',
        'Express',
        'Express Validator',
        'MongoDB',
        'Thunder Client'
      ],
      url: 'https://up-task-frontend-henna-sigma.vercel.app/',
      id: 2
    },
    en: {
      name: 'UpTask',
      slug: 'up-task',
      smallDescription: 'Team Task Manager',
      description: `
      <p class="mb-4">
        <strong>UpTask</strong> is a web application for
        <strong>collaborative task management</strong>. It includes two main roles:
      </p>
      <p class="mb-2">
        <strong>Manager:</strong> can create, edit, and delete projects, tasks, and notes.
        Also manages collaborators.
      </p>
      <p class="mb-4">
        <strong>Collaborator:</strong> can move tasks between states and manage their own notes.
      </p>
      <p class="mb-4">
        The entire system includes <strong>full validations</strong>
        on both client and server. It was built fully in
        <strong>TypeScript</strong> (frontend + backend), with protected routes
        and a custom 404 page.
      </p>
      `,
      learnings: `
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li class="pl-2">
          Advanced use of <strong>@tanstack/react-query</strong> for data handling.
        </li>
        <li class="pl-2">
          Complex forms using <strong>react-hook-form</strong>.
        </li>
        <li class="pl-2">
          Implementation of <strong>MVC architecture</strong>.
        </li>
        <li class="pl-2">
          Complex modeling in <strong>MongoDB</strong> with <strong>Mongoose</strong>.
        </li>
        <li class="pl-2">
          Scalable backend structure.
        </li>
        <li class="pl-2">
          Handling multiple endpoints (8–10 in the task view).
        </li>
      </ul>
      `,
      userData: `
      <div class="mb-2 space-y-2">
        <p>Manager: correo@correo.com</p>
        <p>Password: 55115511</p>
      </div>
      <div class="mb-2 space-y-2">
        <p>Collaborator: martin@correo.com</p>
        <p>Password: 55115511</p>
      </div>
      `,
      images: [
        '/projects/up-task-1.webp',
        '/projects/up-task-2.webp',
        '/projects/up-task-3.webp',
        '/projects/up-task-4.webp'
      ],
      technologies: [
        'React',
        'React Router Dom',
        'React Hook Form',
        'React Query',
        'TypeScript',
        'Tailwind CSS',
        'Express',
        'Express Validator',
        'MongoDB',
        'Thunder Client'
      ],
      url: 'https://up-task-frontend-henna-sigma.vercel.app/',
      id: 2
    }
  },
  {
    es: {
      name: 'APV Veterinaria',
      slug: 'apv-veterinaria',
      smallDescription: 'Administrador de Pacientes de Veterinaria',
      description: `
          <p class="mb-4">
            <strong>APV Veterinaria</strong> es una aplicación para la
            administración de pacientes en una clínica veterinaria. Fue mi primer
            proyecto con sistema de <strong>autenticación</strong> completo (login
            y registro de usuarios).
          </p>
          <p class="mb-4">
            Utilicé <strong>Context API</strong> para manejar el
            <strong>estado global</strong>, como el token de autenticación.
            También fue mi primera implementación con
            <strong>React Router DOM</strong> para definir múltiples rutas,
            incluyendo <strong>rutas públicas y privadas</strong>.
          </p>
          <p class="mb-4">
            En el backend incorporé <strong>JWT</strong> para proteger rutas,
            <strong>hashing de contraseñas</strong> para seguridad y la
            arquitectura de MVC (Model View Controller).
          </p>
          <p class="mb-4">
            La base de datos está construida con <strong>MongoDB</strong> y su ODM
            <strong>Mongoose</strong> y las pruebas de rutas fueron realizadas con
            <strong>Postman</strong>. Además, implementé el envío de correos
            electrónicos con <strong>NodeMailer</strong> y
            <strong>MailTrap</strong> para simular la entrega.
          </p>
          `,
      learnings: `<ul class="list-disc list-inside space-y-2 mb-4">
            <li class="pl-2">
              Primer proyecto con sistema de <strong>login y registro</strong>
              completo.
            </li>
            <li class="pl-2">
              Manejo de <strong>estado global</strong> con
              <strong>Context API</strong>.
            </li>
            <li class="pl-2">
              Primer uso de <strong>React Router DOM</strong> con rutas públicas y
              privadas.
            </li>
            <li class="pl-2">
              Autenticación con <strong>JWT</strong> y
              <strong>hash de contraseñas</strong>.
            </li>
            <li class="pl-2">
              Backend con <strong>Express</strong> y arquitectura más robusta.
            </li>
            <li class="pl-2">
              Uso de <strong>Postman</strong> para testeo de rutas.
            </li>
            <li class="pl-2">
              Envío de emails de confirmación usando <strong>NodeMailer</strong> y
              <strong>MailTrap</strong>.
            </li>
          </ul>`,
      userData: `
          <div class="mb-2 space-y-2">
            <p>
              <strong>Usuario:</strong> correo@correo.com
            </p>
            <p>
              <strong>Contraseña:</strong> 55115511
            </p>
          </div>
      `,
      images: ['/projects/apv-veterinaria-1.webp'],
      technologies: [
        'React',
        'React Router Dom',
        'Tailwind CSS',
        'Express',
        'MongoDB',
        'Postman'
      ],
      url: 'https://veterinaria-administrador-pacientes.netlify.app',
      id: 3
    },
    en: {
      name: 'APV Veterinary',
      slug: 'apv-veterinaria',
      smallDescription: 'Veterinary Patient Manager',
      description: `
      <p class="mb-4">
        <strong>APV Veterinary</strong> is an application for managing patients
        in a veterinary clinic. It was my first project with a full
        <strong>authentication system</strong> (login + user registration).
      </p>
      <p class="mb-4">
        I used <strong>Context API</strong> to handle <strong>global state</strong>
        such as the authentication token. It was also my first implementation
        using <strong>React Router DOM</strong> to define multiple routes,
        including <strong>public and private routes</strong>.
      </p>
      <p class="mb-4">
        On the backend, I implemented <strong>JWT</strong> to protect routes,
        <strong>password hashing</strong> for security, and the MVC architecture.
      </p>
      <p class="mb-4">
        The database was built with <strong>MongoDB</strong> and its ODM
        <strong>Mongoose</strong>. Route tests were done with
        <strong>Postman</strong>. I also implemented email sending using
        <strong>NodeMailer</strong> and <strong>MailTrap</strong>.
      </p>
      `,
      learnings: `
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li class="pl-2">
          First project with a full <strong>login and registration</strong> system.
        </li>
        <li class="pl-2">
          Global state management with <strong>Context API</strong>.
        </li>
        <li class="pl-2">
          First use of <strong>React Router DOM</strong> with public and private routes.
        </li>
        <li class="pl-2">
          Authentication using <strong>JWT</strong> and password hashing.
        </li>
        <li class="pl-2">
          Backend built with <strong>Express</strong> and a more robust architecture.
        </li>
        <li class="pl-2">
          Route testing using <strong>Postman</strong>.
        </li>
        <li class="pl-2">
          Email confirmation with <strong>NodeMailer</strong> and <strong>MailTrap</strong>.
        </li>
      </ul>
      `,
      userData: `
      <div class="mb-2 space-y-2">
        <p><strong>User:</strong> correo@correo.com</p>
        <p><strong>Password:</strong> 55115511</p>
      </div>
      `,
      images: ['/projects/apv-veterinaria-1.webp'],
      technologies: [
        'React',
        'React Router Dom',
        'Tailwind CSS',
        'Express',
        'MongoDB',
        'Postman'
      ],
      url: 'https://veterinaria-administrador-pacientes.netlify.app',
      id: 3
    }
  }
]

export default projects

const projects = [
  {
    name: "UpTask",
    smallDescription: "Administrador de Tareas en Equipo",
    description: (
      <>
        <p className="mb-4">
          <strong>UpTask</strong> es una aplicación web para la{" "}
          <strong>gestión de tareas colaborativas</strong>. Cuenta con dos roles
          principales:
        </p>
        <p className="mb-2">
          <strong>Manager:</strong> puede crear, editar y eliminar proyectos,
          tareas y notas. También gestiona colaboradores.
        </p>
        <p className="mb-4">
          <strong>Colaborador:</strong> puede mover tareas entre estados y
          administrar sus propias notas.
        </p>
        <p className="mb-4">
          Todo el sistema cuenta con <strong>validaciones completas</strong>{" "}
          tanto en el cliente como en el servidor. Fue desarrollado íntegramente
          en <strong>TypeScript</strong> (frontend y backend), con todas las
          rutas protegidas y una página personalizada para errores 404.
        </p>
        <p className="mb-2 font-semibold">
          Aprendizajes y características técnicas:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li className="pl-2">
            Uso avanzado de <strong>@tanstack/react-query</strong> para manejo
            de datos.
          </li>
          <li className="pl-2">
            Formularios complejos con <strong>react-hook-form</strong>.
          </li>
          <li className="pl-2">
            Implementación de la arquitectura <strong>MVC</strong>.
          </li>
          <li className="pl-2">
            Modelado complejo en <strong>MongoDB</strong> con{" "}
            <strong>Mongoose</strong>, usando filtros avanzados como{" "}
            <code>$in</code>, <code>$or</code>, etc.
          </li>
          <li className="pl-2">Estructura backend escalable y bien organizada.</li>
          <li className="pl-2">
            Gestión de múltiples endpoints: en la vista de tareas se consumen
            entre <strong>8 y 10 endpoints</strong>.
          </li>
        </ul>
      </>
    ),
    userData: (
      <>
        <div className="mb-2">
          <p>Manager: correo@correo.com</p>
          <p>Contraseña: 55115511</p>
        </div>
        <div className="mb-2">
          <p>Colaborador: martin@correo.com</p>
          <p>Contraseña: 55115511</p>
        </div>
      </>
    ),
    image: "projects/project-1.png",
    technologies: [
      "React",
      "React Router Dom",
      "React Hook Form",
      "React Query",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Express Validator",
      "MongoDB",
      "Thunder Client",
    ],
    url: "",
    id: 1,
  },
  {
    name: "APV Veterinaria",
    smallDescription: "Administrador de Pacientes de Veterinaria",
    description: (
      <>
        <p className="mb-4">
          <strong>APV Veterinaria</strong> es una aplicación para la
          administración de pacientes en una clínica veterinaria. Fue mi primer
          proyecto con sistema de <strong>autenticación</strong> completo (login
          y registro de usuarios).
        </p>
        <p className="mb-4">
          Utilicé <strong>Context API</strong> para manejar el{" "}
          <strong>estado global</strong>, como el token de autenticación.
          También fue mi primera implementación con{" "}
          <strong>React Router DOM</strong> para definir múltiples rutas,
          incluyendo <strong>rutas públicas y privadas</strong>.
        </p>
        <p className="mb-4">
          En el backend incorporé <strong>JWT</strong> para proteger rutas,{" "}
          <strong>hashing de contraseñas</strong> para seguridad y la
          arquitectura de MVC (Model View Controller).
        </p>
        <p className="mb-4">
          La base de datos está construida con <strong>MongoDB</strong> y su ODM <strong>Mongoose</strong> y las
          pruebas de rutas fueron realizadas con <strong>Postman</strong>.
          Además, implementé el envío de correos electrónicos con{" "}
          <strong>NodeMailer</strong> y <strong>MailTrap</strong> para simular
          la entrega.
        </p>
        <p className="mb-2 font-semibold">
          Aprendizajes y características técnicas:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li className="pl-2">
            Primer proyecto con sistema de <strong>login y registro</strong>{" "}
            completo.
          </li>
          <li className="pl-2">
            Manejo de <strong>estado global</strong> con{" "}
            <strong>Context API</strong>.
          </li>
          <li className="pl-2">
            Primer uso de <strong>React Router DOM</strong> con rutas públicas y
            privadas.
          </li>
          <li className="pl-2">
            Autenticación con <strong>JWT</strong> y{" "}
            <strong>hash de contraseñas</strong>.
          </li>
          <li className="pl-2">
            Backend con <strong>Express</strong> y arquitectura más robusta.
          </li>
          <li className="pl-2">
            Uso de <strong>Postman</strong> para testeo de rutas.
          </li>
          <li className="pl-2">
            Envío de emails de confirmación usando <strong>NodeMailer</strong> y{" "}
            <strong>MailTrap</strong>.
          </li>
        </ul>
      </>
    ),
    userData: (
      <>
        <div className="mb-2">
          <p>
            <strong>Usuario:</strong> correo@correo.com
          </p>
          <p>
            <strong>Contraseña:</strong> 55115511
          </p>
        </div>
      </>
    ),
    image: "projects/project-1.png",
    technologies: [
      "React",
      "React Router Dom",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Postman",
    ],
    url: "https://veterinaria-administrador-pacientes.netlify.app",
    id: 2,
  },
];

export const initialState = {
  projects,
  idState: 0,
  modal: false,
  projectModal: {},
};

export function reducer(state, action) {
  if (action.type === "saveId") {
    return {
      ...state,
      idState: action.getId,
    };
  }

  if (action.type === "showModal") {
    return {
      ...state,
      modal: true,
    };
  }

  if (action.type === "deleteId") {
    return {
      ...state,
      modal: false,
      idState: 0,
    };
  }

  return { ...state };
}

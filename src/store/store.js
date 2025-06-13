const projects = [
  {
    name: "LoL Builds",
    description: 'Actualmente me encuentro desarrollando un sitio web donde el Back-End recopila informacion de multiples EndPoints de una API de "Riot Games", guarda los datos analizados en una base de datos y crea multiples EndPoints con la recopilacion de estos analisis y datos para ser consumidos por el Front-End.',
    extra: "",
    image: "lol_builds",
    tecnologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    url: "",
    id: 1,
  },
  {
    name: "APV Veterinaria",
    description: 'Este fue mi primer proyecto con Login y Registro. En este proyecto aprendi muchisimo sobre "Context API" ya que debia manejar mucho estado goblal debido token de login. Use por primera vez "react-router-dom" para crear multiples rutas, manejar las rutas publicas y privadas, etc... Primer proyecto usa "JWT" y un Backend más complejo, tiene rutas protegidas, casheo de passwords y un Back muy bien estructurado. Tambien utilice la herramienta de "Postman" y MongoDB para la DB.',
    extra: "User: Leaves6622@gmail.com - Password: 55115511",
    image: "projects/project-1.png",
    tecnologies: ["React", "Tailwind CSS", "Express", "MondoDB", "Postman"],
    url: "https://veterinaria-administrador-pacientes.netlify.app",
    id: 2,
  },
  {
    name: "Guitarra LA",
    description: 'Este fue mi primer proyecto con Login y Registro. En este proyecto aprendi muchisimo sobre "Context API" ya que debia manejar mucho estado goblal debido token de login. Use por primera vez "react-router-dom" para crear multiples rutas, manejar las rutas publicas y privadas, etc... Primer proyecto usa "JWT" y un Backend más complejo, tiene rutas protegidas, casheo de passwords y un Back muy bien estructurado. Tambien utilice la herramienta de "Postman" y MongoDB para la DB.',
    extra: "",
    image: "",
    tecnologies: ["React", "Tailwind CSS", "Express", "MondoDB", "Postman"],
    url: "",
    id: 3,
  },
]

export const initialState = {
  projects,
  idState: 0,
  modal: false,
  projectModal: {}
}

export function reducer(state, action) {
  if (action.type === 'saveId') {
    return {
      ...state,
      idState: action.getId,
    }
  }

  if (action.type === 'showModal') {
    return {
      ...state,
      modal: true
    }
  }

  if (action.type === 'deleteId') {
    return {
      ...state,
      modal: false,
      idState: 0
    }
  }

  return { ...state }
}
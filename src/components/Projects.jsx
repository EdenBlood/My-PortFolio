import ProjectItem from "./ProjectItem.jsx"
import ModalProjects from "./ModalProjects.jsx"
import { initialState, reducer } from "../store/store.js"
import { useReducer } from "react"
import TitleSection from "./TitleSection.jsx"

export default function Projects() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <TitleSection>
        Proyectos
      </TitleSection>
      <div className="grid grid-cols-2 gap-10">
        {state.projects.map( project => (
          <ProjectItem project={project} dispatch={dispatch} key={project.id} />
        ) )}
      </div>

      <ModalProjects state={state} dispatch={dispatch} />
    </>
  )
}
{/* <p>Actualmente me encuentro desarrollando un sitio web donde el Back-End recopila informacion de multiples EndPoints de una API de "Riot Games", guarda los datos analizados en una base de datos y crea multiples EndPoints con la recopilacion de estos analisis y datos para ser consumidos por el Front-End.</p>
<p>El Front-End se encargar de hacer las peticiones de los diversos EndPoints para poder mostrarlos en la interfaz de usuario.</p> */}
import ProjectItem from "./ProjectItem.jsx"
import ModalProjects from "./ModalProjects.jsx"
import { initialState, reducer } from "../store/store.jsx"
import { useReducer } from "react"
import TitleSection from "./TitleSection.jsx"

export default function Projects() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <TitleSection>
        Proyectos
      </TitleSection>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
        {state.projects.map( project => (
          <ProjectItem project={project} dispatch={dispatch} key={project.id} />
        ) )}
      </div>

      <ModalProjects state={state} dispatch={dispatch} />
    </>
  )
}
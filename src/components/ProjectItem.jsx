
export default function ProjectItem({project, dispatch}) {
  const handleClick = (id) => {
    dispatch({ type: "saveId", getId: id })
  }

  return (
    <>
      <article>
        <button 
          className="flex flex-col w-full h-64 group rounded-lg bg-gray-card cursor-pointer overflow-hidden"
          onClick={ () => handleClick(project.id) }
        >
          <div className="h-2/3 overflow-hidden">
            <img className="block w-full h-full object-cover object-center group-hover:scale-125 transform will-change-transform transition-all duration-500" src={`/${project.image}`} alt={project.name} />
          </div>
          <div className="px-3 h-1/3 flex flex-col justify-center text-white">
            <h2 className="font-semibold text-xl group-hover:text-fuchsia-500 transition-colors duration-300">{project.name}</h2>
            <p className="line-clamp-1 text-sm font-light">{project.description}</p>
          </div>
        </button>
      </article>
    </>
  )
}
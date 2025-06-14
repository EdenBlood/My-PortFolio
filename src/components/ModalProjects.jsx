import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function ModalProjects({ state, dispatch }) {
  const [projectModal, setProjectModal] = useState({
    name: "",
    description: "",
    image: "",
    technologies: [],
    url: "",
    id: 0,
  });

  useEffect(() => {
    if (state.idState > 0) {
      setProjectModal(
        state.projects.filter((project) => project.id === state.idState)[0]
      );
      dispatch({ type: "showModal" });
    }
  }, [state.idState]);

  return (
    <>
      <Dialog
        open={state.modal}
        onClose={() => dispatch({ type: "deleteId" })}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 w-6/7 mx-auto flex items-center justify-center">
          <Dialog.Panel className="bg-gray-card p-6 rounded-xl shadow-xl space-y-6 max-h-[90vh] overflow-y-auto">
            <Dialog.Title className="text-4xl font-bold text-center">
              {projectModal.name}
            </Dialog.Title>

            <div className="flex flex-row gap-8 w-full items-center">

              <div className="space-y-2 w-2/3">
                <h2 className="font-bold">Descripción:</h2>
                <div className="text-sm text-balance pl-2">
                  {projectModal.description}
                </div>

                {projectModal.userData && (
                  <>
                    <h3 className="font-bold">Datos de Prueba:</h3>
                    <div className="text-sm pl-2">
                      {projectModal.userData}
                    </div>
                  </>
                )}
                
                <h2 className="font-bold">Tecnologías:</h2>

                <ul className="flex flex-wrap gap-3 pl-2">
                  {projectModal.technologies.map((technology) => (
                    <li key={technology} className="bg-black bg-linear-to-tl from-blue-800 via-black to-fuchsia-800 hover:contrast-150 transition-all duration-300 hover:scale-110 p-2 rounded-full text-xs my-1 cursor-default">
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-1/3">
                <img
                  className="block w-full rounded-xl "
                  src={`${projectModal.image}`}
                />
              </div>
            </div>
            <div className="flex justify-start gap-10 items-center">
              <a
                target="_blank"
                className="py-2 px-10 text-center font-bold bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700 cursor-pointer transition-colors duration-300"
                href={projectModal.url}
              >
                Al Sitio
              </a>
              <button
                className="py-2 px-10 font-bold bg-red-700 text-white rounded-lg hover:bg-red-900 cursor-pointer transition-colors duration-300"
                onClick={() => dispatch({ type: "deleteId" })}
              >
                Cerrar
              </button>
            </div>

          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

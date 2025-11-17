type ExperienceData = {
  job: string
  plate: string
  description: string
  learnings: string[]
}

type ExperiencesData = { en: ExperienceData[]; es: ExperienceData[] }

export const experiences: ExperiencesData = {
  en: [
    {
      job: 'Official carpenter in charge',
      plate: 'Muebles Galiottiz',
      description:
        'During five years I led the carpentry area in a workshop dedicated to the design and manufacture of custom furniture.',
      learnings: [
        'I learned to lead teams because I had to coordinate the work of several people to meet orders on time.',
        'I developed skills to teach and communicate, as I was responsible for training new employees.',
        'I learned to make decisions under pressure, because many times it depended on me to resolve unexpected events or adjust schedules.',
        'I understood the importance of organizing well the times and resources so that everything went well and without delays.',
        'I learned to design with creativity and functionality, as I made custom furniture according to the needs of each client.',
        'I gained confidence in myself because my boss trusted me completely in my criteria and capacity to manage the entire workshop.'
      ]
    }
  ],
  es: [
    {
      job: 'Oficial carpintero a cargo ',
      plate: 'Muebles Galiottiz',
      description:
        'Durante cinco años lideré el área de carpintería en un taller dedicado al diseño y fabricación de muebles a medida.',
      learnings: [
        'Aprendí a liderar equipos porque tenía que coordinar el trabajo de varias personas para cumplir con los pedidos a tiempo.',
        'Desarrollé habilidades para enseñar y comunicarme, ya que me encargaba de capacitar a los nuevos.',
        'Aprendí a tomar decisiones bajo presión, porque muchas veces dependían de mí para resolver imprevistos o ajustar plazos.',
        'Entendí la importancia de organizar bien los tiempos y recursos para que todo saliera bien y sin atrasos.',
        'Aprendí a diseñar con creatividad y funcionalidad, ya que hacía muebles a medida según las necesidades de cada cliente.',
        'Gané confianza en mí mismo porque mi jefe confiaba plenamente en mi criterio y capacidad para manejar todo el taller.'
      ]
    }
  ]
}

type ExperiencesState = {
  job: string
  plate: string
  description: string
  learnings: string[]
}

export const experiences: ExperiencesState[] = [
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

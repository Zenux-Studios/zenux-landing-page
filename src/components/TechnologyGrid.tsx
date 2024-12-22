import { TechnologyIcon } from './TechnologyIcon'

const technologies = [
  { name: 'Python', icon: 'Python' as const },
  { name: 'React', icon: 'React' as const },
  { name: 'JavaScript', icon: 'JavaScript' as const },
  { name: 'Vue.js', icon: 'Vue' as const },
  { name: 'Node.js', icon: 'Node' as const },
  { name: 'Go', icon: 'Go' as const },
  { name: 'Nuxt.js', icon: 'Nuxt' as const },
  { name: 'Next.js', icon: 'Next' as const },
]

export function TechnologyGrid() {
  return (
    <div className="flex grid-cols-9 gap-16 justify-center items-center">
      {technologies.map((tech) => (
        <TechnologyIcon key={tech.name} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  )
}


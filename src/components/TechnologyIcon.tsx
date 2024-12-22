import { 
    SiPython, 
    SiReact, 
    SiJavascript, 
    SiVuedotjs, 
    SiNodedotjs, 
    SiGo, 
    SiNuxtdotjs, 
    SiNextdotjs 
  } from 'react-icons/si'
  
  const iconComponents = {
    Python: SiPython,
    React: SiReact,
    JavaScript: SiJavascript,
    Vue: SiVuedotjs,
    Node: SiNodedotjs,
    Go: SiGo,
    Nuxt: SiNuxtdotjs,
    Next: SiNextdotjs,
  }
  
  interface TechnologyIconProps {
    name: string
    icon: keyof typeof iconComponents
  }
  
  export function TechnologyIcon({ name, icon }: TechnologyIconProps) {
    const IconComponent = iconComponents[icon]
  
    return (
      <div className="flex flex-col items-center">
        <IconComponent className="w-16 h-16 text-gray-400" />
        <span className="sr-only">{name}</span>
      </div>
    )
  }
  
  
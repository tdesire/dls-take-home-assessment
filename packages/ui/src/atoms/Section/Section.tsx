import LevelProvider, { useLevelContext } from '../../context/level'
import type { SectionProps } from './Section.types'
import type { Level } from '../../context/level'

export const Section = <CustomSectionProps extends SectionProps>({ children, ...props }: CustomSectionProps) => {
  const parentLevel = useLevelContext()
  const level: Level = parentLevel >= 6 ? 6 : ((parentLevel + 1) as Level);

  return (
    <section {...props}>
      <LevelProvider level={level}>
        {children}
      </LevelProvider>
    </section>
  )
}
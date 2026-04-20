import { useContext } from 'react'
import { LevelContext } from './LevelContext'
import type { Level } from './level.types'

export const useLevelContext = (): Level => {
  const level = useContext(LevelContext)

  if (!level) {
    throw new Error('useLevelContext must be used within a <LevelProvider> or <Section> component.')
  }

  return level
}
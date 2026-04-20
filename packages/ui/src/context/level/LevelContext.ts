import { createContext } from 'react'
import type { Level } from './level.types'

export const LevelContext = createContext<Level>(1)

LevelContext.displayName = 'LevelContext'
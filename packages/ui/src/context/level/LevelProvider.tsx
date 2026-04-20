import { LevelContext } from './LevelContext'
import type { LevelProviderProps } from './level.types'

const LevelProvider = ({ children, level }: LevelProviderProps) => 
  <LevelContext.Provider value={level}>
    {children}
  </LevelContext.Provider>

export default LevelProvider
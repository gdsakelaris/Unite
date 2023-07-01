//a function that will return a specific icon component based on the passed name argument
import { phoneIcon, globalIcon } from "../../icons"
export const getVectorIconBasedOnParam = (name) => {
  if (name === 'globe-sharp' ) return globalIcon
  else return phoneIcon
} 
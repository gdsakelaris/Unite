import { phoneIcon, globalIcon } from "../../icons"
export const getVectorIconBasedOnParam = (name) => {
  if (name === 'globe-sharp' ) return globalIcon
  else return phoneIcon
} 
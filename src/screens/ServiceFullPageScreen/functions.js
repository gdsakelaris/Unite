import { servicesDetail } from "./listOfProvidedServiceDetail"
export const getServiceOption = (index) => servicesDetail[index]
export const switchToServiceOption = (setdetailOption, index) => setdetailOption(servicesDetail[index])
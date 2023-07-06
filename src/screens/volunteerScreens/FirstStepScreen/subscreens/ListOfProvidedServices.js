//this file will make a list which it contains all the services card and is displayed on the first step screen 
import React from 'react';
import ProvidedServicesContainer from './ProvidedServicesContainer';
import { listOfServiceTypes } from '../listOfServiceTypes';
import ServiceCard from '../../../../components/ServiceCard';
const ListOfProvidedServices = () => {
  return (
    // list container
    <ProvidedServicesContainer>
      {/* list of service cards */}
      {listOfServiceTypes.map((service, i) => 
                                    <ServiceCard title={service.name} picture={service.urlImage} key={i.toString()}/>)}
    </ProvidedServicesContainer>
  );
}
export default ListOfProvidedServices;
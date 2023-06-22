import React from 'react';
import ProvidedServicesContainer from './ProvidedServicesContainer';
import { listOfServiceTypes } from '../listOfServiceTypes';
import ServiceCard from '../../../../components/ServiceCard';
const ListOfProvidedServices = () => {
  return (
    <ProvidedServicesContainer>
      {listOfServiceTypes.map((service, i) => 
                                    <ServiceCard title={service.name} picture={service.urlImage} key={i.toString()}/>)}
    </ProvidedServicesContainer>
  );
}
export default ListOfProvidedServices;
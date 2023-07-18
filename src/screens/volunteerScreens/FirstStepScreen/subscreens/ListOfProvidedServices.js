//this file will make a list which it contains all the services card and is displayed on the first step screen 
import React, {useState} from 'react';
import ProvidedServicesContainer from './ProvidedServicesContainer';
import {listOfServiceTypes} from '../listOfServiceTypes';
import ServiceCard from '../../../../components/ServiceCard';

const ListOfProvidedServices = () => {

  const [selectedService, setSelectedService] = useState(null);

  return (
    // list container
    <ProvidedServicesContainer>
      {/* list of service cards */}
      {listOfServiceTypes.map((service, i) =>
        <ServiceCard
          title={service.name}
          picture={service.urlImage}
          key={i.toString()}
          onPress={() => setSelectedService(service.name)}
          isSelected={selectedService === service.name}
        />)}
    </ProvidedServicesContainer>
  );
}
export default ListOfProvidedServices;
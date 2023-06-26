import React from 'react';
import { providedServices } from '../listOfProvidedServices';
import ProvidedServicesContainer from './ProvidedServicesContainer';
import ServiceCard from '../../../components/ServiceCard';

const ProvidedServices = ({navigation}) => {
  return (
    <ProvidedServicesContainer>
      {providedServices.map((service, i) =>
                                            <ServiceCard title={service.name} picture={service.urlImage} onPress={() => navigation.navigate(service.navigateTo)} key={i.toString()}/> 
                            )}
    </ProvidedServicesContainer>
  );
}
export default ProvidedServices;
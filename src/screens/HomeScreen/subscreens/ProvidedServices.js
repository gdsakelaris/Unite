import React from 'react';
import { providedServices } from '../listOfProvidedServices';
import ProvidedServicesContainer from './ProvidedServicesContainer';
import ServiceCard from '../../../components/ServiceCard';
import { servicecard as styles } from '../css';
const ProvidedServices = ({navigation}) => {
  return (
    <ProvidedServicesContainer>
      {providedServices.map((service, i) =>
                                            <ServiceCard title={service.name} picture={service.urlImage} onPress={() => navigation.navigate(service.navigateTo)} key={i.toString()} style={styles.servicecard}/> 
                            )}
    </ProvidedServicesContainer>
  );
}
export default ProvidedServices;
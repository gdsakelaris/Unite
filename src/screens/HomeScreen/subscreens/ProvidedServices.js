/**
 * ProvidedServices component.
 * This component renders a set of service cards on the Home page.
 *
 * @component
 * @param {object} navigation - The navigation prop from React Navigation to enable navigation.
 * @returns {JSX.Element} ProvidedServices component
 */


import React from 'react';
import { providedServices } from '../listOfProvidedServices';
import ProvidedServicesContainer from './ProvidedServicesContainer';
import ServiceCard from '../../../components/ServiceCard';
import { servicecard as styles } from '../css';


const ProvidedServices = ({ navigation }) => {
  return (
    <ProvidedServicesContainer>
      {providedServices.map((service, i) =>
        <ServiceCard title={service.name}
          picture={service.urlImage}
          onPress={() =>
            /**
             * When a service card is clicked, navigate to the 'View All Resources' page and pass the title as the params, which is corresponding kind of the clicked service, to that page.
             */
            navigation.navigate('ResourceNav', {
              //this is how to send params to nested screens 
              screen: 'View All Resources',
              params: {
                title: service.title
              }
            })
          }
          key={i.toString()}
          style={styles.servicecard} />
      )}
    </ProvidedServicesContainer>
  );
}
export default ProvidedServices;
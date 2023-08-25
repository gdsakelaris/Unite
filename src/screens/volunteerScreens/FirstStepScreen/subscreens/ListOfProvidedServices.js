/**
 * @file ListOfProvidedServices.js
 * @description This file defines a list component that contains all the service cards and is displayed on the First Step screen.
 * @param {string} selectedService - the name of the selected service card.
 * @param {Function} setSelectedService - function that set the selectedService variable to the name of the selected service card.
 * @returns {JSX.Element} A list component containing service cards for the First Step screen.
 */


import React, {useState} from 'react';
import ProvidedServicesContainer from './ProvidedServicesContainer';
import {listOfServiceTypes} from '../listOfServiceTypes';
import ServiceCard from '../../../../components/ServiceCard';
import updateResource from '../../../../utils/updateResource';
import { useResourceContext} from '../../../../context/ResourceProvider';
const ListOfProvidedServices = ({selectedService, setSelectedService}) => {

  //get resource-related state variable and dispatch function from ResourceProvider
  const {resource, dispatch} = useResourceContext()
  return (
    // list container
    <ProvidedServicesContainer>
      {/* list of service cards */}
      {listOfServiceTypes.map((service, i) =>
        <ServiceCard
          title={service.name}
          picture={service.urlImage}
          key={i.toString()}
          onPress={() => {
            //Once the user select the service card in the First Step screen, update the resource-state variable with the name of the selected service card. The resource-state variable will later be sent to the backend to create resourcce
            //user won't be able to go the the next page if they haven't selected any cards
            updateResource(dispatch, {'field': 'kindOfResource', 'value': service.name.toLowerCase()})
            setSelectedService(service.name)
          }}
          isSelected={selectedService === service.name}
        />)}
    </ProvidedServicesContainer>
  );
}
export default ListOfProvidedServices;
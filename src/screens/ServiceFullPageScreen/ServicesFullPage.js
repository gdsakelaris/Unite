import React, { useState } from 'react';
import ServiceDetail from './subscreens/ServiceDetail';
import ServicePageImage from './subscreens/ServicePageImage';
import ServicePageInfo from './subscreens/ServicePageInfo';
import ServicePageContainer from './subscreens/ServicePageContainer';
import listOfProvidedSection from './listOfProvidedServiceDetail'

const ServicesFullPage = ({route}) => {
  const [detailOption, setdetailOption] = useState(0)
  const {resource} = route.params
  return (
    <ServicePageContainer>
      <ServicePageImage/>
      <ServicePageInfo/>
      <ServiceDetail detailOption={detailOption} setdetailOption={setdetailOption} resource={resource}/>
    </ServicePageContainer>
  );
}
export default ServicesFullPage;
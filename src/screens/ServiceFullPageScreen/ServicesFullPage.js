import React, { useState } from 'react';
import ServiceDetail from './subscreens/ServiceDetail';
import ServicePageImage from './subscreens/ServicePageImage';
import ServicePageInfo from './subscreens/ServicePageInfo';
import ServicePageContainer from './subscreens/ServicePageContainer';
import listOfProvidedSection from './listOfProvidedServiceDetail'

const ServicesFullPage = () => {
  const [detailOption, setdetailOption] = useState(listOfProvidedSection[0])
  return (
    <ServicePageContainer>
      <ServicePageImage/>
      <ServicePageInfo/>
      <ServiceDetail detailOption={detailOption} setdetailOption={setdetailOption}/>
    </ServicePageContainer>
  );
}  
export default ServicesFullPage;
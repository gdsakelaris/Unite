import React, { useState } from 'react';
import ServiceDetail from './subscreens/ServiceDetail';
import ServicePageImage from './subscreens/ServicePageImage';
import ServicePageInfo from './subscreens/ServicePageInfo';
import ServicePageContainer from './subscreens/ServicePageContainer';
import { getServiceOption } from './functions';
const ServicesFullPage = () => {
  const [detailOption, setdetailOption] = useState(getServiceOption(0))
  return (
    <ServicePageContainer>
      <ServicePageImage/>
      <ServicePageInfo/>
      <ServiceDetail detailOption={detailOption} setdetailOption={setdetailOption}/>
    </ServicePageContainer>
  );
}
export default ServicesFullPage;
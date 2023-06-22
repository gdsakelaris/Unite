import React from 'react';
import { Divider } from 'react-native-paper';

const DividerView = ({component, style}) => (
  <>
    {component}
    <Divider style={style}/>
  </>
)

export default DividerView;
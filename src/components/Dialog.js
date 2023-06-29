//this file will create a dialog meassage (will be used for logout notification, login/signup error msg )
import * as React from 'react';
import { dialog as styles } from './css';
import { Dialog, Portal, Text, Button} from 'react-native-paper';

// iconStyle : expect object of expected following keys: color, size, 
// titleStyle: object of styles
//contentStyle: object of expected following keys: variant
//buttonSetting: object of expected following keys: cancelText, okText,  
//buttons: an array of buttons (each button will be an object containing all the props of making up a button)
const DialogMessage = ({title, content, error, iconStyle, titleStyle, contentStyle, buttonViewStyle, buttons}) => {
  const [visible, setVisible] = React.useState(true);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        {error && <Dialog.Icon {...iconStyle}/>}
        <Dialog.Title style={[styles.dialogDefaultTitleStyle, titleStyle]}>{title}</Dialog.Title>
        <Dialog.Content>
            <Text {...contentStyle}>{content}</Text>
        </Dialog.Content>
        {buttons &&
        <Dialog.Actions {...buttonViewStyle}>
              {buttons.map((e, i) => 
                                    <Button key={i.toString()} {...e}>{e.title}</Button>)}
        </Dialog.Actions>}
      </Dialog>
    </Portal>
  );
}
export default DialogMessage;
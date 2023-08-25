/**
 * Renders a dialog message that can be used for various purposes, such as logout notifications, login/signup error messages.
 *
 * @function
 * @param {boolean} visible - Determines whether the dialog is visible.
 * @param {function} onDismiss - Callback function to be called when the dialog is dismissed.
 * @param {string} title - The title of the dialog.
 * @param {string} content - The content of the dialog.
 * @param {boolean} error - Whether the dialog represents an error message.
 * @param {Object} iconStyle - Icon style settings with color and size.
 * @param {Object} titleStyle - Additional styles for the title.
 * @param {Object} contentStyle - Settings for the content, such as variant.
 * @param {Array} buttons - An array of button objects for rendering action buttons.
 * @returns {JSX.Element} - The rendered dialog message component.
 */

import * as React from 'react';
import { dialog as styles } from './css';
import { Dialog, Portal, Text, Button} from 'react-native-paper';


const DialogMessage = ({visible, onDismiss, title, content, error, iconStyle, titleStyle, contentStyle, buttons}) => {
  // Ultilize Portal and Dialog components from react native paper to make DialogMessage component. Go to react natie paper and check out Portal and Dialog components for references
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        {error && <Dialog.Icon {...iconStyle}/>}
        <Dialog.Title style={[styles.dialogDefaultTitleStyle, titleStyle]}>{title}</Dialog.Title>
        <Dialog.Content>
            <Text {...contentStyle}>{content}</Text>
        </Dialog.Content>
        {buttons &&
        <Dialog.Actions style={styles.dialogButtonContainer}>
              {buttons.map((e, i) => 
                <Button key={i.toString()} {...e} style={styles.dialogButton} labelStyle={styles.dialogButtonText}>{e.title}</Button>)}
        </Dialog.Actions>}
      </Dialog>
    </Portal>
  );
}
export default DialogMessage;
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { fontScale } from '../../base';
import { hour as styles } from './css';

export const globalIcon = <Ionicons name={'globe-sharp'} size={24 / fontScale} color="black" />
export const phoneIcon =  <Feather name={'phone'} size={24 / fontScale} color="black" />
export const locationIcon = <Ionicons name={'md-location-outline'} size={24 / fontScale} color="black"/>
export const arrow_downIcon= <MaterialIcons name={'keyboard-arrow-down'} size={30 / fontScale} color="black" style={styles.arrowDownIcon}/>
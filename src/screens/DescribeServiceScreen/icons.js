//icons for DescribeService screen
import { fontScale } from '../../base';
import renderExpoIcon from '../../utils/renderExpoIcon';
import { hour as styles } from './css';
export const globalIcon = renderExpoIcon('Ionicons', 'globe-sharp', {size: 24 / fontScale})
export const phoneIcon =  renderExpoIcon('Feather', 'phone', {size: 24 / fontScale})
export const locationIcon = renderExpoIcon('EvilIcons', 'location', {size: 24 / fontScale})
export const arrow_downIcon= renderExpoIcon('MaterialIcons', 'keyboard-arrow-down', {size: 25 / fontScale, style: styles.arrowDownIcon})
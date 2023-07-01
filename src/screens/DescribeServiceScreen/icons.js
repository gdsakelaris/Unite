import { fontScale, renderLocationSignIconWithThickerWidth, renderPhoneIconWithThickerWidth, renderArrowDownIcon, renderGlobalIcon } from '../../base';
import { hour as styles } from './css';
export const globalIcon = renderGlobalIcon(null, 24 / fontScale)
export const phoneIcon =  renderPhoneIconWithThickerWidth(null, 24 / fontScale)
export const locationIcon = renderLocationSignIconWithThickerWidth(null, 24 / fontScale)
export const arrow_downIcon= renderArrowDownIcon(styles.arrowDownIcon, 25 / fontScale)
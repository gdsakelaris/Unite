import React, {useState} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { arrowDownIcon, arrowUpIcon } from '../icons';
import ExpandedView from './ExpandedView';
import { helpPageOpt as styles } from '../css';
import { handleClicked } from '../functions';
const HelpPageOpt = ({question, detail}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <TouchableOpacity
      style={styles.helpPageOptContainer}
      onPress={() => handleClicked(setIsExpanded)}
    >
      <View style={styles.optionContainer}>
        <Text style={styles.question}>{question}</Text>
        <View style={styles.settingButton}>
          {isExpanded ? {arrowUpIcon} : {arrowDownIcon}} 
        </View>
      </View>
    {isExpanded && <ExpandedView detail={detail}/>}
  </TouchableOpacity>
  );
}
export default HelpPageOpt;
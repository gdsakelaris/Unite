import React, {useState} from "react";
import SearchBar from '../../components/SearchBar'
import HelpPageContainer from "./subscreens/HelpPageContainer";
import HelpPageOpt from "./subscreens/HelpPageOpt";
import Title from "./subscreens/Title";
import { listOfProvidedHelpOpts } from "./listOfProvidedHelpOpts";
import CollapseAll from "./subscreens/CollapseAll";
import { ScrollView } from "react-native";

const HelpPage = () => {
	const [listState, setListState] = useState(listOfProvidedHelpOpts);
  
	const handleCollapseAll = () => {
	  const updatedList = listState.map((option) => ({
		...option,
		isExpanded: false,
	  }));
	  setListState(updatedList);
	};
  
	return (
	  <HelpPageContainer>
		<Title title='Hi, how can we help you?' />
		<SearchBar/>
		<CollapseAll onPress={handleCollapseAll} />
		<ScrollView>
		{listState.map((option, i) => (
		  <HelpPageOpt
			question={option.question}
			detail={option.detail}
			key={i.toString()}
			isExpanded={option.isExpanded}
			setIsExpanded={(value) => {
			  const updatedList = [...listState];
			  updatedList[i].isExpanded = value;
			  setListState(updatedList);
			}}
		  />
		))}
		</ScrollView>
	  </HelpPageContainer>
	);
  };
  
  export default HelpPage;


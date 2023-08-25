/**
 * HelpPage component.
 * This component displays a help page with search functionality and a list of provided help options.
 *
 * @component
 * @returns {JSX.Element} HelpPage component
 */

import React from "react";
import SearchBar from '../../components/SearchBar'
import HelpPageContainer from "./subscreens/HelpPageContainer";
import HelpPageOpt from "./subscreens/HelpPageOpt";
import Title from "./subscreens/Title";
import { listOfProvidedHelpOpts } from "./listOfProvidedHelpOpts";
const HelpPage = () => {
  return (
    <HelpPageContainer>
      {/* Title */}
      <Title title='Hi, how can we help you?'/>

      {/* Searchbar */}
      <SearchBar/>

      {/* List of provided help options */}
      {listOfProvidedHelpOpts.map((option, i) =>
                                      <HelpPageOpt detail={option.detail} question={option.question} key={i.toString()}/>)}
                                      
    </HelpPageContainer>
  );
};
export default HelpPage;

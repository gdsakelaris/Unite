/**
 * This function will render the a view of 5 stars for the resource based on the reviewer's rating
 * if rating is 5, this file will render 5 black stars, if rating is 2, this file will render 2 black stars and 3 white stars. 
 * @function renderExpoIcon 
 * @param {number} rating - rating
 * @param {Object} starStyle - an object that contains all the props for making star icon from expo icon
 * @returns {JSX.Element} -A view of 5 stars component.
 */

import renderExpoIcon from "./renderExpoIcon"
import { View } from "react-native"

export default renderStarRating = (rating, starStyle ) => {
  const arr = Array.from({length: 5})
  return (<View style={{
      flexDirection:'row',
      justifyContent:'space-evenly'
  }}>
              {arr.map((_, i) => {
                                //if the rating is bigger than the position of the current star, render the black star
                                if (rating > i) return renderExpoIcon('FontAwesome', 'star', {key: i.toString(),...starStyle})
                                else return renderExpoIcon('FontAwesome', 'star-o', {key: i.toString(),...starStyle})                                
                            })}
          </View>)
}
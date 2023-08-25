/**
 * A component for displaying contact information in the resource card.
 *
 * @component
 * @param {string} location - The location information of the resource.
 * @param {string} number - The phone number of the resource.
 * @returns {JSX.Element} - A contact information component for the resource card.
 * 
 * ResourceCardContactInfo component will receive location or number (not both)
 */

import renderResourceCardContactInfo from "../renderResourceCardContactInfo";
const ResourceCardContactInfo = ({location, number}) => (
  // Call a function to render the appropriate contact info view for location or phone number
  renderResourceCardContactInfo(location, number)
)
export default ResourceCardContactInfo;
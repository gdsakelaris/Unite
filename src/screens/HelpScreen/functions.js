/**
 * Function to handle expansion state toggling.
 * This function toggles the expanded view for the question in HelpPage .
 *
 * @param {function} setIsExpanded - A state update function to toggle the expanded state.
 */
export const handleClicked = (setIsExpanded) => setIsExpanded(prev => !prev)
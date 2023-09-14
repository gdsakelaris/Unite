/**
 * @function calculateRemainingChars
 * @description Calculate the remaining characters based on the maximum character and the number of characters typed. Ultilized in the Write Review screen to calculate the remaining chars that user allows to type in the text input
 * @returns {number} remaining chars 
 */

export default calculateRemainingChars = (maximumchar, numberTypedChars) => maximumchar - numberTypedChars

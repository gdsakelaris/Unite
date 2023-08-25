/**
 * @function addImageToImageList
 * @description Adds a new image URI to the existing list of images.
 * @param {Array} listOfImages - The current list of image URIs.
 * @param {function} setImageHook - The state setter function provided by useState to update the listOfImages.
 * @param {string} newImage - The URI of the new image to be added.
 * @returns {void}
 */


export default addImageToImageList = (listOfImages, setImageHook, newImage) => {
  /**
   * Creates a new array that includes the existing images and the new image URI.
   * Updates the listOfImages state variable with the new array.
   */
  setImageHook([...listOfImages, newImage])

}
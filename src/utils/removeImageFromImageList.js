/**
 * @function removeImageFromImageList
 * @description remove image URI from the existing list of images.
 * @param {Array} listOfImages - The current list of image URIs.
 * @param {function} setImageHook - The state setter function provided by useState to update the listOfImages.
 * @param {string} removedImage - The URI of the image that is about to be removed.
 * @returns {void}
 */

export default removeImageFromImageList = (listOfImages, setImageHook, removedImage) => setImageHook(listOfImages.filter(imageUri => imageUri !== removedImage))
import axios from 'axios';

const bookmarkResources = async (resourceId, userToken) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/api/v1/bookmark/create`, 
            { resourceId },
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }
        );

        if (response.status === 200  && response.data.data.msg === 'Resource successfully bookmarked.'){
            return { success: true, message: response.data.data.msg};
        } else {
            return { success: false, message: 'Bookmark resource failed.'}
        }
    } catch (error) {
        return { success: false, message: 'An error occured while bookmarking the resource'}
    }
};

export default bookmarkResources;
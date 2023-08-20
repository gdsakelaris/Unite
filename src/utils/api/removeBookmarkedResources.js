import axios from 'axios';

const removeBookmarkedResources = async (resourceId, userToken) => {
    try {
        const response = await axios.delete(
            `${API_BASE_URL}/api/v1/bookmark/delete`,
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                },
                data: {
                    resourceId
                }
            }
        );

        if (response.status === 200 && response.data.data.msg === "Bookmark successfully deleted") {
            return { success: true, message: response.data.data.msg };
        } else {
            return { success: false, message: "Delete client bookmark failed" };
        }
    } catch (error) {
        return { success: false, message: "An error occurred while deleting the bookmark" };
    }
};

export default removeBookmarkedResources;

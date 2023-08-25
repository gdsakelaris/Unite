/**
 * API URL
 */


export const BASE_URL = 'http://34.27.143.72/';
export const SIGNUP_ROUTE = BASE_URL + 'api/v1/client/create'
export const LOGIN_ROUTE = BASE_URL + 'api/v1/client/login'
export const UPDATE_USER_ROUTE = BASE_URL + 'api/v1/client/update'
export const CREATE_RESOURCE_ROUTE = BASE_URL + 'api/v1/resource/create'
export const GET_PUBLISHEDRESOURCES_ROUTE = BASE_URL + 'api/v1/resource/get/user-id'
export const UPDATE_RESOURCE_ROUTE = BASE_URL + 'api/v1/resource/update'
export const GET_SAVEDRESOURCES_ROUTE = BASE_URL + 'api/v1/bookmark/get'
export const SAVE_RESOURCE_ROUTE = BASE_URL + 'api/v1/bookmark/create'
export const GET_RESOURCE_KIND = BASE_URL + 'api/v1/resource/get/kind'
export const REMOVE_BOOKMARKED_RESOURCE = BASE_URL + 'api/v1/bookmark/delete'
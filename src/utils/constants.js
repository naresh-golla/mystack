
 import { AppConfig } from 'blockstack'
 
/**
 * HTTP services related constants
 */
export const httpConstants = {
    ENDPOINT: "http://localhost:8000/",
    GET_USER: "getUser/",
    UPDATE_USER: "updateUser/",
    CREATE_USER: "createUser"
};

/**
Json keys 
 */
 export const JsonKeys = {
     USER_NAME: "username",
     DATA: "data"
 }

export const appConfig = new AppConfig(['store_write', 'publish_data'])


export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


import axios from "axios";

//uploadvideoAPI

import { commonAPI } from "./commonAPI";
import {server_url} from './server_url'

export const uploadvideoAPI=async(video)=>{
    return await commonAPI('POST',`${server_url}/allVideos`,video)
}

//getalluploadvideoAPI

export const getAllUploadVideoAPI=async()=>{
    return await commonAPI('GET',`${server_url}/allVideos`,"`")
}

//getAVideoAPI

export const getAVideoAPI=async(id)=>{
    return await commonAPI('GET',`${server_url}/allVideos/${id}`,"`")
}


//deletevideoApi

export const deletevideoAPI=async(id)=>{
    return await commonAPI('DELETE',`${server_url}/allVideos/${id}`,{})
}

//addHistoryAPI
export const addHistoryAPI=async(video)=>{
    return await commonAPI('POST',`${server_url}/history`,video)
}
export const getHistoryAPI=async(video)=>{
    return await commonAPI('GET',`${server_url}/history`,video)
}
export const deleteHistoryAPI=async(id)=>{
    return await commonAPI('DELETE',`${server_url}/history/${id}}`,{})
}

//addCategoryAPI
export const addCategoryAPI=async()=>{  
    return await commonAPI('POST',`${server_url}/category`,category)  
}
export const getCategoryAPI=async()=>{  
    return await commonAPI('GET',`${server_url}/category`,"")  
}
export const deleteCategoryAPI=async()=>{  
    return await commonAPI('DELETE',`${server_url}/category/${id}`,{})  
}

//updateCategoryAPI
export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI('PUT',`${server_url}/category/${id}`,categoryDetails)
}
import React from 'react'
import {GET_ALL_CATEGORY,GET_ERROR,CREATE_CATEGORY} from '../Type'
import useGetData from '../../Hooks/useGetData'
import { usePostDataWithImage } from '../../Hooks/useInsertData'

// get all categories
export const getAllCategory = (limit) => async (dispatch) =>{

    try{
        //  const res= await baseUrl.get('/api/v1/categories')
        //  console.log(res.data)

        const response=await useGetData(`/api/v1/categories?limit=${limit}`)
         dispatch({
            //action.type
            type:GET_ALL_CATEGORY,
            payload:response
         })
    }
    catch(e){
     
        dispatch({
            //action.type
            type:GET_ERROR,
            payload: "Error  ,"+ e
         })
    }
}



// get all categories with pagination
export const getAllCategoryPage = (limit,page) => async (dispatch) =>{

    try{
        //  const res= await baseUrl.get('/api/v1/categories')
        //  console.log(res.data)

        const response=await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`)
         dispatch({
            //action.type
            type:GET_ALL_CATEGORY,
            payload:response
         })
    }
    catch(e){
     
        dispatch({
            //action.type
            type:GET_ERROR,
            payload: "Error  ,"+ e
         })
    }
}





// Create Category
export const createCategory = (formData) => async (dispatch) =>{

    try{
        //  const res= await baseUrl.get('/api/v1/categories')
        //  console.log(res.data)

        const response=await usePostDataWithImage(`api/v1/categories`,formData)
         dispatch({
            //action.type
            type:CREATE_CATEGORY,
            payload:response,
            loading:true
         })
    }
    catch(e){
     
        dispatch({
            //action.type
            type:GET_ERROR,
            payload: "Error  ,"+ e
         })
    }
}



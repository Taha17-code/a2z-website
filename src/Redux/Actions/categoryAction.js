import React from 'react'
import {GET_ALL_CATEGORY,GET_ERROR} from '../Type'
import useGetData from '../../Hooks/useGetData'


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

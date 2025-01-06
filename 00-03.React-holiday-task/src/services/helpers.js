import { BASE_URL } from "./contest";
import axios from "axios"

const getAllData = async (endpoint)=>{
    try {
        const res = await axios(`${BASE_URL}/${endpoint}`)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

const getDataById = async (endpoint,id)=>{
    try {
        const res = await axios(`${BASE_URL}/${endpoint}/${id}`)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

const deleteDataById = async (endpoint,id)=>{
    try {
        const res = await axios.delete(`${BASE_URL}/${endpoint}/${id}`)
        return res
    } catch (error) {
        console.log(error);
    }
}

const addNewData = async (endpoint, payload) => {
    try {
      const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
};

const editDataById = async (endpoint, id, payload) => {
    try {
      const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
};
export { getAllData,getDataById,deleteDataById,addNewData,editDataById}
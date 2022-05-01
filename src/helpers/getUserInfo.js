import React, { useCallback } from "react";
import useFetchApi from "./fetchApi/useFetchApi";
import axios from "axios";
import { APPENV } from "../core/config";
function getUser(setAuthData){
        axios.get(APPENV.domain + '/api/profile/me').then((response)=>{
            setAuthData(response.data.data)
            console.log(response.data.data)
        }).catch((er)=>{
            console.log(er)
        })
}
export default getUser
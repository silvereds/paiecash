import React, { useCallback } from "react";
import useFetchApi from "./fetchApi/useFetchApi";
import axios from "axios";
import { APPENV } from "../core/config";
async function getCardId(setCardList,setCardLoading){
        await axios.get(APPENV.domain + '/api/card/card_type').then((response)=>{
            setCardList(response.data.data) 
            setCardLoading(false)
        }).catch((er)=>{
            console.log(er)
        })
        return []
}
export default getCardId
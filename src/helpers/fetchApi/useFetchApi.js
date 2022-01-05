import {useCallback, useState} from 'react';
import AllElements from "./fetch_api_components/AllElements";
import ItemElements from "./fetch_api_components/ItemElements";
import PostData from "./fetch_api_components/PostData";
import PatchData from "./fetch_api_components/PatchData";
import ValidateData from "./fetch_api_components/ValidateData";
import SearchData from "./fetch_api_components/SearchData";

function useFetchApi(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [status, setStatus] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [error, setError] = useState([])

    const getAll = useCallback(async () => {
        AllElements(url, setData, setTotalItems, setLoading)
    }, [url])

    const getItem = useCallback(async (id) => {
        ItemElements(id, url, setData, setTotalItems, setLoading)
    }, [url])

    const postData = useCallback(async (sendData) => {
        PostData(sendData, url, data, setData, setLoading, setStatus, setError)
    }, [url])

    const patchData = useCallback(async (id, sendData) => {
        PatchData(id, sendData, url, data, setData, setTotalItems, setLoading)
    }, [url])

    const validateData = useCallback(async (sendData) => {
        ValidateData(sendData, url, data, setData, setTotalItems, setLoading)
    }, [url])

    const searchData = useCallback(async (q = null) => {
        SearchData(q, url, data, setData, setTotalItems, setLoading, setQuery)
    }, [url])


    return {
        data,
        setData,
        loading,
        status,
        getAll,
        postData,
        searchData,
        totalItems,
        validateData,
        error,
        getItem,
        patchData
    }
}

export default useFetchApi;

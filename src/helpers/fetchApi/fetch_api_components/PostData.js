import axios from "axios";

function PostData(sendData, url, data, setData, setLoading, setStatus, setError) {
    setLoading(true)
    axios.post(url, sendData).then(response => {
        setStatus(response.status)
        setData(response.data)
        setLoading(false)
    }).catch((error) => {
        setStatus(error.response?.status)
        setError(error.response?.data)
        setLoading(false)
    })
}

export default PostData;
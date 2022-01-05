function NotificationsReponse(error, setData) {
    // let response = error.response.data
    if (error.status > 199 && error.status < 300) {
        let reponseData = error.data
    }

    if (error.response?.status) {
        let status = error.response.status
        let responseData = error.response.data
        if (status >= 400 && status < 500) {
            setData(responseData)
        }
    }

}

export default NotificationsReponse;
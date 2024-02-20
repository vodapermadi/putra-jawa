import axios from 'axios'

export const getData = async (url) => {
    const { data } = await axios.get(url)
    return data
}

export const postData = async (url, body) => {
    try {
        const formData = new FormData()
        Object.keys(body).map((row) => {
            formData.append(row,body[row])
        })
        
        const {data} = await axios.post(url,formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        return response(data.message,data.respon)
    } catch (error) {
        return false
    }
}

export const editData = async (url, data) => {
    // 
}

export const deleteData = async (url, id) => {
    // 
}
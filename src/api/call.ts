
import axios from "axios"

type ApiCallUrl = "/users/v1/@me"

export default async function apiCall(url: ApiCallUrl, method: string) {
    const res = await axios({
        method,
        url
    });
    return res.data; 
}
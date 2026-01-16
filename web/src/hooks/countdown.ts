import axios from "axios";

export type Countdown = {
    countdown_target:  number | string,
    countdown_started: number,
    enabled: boolean,
}
const api_url = import.meta.env.PUBLIC_API_URL!;

export async function GetCountdown() {
    try {
        const {data} = await axios.get(`${api_url}/countdown/get`);  
        return data;
    } catch (e) {
        console.log(e);
        return [];
    }
}

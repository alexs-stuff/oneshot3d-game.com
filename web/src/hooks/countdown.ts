import axios from "axios";

export type CountdownData = {
    enabled: boolean;
    used_to_be_enabled: boolean;

    started_at: EpochTimeStamp | null;
    ends_at: EpochTimeStamp;

}

const api_url = import.meta.env.PUBLIC_API_URL!;

export async function GetCountdown() : Promise<CountdownData>{
    try {
        const {data} = await axios.get(`${api_url}/countdown`);  
        return data;
    } catch (e) {
        console.log(e);
        return {
            enabled: false,
            used_to_be_enabled: false,
            started_at: null,
            ends_at: 0,
        };
    }
}

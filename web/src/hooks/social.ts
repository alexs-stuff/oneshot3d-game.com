import axios from "axios";


export type Social = {
  social: string,
  display_name: string,
  url: string
}
const api_url = import.meta.env.PUBLIC_API_URL!;

export async function GetSocials() {
    try {
        const {data} = await axios.get(`${api_url}/socials/get`);  
        return data;
    } catch (e) {
        console.log(e);
        return [];
    }
}


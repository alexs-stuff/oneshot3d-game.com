import axios from "axios";

type ApiCallUrl = "/users/v1/@me";

const apiCaller = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL!.trimEnd(),
});

export default async function apiCall(url: ApiCallUrl, method: string) {
  const res = await apiCaller({
    method,
    url: url,
  });
  return res.data;
}

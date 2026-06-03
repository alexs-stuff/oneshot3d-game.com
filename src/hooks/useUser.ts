import apiCall from "@/api/call";
import { useEffect, useState } from "react";

export default function useUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
       apiCall("/users/v1/@me", "GET")
      .then(setUser)
      .finally(() => setLoading(false))
      .catch(() => {
        setUser(null);
        setLoading(true);
      });
  }, []);

  return { user, loading };
}
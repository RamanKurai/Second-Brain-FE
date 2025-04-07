import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { Content } from "../types/content"; // 👈 import type

export function useContent() {
  const [contents, setContents] = useState<Content[]>([]); // 👈 properly typed

  async function refresh() {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      });
      setContents(response.data.content); // 👈 make sure the backend returns 'content'
    } catch (error) {
      console.error("Error Fetching Content:", error);
    }
  }

  useEffect(() => {
    refresh();
    const interval = setInterval(() => {
      refresh();
    }, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { contents, refresh };
}

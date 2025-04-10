import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "../components/ui/Card";
import { BACKEND_URL } from "../config";

export function SharePage() {
  const { hash } = useParams<{ hash: string }>();
  const [username, setUsername] = useState<string | null>(null);
  const [contents, setContents] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchSharedContent = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${hash}`);
        setUsername(response.data.username);
        setContents(response.data.content);
      } catch (e) {
        setError("Failed to load shared content. The link may be invalid or expired.");
      }
    };
    fetchSharedContent();
  }, [hash]);

  if (error) {
    return <div className="p-4 text-red-500 text-center">{error}</div>;
  }

  if (!username || contents.length === 0) {
    return <div className="p-4 text-gray-500 text-center">Loading...</div>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{username}'s Shared Brain</h1>
      <div className="flex flex-wrap gap-6">
        {contents.map((content) => (
          <Card
            key={content._id}
            contentId={content}
            title={content.title}
            link={content.link}
            type={content.type}
            showDelete={false}
          />
        ))}
      </div>
    </div>
  );
}
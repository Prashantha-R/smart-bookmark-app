"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Bookmark = {
  id: string;
  title: string;
  url: string;
  user_id: string;
};

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData?.user?.id) return;

    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", userData.user.id);

    setBookmarks(data || []);
  };

  const addBookmark = async () => {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData?.user?.id) return;

    await supabase.from("bookmarks").insert({
      title,
      url,
      user_id: userData.user.id,
    });

    setTitle("");
    setUrl("");
    fetchBookmarks();
  };

  const deleteBookmark = async (id: string) => {
    await supabase.from("bookmarks").delete().eq("id", id);
    fetchBookmarks();
  };

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-10">
      <div className="w-full max-w-2xl bg-white p-6 rounded shadow">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Bookmarks</h1>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-3 mb-6">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 border p-2 rounded"
          />

          <input
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 border p-2 rounded"
          />

          <button
            onClick={addBookmark}
            className="bg-blue-500 text-white px-5 rounded"
          >
            Add
          </button>
        </div>

        {bookmarks.map((b) => (
          <div
            key={b.id}
            className="flex justify-between border p-3 mb-2 rounded"
          >
            <a
              href={b.url}
              target="_blank"
              className="text-blue-600 underline"
            >
              {b.title}
            </a>

            <button
              onClick={() => deleteBookmark(b.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}



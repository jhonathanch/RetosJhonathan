// src/components/PostsPanel.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, addPost } from "../redux/slices/postsSlice";

const PostsPanel = () => {
  const dispatch = useDispatch();
  const { items: posts, loading, error } = useSelector((state) => state.posts);

  const [newPost, setNewPost] = useState({ author: "", content: "" });

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (newPost.author.trim() && newPost.content.trim()) {
      dispatch(addPost(newPost));
      setNewPost({ author: "", content: "" });
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Panel de Publicaciones</h2>

      <form onSubmit={handleAddPost} className="mb-6">
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={newPost.author}
          onChange={handleChange}
          className="p-2 mr-2 bg-gray-800 border border-gray-700 rounded"
        />
        <input
          type="text"
          name="content"
          placeholder="Contenido"
          value={newPost.content}
          onChange={handleChange}
          className="p-2 mr-2 bg-gray-800 border border-gray-700 rounded w-80"
        />
        <button type="submit" className="p-2 bg-blue-600 hover:bg-blue-700 rounded">
          Agregar
        </button>
      </form>

      {loading && <p className="text-yellow-400">Cargando publicaciones...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border-b border-gray-700 py-2 mb-2">
            <p className="font-semibold">{post.author}</p>
            <p className="text-gray-300">{post.content}</p>
            <p className="text-xs text-gray-500">
              {post.createdAt?.seconds
                ? new Date(post.createdAt.seconds * 1000).toLocaleString()
                : "Fecha no disponible"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPanel;

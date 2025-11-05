import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, addPost } from "../../redux/slices/postsSlice";

export default function PostsPanel(){
  const dispatch = useDispatch();
  const { items, loading } = useSelector(s => s.posts);
  const user = useSelector(s => s.auth.user);
  const [content, setContent] = useState("");

  useEffect(()=>{ dispatch(fetchPosts()); }, [dispatch]);

  const submit = e => {
    e.preventDefault();
    if(!content.trim()) return;
    dispatch(addPost({ content, author: user?.email || 'Anon' }));
    setContent("");
  };

  return (
    <div className="container card">
      <h2>Subir tarea / Publicación</h2>
      <form onSubmit={submit}>
        <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Describe la tarea..."></textarea>
        <button className="btn" type="submit">Publicar</button>
      </form>

      {loading && <p>Cargando...</p>}
      <ul>
        {items.map(p => (
          <li key={p.id}>
            <strong>{p.author}</strong> — {p.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

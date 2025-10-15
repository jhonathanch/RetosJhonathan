import React, { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot, serverTimestamp, orderBy, query } from "firebase/firestore";
import { db, auth } from "../firebase";
import "../styles/app.css";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    try {
      await addDoc(collection(db, "posts"), {
        text,
        user: auth.currentUser?.email || "Anónimo",
        createdAt: serverTimestamp(),
      });
      setText("");
    } catch (error) {
      console.error("Error al publicar:", error);
    }
  };

  return (
    <div className="container">
      <h2>Publicaciones Institucionales</h2>
      <form onSubmit={handlePost} className="post-form">
        <textarea
          placeholder="Escribe una publicación..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Publicar</button>
      </form>

      <div className="posts-list">
        {posts.length === 0 ? (
          <p>No hay publicaciones aún.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post">
              <p className="post-text">{post.text}</p>
              <p className="post-user">Publicado por: {post.user}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostsList;

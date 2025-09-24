import { useState } from "react";
import { LinkedList } from "../structures/LinkedList";

export default function LinkedListPage() {
  const list = new LinkedList();
  ["Song A", "Song B", "Song C", "Song D"].forEach((s) => list.add(s));

  const [current, setCurrent] = useState(list.head);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎵 Songs Linked List</h1>
      <p className="mb-4">Now Playing: {current?.song}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        onClick={() => current?.next && setCurrent(current.next)}
      >
        Next Song
      </button>
    </div>
  );
}

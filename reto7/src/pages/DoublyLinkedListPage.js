import { useState } from "react";
import { DoublyLinkedList } from "../structures/DoublyLinkedList";

export default function DoublyLinkedListPage() {
  const history = new DoublyLinkedList();
  ["Google", "YouTube", "GitHub", "StackOverflow"].forEach((p) =>
    history.add(p)
  );

  const [current, setCurrent] = useState(history.head);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🌐 Browser History</h1>
      <p className="mb-4">Curnt Page: {current?.page}</p>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
        onClick={() => current?.prev && setCurrent(current.prev)}
      >
        ⬅ Back
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => current?.next && setCurrent(current.next)}
      >
        Forward ➡
      </button>
    </div>
  );
}

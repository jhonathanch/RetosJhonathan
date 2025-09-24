import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LinkedListPage from "./pages/LinkedListPage";
import DoublyLinkedListPage from "./pages/DoublyLinkedListPage";

export default function App() {
  return (
    <Router>
      <div className="p-6">
        <nav className="space-x-4 mb-6">
          <Link to="/linked" className="text-blue-600 underline">
            Songs (Linked List)
          </Link>
          <Link to="/doubly" className="text-blue-600 underline">
            Browser History (Doubly Linked List)
          </Link>
        </nav>

        <Routes>
          <Route path="/linked" element={<LinkedListPage />} />
          <Route path="/doubly" element={<DoublyLinkedListPage />} />
          <Route
            path="*"
            element={<p>Select a page from the navigation above.</p>}
          />
        </Routes>
      </div>
    </Router>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

export default function FncDisplayBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allbooks")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Book List</h3>
      <DisplayData books={books} />
    </div>
  );
}

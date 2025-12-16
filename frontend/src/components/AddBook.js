import React, { useState } from "react";
import axios from "axios";

function AddBook() {
  const [booktitle, setBooktitle] = useState("");
  const [PubYear, setPubYear] = useState("");
  const [author, setAuthor] = useState("");
  const [Topic, setTopic] = useState("");
  const [formate, setFormate] = useState("Electronic");

  const addBook = (e) => {
    e.preventDefault();

    const bookObj = { booktitle, PubYear, author, Topic, formate };

    axios
      .post("http://127.0.0.1:5000/addbooks", bookObj)
      .then((res) => {
        alert("Book added");
        setBooktitle("");
        setPubYear("");
        setAuthor("");
        setTopic("");
        setFormate("Electronic");
      })
      .catch((err) => {
        alert("Error adding book");
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Add Book</h2>

      <form onSubmit={addBook}>
        <input type="text" placeholder="Book Title" value={booktitle} onChange={(e) => setBooktitle(e.target.value)} />
        <br />

        <input
          type="text"
          placeholder="Publication Year"
          value={PubYear}
          onChange={(e) => setPubYear(e.target.value)}
        />
        <br />

        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <br />

        <input type="text" placeholder="Topic" value={Topic} onChange={(e) => setTopic(e.target.value)} />
        <br />

        <select value={formate} onChange={(e) => setFormate(e.target.value)}>
          <option value="Electronic">Electronic</option>
          <option value="Hard Copy">Hard Copy</option>
        </select>
        <br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBook;

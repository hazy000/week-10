import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Book_UpDateForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [state, setState] = useState({
    booktitle: "",
    author: "",
    Topic: "",
    formate: "",
    PubYear: 1990,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/getbook/" + id)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/updatebook/" + id, state)
      .then(() => {
        alert("Book Updated");
        navigate("/DisplayBooksF1");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Edit Book</h3>

      <form onSubmit={OnSubmit}>
        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            className="form-control"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Author</label>
          <input type="text" className="form-control" name="author" value={state.author} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Topic</label>
          <input type="text" className="form-control" name="Topic" value={state.Topic} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Format</label>
          <select className="form-control" name="formate" value={state.formate} onChange={handleChange}>
            <option>Electronic</option>
            <option>Hard Copy</option>
          </select>
        </div>

        <div className="form-group">
          <label>Publication Year</label>
          <input type="number" className="form-control" name="PubYear" value={state.PubYear} onChange={handleChange} />
        </div>

        <br />

        <input type="submit" value="Update Book" className="btn btn-primary" />
      </form>
    </div>
  );
}

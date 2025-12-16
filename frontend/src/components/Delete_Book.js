import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteBook() {
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:5000/deleteBook/" + id)
      .then(() => {
        alert("Book Deleted");
        navigate("/DisplayBooksF1");
      })
      .catch((err) => console.log(err));
  }, [id, navigate]);

  return (
    <div>
      <h3>Deleting Book...</h3>
    </div>
  );
}

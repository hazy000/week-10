import React from "react";
import { Link } from "react-router-dom";

export default function DisplayData(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Topic</th>
          <th>Format</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {props.books.map((b) => (
          <tr key={b._id}>
            <td>{b.booktitle}</td>
            <td>{b.author}</td>
            <td>{b.PubYear}</td>
            <td>{b.Topic}</td>
            <td>{b.formate}</td>
            <td>
              <Link to={"/edit/" + b._id}>Edit</Link>
              {" | "}
              <Link to={"/Delete/" + b._id}>Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

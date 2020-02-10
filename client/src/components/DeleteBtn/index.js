import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "../style.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  const { user } = useAuth0();
  return (
    <button className="btn btn-danger delete-btn" 
    id={props._id}
    onClick={() => props.handleDelete(props._id)} 
    role="button" 
    tabIndex="0">
      Delete Trip
    </button>
  );
}

export default DeleteBtn;

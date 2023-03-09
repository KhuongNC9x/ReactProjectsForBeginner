import "./App.css";
import { useState } from "react";

function RatingBlock({ imgSrc, status, onClick }) {
  return (
    <div className="rating" onClick={onClick}>
      <img src={imgSrc} alt={status} />
      <small>{status}</small>
    </div>
  );
}

function ChildOfContainerBlock() {
  const [selectedRating, setSelectedRating] = useState("");
  let feedback = "";

  function selectRating(e) {
    feedback = e.target.innerText || e.target.parentNode.innerText;
  }

  function sendReview() {
    setSelectedRating("");
    setSelectedRating(feedback);
  }

  if (selectedRating === "") {
    return (
      <>
        <h1 className="heading">Feedback UI</h1>
        <div className="ratings-container" id="ratings-container">
          <RatingBlock
            imgSrc={"https://cdn-icons-png.flaticon.com/512/166/166527.png"}
            status={"Unhappy"}
            onClick={selectRating}
          ></RatingBlock>
          <RatingBlock
            imgSrc={"https://cdn-icons-png.flaticon.com/512/1791/1791385.png"}
            status={"Neutral"}
            onClick={selectRating}
          ></RatingBlock>
          <RatingBlock
            imgSrc={"https://cdn-icons-png.flaticon.com/512/166/166538.png"}
            status={"Satisfied"}
            onClick={selectRating}
          ></RatingBlock>
        </div>
        <button className="btn" onClick={sendReview}>
          Send Review
        </button>
      </>
    );
  } else {
    return (
      <>
        <strong>Thank you!</strong>
        <br />
        <br />
        <strong>Feedback:{selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
      </>
    );
  }
}

function App() {
  return (
    <div className="container" id="container">
      <ChildOfContainerBlock></ChildOfContainerBlock>
    </div>
  );
}

export default App;

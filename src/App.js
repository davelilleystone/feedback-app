import React from "react";

const App = () => {
  const title = "My Blog Post";
  const body = "blog body";
  const comment = [
    { id: 1, comment: "comment 1" },
    { id: 2, comment: "comment 2" },
    { id: 3, comment: "comment 3" },
  ];

  const loading = false;
  const showComments = true;
  const commentBlock = (
    <ul>
      {comment.map((comment) => {
        return <li key={comment.id}>{`${comment.id} : ${comment.comment}`}</li>;
      })}
    </ul>
  );

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <p>{body}</p>
        {showComments && commentBlock}
      </div>
    </>
  );
};

export default App;

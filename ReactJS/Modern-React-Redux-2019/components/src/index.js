import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          image={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 3:30PM"
          comment="First comment on the blog and I appreciate the bold coverage of the topic."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={faker.image.avatar()}
          author="Peter"
          timeAgo="Today at 4:14PM"
          comment="I liked the author's point of view."
        ></CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={faker.image.avatar()}
          author="John"
          timeAgo="Today at 5:00PM"
          comment="This text was a drag."
        ></CommentDetail>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

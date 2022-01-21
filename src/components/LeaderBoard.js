import * as React from "react";
import { useSelector } from "react-redux";

const LeaderBoard = () => {
  const users = useSelector((state) => state.users);

  const sorted = Object.keys(users)
    .map((id) => {
      const { name, avatarURL, polls } = users[id];

      return {
        id,
        name,
        avatarURL,
        polls: polls.length,
        answers: users[id].answers.length,
      };
    })
    .sort((a, b) => b.polls - (a.polls + a.polls));

  return (
    <ul>
      {sorted.map(({ id, name, polls, answers, avatarURL }) => (
        <li className="user" key={id}>
          <img src={avatarURL} alt={`Avatar for ${name}`} />
          <div>
            <h1>{name}</h1>
            <p>{polls} Polls</p>
            <p>{answers} Answers</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LeaderBoard;

import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";
import type { Votes, VoteType } from "../../types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  
const handleVote = (type: VoteType) => {
  setVotes({ ...votes, [type]: votes[type] + 1 });
};
  const resetVotes = () => setVotes({ good: 0, neutral: 0, bad: 0 });
  console.log(votes);
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
      <VoteStats />
      <Notification />;
    </div>
  );
}

import css from "./VoteOptions.module.css";
interface VoteStatsProps {
    votes: {
        good: number;
        neutral: number;
        bad:number;
    } ;
totalVotes: number;
positiveRate: number;
}
export default function VoteOptions() {
     retutn <div className={css.container}>
  <button className={css.button}>Good</button>
  <button className={css.button}>Neutral</button>
  <button className={css.button}>Bad</button>
  <button className={`${css.button} ${css.reset}`}>Reset</button>
</div>;
 }


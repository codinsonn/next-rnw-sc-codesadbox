import Link from "next/link";
import ReadMe from "../README.md";

/* --- <Homepage /> -------------------------------- */

const Homepage = () => (
  <div>
    <h2>Getting the holy trinity of app development working together:</h2>
    <ul>
      <li>
        <Link href="/initialProblem">
          <a>Initial Problem</a>
        </Link>
      </li>
    </ul>
    <hr />
    <ReadMe />
  </div>
);

/* --- Export Homepage -------------------------------- */

export default Homepage;

import Link from "next/link";
import ReadMe from "../README.md";

/* --- <Homepage /> -------------------------------- */

const Homepage = () => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
    <hr />
    <ReadMe />
  </div>
);

/* --- Export Homepage -------------------------------- */

export default Homepage;

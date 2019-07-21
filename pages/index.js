import Link from "next/link";
import { View, Text } from "react-native";
// Readme
import ReadMe from "../README.md";

/* --- <Homepage /> -------------------------------- */

const Homepage = () => (
  <View>
    <Text>Getting the holy trinity of app development working together:</Text>
    <ul>
      <li>
        <Link href="/initialProblem">
          <a>Initial Problem</a>
        </Link>
      </li>
    </ul>
    <hr />
    <ReadMe />
  </View>
);

/* --- Export Homepage -------------------------------- */

export default Homepage;

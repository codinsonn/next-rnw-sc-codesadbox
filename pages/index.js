import Link from "next/link";
import { View, Text } from "react-native";
import styled from "styled-components";
// Readme
import ReadMe from "../README.md";

/* --- Styles -------------------------------------- */

const Page = styled(View)`
  flex: 1;
  background-color: #fff;
`;

const Title = styled(Text)`
  font-size: 21px;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 16px;
  line-height: 1.4;
`;

const Paragraph = styled(Text)`
  margin: 14px 0px;
  line-height: 1.4;
`;

const S = { Page, Title, Paragraph };

/* --- <Homepage /> -------------------------------- */

const Homepage = () => (
  <S.Page>
    <S.Title>
      How to get the holy trinity of app development working together?
    </S.Title>
    <S.Paragraph>
      This page (pages/index.js) imports styled from 'styled-components'. It
      also uses the styled(View) & styled(Text) syntax. This works on RNW
      primitives for now, but triggers a decrecation warning in console.
    </S.Paragraph>
    <S.Paragraph>
      When trying to import from 'styled-components/native' in pages/problem.js
      though, it seems like the alias from 'react-native-web' to 'react-native'
      (in .babelrc & next.config.js) is completely ignored by the
      'styled-components/native' package. This in turn causes Next.js to crash
      on the /problem page:
    </S.Paragraph>
    <ul>
      <li>
        <Link href="/problem">
          <a>Initial Problem</a>
        </Link>
      </li>
    </ul>
    <S.Paragraph>
      This can be ignored by continueing to simply import from
      'styled-component' instead of '/native', but that means SC will try to
      attach classes to RNW elements, which causes wonky styles and again
      triggers this decrecation warning in console:
    </S.Paragraph>
    <ul>
      <li>Warning: Using the "className" prop on View/Text is deprecated.</li>
    </ul>
    <S.Paragraph>
      Meaning that AFAIK there is currently no futureproof, efficiënt way to
      combine Next.js, react-native-web and styled-components for now. (Unless
      I'm wrong, in which case please point me in the right direction)
    </S.Paragraph>
    <S.Paragraph>Related PR's & issues:</S.Paragraph>
    <ul>
      <li>
        <a
          href="https://github.com/necolas/react-native-web/issues/1146"
          taget="_blank"
        >
          react-native-web #1146
        </a>
      </li>
      <li>
        <a
          href="https://github.com/styled-components/styled-components/pull/2453"
          taget="_blank"
        >
          styled-components #2453
        </a>
      </li>
      <li>
        <a
          href="https://github.com/styled-components/styled-components/issues/2624"
          taget="_blank"
        >
          styled-components #2624
        </a>
      </li>
    </ul>
    <hr />
    <ReadMe />
  </S.Page>
);

/* --- Export Homepage -------------------------------- */

export default Homepage;

import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import README from "../README.md";

/* --- <Homepage /> -------------------------------- */

const Homepage = (/*{ README }*/) => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
    <hr />
    {/*/}
    <ReactMarkdown className="markdown markdown-body" source={README} />
    {/**/}
  </div>
);

/* --- Get README Markdown -------------------------------- */

/*Homepage.getInitialProps = async () => {
  const README = await import(`../README.md`);
  return { README };
};*/

/* --- Export Homepage -------------------------------- */

export default Homepage;

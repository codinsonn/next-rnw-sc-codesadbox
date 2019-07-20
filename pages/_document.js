import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { AppRegistry } from "react-native-web";

/* --- <Document/> ------------------------------------------------------------------------------ */

class NextDocument extends Document {
  static getInitialProps({ renderPage }) {
    // React native support
    AppRegistry.registerComponent("Main", () => Main);

    // Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;
    return (
      <Html>
        <Head>
          {/* Output the styles in the head */}
          {styleTags}
        </Head>
        <body style={{ margin: "0px" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/* --- Export ------------------------------------------------------------------------------ */

export default NextDocument;

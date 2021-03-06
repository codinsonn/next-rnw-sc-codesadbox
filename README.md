# SSR & Mobile with Next.js 9, RNW & styled-components

## Inspiration

Greatly inspired by this article by Max Stoiber:

> [https://mxstbr.com/thoughts/tech-choice-regrets-at-spectrum/](https://mxstbr.com/thoughts/tech-choice-regrets-at-spectrum/)

## Spectrum chats:

> styled-components #help
>
> ["Using styled-components/native with Next.js 9 & react-native-web?"](https://spectrum.chat/styled-components/help/using-styled-components-native-with-next-js-9-react-native-web~c8d00be8-bb12-4828-ba44-b4d9d916a648)

> next-js #general
>
> ["Using styled-components/native with Next.js 9 & react-native-web?"](https://spectrum.chat/next-js/general/using-styled-components-native-with-next-js-9-react-native-web~3cdb042a-a77c-49d2-b4aa-a273be174571)

> expo #general
>
> ["Using expo-web / RNW with styled-components/native and Next.js SSR?"](https://spectrum.chat/expo/general/using-expo-web-rnw-with-styled-components-native-and-next-js-ssr~40ada6c5-77f3-4993-84fc-c951961408eb)

## The idea behind the example

This example features how to use [react-native-web](https://github.com/necolas/react-native-web) and [styled-components/native](https://www.styled-components.com/docs/basics#react-native) together with Next.js to bring the platform-agnostic Components, Styling and APIs of React Native to the web.

> **High-quality user interfaces**: React Native for Web makes it easy to create fast, adaptive web UIs in JavaScript. It provides native-like interactions, support for multiple input modes (touch, mouse, keyboard), optimized vendor-prefixed styles, built-in support for RTL layout, built-in accessibility, and integrates with React Dev Tools.

> **Write once, render anywhere**: React Native for Web interoperates with existing React DOM components and is compatible with the majority of the React Native API. You can develop new components for native and web without rewriting existing code. React Native for Web can also render to HTML and critical CSS on the server using Node.js.

> **CSS in JS, for SSR & Mobile Apps**: This example features how you use a different styling solution than [styled-jsx](https://github.com/zeit/styled-jsx) for Next that also supports universal styles. That means we can serve the required styles on the web for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).
>
> In the case of Next.js SSR we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs#custom-app) component.

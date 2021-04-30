import Header from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./Home";
export default function App() {
  return (
    <>
      <Header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>专家的个人网站</title>
      </Header>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </>
  );
}

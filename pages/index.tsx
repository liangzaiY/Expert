import Header from "next/head";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

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
        <div>hello~</div>
        <Button variant="contained" color="primary">
          material-UI
        </Button>
      </CssBaseline>
    </>
  );
}

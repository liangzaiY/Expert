import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Select, Top, ScrollTop } from "../../components";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import styles from "./index.module.scss";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   })
// );
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   flexGrow: 1,
    // },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    paper: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
      textAlign: "center",
    },
  })
);

const Home = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      {/* <header id={styles.header}> */}
      <Top></Top>
      <Toolbar id="back-to-top-anchor" />
      {/* <nav id={styles.nav}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            {[
              "首页",
              "专家菜谱",
              "生活瞬间",
              "学习笔记",
              "故事集",
              "小说集",
              "动漫集",
            ].map((item, index) => (
              <Grid item key={index} xs>
                <Button size="medium" className={classes.paper}>
                  {item}
                </Button>
              </Grid>
            ))}
            <Select
              classes={classes}
              options={[
                { text: "中文", value: "cn" },
                { text: "EngLish", value: "en" },
              ]}
            ></Select>
          </Grid>
        </nav> */}
      {/* </header> */}
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "120vh" }}
        />
      </Container>
      <footer></footer>
      <ScrollTop {...props}>
        <Fab color="inherit" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};
export default Home;

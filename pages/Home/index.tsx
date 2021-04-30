import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import styles from "./index.module.scss";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   flexGrow: 1,
    // },
    paper: {
      paddingLeft: theme.spacing(7.5),
      paddingRight: theme.spacing(7.5),
      textAlign: "center",
    },
  })
);

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <header id={styles.header}>
        <nav id={styles.nav}>
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
          </Grid>
        </nav>
      </header>
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
      <footer></footer>
    </>
  );
};
export default Home;

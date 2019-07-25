import React, { Fragment } from "react";
import { MainStyles } from "components/MainComponent/Main.styles";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import { TopbarComponent } from "components/TopbarComponent/Topbar";
import { Editor } from "slate-react";
import { Value } from "slate";
import { lorem_two_paragraphs } from "utilities/lorem";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            text: lorem_two_paragraphs
          }
        ]
      }
    ]
  }
});

const WritingHeader = (
  <Typography color="secondary" gutterBottom variant={"h6"}>
    Writing Prompt |
  </Typography>
);

const LearnMoreButton = ({ classes }) => {
  return (
    <div className={classes.alignRight}>
      <Button
        color="primary"
        variant="contained"
        className={classes.actionButtom}
      >
        Learn more
      </Button>
    </div>
  );
};

export class _MainComponent extends React.Component {
  state = {
    value: initialValue
  };

  onTextChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <TopbarComponent />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={4}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div className={classes.box}>
                      {WritingHeader}
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        color={"textPrimary"}
                      >
                        <Editor
                          value={this.state.value}
                          onChange={this.onTextChange}
                        />
                      </Typography>
                    </div>
                    <LearnMoreButton classes={classes} />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export const MainComponent = withRouter(withStyles(MainStyles)(_MainComponent));

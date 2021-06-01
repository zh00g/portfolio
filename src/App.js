import intro from './intro1.png';
import me from './me.jpeg';
// import barefoot from './barefoot.png';
import barefoot from './barefoot2.png';
import photoshare from './photoshare2.png';
import potpourri from './potpourri2.png';
import stsh from './stsh2.png';
import resume from './resume.png'
import barefootflip from './147.png'
import cs142flip from './142.png'
import cs110flip from './110.png'
import cs278flip from './278.png'
import './App.css';
import { spacing } from "@material-ui/system";
import firebase from './firebase.js';

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import {
  Grid,
  Paper,
  Button,
  Box,
  Typography,
  TextField,
  createMuiTheme,
  ThemeProvider,
  FormGroup,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";



const Onboard = () => {
  const history = useHistory();
  return (
    <div>
      <Box >
        <img src={intro} className="App-logo" alt="logo" />
        <img src={me} className="App-logo2" alt="logo" />
        <Box className="buttonbar">
          <Button
            color="primary"
            variant="contained"
            onClick={() => history.push('./')}
          >
            About Me
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            onClick={() => history.push('./projects')}
          >
            Projects
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            className="button"
            onClick={() => history.push('./resume')}
          >
            Experience
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            onClick={() => window.open("https://www.linkedin.com/in/grace-z/")}
          >
            LinkedIn
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            onClick={() => window.location = "mailto:gracexz@stanford.edu"}
          >
            Contact Me
        </Button>
        </Box>
      </Box>
    </div>
  )
}

const Resume = () => {
  const OTypography = withStyles({
    root: {
      color: "#fdd750"
    }
  })(Typography);
  const history = useHistory();
  return (
    <div>
      <OTypography variant="h1">
        Resume
      </OTypography>
      <Box className="paddingbox">
      </Box>
      <Box className="App-header">
        <img src={resume} className="App-logo4" alt="logo" />
      </Box>
      <Box>
        m={0.5}
      </Box>
      <Box>
        <Box className="buttonbar">
          <Button
            color="primary"
            variant="contained"
            onClick={() => history.push('./')}
          >
            About Me
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            onClick={() => history.push('./projects')}
          >
            Projects
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            className="button"
            onClick={() => history.push('./resume')}
          >
            Experience
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            onClick={() => window.open("https://www.linkedin.com/in/grace-z/")}
          >
            LinkedIn
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            onClick={() => window.location = "mailto:gracexz@stanford.edu"}
          >
            Contact Me
        </Button>
        </Box>

      </Box>
    </div>
  )

}

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [cs142, set142] = useState(false);
  const [cs110, set110] = useState(false);
  const [cs278, set278] = useState(false);
  const OTypography = withStyles({
    root: {
      color: "#FDD750"
    }
  })(Typography);
  const history = useHistory();
  const handleClickOpen = () => {
    setModal(true);
  };
  const handleClick142 = () => {
    set142(true);
  };
  const handleClick110 = () => {
    set110(true);
  };
  const handleClick278 = () => {
    set278(true);
  };

  const handleClose = () => {
    setModal(false)
    set142(false)
    set278(false)
    set110(false)
  };
  const handleClose142 = () => {
    set142(false)
  };

  const handleSubmit = () => {

  };
  return (
    <div>
      <OTypography variant="h1">
        Projects
      </OTypography>
      <Box className="App-header2">
        <Box>
          <Dialog open={modal} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent>
              <img src={barefootflip} className="App-logo5" alt="logo" />
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleSubmit}
                variant="contained"
              >
                Learn More!
                </Button> */}
            </DialogActions>
          </Dialog>


          <img src={barefoot} className="Applogo3" alt="logo" onClick={handleClickOpen} />
          <Dialog open={cs142} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent>
              <img src={cs142flip} className="App-logo5" alt="logo" />
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleSubmit}
                variant="contained"
              >
                Learn More!
                </Button> */}
            </DialogActions>
          </Dialog>
          <img src={photoshare} className="Applogo3" alt="logo" onClick={handleClick142} />
        </Box>

        <Box>
          <Dialog open={cs278} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent>
              <img src={cs278flip} className="App-logo5" alt="logo" />
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleSubmit}
                variant="contained"
              >
                Learn More!
                </Button> */}
            </DialogActions>
          </Dialog>
          <img src={potpourri} className="Applogo3" alt="logo" onClick={handleClick278} />

          <Dialog open={cs110} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent>
              <img src={cs110flip} className="App-logo5" alt="logo" />
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleSubmit}
                variant="contained"
              >
                Learn More!
                </Button> */}
            </DialogActions>
          </Dialog>
          <img src={stsh} className="Applogo3" alt="logo" onClick={handleClick110} />
        </Box>

      </Box>
      <Box>
        <Box className="buttonbar">
          <Button
            color="primary"
            variant="contained"
            onClick={() => history.push('./')}
          >
            About Me
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            onClick={() => history.push('./projects')}
          >
            Projects
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            className="button"
            onClick={() => history.push('./resume')}
          >
            Experience
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            onClick={() => window.open("https://www.linkedin.com/in/grace-z/")}
          >
            LinkedIn
        </Button>
          <Box m={0.5} />
          <Button
            color="primary"
            variant="contained"
            onClick={() => window.location = "mailto:gracexz@stanford.edu"}
          >
            Contact Me
        </Button>
        </Box>
      </Box>
    </div>
  )

}

function App() {
  const history = useHistory();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FDD750",
        contrastText: "#fff"
      },
    }
  })


  const OTypography = withStyles({
    root: {
      color: "black"
    }
  })(Typography);


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box className="App">
          <Box className="App-header">
            <Switch>
              <Route path="/resume">
                <Resume></Resume>
              </Route>
              <Route path="/projects">
                <Projects></Projects>
              </Route>
              <Route path="/">
                <Onboard></Onboard>
              </Route>
            </Switch>
            <Box className="paddingbox"></Box>
            <Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;







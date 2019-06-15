import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Rating from "material-ui-rating";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  chip: {
    marginRight: theme.spacing(1)
  }
}));

function handleClick() {
  alert("You clicked! Juices / smoothies.");
}

export default function Dashboard() {
  const classes = useStyle();
  const theme = useTheme();
  /* */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  /* */
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  /* */
  /* */
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ];
  /* */
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar color="inherit" position="absolute">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              818' The Foodist
            </Typography>

            <Button color="inherit">Resturant</Button>
            <Button color="inherit">My Request</Button>
            <div className={classes.sectionMobile}>
              <IconButton
                edge="end"
                aria-label="Account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>{" "}
              <Typography variant="caption" display="Inline" gutterBottom>
                adnan ahmed
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <br />
      <br />
      <br />
      <TextField
        id="standard-full-width"
        label="Search Here"
        style={{ marginRight: 7 }}
        placeholder="Example i-e Kaybees, Kababjee,  BBQ Tonight etc..."
        helperText=""
        fullWidth
        margin="normal"
      />
      <Chip
        color="primary"
        size="small"
        label="Chinese"
        className={classes.chip}
      />
      <Chip
        color="primary"
        size="small"
        label="Hamburgers"
        className={classes.chip}
      />
      <Chip
        color="primary"
        size="small"
        label="Juices / smoothies"
        onClick={handleClick.bind(this)}
        className={classes.chip}
      />
      <Chip
        color="primary"
        size="small"
        label="B.B.Q's"
        className={classes.chip}
      />
      <br /> <br />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="center">Calories</TableCell>
                <TableCell align="center">Fat&nbsp;(g)</TableCell>
                <TableCell align="center">Categories</TableCell>
                <TableCell align="center">Rating</TableCell>
                <TableCell align="center">Protein&nbsp;(g)</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">
                    <Chip color="secondary" size="small" label="Pizza" />
                    <Chip color="secondary" size="small" label="Pizza" />
                  </TableCell>
                  <TableCell align="center">
                    <Rating
                      value={3}
                      max={5}
                      onChange={value =>
                        console.log(`Rated with value ${value}`)
                      }
                    />
                  </TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                  <TableCell align="center">
                    <div>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        className={classes.margin}
                        onClick={handleClickOpen}
                      >
                        Details
                      </Button>
                      <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                      >
                        <DialogTitle id="alert-dialog-slide-title">
                          {"Pizza Details"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-slide-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec risus neque, placerat a vestibulum eget,
                            fringilla sed elit. Nam eget ex at libero dignissim
                            finibus non at lorem. Praesent condimentum volutpat
                            sapien, id tincidunt nibh posuere sollicitudin.
                            Fusce ultrices eros orci, et volutpat dolor
                            elementum nec. Suspendisse feugiat tempus dolor, sed
                            blandit risus convallis sed. Integer ultrices, ante
                            non ultrices molestie, tellus sapien dignissim leo,
                            nec bibendum lorem eros eu metus. Nullam laoreet
                            quam ut est consectetur, a feugiat tortor rhoncus.
                            Mauris maximus et nisi in congue. Praesent lacinia
                            neque nec pharetra laoreet. Nam nibh ligula,
                            vestibulum eget diam ut, porta viverra felis.
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Close
                          </Button>
                          <Button onClick={handleClose} color="primary">
                            Chat
                          </Button>
                          <Button onClick={handleClose} color="primary">
                            Deliver
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </React.Fragment>
  );
}

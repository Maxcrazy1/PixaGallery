import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const styleLibraryCard = makeStyles({
  cardInformation: {
    width: "100%",
    borderRadius: "5px",
    background:
      "linear-gradient(90deg, rgba(131,96,195,1) 35%, rgba(46,191,145,1) 100%)",
    position: "fixed",
    right: "6%",
    bottom: "2%",
  },
  colorDescription: {
    color: "white",
  },
  colorFontOne: {
    color: "white",
    fontWeight: "bold",
  },
});

const FillLibraries = (libraries) => {
  const classes = styleLibraryCard();
  return libraries.map((library,key) => (
    <Grid key={key} item xs={6}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={library.icon} />
           
        </ListItemAvatar>
        <ListItemText className={classes.colorDescription} primary={library.name} />
      </ListItem>
    </Grid>
  ));
};

export default function CardLibraries() {
  const libraries = [
    { name: "React", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtOM9tesK-wsg39GmL6z7fzA8FI5-iXPFYdLS1sp6RRdgGxdFp&usqp=CAU" },
    { name: "React-router-dom", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtOM9tesK-wsg39GmL6z7fzA8FI5-iXPFYdLS1sp6RRdgGxdFp&usqp=CAU" },
    { name: "Axios", icon:"https://www.pngitem.com/pimgs/m/91-913031_axios-axios-logo-hd-png-download.png" },
    { name: "react-infinite-scroll", icon:"https://cdn.dribbble.com/users/511295/screenshots/3607500/infinite-scroll-icon.png" },
    { name: "Material UI", icon:"https://material-ui.com/static/logo.png" },
    { name: "Api Pixabay", icon:"https://cdn.pixabay.com/photo/2017/01/17/14/44/pixabay-1987090_1280.png" },
  ];
  const classes = styleLibraryCard();
  return (
    <Grid className={classes.cardInformation} item xs={10} md={4}>
      <Typography className={classes.colorFontOne}>Librerias usadas</Typography>
      <List dense={true}>
        <Grid container>{FillLibraries(libraries)}</Grid>
      </List>
    </Grid>
  );
}

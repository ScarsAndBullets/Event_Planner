// import React, { useState } from 'react';
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Icon,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";
import { red, purple, blue } from "@material-ui/core/colors";
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddParticipant from "../../components/AddParticipant/AddParticipant";
import "./EventCard.css";

// -----------------------------------------------------------------------------
function EventCard() {
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      backgroundColor: blue[100]
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: purple[500]
      // backgroundColor: red[500],
    }
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  // styled Icon
  const fixedIcon = withStyles({
    root: {
      width: 0,
      height: 0
    }
  })(Icon);

  // styled Icon
  const FixedIcon = withStyles({
    root: {
      width: 0,
      height: 0
    }
  })(Icon);

  return (
    <Card className={classes.card}>
      <CardHeader
        // IF OWNER: DOT W/ STAR, IF NOT: NO DOT OR STAR
        avatar={
          <Avatar aria-label='Owned' className={classes.avatar}>
            {/* <Icon className={clsx('fas fa-crown')} fontSize="small" /> */}
            <FixedIcon className={clsx("fas fa-crown")} fontSize='small' />
          </Avatar>
        }
        // THREE DOT "SETTINGS" BUTTTON
        action={
          <IconButton aria-label='Settings'>
            <MoreVertIcon />
          </IconButton>
        }
        // EVENT NAME
        title='Shrimp Cookoff'
        // DATE TIME
        subheader='September 14, 2020 at 1:30pm'
      />

      <CardContent>
        {/* SUMMARY */}
        <Typography variant='body2' color='textSecondary' component='p'>
          We're going to fry up all the shrimp in the County with our
          award-winning Shrimp Fry-Chefs! Bring your friends, family and an
          empty stomach!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* BELOW: AddParticipants */}
        {/* <InputForm /> */}
        {/* <Task /> */}

        <AddParticipant />
        {/* END: AddParticipants */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='Show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      {/* BELOW:  */}
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Guest Instructions:</Typography>

          <Typography paragraph>
            You will need to bring your own blankets, plates, utensils, cups,
            and napkins. Also, don't forget to fill out the online waiver.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

// -----------------------------------------------------------------------------
export default EventCard;

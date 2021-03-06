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
import AddParticipant from "./../AddParticipant/AddParticipant.js"
import StarBorderRounded from "@material-ui/icons/StarBorderRounded";

import "./EventCard.css";
import { Link, Redirect, withRouter } from "react-router-dom";

function EventCard(props) {
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
    // title: {
    //     fontSize: 100,
    // },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  // styled Icon
  const FixedIcon = withStyles({
    root: {
      width: 0,
      height: 0
    }
  })(Icon);

  function redirectToEventView(eventId) {
    let url = `/event/${eventId}`;
    props.history.push(url);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        // IF OWNER: DOT W/ STAR, IF NOT: NO DOT OR STAR
        avatar={
          props.events.owner ? (
            <Avatar aria-label='Owned' className={classes.avatar}>
              {/* <FixedIcon className={clsx("fas fa-crown")} fontSize="small" /> */}
              <StarBorderRounded />
            </Avatar>
          ) : (
              <Avatar aria-label='Owned' className={classes.avatar} />
            )
        }
        // THREE DOT "SETTINGS" BUTTTON
        action={
          <IconButton
            aria-label='Settings'
            onClick={() => {
              redirectToEventView(props.events._id);
            }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        // EVENT NAME
        title={props.events.title}
        // DATE TIME
        subheader={`${props.events.date} ${props.events.time}`}
      />

      <CardContent>
        {/* SUMMARY */}
        <Typography variant='body2' color='textSecondary' component='p'>
          {props.events.details}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* BELOW: AddParticipants */}
        <AddParticipant eventId={props.events._id} />
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
          {/* GUEST INSTRUCTIONS */}
          <Typography paragraph>{props.events.requirements}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default withRouter(EventCard);

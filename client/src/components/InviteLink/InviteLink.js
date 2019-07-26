import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { CheckCircleRounded } from "@material-ui/icons";
import Slide from "@material-ui/core/Slide";

import api from "./../../utils/API";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function InviteLink(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    console.log(`Email: ${props.emailValue}, EventID: ${props.eventId}`)
    api.sendEmail(props.emailValue, props.eventId);
    api.addParticipant(props.emailValue, props.eventId);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <IconButton
        // className={iconBttnClass.button}
        aria-label='Create'
        onClick={handleClickOpen}
        color='primary'
      >
        <CheckCircleRounded fontSize='large' />
        {/* <InviteLink /> */}
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        {/* CENTER TITLE */}
        <DialogTitle id='alert-dialog-slide-title'>
          {"An invitation has been sent!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            It's crucial they open this email and click the provided link, or
            else they won't be able to see the event details. If they don't see
            the email, make sure they check their junk or spam folders.
          </DialogContentText>
          {/* CENTER and BOLD LINK */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default InviteLink;

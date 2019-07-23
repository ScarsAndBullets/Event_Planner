import React from "react";
import {
  Button,
  makeStyles,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon
} from "@material-ui/core";
// import clsx from 'clsx';
import {
  PersonAddOutlined,
  GroupAddRounded,
  CheckCircleRounded,
  NotInterestedRounded
} from "@material-ui/icons";

import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import InviteLink from "../../components/InviteLink/InviteLink";
import "./AddPartipant.css";
// -----------------------------------------------------------------------------
export default function AddParticipant(props) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    console.log(email);
  });
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    console.log(`handle close button`);
    setOpen(false);
  }
  // BELOW: Icon buttons
  const iconButton = makeStyles(theme => ({
    // button: {
    //     margin: theme.spacing(1),
    // },
    input: {
      display: "none"
    }
  }));

  const iconBttnClass = iconButton();
  // END: Icon buttons

  return (
    <div className='Form-modal-button'>
      <IconButton aria-label='Share' onClick={handleClickOpen}>
        {/* <PersonAddOutlined fontSize="large" /> */}
        <GroupAddRounded fontSize='large' />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Add New Participant!</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter participant's email below</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <IconButton
            className={iconBttnClass.button}
            aria-label='Cancel'
            onClick={handleClose}
            color='secondary'
          >
            <NotInterestedRounded fontSize='large' />
          </IconButton>
          {/* BELOW: InviteLink */}
          {/* <IconButton
                        className={iconBttnClass.button}
                        aria-label="Create"
                        onClick={handleClose} color="primary"
                    ><CheckCircleRounded fontSize="large" />
                    </IconButton> */}
          <InviteLink emailValue={email} eventId={props.eventId} />
          {/* END: InviteLink */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

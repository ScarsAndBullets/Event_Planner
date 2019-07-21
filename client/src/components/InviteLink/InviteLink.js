import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { CheckCircleRounded } from '@material-ui/icons';
import Slide from '@material-ui/core/Slide';

import api from "./../../utils/API";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// const iconButton = makeStyles(theme => ({
// button: {
//     margin: theme.spacing(1),
// },
// input: {
//     display: 'none',
// },
// }));

// const iconBttnClass = iconButton();

function InviteLink(props) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        console.log(`handle open click ${props.emailValue}`)
        api.sendEmail(props.emailValue, `albjdk`);
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <IconButton
                // className={iconBttnClass.button}
                aria-label="Create"
                onClick={handleClickOpen}
                color="primary"
            ><CheckCircleRounded fontSize="large" />
                {/* <InviteLink /> */}
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                {/* CENTER TITLE */}
                <DialogTitle id="alert-dialog-slide-title">{"Here's the invite link for: example@domain.com"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Copy/Paste this link and send it to the recipient you just entered. Make sure they sign up with the same email you entered or the invitation won't work.
          </DialogContentText>
                    {/* CENTER and BOLD LINK */}
                    <DialogContentText id="alert-dialog-slide-description">examplelink.com/a;skdfjw123          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Got it!
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default InviteLink;
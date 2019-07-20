import React from 'react';
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
} from '@material-ui/core';
import clsx from 'clsx';

import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';


// -----------------------------------------------------------------------------
export default function AddParticipant() {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    // BELOW: Icon buttons
    const iconButton = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
    }));

    const iconBttnClass = iconButton();
    // END: Icon buttons

    return (
        <div className="Form-modal-button">
            <IconButton aria-label="Share" onClick={handleClickOpen}>
                <ShareIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Participant!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter participants email below
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <IconButton
                        className={iconBttnClass.button}
                        aria-label="Create"
                        onClick={handleClose} color="secondary"
                    >
                        <Icon className={clsx(iconBttnClass.icon, 'fas fa-ban')} />
                    </IconButton>

                    <IconButton
                        className={iconBttnClass.button}
                        aria-label="Create"
                        onClick={handleClose} color="primary"
                    >
                        <Icon className={clsx(iconBttnClass.icon, 'fas fa-check')} />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}

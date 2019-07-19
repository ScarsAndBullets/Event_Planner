import React, { useState } from 'react';
// Material UI
import { Grid, makeStyles, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./Form.css";


// ---------------------------------------------------------------------
function Form() {
    // MODAL variables and funcs BELOW
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    // END MODAL vars and funcs
    // FORM vars/funcs
    const useFormStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        dense: {
            marginTop: theme.spacing(2),
        },
        menu: {
            width: 200,
        },
    }));

    const classes = useFormStyles();
    const [values, setValues] = React.useState({
        name: '',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    // END FORM vars/funcs
    // DATE/TIME vars/funcs
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    function handleDateChange(date) {
        setSelectedDate(date);
    }
    // END DATE/TIME vars/funcs
    // ICON BTTN 
    const iconButton = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
    }));

    const iconBttnClass = iconButton();

    // END ICON BTTN
    // FLOATING ACTION BTTN (FAB)
    const txtIconComboStyle = makeStyles(theme => ({
        fab: {
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));

    const textIconCombo = txtIconComboStyle();

    // END FLOATING ACTION BTTN (FAB)

    return (
        <div className="Form-modal-button">
            {/* BELOW: MODAL */}

            <Fab variant="extended" aria-label="Create Form Button" className={textIconCombo.fab} onClick={handleClickOpen}>
                <AddIcon className={textIconCombo.extendedIcon} />
                New Event!
      </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create A New Event</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        If admitting you have a problem is the first step to recovery, filling out this form is the first step to having your event pland!!
          </DialogContentText> */}
                    <TextField
                        autoFocus
                        id="outlined-name"
                        label="Event Name"
                        className={classes.textField}
                        value={values.name}
                        fullWidth
                        onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        id="outlined-description"
                        label="Event Description"
                        className={classes.textField}
                        value={values.name}
                        helperText="Might we suggest a BRIEF summary--no one has time for a novel."
                        fullWidth
                        onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    {/* BELOW: date/time */}
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container className={classes.grid} justify="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="mui-pickers-date"
                                label="What day is it going down?"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="mui-pickers-time"
                                label="What time does it start?"
                                value={selectedDate}
                                // handleTIMEchange??
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    {/* END: date/time */}
                    <TextField
                        autoFocus
                        id="outlined-location"
                        label="Location"
                        className={classes.textField}
                        value={values.name}
                        fullWidth
                        onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        id="outlined-requirements"
                        label="Guest Requirements"
                        className={classes.textField}
                        value={values.name}
                        helperText="Do participants need to sign waivers? Are shoes and shirts a problem? Include anything that participants need to know/bring/do/prepare/etc."
                        fullWidth
                        onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
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

// --------------------------------------------------------------------------
export default Form;
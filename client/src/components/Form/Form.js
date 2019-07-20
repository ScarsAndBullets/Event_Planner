import React, {
	useState
} from "react";
// Material UI
import {
	Grid,
	makeStyles,
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker
} from "@material-ui/pickers";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {
	CheckCircleRounded,
	NotInterestedRounded
} from "@material-ui/icons";

import API from "../../utils/API";
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
			display: "flex",
			flexWrap: "wrap"
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1)
		},
		dense: {
			marginTop: theme.spacing(2)
		},
		menu: {
			width: 200
		}
	}));

	const classes = useFormStyles();
	const [values, setValues] = React.useState({
		title: "",
		location: "",
		details: "",
		requirements: ""
	});

	const handleChange = name => event => {
		setValues({
			...values,
			[name]: event.target.value
		});
	};
	const handleSubmit = () => {
		API.submitEvent({
				title: values.title,
				details: values.details,
				date: selectedDate,
				time: selectedTime,
				location: values.location,
				requirements: values.requirements
			})
			.then(res => {
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};
	// END FORM vars/funcs
	// DATE/TIME vars/funcs
	const [selectedDate, setSelectedDate] = React.useState();

	function handleDateChange(date) {
		setSelectedDate(date);
	}
	const [selectedTime, setSelectedTime] = React.useState();

	function handleTimeChange(time) {
		setSelectedTime(time);
	}
	// END DATE/TIME vars/funcs
	// ICON BTTN
	const iconButton = makeStyles(theme => ({
		button: {
			margin: theme.spacing(1)
		},
		input: {
			display: "none"
		}
	}));

	const iconBttnClass = iconButton();

	// END ICON BTTN
	// FLOATING ACTION BTTN (FAB)
	const txtIconComboStyle = makeStyles(theme => ({
		fab: {
			margin: 0,
			top: "auto",
			right: 20,
			bottom: 20,
			left: "auto",
			position: "fixed"
		},
		extendedIcon: {
			marginRight: theme.spacing(1)
		}
	}));

	const textIconCombo = txtIconComboStyle();

	// END FLOATING ACTION BTTN (FAB)

	return ( <
		div className = "Form-modal-button" > {
			/* BELOW: MODAL */ }

		<
		Fab variant = "extended"
		aria - label = "Create Form Button"
		className = {
			textIconCombo.fab
		}
		onClick = {
			handleClickOpen
		} >
		<
		AddIcon className = {
			textIconCombo.extendedIcon
		}
		/>
		New Event!
		<
		/Fab> <
		Dialog open = {
			open
		}
		onClose = {
			handleClose
		}
		aria - labelledby = "form-dialog-title" >
		<
		form action = "/"
		method = "POST"
		onSubmit = {
			e => {
				e.preventDefault();
				handleSubmit();
				handleClose();
			}
		} >
		<
		DialogTitle id = "form-dialog-title" > Create A New Event < /DialogTitle>

		<
		DialogContent > {
			/* <DialogContentText>
			                        If admitting you have a problem is the first step to recovery, filling out this form is the first step to having your event pland!!
			          </DialogContentText> */
		}

		<
		Grid container spacing = {
			2
		}
		className = {
			classes.grid
		} >
		<
		Grid item xs = {
			6
		} >
		<
		TextField autoFocus id = "outlined-name"
		label = "Event Name"
		className = {
			classes.textField
		}
		value = {
			values.name
		}
		fullWidth onChange = {
			handleChange("title")
		}
		margin = "normal"
		variant = "outlined" /
		>
		<
		/Grid> <
		Grid item xs = {
			6
		} >
		<
		TextField autoFocus id = "outlined-location"
		label = "Location"
		className = {
			classes.textField
		}
		value = {
			values.name
		}
		fullWidth onChange = {
			handleChange("location")
		}
		margin = "normal"
		variant = "outlined" /
		>
		<
		/Grid> <
		/Grid>

		<
		TextField autoFocus id = "outlined-description"
		label = "Event Description"
		className = {
			classes.textField
		}
		value = {
			values.name
		}
		helperText = "Might we suggest a BRIEF summary--no one has time for a novel."
		fullWidth onChange = {
			handleChange("details")
		}
		margin = "normal"
		variant = "outlined" /
		> {
			/* BELOW: date/time */ } <
		MuiPickersUtilsProvider utils = {
			DateFnsUtils
		} >
		<
		Grid container className = {
			classes.grid
		}
		justify = "space-around" >
		<
		KeyboardDatePicker margin = "normal"
		id = "mui-pickers-date"
		label = "What day is it going down?"
		value = {
			selectedDate
		}
		onChange = {
			handleDateChange
		}
		KeyboardButtonProps = {
			{
				"aria-label": "change date"
			}
		}
		/> <
		KeyboardTimePicker margin = "normal"
		id = "mui-pickers-time"
		label = "What time does it start?"
		value = {
			selectedTime
		}
		onChange = {
			handleTimeChange
		}
		KeyboardButtonProps = {
			{
				"aria-label": "change time"
			}
		}
		/> <
		/Grid> <
		/MuiPickersUtilsProvider> {
			/* END: date/time */ }

		<
		TextField autoFocus id = "outlined-requirements"
		label = "Guest Requirements"
		className = {
			classes.textField
		}
		value = {
			values.name
		}
		helperText = "Are shoes and shirts a problem? Include anything guests need to know/bring/do/prepare/etc."
		fullWidth onChange = {
			handleChange("requirements")
		}
		margin = "normal"
		variant = "outlined" /
		>
		<
		/DialogContent> <
		DialogActions >
		<
		IconButton className = {
			iconBttnClass.button
		}
		aria - label = "Create"
		onClick = {
			handleClose
		}
		color = "secondary" >
		<
		NotInterestedRounded fontSize = "large" / >
		<
		/IconButton> <
		IconButton className = {
			iconBttnClass.button
		}
		aria - label = "Create"
		onClick = {
			handleClose
		}
		color = "primary"
		type = "submit"
		label = "submit" >
		<
		CheckCircleRounded fontSize = "large" / >
		<
		/IconButton> <
		/DialogActions> <
		/form> <
		/Dialog> <
		/div>
	);
}

// --------------------------------------------------------------------------
export default Form;
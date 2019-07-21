import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import OpenWithRounded from '@material-ui/icons/OpenWithRounded';
import AddParticipant from '../../components/AddParticipant/AddParticipant';
import EventCard from '../../components/EventCard/EventCard';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function FullEventPage() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <IconButton aria-label="Settings" onClick={handleClickOpen}>
                <OpenWithRounded />
            </IconButton>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            INSERT EVENT TITLE
            </Typography>
                        <AddParticipant />
                    </Toolbar>
                </AppBar>
                {/* CONTENT HERE (Main Info, Participants, Tasks) */}
            </Dialog>
        </div>
    );
}
// BELOW: Not sure what this logic is for?
// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}
// END: unsure about logice
// BELOW: needed to export everything in this file
export default FullEventPage;

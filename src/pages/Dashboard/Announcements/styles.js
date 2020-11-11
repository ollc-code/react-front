import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    listItem: {
        display: "flex",
    },
    listText: {
      display: 'flex',
      padding: 20,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[10],
      padding: theme.spacing(2, 4, 3),
    },
    main: {
      padding: 20,
    },
    loadingBox: {
      padding: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    addButton: {
      boxShadow: theme.shadows[5],
    },
    card: {
      width: "100%",
      boxShadow: theme.shadows[5],
      display: "grid"
    },
    cardContent: {
      display: "flex",
      padding: "10px",
    },
    cardButton: {
      justifySelf: "end",
      padding: "10px"
    }
  }));

export default useStyles;
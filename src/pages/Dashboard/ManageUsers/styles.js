import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[10],
      padding: theme.spacing(2, 4, 3),
    },
    main: {
      padding: 20,
    },
    card: {
      width: "100%",
      boxShadow: theme.shadows[4],
      display: "grid"
    },
    cardContent: {
      display: "flex",
      padding: "5px",
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

export default useStyles;
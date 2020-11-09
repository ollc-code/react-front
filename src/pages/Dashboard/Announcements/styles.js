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
  }));

export default useStyles;
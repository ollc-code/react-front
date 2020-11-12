// import React, { useState, useEffect } from 'react'


// import Button from '@material-ui/core/Button';

// // import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
// import axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';


// // import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// // import CardActions from '@material-ui/core/CardActions';
// // import CardContent from '@material-ui/core/CardContent';
// // import CardMedia from '@material-ui/core/CardMedia';
// // import Button from '@material-ui/core/Button';
// // import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });



// function PriestsInfo(props) {

//     const apiUrl = "http://localhost:8000/information/priest/";
//     const imageUrl = "http://localhost:8000/media/"
//     const [done, setDone] = useState('');
//     const [onLoad, setOnLoad] = useState(false)

//     const classes = useStyles()
    

//     const [priests, setPriests] = useState([]);

//     function fetchData() {
//         axios.get(apiUrl).then((resp)=>{
//             if (resp.status == 200){
//                 console.log(resp.data);
//                 setPriests(JSON.parse(resp.data));
//             } 
//         }).then(() => {
//             setOnLoad(true);
//             }    
//         )
//     }

//     if(!onLoad){
//         setTimeout(fetchData(), 1200)
//     }

//     return (
//         <div>
//             <Button onClick={ () => { props.back(true) } }> \back </Button>
//             {
//               onLoad ?

//               priests.map((item, index)=>{
//                 <Card className={classes.root}>
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     alt="Contemplative Reptile"
//                     height="140"
//                     image={imageUrl}
//                     title="Contemplative Reptile"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Lizard
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                       across all continents except Antarctica
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//                 <CardActions>
//                   <Button size="small" color="primary">
//                     Share
//                   </Button>
//                   <Button size="small" color="primary">
//                     Learn More
//                   </Button>
//                 </CardActions>
//               </Card>
//               })
             
//               :
//               <p>Not Done</p>
//             }
//         </div>
//     );
// }

// export default PriestsInfo;

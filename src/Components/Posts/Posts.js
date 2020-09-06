import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});



const Posts = (props) => {
    const { id, title, body } = props.post;
    const classes = useStyles();


    const postStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const cardStyle = {
        border: '10px solid salmon',
        borderRadius: '20px',
        margin: '100px',
        padding: '10px',
        fontWeight: 'bold',
        color: 'navy',
        background: 'linear-gradient(-100deg, yellow, grey)'
    }

    return (
        <div style={postStyle}>
            <img src={process.env.PUBLIC_URL + "images/social buddy logo.png"} alt="social" width="400px" />
            <Card className={classes.root} style={cardStyle}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Post Title: "{title}"
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Like
        </Button>
                    <Button size="small" color="primary">
                        Share
        </Button>
                </CardActions>
                <Button variant="contained" color="secondary">
                    <Link to={`/post/${id}`}>Click for Detail</Link>
                </Button>
            </Card>

        </div>
    );
};

export default Posts;


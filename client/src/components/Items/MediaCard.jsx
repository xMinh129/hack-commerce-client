import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};


function MediaCard(props) {
    const { classes, name, image, price} = props;
    console.log(props)
    console.log('media card is rendered');
    console.log(name);
    console.log(props.image);
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={image ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUORRVqXN8n9LLRTwXPW25gA34-Ho2DlWhaZ4J6SnKFq7yRjD0'}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {name}
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default withStyles(styles)(MediaCard);

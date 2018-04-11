import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const stylecard = {
    height: '65%',
    width: '90%',
    margin: '5%',


};

const CardExampleWithAvatar = () => (
    <Card style={stylecard}>
        <CardHeader
            title="Elephant Population"
            subtitle="Sri Lanka"

        />
        <CardMedia
            overlay={<CardTitle title="Tensorflow" subtitle="Details" />}
        >
            <img src={require('../images/card1.jpg')} alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat.
        </CardText>
        <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
);

export default CardExampleWithAvatar;
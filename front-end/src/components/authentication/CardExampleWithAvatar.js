import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const stylecard = {
    height: '65%',
    width: '90%',
    margin: '5%',


};
const styletitle = {
   margin: '1%',
}

const CardExampleWithAvatar = () => (
    <Card style={stylecard}>
        <CardHeader style={styletitle}
            title="Elephant Identification System"
            // subtitle="Sri Lanka"

        />
        <CardMedia
            overlay={<CardTitle title="Elphas" subtitle="" />}
        >
            <img src={require('../images/card1.jpg')} alt="" />
        </CardMedia>
        {/*<CardTitle title="Card title"/>*/}
        <CardText>
            An efficient and effective way of recognizing elephants using image classification
        </CardText>

    </Card>
);

export default CardExampleWithAvatar;
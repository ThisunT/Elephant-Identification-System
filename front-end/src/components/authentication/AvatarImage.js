
import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


const style = {margin: 2};

const AvatarImage = () => (
<List>
      <ListItem
            disabled={true}
            leftAvatar={
                  <Avatar src={require('../images/user.png')} />
            }
            size={40}
            style={style}
      >

      </ListItem>
</List>
      );

export default AvatarImage;
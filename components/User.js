import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default Meal = (props) => {
    console.log("USER DATA: ", props)
    const { username, email, password, addToMailing } = props;

    return (
        <Content>
            <List>
                {/* <ListItem first title='User'>
                    <Text>{user}</Text>
                </ListItem> */}
                <ListItem first>
                    <Text style={{ fontSize: 14 }} >Username: {username}</Text>
                </ListItem>
                <ListItem>
                    <Text style={{ fontSize: 14 }} >Email: {email}</Text>
                </ListItem>
                <ListItem>
                    <Text style={{ fontSize: 14 }} >Password: {password}</Text>
                </ListItem>
                <ListItem last>
                    <Text style={{ fontSize: 14 }} >Add to Mailing List? {addToMailing}</Text>
                </ListItem>
                <Text>____________________________</Text>
            </List>
        </Content>
    );
}
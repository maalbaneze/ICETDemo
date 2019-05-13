import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default Meal = (props) => {
    console.log("RESTAURANT DATA: ", props)
    const { restaurant, name, zip, postal } = props;

    return (
        <Content>
            <List>
                {/* <ListItem first title='Restaurant'>
                    <Text>{restaurant}</Text>
                </ListItem> */}
                <ListItem first>
                    <Text style={{ fontSize: 14 }} >Name: {name}</Text>
                </ListItem>
                <ListItem>
                    <Text style={{ fontSize: 14 }} >Zip Code: {zip}</Text>
                </ListItem>
                <ListItem last>
                    <Text style={{ fontSize: 14 }} >Postal Code: {postal}</Text>
                </ListItem>
                {/* <ListItem last title='meal'>
                    <Text>{meal}</Text>
                </ListItem> */}
                <Text>____________________________</Text>
            </List>
        </Content>
    );
}
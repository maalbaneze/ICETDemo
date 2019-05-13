import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default Meal = (props) => {
    console.log("MEAL DATA: ", props)
    const { meal, mealType, mealName, mealDesc, carbCount } = props;

    return (
        <Content>
            <List>
                {/* <ListItem first title='Meal'>
                    <Text>{meal}</Text>
                </ListItem> */}
                <ListItem first>
                    <Text style={{ fontSize: 14 }} >Meal Type: {mealType}</Text>
                </ListItem>
                <ListItem>
                    <Text style={{ fontSize: 14 }} >Meal Name: {mealName}</Text>
                </ListItem>
                <ListItem>
                    <Text style={{ fontSize: 14 }} >Description: {mealDesc}</Text>
                </ListItem>
                <ListItem last>
                    <Text style={{ fontSize: 14 }} >Estimated Carb Count: {carbCount}</Text>
                </ListItem>
                <Text>____________________________</Text>
            </List>
        </Content>
    );
}
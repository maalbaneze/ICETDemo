import React, { Component } from 'react';
import { Text, ImageBackground, Button } from 'react-native';
import { Card, List } from 'react-native-elements';
import { Meal } from '../components/Meal';
import { Restaurant } from '../components/Restaurant';
import { User } from '../components/User';
import { Container, Header, Left, Body, Title, Subtitle, Right, Content, Footer, FooterTab } from 'native-base';
import API from '../utils/API';

class Admin extends Component {

    state = {
        isReady: false,
        meals: [],
        restaurants: [],
        users: []
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.getMeals();
        this.getRestaurants();
        this.getUsers();
        this.setState({ isReady: true })
    }

    componentDidMount() {
        this.getMeals();
        this.getRestaurants();
        this.getUsers();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getMeals = () => {
        API.getMeals()
            .then(res =>
                this.setState({
                    meals: res.data
                })
            )
            .catch(err => console.log(err));
    };

    getRestaurants = () => {
        API.getRestaurants()
            .then(res =>
                this.setState({
                    restaurants: res.data
                })
            )
            .catch(err => console.log(err));
    };

    getUsers = () => {
        API.getUsers()
            .then(res =>
                this.setState({
                    restaurants: res.data
                })
            )
            .catch(err => console.log(err));
    };

    handleMealUpdate = id => {
        API.updateMeal(id).then(_res => this.getMeals());
    };

    handleRestaurantUpdate = id => {
        API.updateRestaurant(id).then(_res => this.getRestaurants());
    };

    handleMealDelete = id => {
        API.deleteMeal(id).then(_res => this.getMeals());
    };

    handleRestaurantDelete = id => {
        API.deleteRestaurant(id).then(_res => this.getRestaurants());
    };

    handleUserDelete = id => {
        API.deleteUser(id).then(_res => this.getUsers());
    };

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

        return (

            <Container>
                <ImageBackground source={require('../assets/images/background.png')} style={{ width: '100%', height: '100%' }}>
                    <Header style={{ height: '40%', backgroundColor: '#29C135' }}>
                        <Left />
                        <Body>
                            <Title style={{ fontFamily: 'Roboto', fontWeight: 'bold', width: '150%' }}>I Can Eat That!</Title>
                            <Subtitle style={{ fontStyle: 'italic', color: 'blue', height: '50%', width: '150%' }}>Your app for finding diabetic friendly meals at your favorite places to eat.</Subtitle>
                        </Body>
                        <Right>
                            <Button title='Logout' onPress={() => this.logout(userId)}
                                style={{ color: 'yellow', shadowColor: '#000000', shadowRadius: 1, shadowOffset: { height: 1, width: 0 } }}>
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <Card title="Saved Meals" icon="download">
                            {this.state.meals.length ? (
                                <List>
                                    {this.state.meals.map(meal => (
                                        <Meal
                                            key={meal._id}
                                            meal={meal.meal}
                                            mealName={meal.mealName}
                                            mealDesc={meal.mealDesc}
                                            carbCount={meal.carbCount}
                                            restaurants={meal.restaurants.join(", ")}
                                        />
                                    ))}
                                    <Button title='Update this meal'
                                        onPress={() => this.handleMealUpdate(meals._id)}
                                        className="btn btn-danger ml-2"
                                    />
                                    <Button title='Delete this meal'
                                        onPress={() => this.handleMealDelete(meals._id)}
                                        className="btn btn-danger ml-2"
                                    />
                                    />
                                </List>
                            ) : (
                                    <Text className="text-center">No Saved Meals</Text>
                                )}
                        </Card>
                        <Card title="Saved Restaurants" icon="download">
                            {this.state.restaurants.length ? (
                                <List>
                                    {this.state.restaurants.map(restaurant => (
                                        <Restaurant
                                            key={restaurant._id}
                                            name={restaurant.name}
                                            zip={retaurant.zip}
                                            postal={restaurant.postal}
                                        //restaurants={meal.restaurants.join(", ")}
                                        />
                                    ))}
                                    <Button title='Update this restaurant'
                                        onPress={() => this.handleRestaurantUpdate(restaurants._id)}
                                        className="btn btn-danger ml-2"
                                    />
                                    <Button title='Delete this restaurant'
                                        onPress={() => this.handleRestaurantDelete(restaurants._id)}
                                        className="btn btn-danger ml-2"
                                    />
                                    />
                                </List>
                            ) : (
                                    <Text className="text-center">No Saved Restaurants</Text>
                                )}
                        </Card>
                        <Card title="Saved Users" icon="download">
                            {this.state.users.length ? (
                                <List>
                                    {this.state.restaurants.map(restaurant => (
                                        <User
                                            key={user._id}
                                            username={user.username}
                                            password={user.password}
                                            email={user.email}
                                            addToMailing={user.meal.addToMailing}
                                        />
                                    ))}
                                    <Button title='Update this user'
                                        onPress={() => this.handleUserUpdate(users._id)}
                                        className="btn btn-danger ml-2"
                                    />
                                    <Button tiutle='Delete this user'
                                        onPress={() => this.handleUserDelete(users._id)}
                                        className="btn btn-danger ml-2"
                                    />
                                    />
                                </List>
                            ) : (
                                    <Text className="text-center">No Saved Users</Text>
                                )}
                        </Card>
                    </Content>
                    <Footer>
                        <FooterTab style={{ backgroundColor: '#29C135' }}>
                            <Text > {'\u00A9'} I Can Eat That (MAA 2019) </Text>
                        </FooterTab>
                    </Footer>
                </ImageBackground>
            </Container>
        );
    }
}

export default Admin;
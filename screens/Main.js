import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import API from '../utils/API';
import Meal from '../components/Meal';
import Restaurant from '../components/Restaurant';
import { Container, Header, Left, Input, Body, Form, List, ListItem, Item, Label, Title, Subtitle, Right, Content, Footer, FooterTab, Button, Text } from 'native-base';


class Main extends Component {

    state = {
        isReady: false,
        meals: [],
        restaurants: [],
        name: "",
        zip: "",
        postal: "",
        mealType: "",
        mealName: "",
        mealDesc: "",
        carbCount: ""
    }

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.getMeals();
        this.getRestaurants();
        this.setState({ isReady: true })
    }

    componentDidMount() {
        this.getMeals();
        this.getRestaurants();
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
            .catch(() =>
                this.setState({
                    meals: [],
                    message: "No New Meals Found, Try a Different Query"
                })
            );
    };

    getRestaurants = () => {
        API.getRestaurants()
            .then(res =>
                this.setState({
                    restaurants: res.data
                })
            )
            .catch(() =>
                this.setState({
                    restaurants: [],
                    message: "No New Restaurants Found, Try a Different Query"
                })
            );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getMeals();
        this.getRestaurants()
    };

    handleMealSave = id => {
        // const meal = this.state.meals.find(meal => meal.id === id);
        const { mealType, mealName, mealDesc, carbCount } = this.state;

        API.saveMeal({
            // key: meal._id,
            mealType,
            mealName,
            mealDesc,
            carbCount
        }).then(() => this.getMeals(),
            this.setState({ mealType: "", mealName: "", mealDesc: "", carbCount: "" }))
    };

    handleRestaurantSave = id => {
        // const restauarant = this.state.restaurants.find(restaurant => restaurant.id === id);
        const { name, zip, postal } = this.state;

        API.saveRestaurant({
            // key: restaurant._id,
            name,
            zip,
            postal
        }).then(() => this.getRestaurants(),
            this.setState({ name: "", zip: "", postal: "" }))
    };

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

        return (
            <View>
                <ImageBackground source={require('../assets/images/background.png')} style={{ width: '100%', height: '100%' }}>
                    <Header style={{ height: '40%', backgroundColor: '#29C135' }}>
                        <Body>
                            <Title style={{ fontFamily: 'Roboto', fontWeight: 'bold', width: '150%' }}>I Can Eat That!</Title>
                            <Subtitle style={{ fontStyle: 'italic', color: 'blue', height: '50%', width: '150%' }}>Your app for finding diabetic friendly meals at your favorite places to eat.</Subtitle>
                        </Body>
                        {/* <View style={styles.buttonOuterLayout}> */}
                        {/* <Right style={styles.buttonLayout}> */}
                        <Right>
                            <Button transparent color='yellow' onPress={() => this.props.navigation.navigate('MyModal')} >
                                <Text>Login</Text>
                            </Button>
                        </Right>
                        {/* </View> */}
                    </Header>
                    <Content>
                        <Card title="Intro">
                            <Text style={{ color: 'black' }}>{`As a diabetic, you know how important it is to know your sugar and carbohydrate intake to monitor your blood sugar level and prevent spikes and drops.

            And if you enjoy eating out, you know how few menus have all the info you need to oder safely…but you are not deterred!

            Now you can log and share your dining selections for your use, and to help other diabetics.

            Simply enter the place you are eating and any menu selections you have found to be low carb and low (or zero!) sugar.

            You can use this anonymously, but with a login, you can save, update, and delete your entries!`}
                            </Text>
                        </Card>
                        <Card title="Meal Search">
                            <Input placeholder='Input Meal Query' style={{ fontSize: 14 }} />
                            <Form
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                        <Card title="Meals List">
                            <List>
                                {this.state.meals ?
                                    this.state.meals.map((meal, i) => (
                                        <Meal
                                            key={i}
                                            mealType={meal.mealType}
                                            mealName={meal.mealName}
                                            mealDesc={meal.mealDesc}
                                            carbCount={meal.carbCount}
                                        />
                                    )
                                    ) : (
                                        <Text className="text-center">No New Meals Found, Try a Different Query</Text>
                                    )}
                            </List>
                        </Card>
                        <Card title="Restaurant Search">
                            <Input placeholder='Input Restaurant Query' style={{ fontSize: 14 }} />
                            <Form
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                        <Card title="Restaurants List">
                            <List>
                                {this.state.restaurants ?
                                    this.state.restaurants.map((restaurant, i) => (
                                        <Restaurant
                                            key={i}
                                            name={restaurant.name}
                                            zip={restaurant.zip}
                                            postal={restaurant.postal}
                                        // restaurants={meal.restaurants.join(", ")}
                                        />
                                    )
                                    ) : (
                                        <Text className="text-center">No New Restaurants Found, Try a Different Query</Text>
                                    )}
                            </List>
                        </Card>
                        <Card title="Add a Restaurant and Meal(s)">
                            <Form>
                                <Item fixedLabel>
                                    <Label style={{ fontSize: 12 }}>Restaurant Name</Label>
                                    <Input onChangeText={(restaurantName) => this.setState({ name: restaurantName })} />
                                </Item>
                                <Item fixedLabel>
                                    <Label style={{ fontSize: 12 }}>{`Zip Code (if in USA)`}</Label>
                                    <Input onChangeText={(restaurantZip) => this.setState({ zip: restaurantZip })} />
                                </Item>
                                <Item fixedLabel>
                                    <Label style={{ fontSize: 12 }}>{`Postal Code (if not in USA)`}</Label>
                                    <Input onChangeText={(restaurantPostal) => this.setState({ postal: restaurantPostal })} />
                                </Item>
                                <Text>{''}</Text>
                                <Button block primary
                                    onPress={() => this.handleRestaurantSave()}
                                    className="btn btn-primary ml-2"
                                >
                                    <Text>Save a restaurant</Text>
                                </Button>
                                <Item fixedLabel>
                                    <Label style={{ fontSize: 12 }}>Meal Time</Label>
                                    <Input onChangeText={(mealTime) => this.setState({ meal: mealTime })} />
                                </Item>
                                <Item fixedLabel>
                                    <Label style={{ fontSize: 12 }}>Meal Name</Label>
                                    <Input onChangeText={(mealName) => this.setState({ mealName: mealName })} />
                                </Item>
                                <Item fixedLabel>
                                    <Label style={{ fontSize: 12 }}>Meal Description</Label>
                                    <Input onChangeText={(mealDescription) => this.setState({ mealDesc: mealDescription })} />
                                </Item>
                                <Item fixedLabel>
                                    <Label style={{ fontSize: 12 }}>Estimated Total Carb Count</Label>
                                    <Input onChangeText={(estCarbCount) => this.setState({ carbCount: estCarbCount })} />
                                </Item>
                                <Button block primary
                                    onPress={() => this.handleMealSave()}
                                    className="btn btn-primary ml-2"
                                >
                                    <Text>Save a meal</Text>
                                </Button>
                            </Form>
                        </Card>
                    </Content>
                    {/* <Footer>
                        <FooterTab style={{ backgroundColor: '#29C135' }}>
                            <Text style={{ textAlign: 'center' }}> {'\u00A9'} I Can Eat That (MAA 2019) </Text>
                        </FooterTab>
                    </Footer> */}
                </ImageBackground>
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//     },
//     headerText: {
//       fontSize: 20,
//       textAlign: "center",
//       margin: 10,
//       fontWeight: "bold"
//     },
//     buttonOuterLayout: {
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         textAlign: 'right'
//     },
//     buttonLayout: {
//         marginBottom: 10,
//         fontSize: 8,
//     }
// });

export default Main;
import React, { Component } from 'react';
import Modal from "react-native-modal";
import { Container, Content, Form, Item, Label, Input } from 'native-base';
import { View, Text, Button, List } from 'react-native';
import { Card } from 'react-native-elements';
import API from '../utils/API';
import MainTabNavigator from '../navigation/MainTabNavigator'

class LoginModal extends Component {

    state = {
        isModalVisible: true,
        users: [],
        username: "",
        email: "",
        password: "",
        addToMailing: 0

    };

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    componentDidMount() {
        this.getUser();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getUser = () => {

        const { username, password } = this.state;

        API.getUser({
            username,
            password
        }).then(res =>
            this.setState({
                users: res.data
            })
        )
            .catch(() =>
                this.setState({
                    users: [],
                    message: "No Such User Found, Try Again"
                })
            );
    };

    handleUserSave = () => {

        const { username, email, password, addToMailing } = this.state;

        API.createUser({
            username,
            email,
            password,
            addToMailing,
        }).then(() => this.getUser(),
            this.setState({ username: "", email: "", password: "", addToMailing: "" }))
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getUser();
        event.target.reset();
    };

    // clearLoginForm = () => {
    //     this.setState({
    //         username: "",
    //         email: "",
    //         password: "",
    //         addToMailing: 0
    //     });
    // }


    render() {
        return (
            <Container style={{ flex: 1 }}>
                <Button title="Show modal" onPress={this.toggleModal} />
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 400, height: 700 }}>
                            <Content>
                                <Card title='Create New User'>
                                    <Form>
                                        <Item fixedLabel>
                                            <Label style={{ fontSize: 14 }}>Username</Label>
                                            <Input onChangeText={(userName) => this.setState({ username: userName })} />
                                        </Item>
                                        <Item fixedLabel>
                                            <Label style={{ fontSize: 14 }}>Email</Label>
                                            <Input onChangeText={(eMail) => this.setState({ email: eMail })} />
                                        </Item>
                                        <Item fixedLabel>
                                            <Label style={{ fontSize: 14 }}>Password</Label>
                                            <Input onChangeText={(passWord) => this.setState({ password: passWord })} />
                                        </Item>
                                        <Item fixedLabel>
                                            <Label style={{ fontSize: 14 }}>Add to Mailing List?</Label>
                                            <Input onChangeText={(addToMail) => this.setState({ addToMailing: addToMail })} />
                                        </Item>
                                        <Button title='Submit'
                                            onPress={() => this.handleUserSave()}
                                            className="btn btn-primary ml-2"
                                            clearButtonMode="always"
                                        />
                                    </Form>
                                </Card>
                                <Card title="Existing User Login">
                                    <Form>
                                        <Item fixedLabel>
                                            <Label style={{ fontSize: 14 }}>Username</Label>
                                            <Input onChangeText={(userName) => this.setState({ username: userName })} />
                                        </Item>
                                        <Item fixedLabel>
                                            <Label style={{ fontSize: 14 }}>Password</Label>
                                            <Input onChangeText={(passWord) => this.setState({ password: passWord })} />
                                        </Item>
                                        <Button title='Submit' onPress={() =>
                                            this.props.navigation.navigate('UserStack')}
                                            className="btn btn-primary ml-2"
                                            clearButtonMode="always"
                                        />
                                    </Form>
                                    {/* {this.state.users ?
                                        this.state.users.map((user, _id) => (
                                            user = user.userid
                                        )
                                        ) : (
                                            <Text className="text-center">{this.state.message}</Text>
                                        )} */}
                                </Card>
                                <Card style={{ flex: 1, alignItems: 'center' }}>
                                    {/* <Text style={{ fontSize: 20, textAlign: 'center' }}>Go Back</Text> */}
                                    <Button
                                        onPress={() => this.props.navigation.goBack()}
                                        title="Go Back to Main Screen"
                                    />
                                </Card>
                            </Content>
                        </View>
                    </View>
                </Modal>
            </Container>
        );
    }
}

export default LoginModal;
import React, { Component } from 'react';

import { AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';

export default class MainProject extends Component {

    constructor(props) {

        super(props)

        this.state = {

            TextInputEmail: '',
            TextInputHours: '',
            TextInputMinutes: ''

        }

    }

    Submit = () => {


        const { TextInputEmail } = this.state;
        const { TextInputHours } = this.state;
        const { TextInputMinutes } = this.state;



        fetch('/info', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    email: TextInputEmail,

                    hours: TextInputHours,

                    minutes: TextInputMinutes

                })

            }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                Alert.alert(responseJson);

            }).catch((error) => {
                console.error(error);
            });


    }

    render() {
        return (

            <
            View style = { styles.MainContainer } >

            <
            TextInput

            // Adding hint in Text Input using Place holder.
            placeholder = "Enter Email"

            onChangeText = { TextInputEmail => this.setState({ TextInputEmail }) }

            // Making the Under line Transparent.
            underlineColorAndroid = 'transparent'

            style = { styles.TextInputStyleClass }
            />

            <
            TextInput

            // Adding hint in Text Input using Place holder.
            placeholder = "Enter Hours"

            onChangeText = { TextInputHours => this.setState({ TextInputHours }) }

            // Making the Under line Transparent.
            underlineColorAndroid = 'transparent'

            style = { styles.TextInputStyleClass }
            />

            <
            TextInput

            // Adding hint in Text Input using Place holder.
            placeholder = "Enter Minutes"

            onChangeText = { TextInputMinutes => this.setState({ TextInputMinutes }) }

            // Making the Under line Transparent.
            underlineColorAndroid = 'transparent'

            style = { styles.TextInputStyleClass }
            />

            <
            Button title = "Submit"
            onPress = { this.Submit }
            color = "#2196F3" / >



            <
            /View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10
    },

    TextInputStyleClass: {

        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,

        borderColor: '#2196F3',


    }

});

AppRegistry.registerComponent('MainProject', () => MainProject);
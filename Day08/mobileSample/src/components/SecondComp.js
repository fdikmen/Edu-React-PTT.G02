//rnc + tab
import { Alert, Button, Image, SafeAreaView, Text, TouchableHighlight, TouchableOpacity, View, StyleSheet, ActivityIndicator, TextInput, ScrollView } from 'react-native'
import React, { Component } from 'react'
const imgUrl = "https://static.vecteezy.com/system/resources/previews/010/159/779/original/hand-draw-heart-icon-love-sign-design-free-png.png"
export default class SecondComp extends Component {
    state = {
        firstState: 'First State'
    }

    componentDidMount() { console.log('SecondComp componentDidMount') }

    componentDidUpdate() { console.log('SecondComp componentDidUpdate') }

    componentWillUnmount() { console.log('SecondComp componentWillUnmount') }

    render() {
        return (
            <ScrollView>
                <Text>SecondComp</Text>
                <Text>stateman : {this.props.stateman}</Text>
                <Text>firstState : {this.state.firstState}</Text>
                <Button title='Test Button' onPress={() => Alert.alert('Yes This Button!')} color="red" />



                <TextInput
                    placeholder='Enter your name...'
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10 }}
                    keyboardAppearance='dark'
                    keyboardType='number-pad'
                    onChangeText={text => this.setState({ firstState: text })}
                />

                {/* <Image source={require('../assets/1.jpg')} style={{width:100, height:100}} /> */}
                <Image source={{ uri: 'data:image/png;base64,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' }}
                    style={{ width: 200, height: 100 }} />

                <TouchableOpacity onPress={() => Alert.alert('Heart!!!')}>
                    <Image source={require('../assets/images/heart.webp')} style={{ width: 50, height: 47, margin: 30 }} />
                </TouchableOpacity>

                <TouchableHighlight onPress={() => Alert.alert('Heart!!!')}>
                    <Image source={require('../assets/images/heart.webp')} style={{ width: 50, height: 47 }} />
                </TouchableHighlight>

                <TouchableOpacity onPress={() => Alert.alert('Button!!!')}>
                    <Text style={myStyles.btn}>Button</Text>
                </TouchableOpacity>

                <ActivityIndicator size="large" color="red"/>
            </ScrollView>
        )
    }
}

const myStyles = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        margin: 10,
        color: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
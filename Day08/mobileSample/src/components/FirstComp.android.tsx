import { View, Text, TouchableOpacity, Button, Alert, FlatList, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'

type Props = {
    username: string
}

const FirstComp = (props: Props) => {
    const [secondState, setSecondState] = useState("secondState is here!")

    useEffect(() => {
        console.log("FirstComp CDM")

        return () => {
            console.log("FirstComp CWU")
        }
    }, []) // [] means componentDidUpdate

    const sayHello = () => {
        console.log("Hello")
        Alert.alert("Hello")
    }
    const getName = () => {
        Alert.prompt("What is your name?", "Please enter your name", (text) => {
            console.log(text)
            Alert.alert("Hello " + text)
        })
    }
    const userDatas = [
        {
            name: "Tommy",
            age: 30
        },
        {
            name: "Jerry",
            age: 40
        },
        {
            name: "John",
            age: 50
        }
    ]
    return (
        <View>
            <Text>FirstComp</Text>
            <Text> Platform : {Platform.OS} </Text>
            <Text>Username : {props.username}</Text>
            <Text>secondState : {secondState}</Text>
            <Button title="Say Hello" onPress={sayHello} />
            <Button title="Get Name" onPress={getName} />
            <FlatList
                data={userDatas}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>Name : {item.name}</Text>
                            <Text>Age : {item.age}</Text>
                        </View>
                    )
                }
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default FirstComp
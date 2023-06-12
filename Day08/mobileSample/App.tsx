//rfc for React Functional Component
/*
import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}
*/

//rnf for React Native Functional Component
/*
import { View, Text } from 'react-native'
import React from 'react'

export default function App(props) {
  return (
    <View>
      <Text>Hello React!!!</Text>
    </View>
  )
}
*/

//tsrnf for React Native Functional Component with Typescript

import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import FirstComp from './src/components/FirstComp'
import SecondComp from './src/components/SecondComp.js'

type Props = {
  name: string,
  age: number
}

const App = ({name,age}: Props) => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <FirstComp username="Tommy"/>
      <SecondComp stateman = "Ok!"/>
    </SafeAreaView>
  )
}

export default App

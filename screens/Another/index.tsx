import React, { useState } from 'react'
import { View, Text, ActivityIndicator, TextInput } from 'react-native'

interface State {
  name?: string
}

class Child extends React.Component<{}, State> {
  state = {
    name: 'Jonathan',
  }
  render() {
    const { name } = this.state

    return (
      <>
        <Text>{name}</Text>
      </>
    )
  }
}

const Another: React.FC = () => {
  const [inputed, setInputed] = useState<string | number>('')
  return (
    <>
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 50, textAlign: 'center' }}>{inputed}</Text>
        <ActivityIndicator size={'large'} />
        <Text>Hello world</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'red', fontSize: 25 }}
          onChangeText={text => setInputed(text)}
        />
        <Child />
      </View>
    </>
  )
}

export default Another

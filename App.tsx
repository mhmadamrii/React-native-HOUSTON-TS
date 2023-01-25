import React, { useState, useCallback } from 'react'
import { View, Text, Button } from 'react-native'
import Todo from './screens/Todo'

interface Props {
  name?: string
  age?: number
}

const Child: React.FC<Props> = ({ name, age }) => {
  const [count, setCount] = useState<number>(0)

  const handlePress = useCallback(() => {
    setCount(count + 1)
  }, [count])

  console.log(count)
  return (
    <>
      <View>
        <Text>My name is: {name}</Text>
        <Text>Age: {age}</Text>
        <Button title="callback" onPress={handlePress} />
      </View>
    </>
  )
}

const App: React.FC = () => {
  const [state, setState] = useState<number | null>(0)
  console.log('state ->', state)
  return (
    <>
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello world</Text>
        <Child name="Jonathan" />
        <Text style={{ fontSize: 50 }}>{state}</Text>
        <Button
          title="press"
          onPress={() => state !== null && setState(state + 1)}
        />
      </View> */}
      <Todo />
    </>
  )
}

Child.defaultProps = {
  name: 'Emily',
  age: 30,
}

export default App

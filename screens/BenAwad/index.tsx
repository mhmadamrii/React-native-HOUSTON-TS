import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

// interfaces

interface Person {
  firstName: string
  secondName: string
}

interface Props {
  name?: string
  age?: number
  login?: boolean
  fn?: (bob: string) => string
  firstObject?: {
    f1: string
  }
  secondObject: Person
}

const Child: React.FC<{ text: string }> = (props) => {
  return (
    <>
      <Text>{props.text}</Text>
    </>
  )
}

const ChildTwo: React.FC<Props> = (props) => {
  console.log(props)

  const [count, setCount] = useState<number | undefined>(9)
  const [name, setName] = useState<{ text: string }>({ text: 'Hello' })
  return (
    <>
      <View style={{ flex: 1, borderWidth: 1 }}>
        <Text>{props.name}</Text>
        <Text style={{ fontSize: 40 }}>{count}</Text>
        <Button onPress={() => setCount(count + 1)} title="increment" />
      </View>
    </>
  )
}

export default function HooksBenAwad() {
  return (
    <>
      <View style={{ marginTop: 40, flex: 1 }}>
        <Text>Hello world</Text>
        <Child text="testing props" />
        <ChildTwo
          name="cekekek"
          secondObject={{ firstName: 'You', secondName: 'Me' }}
        />
      </View>
    </>
  )
}

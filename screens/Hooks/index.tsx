import React, { useCallback, useState, useMemo } from 'react'
import { View, Text, Platform, Button } from 'react-native'

interface Props {
  name?: string
  message?: string
  initialCount?: number
}

interface State {
  count: number
}

class Child extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0,
    }
    console.log(props)
  }

  handleAdd = () => {
    this.setState((prevState) => {
      console.log('previous state', prevState)
    })
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render(): React.ReactNode {
    const handleIncrement = () => {
      this.setState({ count: this.state.count + 1 })
    }
    return (
      <>
        <View>
          <Text>Class component</Text>
          <Text style={{ fontSize: 50 }}>{this.state.count}</Text>
          <Button title="check here" onPress={this.handleClick} />
        </View>
      </>
    )
  }
}

const ChildTwo: React.FC<Props> = (props) => {
  const { message, initialCount } = props

  const [count, setCount] = useState(0)
  const double = useMemo(() => count * 2, [count])

  const handleClick = useCallback(() => {
    console.log('Hello world')
  }, [message])
  return (
    <>
      <View>
        <Text>{message}</Text>
        <Text>Initial count {initialCount}</Text>
        <Button title="callback" onPress={handleClick} />
        <Text>{double}</Text>
        <Button title="increment count" onPress={() => setCount(count + 1)} />
      </View>
    </>
  )
}

const Hooks: React.FC = (props: Props) => {
  return (
    <>
      <View style={{ marginTop: Platform.OS == 'android' ? 20 : 0 }}>
        <Text>Hello world</Text>
        <Child name="Jonathan" />
        <ChildTwo message="this message" initialCount={60} />
      </View>
    </>
  )
}

export default Hooks

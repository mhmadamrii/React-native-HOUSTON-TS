import React from "react";
import { View, Text } from "react-native";

interface Props {
  name?: string;
  age?: number
}

const Child: React.FC<Props> = ({ name, age }) => {
  return(
    <>
      <View>
        <Text>My name is: {name}</Text>
        <Text>Age: {age}</Text>
      </View>
    </>
  )
}

const App: React.FC = () => {
  return (
    <>
      <View>
        <Text>Hello world</Text>
        <Child
          name="Jonathan"
        />
      </View>
    </>
  )
};


Child.defaultProps = {
  name: "Emily",
  age: 30
}

export default App;
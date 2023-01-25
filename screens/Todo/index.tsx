import React, { useState } from 'react'
import { View, Text, FlatList, Button, TextInput, Platform } from 'react-native'

interface Todo {
  id: string
  task: string
  isComplete: boolean
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodos, setNewTodos] = useState<string>('')

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: Date.now().toString(), task: newTodos, isComplete: false },
    ])
    setNewTodos('')
  }

  console.log('newTodos', newTodos)
  const renderTodos = ({ item }: { item: Todo }) => {
    console.log('items', item)
    return (
      <View>
        <Text
          style={{
            textDecorationLine: item.isComplete ? 'line-through' : 'none',
          }}
        >
          {item.task}
        </Text>
      </View>
    )
  }

  return (
    <>
      <View style={{ flex: 1, marginTop: Platform.OS == 'android' ? 30 : 0 }}>
        <TextInput
          style={{ borderWidth: 1, height: 80, padding: 5 }}
          placeholder="what's going on?"
          onChangeText={setNewTodos}
        />
        <Button title="add new task?" onPress={handleAddTodo} />

        <View>
          <FlatList data={todos} renderItem={renderTodos} keyExtractor={item => item.id} />
        </View>
      </View>
    </>
  )
}

export default Todo

import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native'

interface Todo {
  id: string
  task: string,
  description: string,
  isComplete: boolean
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodos, setNewTodos] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: Date.now().toString(), task: newTodos, isComplete: false, description },
    ])
    setNewTodos('')
    setDescription('')
  }

  const handleCompleteTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      ),
    )
  }

  const handleRemoveTodo = (id: string) => {
    console.log('id?', id)
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const renderTodos = ({ item }: { item: Todo }) => {
    return (
      <View
        style={{
          flex: 1,
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 50,
        }}
      >
        <Text
          style={{
            textDecorationLine: item.isComplete ? 'line-through' : 'none',
            textAlign: 'center',
            fontSize: 30,
          }}
        >
          {item.task} desc: {item.description}
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => handleRemoveTodo(item.id)}
            style={{ backgroundColor: 'red' }}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
          <Button title="tes" onPress={() => handleCompleteTodo(item.id)} />
        </View>
      </View>
    )
  }

  return (
    <>
      <View style={{ flex: 1, marginTop: Platform.OS == 'android' ? 30 : 0 }}>
        <View>
          <TextInput
            style={{ borderWidth: 1, height: 80, padding: 5, fontSize: 30 }}
            placeholder="what's going on?"
            onChangeText={setNewTodos}
            value={newTodos}
          />
          <TextInput
            style={{ borderWidth: 1, height: 80, padding: 5, fontSize: 30 }}
            placeholder="eg: lorem ipsum dolor"
            onChangeText={setDescription}
            value={description}
          />
          <Button title="add new task?" onPress={handleAddTodo} />
        </View>

        <View>
          <FlatList
            data={todos}
            renderItem={renderTodos}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  )
}

export default Todo

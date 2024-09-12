/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Touchable, TouchableOpacity, FlatList } from 'react-native';
import { IconButton } from "react-native-paper";
import Fallback from '../components/Fallback';

const TodoScreen = () => {
    //init local states
    console.log(Date.now().toString())
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [editedTodo, setEditedTodo] = useState(null)
    //handel add todo
    const handleAddTodo = () => {
        //sturtcure of a single todo item
        //{
        //  id:
        //  title:
        //}
        if(todo===""){
            return
        }
        setTodoList([...todoList, { id: Date.now().toString(), title: todo }])
        setTodo("")
    }
    //delete
    const handleDeleteTodo = (id) => {
        const updatedToDoList = todoList.filter((todo) => todo.id !== id)
        setTodoList(updatedToDoList)

    }
    //edit
    const handleEditTodo = (todo) => {
        setEditedTodo(todo)
        setTodo(todo.title)
    }
    const handleupdatedTodo=()=>{
        const updatedToDoList=todoList.map((item)=>{
            if(item.id===editedTodo.id){
                return{...item,title:todo}
            }
            return item
            
        })
        setTodoList(updatedToDoList)
            setEditedTodo(null)
            setTodo("")
    }
    //render todo
    const renderTodos = ({ item, index }) => {
        return (
            <View
                style={{
                    backgroundColor: "#1e90ff",
                    borderRadius: 6,
                    paddingHorizontal: 6,
                    paddingVertical: 6,
                    marginBottom: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                }}
            >
                <Text style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: "800",
                    flex: 1
                }}>
                    {item.title}
                </Text>
                <IconButton icon="pencil" iconColor='#fff' onPress={() => handleEditTodo(item)} />
                <IconButton icon="trash-can" iconColor='#fff' onPress={() => handleDeleteTodo(item.id)} />
            </View>
        )
    }
    return (
        <View style={{ marginHorizontal: 12 ,marginTop: 20  }}>
            <TextInput
                style={{
                    borderWidth: 5,
                    boderColor: "#1e90ff",
                    borderRadius: 5,
                    paddingVertical: 12,
                    paddingHorizontal: 12,


                }}
                placeholder='Add a task'
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />
            {
                editedTodo ?(<TouchableOpacity
                style={{
                    backgroundColor: 'black',
                    borderRadius: 6,
                    paddingVertical: 8,
                    marginVertical: 34,
                    alignItems: "center"
                }}
                onPress={() => handleupdatedTodo()}
            >
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Save</Text>
            </TouchableOpacity>):(
            <TouchableOpacity
            style={{
                backgroundColor: 'black',
                borderRadius: 6,
                paddingVertical: 8,
                marginVertical: 34,
                alignItems: "center"
            }}
            onPress={() => handleAddTodo()}
        >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Add</Text>
        </TouchableOpacity>
            )
            }
            
            {/* Rneder to do list*/}
            <FlatList data={todoList} renderItem={renderTodos} />
            {
                todoList.length <= 0 && <Fallback />
            }
        </View>
    );
};
export default TodoScreen;
const styles = StyleSheet.create({})



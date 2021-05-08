import React, { useState } from 'react';
import {  
        View, 
        TextInput ,
        FlatList,
        ScrollView,
        Alert,
        SafeAreaView,
        Button
      } 
from 'react-native';
import {Snackbar } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import ListItem from './Components/ListItem';
const ColorPrimary = "#ffd54f";
const ColorSecendary = "#343434";
export default function App() {
  const [todo,setTodo] = useState("");
  const [snackbar,setSnakBar] = useState(false);
  const [data,setData] = useState([{
    id:"45446546s4dc65",
    title:"create a todo list"
  }]);
  

  const addNewTodo = ()=>{
    if(todo.length > 0)
   { setData([
      ...data,{
          id : "15"+Math.random()*12,
          title : todo
        }
    ]);
    setTodo("");}
  }
  const deleteTodo = (id)=>{
    console.log(id)
    
    Alert.alert(
      'Delete',
      'You want to delete this todo ?',
      [
        {
          text: 'No',
          onPress: () => null,
          style: 'cancel'
        },
        { text: 'Yes', onPress: () => {
          setData([...data.filter(item=>item.id !== id)]) 
          setSnakBar(true)
        } }
      ],
      { cancelable: true }
    );
  }

  const handelChange = (item)=>setTodo(item);

  return (
    <SafeAreaView style={{
        padding:15,
        marginTop:30,
        flex: 1,
        justifyContent: 'space-between',
      }}
    >
      <View>
        <TextInput 
                 placeholder="Todo List" 
                 style={{
                  borderColor:"black",
                  borderWidth:2,
                  paddingLeft:20,
                  padding:5,
                  marginBottom:15,
                  borderRadius:20
                }} 
                onChangeText={handelChange}
                value={todo}
        />
      </View>      
      <View style={{
        marginBottom:15
      }}>
        <Button 
            title="New Todo"
            color={ColorPrimary} 
            onPress={addNewTodo} 
        />
      </View>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({item})=><ListItem item={item} deleteitem={deleteTodo} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <View>
        <Snackbar 
          visible={snackbar}
          onDismiss={() => setSnakBar(!snackbar)}
          duration={2000}
          style={{
            backgroundColor:ColorSecendary,
          }}
        >
            Todo was deleted 
        </Snackbar>
      </View>
    </SafeAreaView>

  );
}


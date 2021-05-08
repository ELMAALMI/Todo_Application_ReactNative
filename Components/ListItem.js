import React from 'react'
import { StyleSheet, 
         Text, 
         TouchableHighlight, 
         View
        } from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
const ColorPrimary = "#ffd54f";
const ColorSecendary = "#343434";
const ListItem =  ({ item , deleteitem }) => (
    <View style={styles.list}>
      <Text style={styles.Text}>
        {item.title}
      </Text>
      <View style={{
        display:"flex",
        flexDirection:"row"
      }}>
       <TouchableHighlight
           style={styles.delete}
           onPress={(e)=>deleteitem(item.id)}
       >
         <AwesomeIcon color={"#FFF"} size={20} name="trash" />
       </TouchableHighlight>
      </View>
    </View>
);
const styles = StyleSheet.create({
    list:{
      backgroundColor:ColorPrimary,
      height:50,
      marginTop:6,
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      flexDirection:"row"
    },Text:{
      color:"#ffffff",
      fontSize:15,
      paddingLeft : 12
    },delete:{
      display:"flex",
      backgroundColor:ColorSecendary,
      height:50,
      width:50,
      justifyContent:"center",
      alignItems:"center"
    }
  });
export default ListItem

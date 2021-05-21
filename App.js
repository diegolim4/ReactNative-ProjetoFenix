import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView , View, Card, StatusBar, TouchableOpacity } from 'react-native';


export default function App() {
  const [arquivo, setArquivo] = useState('') 
  
  
  return (    
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#35AAFF' barStyle='dark-content' />    
      <View style={styles.txtBox}>
         <Text style={styles.txt}>Hello Fenix</Text>        
      </View>
      <View > 
        
      </View>  
      <View style={styles.box}>
        <TouchableOpacity style={styles.card}>
          <Text> file #1</Text>          
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text> file #2</Text>          
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text> file #3</Text>          
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text> file #4</Text>          
        </TouchableOpacity>
      </View>         
    </SafeAreaView>      
  );    
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
    //flexDirection: 'row',
    //alignItems:'flex-start',
    //justifyContent: 'center',
              
  },

  txt:{
    fontSize: 25,
    color: '#E8E8E8',
    //marginBottom: 550,
    margin: 10,           
  },

  box:{
    flex:1,   
    margin: 5,            
  },
  
  card:{
    backgroundColor:'#fff',
    marginBottom: 5,
    marginLeft:'1%',
    width:'50%',
    shadowColor:'#000',
    shadowOpacity:1,
    shadowOffset:{
      width:3,
      height:3
    }
  },

});

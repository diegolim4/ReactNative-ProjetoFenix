import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView , View, TextInput, StatusBar, TouchableOpacity } from 'react-native';


export default function App() {
  const [arquivo, setArquivo] = useState('') 
  
  
  return (    
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#35AAFF' barStyle='dark-content' />    
      <View style={styles.txtBox}>
         <Text style={styles.txt}>Hello Fenix</Text>        
      </View>
      <View > 
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_txt}>###btn</Text>            
        </TouchableOpacity>
      </View>         
    </SafeAreaView>
  );    
    
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
              
  },

  txt:{
    fontSize: 25,
    color: '#E8E8E8',
    marginBottom: 550,
    margin: 5,           
  },
  
  btn:{  
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#35AAFF',
    padding:15,
    borderRadius:7,
    width:'100%',
    padding:10,
    height: 35,
    marginBottom: 550,
  }, 
  
  btn_txt:{
    color: '#F5F5DC',
    fontSize: 20 ,
  }
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { ImagePicker } from 'expo';

export default function App() {

  const uploaddoc = async() =>{
    let result = await DocumentPicker.getDocumentAsync({type:"image"});
    if (!result.cancelled) {
      Alert.alert('success','File uploaded!');
    }
  }

  const [image,setimage] = useState(null);
  const uploadimage = async() =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });
    if (!result.cancelled) {
      Alert.alert('success','image uploaded!');
      setimage(result.uri);
    }
  }
  return (
    <View style={styles.container}>
      <Button title="upload file" onPress={uploaddoc} style={{width:'50%',marginHorizontal:'5%'}}/>
      <Button title="upload image" onPress={uploadimage} style={{width:'50%',marginHorizontal:'5%',marginTop:'5%'}}/>
      { image!==null ?
      <Image source={{uri:image}}  style={{ width: 200, height: 200 }} />:
      null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

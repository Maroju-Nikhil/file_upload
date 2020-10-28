import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import  WebView  from "react-native-webview";

export default function App() {
  const uploaddoc = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (!result.cancelled) {
      Alert.alert("success", "File uploaded!");
      setfile(result);
      console.log(result);
    }
  };

  const PdfReader = ({ url: uri }) => (
    <WebView javaScriptEnabled={true} style={{ flex: 1 }} source={{ uri }} />
  );

  const [file, setfile] = useState(null);
  return (
    <View style={styles.container}>
     
      {file !== null ? (
        <View>
        <Text>{"\n"}</Text>
          <Image source={{ uri: file.uri }} style={{ width: 200, height: 200, marginLeft:'20%' }} />
         <Text> {"\n"}</Text>
          <Text>file name :{file.name} uploaded...</Text>
          </View>
      ) : (
       <Text>sorry! some error occured!</Text>
      )}
        <Text>{"\n\n"}</Text>
      <Button
        title="upload file"
        onPress={uploaddoc}
        style={{ width: "50%", marginHorizontal: "5%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

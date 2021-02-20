import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // 동기적으로 실행 = 화면이 update 되기 전에 실행
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "뒤로",
    });
  }, [navigation]); //navigation이 change될 때

  const register = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal accout
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture (optional) "
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        title="Register"
        onPress={register}
        raised
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: { width: 200, marginTop: 10 },

  inputContainer: { width: 300 },
});

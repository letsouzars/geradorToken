import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={ESTILO.container}>
      <Text>
        Meu app!
      </Text>
    </View>
  )
}

const ESTILO = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
    justifyContent: 'center',
    alignItems: 'center'
  }
})
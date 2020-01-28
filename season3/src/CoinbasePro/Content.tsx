import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  actions: {
    flexDirection: "row",
    marginHorizontal: 16,
    alignItems: "center",
    backgroundColor: "#222324",
    borderRadius: 8,
    padding: 16
  },
  value: {
    color: "white",
    fontSize: 16
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    borderRadius: 8
  },
  label: {
    fontSize: 20
  }
});

interface ButtonProps {
  color: string;
  backgroundColor: string;
  label: string;
}

const Button = ({ color, backgroundColor, label }: ButtonProps) => (
  <View style={[styles.button, { backgroundColor }]}>
    <Text style={[styles.label, { color }]}>{label}</Text>
  </View>
);

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            padding: 16
          }}
        >
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "white",
              paddingBottom: 8
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Orders</Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#222324",
              paddingBottom: 8,
              flex: 1
            }}
          >
            <Text style={{ fontSize: 20, color: "#222324", marginLeft: 16 }}>
              Trade History
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#222324",
              marginLeft: 4,
              fontSize: 20,
              marginTop: 16
            }}
          >
            You have no orders
          </Text>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={{ flex: 1 }}>
          <Text style={styles.value}>0 BTC</Text>
          <Text style={styles.value}>0.00 USD</Text>
        </View>
        <Button label="Buy" backgroundColor="#4AFA9A" color="#222324" />
        <Button label="Sell" backgroundColor="#E33F64" color="white" />
      </View>
    </SafeAreaView>
  );
};

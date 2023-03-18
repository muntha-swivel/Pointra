import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { PrimaryButton, SecondaryButton } from "../../atoms";
import { DEVICE_WIDTH } from "../../../shared/Constants";
const ScanQRCodeScreenTemplate = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.childContainer]}>
        <Text
          variant="titleLarge"
          style={{ fontWeight: "500", textAlign: "center" }}
        >
          Scan QR Code
        </Text>
        <Text variant="bodyLarge" style={{ textAlign: "center" }}>
          Place qr code inside the frame to scan Please avoid shake to get
          results quickly
        </Text>
      </View>
      <View style={styles.childContainer}>
        <Image
          source={require("../../../../assets/PointraQr.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={styles.childContainer}>
        <SecondaryButton style={{ width: DEVICE_WIDTH - 20, borderRadius: 10 }}>
          Scan QR Code
        </SecondaryButton>
      </View>
    </View>
  );
};
export { ScanQRCodeScreenTemplate };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  childContainer: {
    marginVertical: 30,
  },
});

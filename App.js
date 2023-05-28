import React, { useState } from 'react';
import { View, Text, Button, Alert, Linking } from 'react-native';

const App = () => {
  const [accidentDetected, setAccidentDetected] = useState(false);

  const sendAccidentAlert = async () => {
    const message = 'Accident Alert!';
    const phoneNumber = '+91 8123648850'; // Replace with the emergency contact number in international format

    const url = `whatsapp://send?text=${encodeURIComponent(message)}&phone=${encodeURIComponent(phoneNumber)}`;

    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      await Linking.openURL(url);
      Alert.alert('Alert Sent', 'Accident alert message has been sent to the emergency contact.');
    } else {
      Alert.alert('Error', 'WhatsApp is not installed on your device.');
    }
  };

  const handleAccidentDetection = () => {
    // Implement your accident detection logic here
    // Set accidentDetected to true if an accident is detected
    setAccidentDetected(true);
    sendAccidentAlert();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Accident Alert App</Text>
      <Button
        title="Detect Accident"
        onPress={handleAccidentDetection}
        disabled={accidentDetected}
      />
      {accidentDetected && (
        <Text style={{ marginTop: 20, fontWeight: 'bold', color: 'red' }}>Accident Detected!</Text>
      )}
    </View>
  );
};

export default App;

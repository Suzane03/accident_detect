import React, { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

const ShakeDetector = () => {
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;
    const shakeThreshold = 20.5; // Adjust this value to set the sensitivity of the shake detection

    const handleAccelerometerData = ({ x, y, z }) => {
      const deltaX = Math.abs(x - lastX);
      const deltaY = Math.abs(y - lastY);
      const deltaZ = Math.abs(z - lastZ);

      if (deltaX + deltaY + deltaZ > shakeThreshold) {
        // Shake detected, perform desired action here
        console.log('Shake detected!');
      }

      lastX = x;
      lastY = y;
      lastZ = z;
    };

    Accelerometer.addListener(handleAccelerometerData);

    return () => {
      Accelerometer.removeAllListeners();
    };
  }, []);

  return null;
};

export default ShakeDetector;
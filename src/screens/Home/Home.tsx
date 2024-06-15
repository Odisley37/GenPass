import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Style';
import { PassLogo } from '../../components/PassLogo/PassLogo';
import { PassTextInput } from '../../components/PassTextInput/PassTextInput';
import { PassButton } from '../../components/PassButton/PassButton';

export default function Home() {
  return (
    <View style={styles.appContainer}
    ><View style={styles.logoContainer}>
         <PassLogo/>
    </View>
    <View style={styles.inputContainer}>          
          <PassButton/>
    </View>
   
        <StatusBar style="light" />
    </View>
  );
}

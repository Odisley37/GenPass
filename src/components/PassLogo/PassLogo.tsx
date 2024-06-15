import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from './PassLogoStyle';
import passLogo from '../../../assets/Happy Bunch - Astronaut.png';


export function PassLogo() {
  return (
    <Text style={styles.title}>
        <Text>
            GERADOR DE SENHAS
        </Text>
        <Image 
        source={passLogo}
        style={{
            resizeMode: 'contain',
            height: 300,

        }}
        />
    </Text>
  );
}
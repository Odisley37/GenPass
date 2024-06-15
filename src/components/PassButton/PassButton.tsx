import React, {useState} from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './PassButtonStyle';
import { PassTextInput } from '../PassTextInput/PassTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function PassButton() {
    const [pass, setPass] = useState('')


function handleGenerateButton(){
    let generateToken = generatePass()
    setPass(generateToken)

}
function handleCopyButton(){
    Clipboard.setStringAsync(pass)
}
  return (
   <>
        <PassTextInput pass={pass}/>

            <Pressable
                onPress={handleGenerateButton}
                style={styles.button}
            >
                <Text style={styles.text}>
                    GENERATE
                </Text>

            </Pressable>
            
            <Pressable
            onPress={handleCopyButton}
            style={styles.button}
        >
            <Text style={styles.text}>
                ⚡ COPY
            </Text>

        </Pressable>
    </>
  );
}
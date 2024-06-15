import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   
        appContainer: {
          flex: 1,
          backgroundColor: '#4c148c',
          alignItems: 'center',
          justifyContent: 'center',
        },
        logoContainer: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
          marginBottom: 60,
          paddingTop: 20,
          paddingBottom: 10,
          backgroundColor: '#ada7c5',
          borderRadius: 20,
          elevation: 4,
        },
        inputContainer: {
          
          width: '90%',
          alignItems: 'center',
          flexDirection: 'column',
          borderRadius: 5,
          

        }
      });

  export default styles
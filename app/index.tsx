import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StyledInput from '../components/styled-input';
import { router } from 'expo-router';
import { Button, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export default function Login() {

    const handleLogin = () => {
        router.replace('home')
    }

  return (
    <View style={styles.container}>
      
      <Text bold={true}>Login</Text>
      
      <StyledInput 
      placeholder='Digite seu login' 
      onChangeText={(texto) => console.log(texto)}
      />
      
      <StyledInput 
      placeholder='Digite sua senha' 
      onChangeText={(texto) => console.log(texto)}
      />
      
      <Button size='md' variant='solid' onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button> 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

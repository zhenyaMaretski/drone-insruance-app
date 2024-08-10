import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/drone.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.description}>
          Your trusted partner for drone surveillance and security services. We offer real-time flight tracking, advanced mapping, and comprehensive user details for all your drone operations.
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Map')}
        accessibilityLabel="Get started with drone services"
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    overflow: 'hidden',
  },
  welcomeContainer: {
    backgroundColor: '#dce8f6',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;

import { useState } from 'react';
import { View, Alert, StyleSheet, ScrollView } from 'react-native';
import * as Yup from 'yup';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import InputField from '../components/InputField';
import RadioButton from '../components/RadioButton';
import SaveButton from '../components/SaveButton';

type SettingsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

type Props = {
  route: SettingsScreenRouteProp;
  navigation: SettingsScreenNavigationProp;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().matches(/^\d+$/, 'Phone number must contain only numbers').required('Phone number is required'),
});

const SettingsScreen = ({ route }: Props) => {
  const { location } = route.params;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [insurancePlan, setInsurancePlan] = useState<'Basic' | 'Premium'>('Basic');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSave = async () => {
    try {
      await validationSchema.validate({ name, email, phoneNumber }, { abortEarly: false });
      setErrors({});

      const data = {
        name,
        email,
        phoneNumber,
        insurancePlan,
        location,
      };

      // Simulate an API call
      // const response = await saveUserDetails(data);
      // Alert.alert('Details Saved', `Response from server: ${JSON.stringify(response, null, 2)}`);

      Alert.alert(
        'Details Saved',
        `Here are the details you provided:\n\nName: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nInsurance Plan: ${insurancePlan}\nLocation: Latitude - ${location.latitude}, Longitude - ${location.longitude}`
      );
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const formErrors: { [key: string]: string } = {};
        err.inner.forEach(error => {
          if (error.path) {
            formErrors[error.path] = error.message;
          }
        });
        setErrors(formErrors);
      } else {
        Alert.alert('Error', 'Failed to save details');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputField
        label="Personal Details"
        placeholder="e.g., John Smith"
        value={name}
        onChangeText={setName}
        errorMessage={errors.name}
      />
      <InputField
        label="Email Address"
        placeholder="e.g., john.smith@example.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        errorMessage={errors.email}
      />
      <InputField
        label="Phone Number"
        placeholder="e.g., 1234567890"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        errorMessage={errors.phoneNumber}
      />
      <View style={styles.radioGroup}>
        <RadioButton
          label="Basic Plan"
          selected={insurancePlan === 'Basic'}
          onPress={() => setInsurancePlan('Basic')}
        />
        <RadioButton
          label="Premium Plan"
          selected={insurancePlan === 'Premium'}
          onPress={() => setInsurancePlan('Premium')}
        />
      </View>
      <SaveButton onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default SettingsScreen;

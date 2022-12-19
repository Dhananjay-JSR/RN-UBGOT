import React from 'react';
import {Text, TextInput, Touchable, View, Dimensions} from 'react-native';
import LogoHolder from '../Modules/LogoHolder';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<any, any>;

export default function LoginPage({route, navigation}: Props) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Header */}
      <View
        key={'Header'}
        style={{
          height: '100%',
          flex: 0.15,
          alignItems: 'center',
          marginTop: '10%',
        }}>
        <Pressable
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
          }}
          onPress={() => {}}>
          <Icon name="arrow-back-outline" color={'#5b84b5'} size={45} />
        </Pressable>
        <LogoHolder height={'70%'} width={'40%'} />
      </View>
      {/* Header Ends */}
      {/* Hero Starts */}
      <View
        style={{
          flex: 0.1,
          paddingLeft: 20,
          width: '100%',
        }}>
        <Text
          style={{
            color: '#5B84B5',
            fontWeight: '700',
            fontSize: Dimensions.get('window').height * 0.04,
          }}>
          Welcome!
        </Text>
        <Text
          style={{
            color: '#787878',
            fontWeight: '700',
            fontSize: Dimensions.get('window').height * 0.04 - 9,
          }}>
          Join Us and Start a new journey
        </Text>
      </View>
      {/* Hero ends */}
      {/* Forms Starts */}
      <View
        style={{
          flex: 0.75,
          backgroundColor: '#5a83b536',
          borderTopRightRadius: Dimensions.get('window').height * 0.06,
          borderTopLeftRadius: Dimensions.get('window').height * 0.06,
          marginTop: '5%',
          padding: '5%',
        }}>
        <Text
          style={{
            color: '#5B84B5',
            fontSize: Dimensions.get('window').height * 0.03,
            fontWeight: '500',
          }}>
          Discover the new life.
        </Text>
        <TextInput
          placeholder="Email"
          style={{
            height: Dimensions.get('window').height * 0.065,
            fontSize: Dimensions.get('window').height * 0.02,
            marginTop: '5%',
            padding: '4%',
            backgroundColor: 'white',
            borderRadius: Dimensions.get('window').height * 0.01,
          }}
        />
        <View
          style={{
            marginTop: '5%',
            position: 'relative',
          }}>
          <TextInput
            placeholder="Password"
            style={{
              height: Dimensions.get('window').height * 0.065,
              fontSize: Dimensions.get('window').height * 0.02,
              backgroundColor: 'white',
              padding: '4%',
              borderRadius: Dimensions.get('window').height * 0.01,
            }}
          />
          <Pressable
            onPress={() => {}}
            style={{
              position: 'absolute',
              right: '5%',
              top: Dimensions.get('window').height * 0.02,
            }}>
            <Icon name="eye" color={'#5b84b5'} size={25} />
          </Pressable>
        </View>

        <View
          style={{
            marginTop: Dimensions.get('window').height * 0.05,
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => {
              navigation.navigate('Main');
            }}
            style={{
              height: '30%',
              backgroundColor: '#5B84B5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '35%',
              borderRadius: Dimensions.get('window').height * 0.01,
            }}>
            <Text
              style={{
                fontSize: Dimensions.get('window').height * 0.025,
                color: 'white',
                fontWeight: '600',
              }}>
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

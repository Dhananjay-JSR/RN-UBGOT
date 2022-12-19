import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  View,
  Image,
  Dimensions,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<any, any>;
export default function CourseOverView({route, navigation}: Props) {
  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <Pressable
          onPress={() => {
            navigation.pop();
          }}
          style={{
            flex: 0.07,
            marginTop: '15%',
            paddingLeft: '3%',
          }}>
          <Icon
            name="arrow-back-outline"
            color={'#5b84b5'}
            size={Dimensions.get('window').height * 0.06}
          />
        </Pressable>
        <View
          style={{
            backgroundColor: '#fbd57636',
            flex: 0.93,
            marginTop: '30%',
          }}>
          <View
            style={{
              height: '40%',
              padding: '5%',
              marginTop: -Dimensions.get('window').height * 0.08,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../Assets/CourseOverView.png')}
              resizeMode="contain"
              style={{
                height: '100%',
                width: '30%',
              }}
            />
            <View
              style={{
                height: '100%',
                width: '70%',
                justifyContent: 'center',
                position: 'relative',
              }}>
              <View
                style={{
                  marginTop: '-20%',
                  marginLeft: '6%',
                }}>
                <Text
                  style={{
                    color: '#5B84B5',
                    fontWeight: '500',
                    fontSize: Dimensions.get('window').height * 0.03,
                  }}>
                  Headline 1
                </Text>
                <Text
                  style={{
                    color: '#787878',
                    fontSize: Dimensions.get('window').height * 0.02,
                  }}>
                  Zoom Course
                </Text>
              </View>
              <Pressable
                onPress={() => {}}
                style={{
                  margin: '3%',
                  width: '70%',
                  marginLeft: '6%',
                  backgroundColor: '#FBD87F',
                  height: '17%',
                  position: 'absolute',
                  bottom: 0,
                  borderRadius: Dimensions.get('window').height * 0.007,
                }}></Pressable>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: '#5B84B5',
                padding: '3%',
                fontSize: Dimensions.get('window').height * 0.027,
              }}>
              Course Overview
            </Text>
          </View>
          <View
            style={{
              position: 'relative',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: Dimensions.get('window').height * 0.03,
              paddingLeft: Dimensions.get('window').height * 0.03,
              marginBottom: Dimensions.get('window').height * 0.05,
            }}>
            <Image
              resizeMode="stretch"
              source={require('../Assets/ViewMore.png')}
              style={{
                width: '100%',
              }}
            />
            <Pressable
              onPress={() => {}}
              style={{
                position: 'absolute',
                right: Dimensions.get('window').height * 0.03,
                bottom: -Dimensions.get('window').height * 0.04,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: Dimensions.get('window').height * 0.02,
                  color: '#787878',
                }}>
                See more..
              </Text>
            </Pressable>
          </View>
          <View>
            <Text
              style={{
                color: '#5B84B5',
                padding: '3%',
                fontSize: Dimensions.get('window').height * 0.027,
              }}>
              Course Structure
            </Text>
          </View>
          <View style={{
            height:Dimensions.get('window').height*0.2,
          }}>
            <ScrollView
              style={{
                height: '100%'
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: Dimensions.get('window').height * 0.08,
                  margin: Dimensions.get('window').height * 0.01,
                  borderRadius: Dimensions.get('window').height * 0.01,
                }}
              />
              <View
                style={{
                  backgroundColor: 'white',
                  height: Dimensions.get('window').height * 0.08,
                  margin: Dimensions.get('window').height * 0.01,
                  borderRadius: Dimensions.get('window').height * 0.01,
                }}
              />
              <View
                style={{
                  backgroundColor: 'white',
                  height: Dimensions.get('window').height * 0.08,
                  margin: Dimensions.get('window').height * 0.01,
                  borderRadius: Dimensions.get('window').height * 0.01,
                }}
              />
              <View
                style={{
                  backgroundColor: 'white',
                  height: Dimensions.get('window').height * 0.08,
                  margin: Dimensions.get('window').height * 0.01,
                  borderRadius: Dimensions.get('window').height * 0.01,
                }}
              />
              <View
                style={{
                  backgroundColor: 'white',
                  height: Dimensions.get('window').height * 0.08,
                  margin: Dimensions.get('window').height * 0.01,
                  borderRadius: Dimensions.get('window').height * 0.01,
                }}
              />
              <View
                style={{
                  backgroundColor: 'white',
                  height: Dimensions.get('window').height * 0.08,
                  margin: Dimensions.get('window').height * 0.01,
                  borderRadius: Dimensions.get('window').height * 0.01,
                }}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
}

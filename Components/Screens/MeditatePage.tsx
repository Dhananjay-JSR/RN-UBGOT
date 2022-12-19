import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import MiddlewareScreen from '../Modules/MiddleWareScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<any, any>;
function HorizontalController() {
  return (
    <>
      <View
        style={{
          height: Dimensions.get('window').height * 0.21,
          width: Dimensions.get('window').width * 0.7,
          margin: Dimensions.get('window').width * 0.04,
        }}>
        <Image
          source={require('../Assets/yoga.png')}
          style={{
            height: '80%',
            width: '100%',
            borderRadius: 20,
          }}
        />
        <View
          style={{
            width: '100%',
            marginTop: Dimensions.get('screen').height * 0.01,
            height: Dimensions.get('screen').height * 0.06,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  color: '#24242499',
                  fontSize: Dimensions.get('window').height * 0.024,
                }}>
                Breathing Exercise
              </Text>
              <Text
                style={{
                  fontSize: Dimensions.get('window').height * 0.015,
                  color: '#24242499',
                }}>
                Exercise for relief
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="star"
                  size={Dimensions.get('window').height * 0.027}
                  color="#f9c747"
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="star"
                  size={Dimensions.get('window').height * 0.027}
                  color="#f9c747"
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="star"
                  size={Dimensions.get('window').height * 0.027}
                  color="#f9c747"
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="star"
                  size={Dimensions.get('window').height * 0.027}
                  color="#f9c747"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
function YogaComponents({
  show,
  navigateController,
}: {
  show: boolean;
  navigateController: NativeStackNavigationProp<any, any>;
}) {
  return (
    <View
      style={{
        marginTop: Dimensions.get('window').height * 0.02,
        height: Dimensions.get('window').height * 0.15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          height: '100%',
          width: '80%',
          padding: Dimensions.get('window').width * 0.03,
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View>
          <Image
            resizeMode="cover"
            style={{
              width: Dimensions.get('window').width * 0.17,
              height: '100%',
              borderRadius: Dimensions.get('window').height * 0.01,
            }}
            source={require('../Assets/mask1.png')}
          />
        </View>
        <View
          style={{
            padding: Dimensions.get('window').height * 0.01,
          }}>
          <Text
            style={{
              color: '#24242499',
              fontSize: Dimensions.get('window').height * 0.019,
              fontWeight: '600',
            }}>
            Yoga for Wellness
          </Text>
          <Text
            style={{
              fontSize: Dimensions.get('window').height * 0.014,
              color: '#3939395c',
            }}>
            Exercise for relief Exercise for relief Exercise
          </Text>
          <Text
            style={{
              fontSize: Dimensions.get('window').height * 0.014,
              color: '#3939395c',
            }}>
            for relief.
          </Text>
          {show ? (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Icon
                name="star"
                size={Dimensions.get('window').height * 0.021}
                color={'#f9c747'}
              />
              <Icon
                name="star"
                size={Dimensions.get('window').height * 0.021}
                color={'#f9c747'}
              />
              <Icon
                name="star"
                size={Dimensions.get('window').height * 0.021}
                color={'#f9c747'}
              />
              <Icon
                name="star"
                size={Dimensions.get('window').height * 0.021}
                color={'#f9c747'}
              />
            </View>
          ) : null}
        </View>
        <Pressable
          onPress={() => {
            navigateController.navigate('Course');
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '7%',
            height: '30%',
            width: '30%',
            borderRadius: 30,
            backgroundColor: '#FBD87F',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: Dimensions.get('window').height * 0.018,
              color: '#7C7C7C',
            }}>
            Enroll
          </Text>
        </Pressable>

        {!show ? (
          <Pressable
            style={{
              position: 'absolute',
              top: '10%',
              right: '6%',
            }}
            onPress={() => {}}>
            <Icon name="radio" color={'#fbd87f'} size={25} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
function TunesFrames() {
  return (
    <View
      style={{
        flex: 3,
        margin: Dimensions.get('window').height * 0.01,
      }}>
      <View>
        <View
          style={{
            height: '85%',
            borderRadius: 15,
            width: '100%',
            backgroundColor: 'white',
          }}>
          <Icon
            name="musical-notes"
            color={'#FBD87F'}
            style={{
              position: 'absolute',
              top: '7%',
              right: '7%',
            }}
            size={Dimensions.get('window').height * 0.022}
          />
        </View>
        <View
          style={{
            margin: 0.01,
            height: '15%',
          }}>
          <Text
            style={{
              color: '#242424',
              fontSize: Dimensions.get('window').height * 0.013,
            }}>
            Time to Moon
          </Text>
          <Text
            style={{
              fontSize: Dimensions.get('window').height * 0.012,
              color: '#393939',
            }}>
            3 Audios
          </Text>
        </View>
      </View>
    </View>
  );
}
export default function MeditatePage({route, navigation}: Props) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
        }}>
        {/* @ts-ignore */}
        <MiddlewareScreen navigationProp={navigation.openDrawer}
          ImageType="Meditate"
          backgroundColor={'#ffff6436'}
          title="Meditate"
          titleColor={'#FBD87F'}>
          <ScrollView style={{}} horizontal>
            <HorizontalController />
            <HorizontalController />
            <HorizontalController />
            <HorizontalController />
            <HorizontalController />
          </ScrollView>
          {/* FIXME: */}
          <View
            style={{
              height: Dimensions.get('window').height * 1.58,
            }}>
            <View
              style={{
                // marginTop: Dimensions.get('window').height * 1,
              }}>
              <View
                style={{
                  padding: Dimensions.get('window').height * 0.02,
                }}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.026,
                    color: '#5B84B5',
                  }}>
                  Online Yoga Classes
                </Text>
              </View>

              <YogaComponents navigateController={navigation} show />

              <View
                style={{
                  padding: Dimensions.get('window').height * 0.02,
                }}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.027,
                    color: '#5B84B5',
                  }}>
                  Relax with Tunes
                </Text>
              </View>
              <View
                style={{
                  paddingLeft: Dimensions.get('window').width * 0.04,
                  paddingRight: Dimensions.get('window').width * 0.04,
                  height: Dimensions.get('window').height * 0.12,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <TunesFrames />
                <TunesFrames />
                <TunesFrames />
              </View>
              <View
                style={{
                  padding: Dimensions.get('window').height * 0.02,
                  marginTop: Dimensions.get('window').height * 0.01,
                }}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').height * 0.024,
                    color: '#5B84B5',
                  }}>
                  Live Classes
                </Text>
              </View>
              <YogaComponents navigateController={navigation} show={false} />
              <YogaComponents navigateController={navigation} show={false} />
              <YogaComponents navigateController={navigation} show={false} />
              <YogaComponents navigateController={navigation} show={false} />
              <YogaComponents navigateController={navigation} show={false} />
              <YogaComponents navigateController={navigation} show={false} />
            </View>
          </View>
        </MiddlewareScreen>
      </ScrollView>
    </View>
  );
}

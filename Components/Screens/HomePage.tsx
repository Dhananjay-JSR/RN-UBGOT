import { Image, Pressable, ScrollView, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { SvgUri } from "react-native-svg";
import Icon from 'react-native-vector-icons/Ionicons'
// @ts-ignore
import SVGImg from "../Assets/holder.svg"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<any, any>;
function HorizontalController({ type }: { type: "meditate" | "inspire" | "nurture" }) {
    return <View style={{
        height: Dimensions.get('window').height * 0.17,
        margin: Dimensions.get('window').height * 0.01,
        borderRadius: Dimensions.get('window').height * 0.01,
        width: Dimensions.get('window').width * 0.8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }}>

        <View style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{
                height: Dimensions.get('window').height * 0.18,
                width: Dimensions.get('window').height * 0.18,
                backgroundColor: 'transparent',
            }} source={type == "inspire" ? require("../Assets/inspire.png") : (type == "meditate" ? require("../Assets/girl.png") : (type == "nurture" ? require("../Assets/boy_running.png") : require("../Assets/boy_running.png")))} />
            <Text style={{
                position: 'absolute',
                bottom: 0
            }}>{type == "inspire" ? "Share your Stories" : (type == "meditate" ? "For Mental Health" : type == "nurture" ? "Your Daily Task " : null
            )}</Text>
        </View>
        <View style={{
            width: "100%",
            bottom: 0,
            height: '40%',
            position: 'absolute',
            opacity: 0.5,
            backgroundColor: type == "inspire" ? "#faadb2b0" : (type == "meditate" ? "#f9c747b0" : (type == "nurture" ? "#aadf8db0" : "white")),
            elevation: -1
        }}>
        </View>
    </View>
}

export default function HomePage({ route, navigation }: Props) {
    return <>
        <View style={{
            flex: 1,
        }}>
            <View style={{
                marginTop: Dimensions.get('window').height * 0.07,
                // flex:0.09,
                height: Dimensions.get('window').height * 0.06,
                paddingLeft: '5%',
                paddingRight: '5%',
                display: 'flex',
                flexDirection: "row",
                justifyContent: 'space-between'
            }}>
                <Pressable onPress={() => {
                    // @ts-ignore
                    navigation.openDrawer()
                }} style={{
                    height: '100%',
                    width: '15%',
                }}>
                    <Image resizeMode="center" source={require('../Assets/DrawerNavigation.png')} style={{
                        height: '100%',
                        width: '100%'
                    }} />
                </Pressable>
                <Pressable style={{
                    position: 'relative',
                    height: '100%',
                    width: Dimensions.get('window').height * 0.07,
                }} onPress={() => {
                    navigation.navigate("Fav")
                }}>
                    <Image resizeMode="contain" source={require('../Assets/Heart.png')} style={{
                        height: '100%',
                        width: '100%'
                    }} />
                </Pressable >
            </View>
            {/* Header Ends */}
            <View style={{
            }}>
                <View style={{
                    marginTop: Dimensions.get('window').height * 0.03,
                    paddingLeft: Dimensions.get('window').height * 0.03
                }}>
                    <Text style={{
                        fontSize: Dimensions.get('window').height * 0.03,
                        color: "#696969"
                    }}>
                        Hello,
                    </Text>
                    <Text style={{
                        fontSize: Dimensions.get('window').height * 0.05,
                        fontWeight: "500",
                        color: "#3E3E3E"
                    }}>
                        Mehul
                    </Text>
                </View>
            </View>
            {/* Hero Text Ends */}
            <View>
                <ScrollView horizontal>
                    <HorizontalController type="inspire" />
                    <HorizontalController type="meditate" />
                    <HorizontalController type="nurture" />
                </ScrollView>
            </View>
            <View style={{
                marginTop: Dimensions.get('window').height * 0.01,
                width: "100%",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: Dimensions.get('window').height * 0.03,
                    fontWeight: '600',
                    color: '#5B84B5'
                }}>
                    Meditate
                </Text>
            </View>
            <View style={{
                height: Dimensions.get('window').height * 0.03,
                padding: Dimensions.get('window').height * 0.01,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <View style={{
                    height: '100%',
                    marginLeft: Dimensions.get('window').height * 0.01,
                    marginRight: Dimensions.get('window').height * 0.01,
                    backgroundColor: '#FCC6CA',
                    width: Dimensions.get('window').width * 0.02,
                    borderRadius: Dimensions.get('window').height * 0.8
                }}>
                </View>
                <View style={{
                    height: '100%',
                    marginLeft: Dimensions.get('window').height * 0.01,
                    marginRight: Dimensions.get('window').height * 0.01,
                    backgroundColor: '#AADF8D',
                    width: Dimensions.get('window').width * 0.02,
                    borderRadius: Dimensions.get('window').height * 0.8
                }}>
                </View>
                <View style={{
                    height: '100%',
                    marginLeft: Dimensions.get('window').height * 0.01,
                    marginRight: Dimensions.get('window').height * 0.01,
                    backgroundColor: '#F8B17C',
                    width: Dimensions.get('window').width * 0.02,
                    borderRadius: Dimensions.get('window').height * 0.8
                }}>
                </View>
            </View>

            <View style={{
            }}>
                <Text style={{
                    fontSize: Dimensions.get('window').height * 0.03,
                    color: '#3E3E3E',
                    fontWeight: '600',
                    paddingLeft: Dimensions.get('window').height * 0.03,
                    marginTop: Dimensions.get('window').height * 0.01,
                    marginBottom: Dimensions.get('window').height * 0.01
                }}
                >
                    Recommendations
                </Text>
            </View>

            <View style={{
                height: Dimensions.get('window').height * 0.33,
            }}>
                <View style={{
                    height: '50%',
                    padding: Dimensions.get('window').height * 0.03,
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                }}>
                    <Pressable onPress={() => {

                    }}>
                        <Image resizeMode="cover" style={{
                            height: '100%',
                            width: Dimensions.get('window').width * 0.4,
                            borderRadius: 20,
                            margin: 10
                        }} source={require('../Assets/yoga.png')} />
                    </Pressable>
                    <Pressable onPress={() => {
                    }}>
                        <Image resizeMode="cover" style={{
                            height: '100%',
                            width: Dimensions.get('window').width * 0.4,
                            borderRadius: 20,
                            margin: 10
                        }} source={require('../Assets/yoga.png')} />
                    </Pressable>
                </View>
                <View style={{
                    height: '50%',
                    padding: Dimensions.get('window').height * 0.03,
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                }}>
                    <Pressable onPress={() => {

                    }}>
                        <Image resizeMode="cover" style={{
                            height: '100%',
                            width: Dimensions.get('window').width * 0.4,
                            borderRadius: 20,
                            margin: 10
                        }} source={require('../Assets/yoga.png')} />
                    </Pressable>
                    <Pressable onPress={() => {
                    }}>
                        <Image resizeMode="cover" style={{
                            height: '100%',
                            width: Dimensions.get('window').width * 0.4,
                            borderRadius: 20,
                            margin: 10
                        }} source={require('../Assets/yoga.png')} />
                    </Pressable>
                </View>
            </View>
            <View style={{
                marginTop: Dimensions.get('window').height * 0.007,
                height: Dimensions.get('window').height * 0.06,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    position: 'relative',
                    height: '100%',
                    width: '50%',
                    backgroundColor: '#3C6CA7',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => {

                    }} activeOpacity={0.6} style={{

                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: Dimensions.get('window').height * 0.017
                        }}>
                            Book a session with Therapist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.2} onPress={() => {
                    }} style={{
                        marginLeft: Dimensions.get('window').width * 0.5,
                        backgroundColor: '#FA634F',
                        height: '100%',
                        position: "absolute",
                        width: Dimensions.get('window').width * 0.10,
                        borderRadius: 8,
                        right: -50
                    }}>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

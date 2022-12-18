import { ColorValue, Image, Pressable, Text, View } from "react-native";
import MiddlewareScreen from "../Modules/MiddleWareScreen";
import Icon from 'react-native-vector-icons/Ionicons'

interface ComponentsProps {
    Text1: string,
    Text2: string,
    backgroundColor: ColorValue,
    profileColor: ColorValue,
    ContainerHeight: number,
    AvatarHeight: number,
    AvatarWidth: number,
    fontSize: number
}
function ComponentFrame(props: ComponentsProps) {
    return <>
        <View style={{
            position: 'relative',
            marginTop: 5,
            height: props.ContainerHeight,
            padding: 5,
            alignItems: 'center',
            borderRadius: 15,
            width: '100%',
            backgroundColor: props.backgroundColor
        }}>
            <View style={{
                marginTop: 10,
                marginRight: 40,
                display: 'flex',
                width: '100%',
                justifyContent: 'center',

                flexDirection: 'row'
            }}>
                <View style={{
                    height: props.AvatarHeight,
                    width: props.AvatarWidth,
                    borderRadius: 10,
                    backgroundColor: props.profileColor
                }}>
                </View>
                <View style={{
                    padding: 10,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: '#4B6C3A',
                        fontSize: props.fontSize,
                        fontWeight: '600'
                    }}>
                        {props.Text1}
                    </Text>
                    <Text style={{
                        color: '#7B7870'
                    }}>
                        {props.Text2}
                    </Text>
                </View>
            </View>
            <Pressable onPress={() => {

            }} style={{
                position: 'absolute',
                right: 15,
                top: 50
            }}>
                <Icon name="information-circle-outline" size={30} color={"#4b6c3a"} />
            </Pressable>
            <Pressable onPress={() => {

            }} style={{
                backgroundColor: '#4B6C3A',
                marginTop: 10,
                borderRadius: 5,
                height: 25,
                width: '90%',
                justifyContent: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: 'white',
                }}>
                    Explore
                </Text>
            </Pressable>
        </View>
    </>
}

function Component2(props: { text1: string, text2: string }) {
    return <><View style={{
        position: 'relative',
        marginTop: 10,
        borderRadius: 15,
        height: 115,
        backgroundColor: 'white',
        paddingLeft: 10,
        width: '100%'
    }}>
        <View style={{
            margin: 7,
            display: 'flex',
            width: '100%',
            height: '70%',
            flexDirection: 'row'
        }}>
            <View style={{
                backgroundColor: "#E5FADA",
                height: "75%",
                width: 60,
                borderRadius: 10,
            }}>

            </View>
            <View style={{
                padding: 10,

            }}>

                <Text style={{
                    fontSize: 16,
                    color: '#4B6C3A',

                }}>
                    {props.text1}
                </Text>
                <Text style={{
                    color: '#7B7870'
                }}>
                    {props.text2}
                </Text>
            </View>
        </View>
        <Pressable onPress={() => { }} style={{
            marginTop: -17,
            marginLeft: -5,
            height: 25,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: '#4B6C3A',
                height: '100%',
                width: '90%',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'white',
                    textAlign: 'center'
                }}>
                    Explore
                </Text>
            </View>
        </Pressable>
        <Pressable onPress={() => {

        }} style={{
            position: 'absolute',
            right: 15,
            top: 30
        }}>
            <Icon name="information-circle-outline" size={30} color={"#4b6c3a"} />
        </Pressable>
    </View></>
}


export default function NurturePage() {

    return <MiddlewareScreen title="Nurture" titleColor={'#85E551'} backgroundColor={'#e5fada'} ImageType={"Nurture"}>
        <View style={{
            height: '100%',
            width: '100%',
            alignItems: 'center'
        }}>
            <View style={{
                height: '100%',
                width: '90%'
            }}>
                <Text style={{
                    color: '#7B7870',
                    fontWeight: '500',
                    fontSize: 20
                }}>
                    Recently used
                </Text>
                <ComponentFrame AvatarHeight={100} AvatarWidth={100} ContainerHeight={160} fontSize={20} Text1={"Talk to Listener"} Text2={"Already Enrolled"} backgroundColor={"#88e6559e"} profileColor={"white"} />
                <View style={{
                    marginTop: 10
                }}>
                    <Text style={{
                        color: '#7B7870',
                        fontWeight: '500',
                        fontSize: 20
                    }}>
                        Start Now
                    </Text>
                    <View style={{
                        marginTop: 1
                    }}>
                        <Component2 text1="Talk to Councellor" text2="Not Enrolled" />
                        <Component2 text1="Talk to Nutritionist" text2="Not Enrolled" />
                    </View>
                </View>
            </View>
        </View>
    </MiddlewareScreen>

}
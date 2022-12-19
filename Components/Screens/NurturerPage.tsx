import { ColorValue, Dimensions, Image, Pressable, Text, View } from "react-native";
import MiddlewareScreen from "../Modules/MiddleWareScreen";
import Icon from 'react-native-vector-icons/Ionicons'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<any,any>;

interface ComponentsProps {
    Text1: string,
    Text2: string,
    backgroundColor: ColorValue,
    profileColor: ColorValue,
    ContainerHeight: number,
    AvatarHeight: string,
    AvatarWidth: string,
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
                    height: '100%',
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
                right: '7%',
                top: '40%'
            }}>
                <Icon name="information-circle-outline" size={30} color={"#4b6c3a"} />
            </Pressable>
            <Pressable onPress={() => {

            }} style={{
                backgroundColor: '#4B6C3A',
                marginTop: '1%',
                borderRadius: 5,
                height: '20%',
                width: '90%',
                justifyContent: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize:Dimensions.get('window').height*0.02
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
        marginTop: Dimensions.get('window').height*0.023,
        borderRadius: Dimensions.get('window').height*0.02,
        height: Dimensions.get('window').height*0.15,
        backgroundColor: 'white',
        paddingLeft: Dimensions.get('window').height*0.01,
        width: '100%'
    }}>
        <View style={{
            margin: '3%',
            display: 'flex',
            width: '100%',
            height: '70%',
            flexDirection: 'row'
        }}>
            <View style={{
                backgroundColor: "#E5FADA",
                height: "75%",
                width: Dimensions.get('window').height*0.07,
                borderRadius: 10,
            }}>

            </View>
            <View style={{
                padding: Dimensions.get('window').height*0.01,

            }}>

                <Text style={{
                    fontSize: Dimensions.get('window').height*0.023,
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
        <Pressable onPress={() => { 
        
        }} style={{
            marginTop: '-5%',
            marginLeft: -5,
            height: '23%',
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
                    textAlign: 'center',
                    fontSize:Dimensions.get('window').height*0.02
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


export default function NurturePage({ route, navigation }: Props) {
    // @ts-ignore
    return <MiddlewareScreen navigationProp={navigation.openDrawer}title="Nurture" titleColor={'#85E551'} backgroundColor={'#e5fada'} ImageType={"Nurture"}>
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
                    fontSize: Dimensions.get('window').height*0.03
                }}>
                    Recently used
                </Text>
                <ComponentFrame AvatarHeight={'100%'} AvatarWidth={'23%'} ContainerHeight={Dimensions.get('window').height*0.17} fontSize={Dimensions.get('window').height*0.024} Text1={"Talk to Listener"} Text2={"Already Enrolled"} backgroundColor={"#88e6559e"} profileColor={"white"} />
                <View style={{
                    marginTop: Dimensions.get('window').height*0.02
                }}>
                    <Text style={{
                        color: '#7B7870',
                        fontWeight: '500',
                        fontSize: Dimensions.get('window').height*0.03
                    }}>
                        Start Now
                    </Text>
                    <View style={{
                        marginTop: Dimensions.get('window').height*0.01
                    }}>
                        <Component2 text1="Talk to Councellor" text2="Not Enrolled" />
                        <Component2 text1="Talk to Nutritionist" text2="Not Enrolled" />
                    </View>
                </View>
            </View>
        </View>
    </MiddlewareScreen>

}
import React from "react";
import { ScrollView, Button, Text, View, Pressable, Dimensions,Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import MiddlewareScreen from "../Modules/MiddleWareScreen";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<any,any>;
interface PostComponentsProps {
    name: string,
    isLiked: boolean
}
function PostComponent(props: PostComponentsProps) {
    const [isLiked, setLiked] = React.useState<boolean>(props.isLiked)
    return <><View style={{
        marginBottom: '5%',
        height: Dimensions.get('window').height*0.42,
        width: '90%'
    }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>

            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <View style={{
                    height: Dimensions.get('window').height*0.06,
                    width: Dimensions.get('window').height*0.06,
                    backgroundColor: "#D9D9D9",
                    borderRadius: Dimensions.get('window').height*0.02,
                }}>
                </View>
                <View style={{
                    height: Dimensions.get('window').height*0.06,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: "#787878",
                        padding: '2%'
                    }}>{props.name}</Text>
                </View>
            </View>
            <Pressable onPress={() => { }} style={{
                height: Dimensions.get('window').height*0.06    ,
                width: Dimensions.get('window').height*0.06,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    height: 7, width: 7,
                    borderRadius: 20,
                    margin: 2,
                    backgroundColor: "#F8AC7A"
                }}></View>
                <View style={{
                    height: 7, width: 7,
                    borderRadius: 20,
                    margin: 2,
                    backgroundColor: "#F8AC7A"
                }}></View>
                <View style={{
                    height: 7, width: 7,
                    borderRadius: 20,
                    margin: 2,
                    backgroundColor: "#F8AC7A"
                }}></View>

            </Pressable>
        </View>
        <View style={{
            marginTop: 10,
            backgroundColor: 'white',
            height: '70%'
        }}>


        </View>
        <View style={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 5,
            marginRight: 5
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Pressable onPress={() => {
                    setLiked(prev => !prev)

                }}>
                    <Icon name={isLiked ? "heart" : "heart-outline"} color={isLiked ? "#f9595f" : "black"} size={Dimensions.get('window').height*0.04} />
                </Pressable>
                <Pressable onPress={() => { }} style={{
                    marginLeft: 15
                }}>
                    <Icon name="chatbubble-outline" size={Dimensions.get('window').height*0.04} />
                </Pressable>

            </View>
            <Pressable>
                <Icon name="bookmark-outline" size={Dimensions.get('window').height*0.04} />
            </Pressable>

        </View>
    </View></>
}

export default function InspirePage({ route, navigation }: Props) {
    return <View style={{
        position: 'relative',
        height: '100%',
        width: '100%'
        
    }}>
        {/* @ts-ignore */}
        <MiddlewareScreen navigationProp={navigation.openDrawer} ImageType="Inspire" backgroundColor={"#fcc2c636"} title="Inspire" titleColor={"#FCC2C6"} >
            <View>
                <ScrollView style={{
                    width:'100%',
                }} contentContainerStyle={{
                    justifyContent:'center',
                    alignItems:'center',
                }}>

            <PostComponent name="Mehul" isLiked />
            <PostComponent name="Mehul" isLiked={false} />
                <PostComponent name="Mehul" isLiked />
                <PostComponent name="Mehul" isLiked />
                <PostComponent name="Mehul" isLiked={false} />
                </ScrollView>
            </View>
        </MiddlewareScreen>
        <Pressable onPress={()=>{
        }} style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            width:Dimensions.get('window').height*0.09,
            height:Dimensions.get('window').height*0.09,
            backgroundColor:'#9C5DA3',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:Dimensions.get('window').height*0.3
        }}>
            <Image source={require('../Assets/Add.png')} resizeMode="contain" style={{
                // width:Dimensions.get('window').height*0.09,
                // height:Dimensions.get('window').height*0.09
                width:'80%',
                height:'80%'
            }}/>
            {/* <Icon name="add-circle" size={60} color="#9C5DA3" /> */}
        </Pressable >
    </View>
}
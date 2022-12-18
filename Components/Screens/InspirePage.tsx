import React from "react";
import { ScrollView, Button, Text, View, Pressable } from "react-native";
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
        marginBottom: 20,
        height: 400,
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
                    height: 50,
                    width: 50,
                    backgroundColor: "#D9D9D9",
                    borderRadius: 20,
                }}>

                </View>
                <View style={{
                    height: 50,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: "#787878",
                        padding: 10
                    }}>{props.name}</Text>
                </View>
            </View>
            <Pressable onPress={() => { }} style={{
                height: 50,
                width: 50,
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
            height: 290
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
                    <Icon name={isLiked ? "heart" : "heart-outline"} color={isLiked ? "#f9595f" : "black"} size={35} />
                </Pressable>
                <Pressable onPress={() => { }} style={{
                    marginLeft: 15
                }}>
                    <Icon name="chatbubble-outline" size={33} />
                </Pressable>

            </View>
            <Pressable>
                <Icon name="bookmark-outline" size={33} />
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
            <ScrollView style={{
                flex: 1,
                width: '100%',
                height: '100%',

            }} contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <PostComponent name="Mehul" isLiked />
                <PostComponent name="Mehul" isLiked={false} />
                <PostComponent name="Mehul" isLiked />
                <PostComponent name="Mehul" isLiked />
                <PostComponent name="Mehul" isLiked={false} />
            </ScrollView>
        </MiddlewareScreen>
        <View style={{
            position: 'absolute',
            bottom: 20,
            right: 20
        }}>
            <Icon name="add-circle" size={60} color="#9C5DA3" />
        </View>
    </View>
}
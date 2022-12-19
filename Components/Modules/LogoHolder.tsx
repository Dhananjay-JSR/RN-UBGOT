import { View,StyleSheet, Text, Dimensions } from "react-native";

export default function LogoHolder(props:{height:string,width:string}){
    return <><View style={{
        backgroundColor:'#D9D9D9',
        height:props.height,
        width:props.width,
        borderRadius:20,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Text style={style.Text}>Logo</Text>
    </View>
    </>
}

const style = StyleSheet.create({
    Text:{
        color:'#787878',
        fontSize:Dimensions.get('window').height*0.04,
        fontWeight: "500"
    }
})
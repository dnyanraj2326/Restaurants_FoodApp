import React ,{useState} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const HeaderTab = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View >
            <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                <HeaderButton
                    text="Delivery"
                    bgColor="black"
                    btnColor="#fff"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab} />
                <HeaderButton
                    text="Pickup"
                    bgColor="#fff"
                    btnColor="black"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab} />
            </View>
            <View style={{ flexDirection:'row', justifyContent:'space-between',alignItems:'center',paddingVertical:20}}>
                <View>
                    <Text style={{fontSize:12,fontWeight:'bold',color:'#C8C6C6'}}>Lane no 2, Kharadi Pune</Text>
                    <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Hey Mayur!</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" }} style={{width:40,height:40,borderRadius:100}}/>
                </TouchableOpacity>
            </View>
        </View>
        
        
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black" : "#fff",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius:30
    }} onPress={() => props.setActiveTab(props.text)}>
        <Text style={{
            color: props.activeTab === props.text ? "#fff" :"black",
            fontSize: 15,
            fontWeight:'900'
        }}>
        {props.text}</Text>
    </TouchableOpacity>
    )



export default HeaderTab

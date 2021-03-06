import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = (props) => {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    // const userID = props.extraData.id

    const navigation = useNavigation();

    const onProfilePress = () => {
        navigation.navigate('Profile')
        // navigation.navigate('Profile',{ user: userID })
    }

    return (
        <View style={{ flex:1, flexDirection:'column' }}>
            <View style={{ flex:1, backgroundColor:'#FFFFFF' }}>
                <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
                    <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-start", backgroundColor:'white' }}>
                        <TouchableOpacity>
                            <Text>UP_Quest</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex:2, flexDirection:'row', justifyContent:"center", backgroundColor:'white' }}>
                        <View>
                            <Text>Home</Text>
                        </View>
                    </View>
                    <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-end", backgroundColor:'white' }}>
                        <TouchableOpacity onPress={onProfilePress}>
                            <Text>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
                <View style={{flex:1, alignItems: 'center', marginTop: 20}}>
                    <View style={{ backgroundColor:'gray', borderRadius: 15, width: '90%', height: '90px' , alignItems: 'center', margin: 10 }}>
                        test
                    </View>
                </View>
                <View style={{ flex:2, backgroundColor:'#CCBAFF' }}>
                    <View style={{ alignItems: 'center', margin: 5, marginTop: 55 }}>
                        <Image
                            style={{ width:'300px', height:'250px', borderWidth:'10' }}
                            source={require('../assets/icon.png')}
                        />
                    </View>

                </View>
                <View style={{ flex:3, backgroundColor:'orange' }}>
                    <View style={{ flex:1, flexDirection:'column', alignItems:'center', backgroundColor:'white' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Quest')} >
                            <View style={{ width:'150px', alignContent:'center'}}>
                                <Button color="#AA67FF" title='งานจิตอาสา'/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex:5, backgroundColor:'white' }}>
                        <View style={{ flex:1, backgroundColor:'white' }}>
                            <View style={{ flex:1, flexDirection:'row' }}>
                                <View style={{ flex:1, backgroundColor:'white'}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('EducationReport')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15  }}>
                                            <Image
                                                style={{ width:'50px', height:'50px', borderWidth:'10' }}
                                                source={{uri:'https://www.flaticon.com/svg/vstatic/svg/4151/4151397.svg?token=exp=1612363481~hmac=e65f2bd77bca5a799de0fdf1add55bd3'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                รายงาน
                                            </Text>
                                            <Text>
                                                ผลการเรียน
                                            </Text>
                                        </View>
                                            
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex:1, backgroundColor:'white' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('EducationReport')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15  }}>
                                            <Image
                                                style={{ width:'50px', height:'50px', borderWidth:'10' }}
                                                source={{uri:'https://www.flaticon.com/svg/vstatic/svg/3281/3281289.svg?token=exp=1612363611~hmac=57de7ef018d309110a385336236d485d'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                งานจิตอาสา
                                            </Text>
                                            <Text>
                                                ที่ลงทะเบียน
                                            </Text>
                                        </View>           
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex:1, backgroundColor:'white' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('EducationReport')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15  }}>
                                            <Image
                                                style={{ width:'50px', height:'50px', borderWidth:'10' }}
                                                source={{uri:'https://www.flaticon.com/svg/vstatic/svg/2145/2145230.svg?token=exp=1612363711~hmac=360920148d12c034646e8091b754791a'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                ประวัติ
                                            </Text>
                                            <Text>
                                                การได้รับทุน
                                            </Text>
                                        </View>           
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex:1, backgroundColor:'blue' }}>
                            <View style={{ flex:1, flexDirection:'row' }}>
                                <View style={{ flex:1, backgroundColor:'white' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('EducationReport')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15  }}>
                                            <Image
                                                style={{ width:'50px', height:'50px', borderWidth:'10' }}
                                                source={{uri:'https://www.flaticon.com/svg/vstatic/svg/2643/2643268.svg?token=exp=1612363799~hmac=a37299298da5246d3948584b3e612e49'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                รายรับ
                                            </Text>
                                            <Text>
                                                รายจ่าย
                                            </Text>
                                        </View>           
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex:1, backgroundColor:'white' }}>
                                     <TouchableOpacity onPress={() => navigation.navigate('EducationReport')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15  }}>
                                            <Image
                                                style={{ width:'50px', height:'50px', borderWidth:'10' }}
                                                source={{uri:'https://www.flaticon.com/svg/vstatic/svg/4150/4150831.svg?token=exp=1612363912~hmac=5cee3e1e6edb7d561528ac2df9fdda53'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                เงื่อนไขทุน
                                            </Text>
                                        </View>           
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex:1, backgroundColor:'white' }}>
                                     <TouchableOpacity onPress={() => navigation.navigate('EducationReport')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15 }}>
                                            <Image
                                                style={{ width:'50px', height:'50px', borderWidth:'10' }}
                                                source={{uri:'https://www.flaticon.com/svg/vstatic/svg/1412/1412282.svg?token=exp=1612363985~hmac=e38fc25f34e6d31dd3021944438d2669'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                บทบาทหน้าที่
                                            </Text>
                                            <Text>
                                                ของนิสิตทุน
                                            </Text>
                                        </View>           
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;
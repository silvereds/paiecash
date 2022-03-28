import React from 'react'
import { 
    View, 
    Text , 
    ImageBackground,
    TouchableOpacity,
    Image,
    TouchableHighlight,
    ScrollView

} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Store from './Components/store'
import styles from './styles'
const Header = ({navigation})=>(
    <View 
        style={styles.header}
    >
        <TouchableOpacity
            style={styles.buttonBack}
            onPress={()=>navigation.goBack()}
        >
            <Icon name='arrow-left' size={20} color='white'/>
        </TouchableOpacity>
        
        <Text style={{color:COLORS.white,...FONTS.h2,marginLeft:100}}>
            paris fc 
        </Text>

    </View>
)
const Market = ({navigation})=>{
    return(
        <ScrollView>
            <ImageBackground source={require('../../../assets/bg4.png')}
                style={{
                    height:200
                }}
            >
                <Header navigation={navigation}/>
            </ImageBackground>
            <View
                style={styles.mainView}
            >
                <View 
                    style={styles.affiche}
                >
                    <View
                        style={{
                            padding:SIZES.base,
                            alignItems:'center',
                            width:SIZES.width*0.8,
                            
                        }}
                    >
                        <Text style={{color:COLORS.darkGray,...FONTS.h3}}>D1 Arkema 18ème journée </Text>
                        <Text style={{color:COLORS.primary2,...FONTS.body2}}> 3 AVRIL 2022 à 12h45</Text>
                        <Text style={{color:COLORS.darkGray2,...FONTS.body3}}> Stade Charléty</Text>
                    </View>
                    <View style={styles.vs}>
                        <View style={{alignItems:'center',}}>
                            <Image 
                                source={require('../../../assets/Paris-FC.png')}
                                resizeMode='contain'
                                style={{
                                    height:70,
                                    width:70
                                }}
                            />
                            <Text style={{...FONTS.h2}}> Paris FC </Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{...FONTS.h2}}> VS </Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Image 
                                source={require('../../../assets/psg.png')}
                                resizeMode='contain'
                                style={{
                                    height:70,
                                    width:70
                                }}
                            />
                            <Text style={{...FONTS.h2}}> PSG </Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={{...FONTS.h2,marginVertical:SIZES.base}}> Plan Tarif 5 € </Text>
                        <TouchableHighlight 
                            style={styles.reservationButton}
                            onPress={()=>{}}
                        >
                            <Text style={{color:COLORS.white,...FONTS.body4}}>
                                reserver via paieCash maintenant
                            </Text>
                        </TouchableHighlight>
                    </View>
            
                </View>
                <Store/>
            </View>
        </ScrollView>
    )
}
export default Market
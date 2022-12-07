import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.junatImg}
                source={require('../../pictures/JunatLogo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3C7D3E',
        paddingTop: 50,
        alignItems: 'center',
    },
    junatImg: {
        width: 200,
        resizeMode: 'contain',
    },
})


export default Header;
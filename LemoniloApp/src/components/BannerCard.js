import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function BannerCard() {
  return (
    <View style={ styles.contentContainer}>
      <View style={[styles.newTaskContainer]}>
          <View style={{ width: '100%'}}>
              <Image source={require('../assets/sample_promo_1.jpeg')} style={{ maxWidth: '100%', height: 140 }} />
          </View>                         
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
      height: 200,
      padding: 20,
      top: 20
  },
  newTaskContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      padding: 20,
      backgroundColor: '#ffffff70',
      borderRadius: 10,
      shadowRadius: 10,
      shadowOpacity: 0.6,
      shadowOffset: {
        width: 0,
        height: 4
      }
  },
  
});


export default BannerCard
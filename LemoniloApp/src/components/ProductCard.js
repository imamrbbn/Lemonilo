import React, { useEffect } from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

import { FETCH_PRODUCTS } from '../store/actions/ProductAction'

function ProductCard() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.ProductReducer.products)
  // console.log(products,'check')

  useEffect(() => {
    dispatch(FETCH_PRODUCTS())
  }, [dispatch])

  return (
    <>
    <View style={styles.headContent}>
      <Text style={styles.sectionHeadTitle}>Products</Text>
      <Image source={require('../assets/snack.png')} style={styles.headIcon} />
    </View>
    <View style={ styles.contentContainer}>
      <Text style={styles.subTitle}>Promo</Text>
      <ScrollView contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView } horizontal={true}>
        <View style={styles.newTaskContainer}>
        {products.map((product) => {
          let price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          if (product.id % 2 == 0) {
            return (
              <TouchableOpacity style={styles.card} key={product.id}>
                <Image source={{uri: product.image_url}}
                  style={styles.icon} />
                <Text style={styles.sectionTitle}>{product.title}</Text>
                <Text style={styles.sectionDescription}>Rp {price}</Text>
              </TouchableOpacity>      
            )
          }
        })}
        </View>
      </ScrollView>
      <Text style={{...styles.subTitle, marginTop: 20}}>Best Seller</Text>
      <ScrollView contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView } horizontal={true}>
        <View style={styles.newTaskContainer}>
        {products.map((product) => {
          let price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          if (product.id % 2 !== 0) {
            return (
              <TouchableOpacity style={styles.card} key={product.id} >
                <Image source={{uri: product.image_url}}
                  style={styles.icon} />
                <Text style={styles.sectionTitle}>{product.title}</Text>
                <Text style={styles.sectionDescription}>Rp {price}</Text>
              </TouchableOpacity>      
            )
          }
        })}
        </View>
      </ScrollView>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
      padding: 10,
      backgroundColor: '#27ae60',
      top: 10,
      width: '100%',
      
  },
  newTaskContainer: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 5,
      shadowRadius: 10,
      shadowOpacity: 0.6,
      shadowOffset: {
        width: 0,
        height: 4
      }
  },
  card: {
    width: 130,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    margin: 5,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    maxWidth: '100%', 
    height: 70,
    width: 70
  },
  headContent : {
    flexDirection: 'row',
  },
  headIcon: {
    maxWidth: '100%', 
    height: 25,
    width: 25,
    tintColor:'#e91e63',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft:'auto',
    marginRight: 20
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#e91e63',
    width: '80%',
    textAlign: 'center',
    marginLeft:'auto',
    marginRight:'auto'
  },
  sectionDescription: {
    fontWeight: '400',
    color: 'black'
  },
  sectionHeadTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e91e63',
    marginLeft: 10
  },
  
});


export default ProductCard
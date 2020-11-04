import React, { useEffect } from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
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
    <Text style={styles.sectionHeadTitle}>Products</Text>
    <View style={ styles.contentContainer}>
      <ScrollView contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView } horizontal={true}>
        <View style={styles.newTaskContainer}>
        {products.map((product) => {
          if (product.id % 2 == 0) {
            return (
              <View style={styles.card} key={product.id}>
                <Image source={{uri: product.image_url}}
                  style={styles.icon} />
                <Text style={styles.sectionTitle}>{product.title}</Text>
                <Text style={styles.sectionDescription}>Rp {product.price}</Text>
              </View>      
            )
          }
        })}
        </View>
      </ScrollView>

      <ScrollView contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView } horizontal={true}>
        <View style={styles.newTaskContainer}>
        {products.map((product) => {
          if (product.id % 2 !== 0) {
            return (
              <View style={styles.card} key={product.id} >
                <Image source={{uri: product.image_url}}
                  style={styles.icon} />
                <Text style={styles.sectionTitle}>{product.title}</Text>
                <Text style={styles.sectionDescription}>Rp {product.price}</Text>
              </View>      
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
      shadowRadius: 10,
      shadowOpacity: 0.6,
      marginTop: 5,
      shadowOffset: {
        width: 0,
        height: 4
      }
  },
  card: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    margin: 5,
    
    alignItems: 'center',
  },
  icon: {
    maxWidth: '100%', 
    height: 70,
    width: 70
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
  sectionDescription: {
    fontWeight: '400',
    color: 'black'
  },
  sectionHeadTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginLeft: 10
  },
  
});


export default ProductCard
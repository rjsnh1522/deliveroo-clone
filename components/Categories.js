import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { 
    BurgerImage, LimaImage, 
    PizzaImage, SaladImage, 
    SushiImage, SweetsImage } from '../assets/images'

const Categories = () => {
  return (
    <ScrollView className="" 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}
    horizontal 
    showsVerticalScrollIndicator={false}>
      <CategoryCard imgUrl={SushiImage} title='Sushi' />
      <CategoryCard imgUrl={BurgerImage} title='Burger' />
      <CategoryCard imgUrl={LimaImage} title='Lima' />
      <CategoryCard imgUrl={SweetsImage} title='Sweets' />
      <CategoryCard imgUrl={PizzaImage} title='Pizza' />
      <CategoryCard imgUrl={SaladImage} title='Salad' />
    </ScrollView>
  )
}

export default Categories;
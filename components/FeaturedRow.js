import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { BurgerImage, SaladImage, SushiImage, SweetsImage } from '../assets/images'
import RestaurantsCard from './RestaurantsCard'

const FeaturedRow = ({id, title, description, featuredCategory}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb"/>
      </View>

      <Text className="text-xs text-gray-500 px-4" >{description}</Text>
      <ScrollView 
        horizontal
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        showHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurants card */}
        <RestaurantsCard 
            id={123}
            imgUrl={BurgerImage}
            title='Restaa'
            rating={4.5}
            genre='ree'
            address='Dhanbad'
            short_description='asdas'
            dishes={[]}
            long={89.99}
            lat={76.34} />

        <RestaurantsCard 
                    id={123}
                    imgUrl={SaladImage}
                    title='Restaa'
                    rating={4.5}
                    genre='ree'
                    address='Dhanbad'
                    short_description='asdas'
                    dishes={[]}
                    long={89.99}
                    lat={76.34} />


        <RestaurantsCard 
                    id={123}
                    imgUrl={SushiImage}
                    title='Restaa'
                    rating={4.5}
                    genre='ree'
                    address='Dhanbad'
                    short_description='asdas'
                    dishes={[]}
                    long={89.99}
                    lat={76.34} />


        <RestaurantsCard 
                    id={123}
                    imgUrl={SweetsImage}
                    title='Restaa'
                    rating={4.5}
                    genre='ree'
                    address='Dhanbad'
                    short_description='asdas'
                    dishes={[]}
                    long={89.99}
                    lat={76.34} />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow
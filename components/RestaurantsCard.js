import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'


const RestaurantsCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long, 
    lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={imgUrl} className="h-64 w-64 rounded-sm"/>
      <View className="px-3 pb-4">
        <Text className="font-bold text text-lg pt-2"> {title} </Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon opacity={0.5} size={22}/>
            <Text className="text-green-500">{rating}</Text>
                <Text>{'\u26AC'}</Text>
            <Text>{genre}</Text>
        </View>
        <View>
            <Text className="text-xs text-gray-500">Nearby {'\u26AC'} {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantsCard
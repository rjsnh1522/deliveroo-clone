import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Testing",
            headerShown: false,
        });
    }, []);


  return (
    <SafeAreaView className="bg-white mt-1">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-2 px-1 justify-between">
            <View className="flex flex-row items-center justify-between">
                <Image source={{ 
                    uri:"https://links.papareact.com/wru"
                }} className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                /> 

        
                    <View className=" flex items-start ml-2">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                        <Text className="font-bold text-xl flex items-center justify-between">
                            Current Location
                            <ChevronDownIcon size={20} color="#00ccbb" />
                        </Text>
                    </View>
            </View>
            <View>
                <UserIcon size={35} color="#00ccbb"/>
            </View>
        </View>

        {/* Search */}
        <View className='flex space-x-2 pb-2 p-2 justify-between flex-row items-center mx-2 flex-1'>
            <View className='bg-gray-200 p-2 flex-row w-4/5'>
                <MagnifyingGlassIcon color='gray' size={20} className=""/>
                <TextInput 
                placeholder='Restaurants and cuisines' 
                keyboardType='default' className="w-full px-1 outline-none border-none outline-transparent"/>
            </View>
            <View className="w-1/5 items-end">
                <AdjustmentsVerticalIcon color="#00ccbb"/>
            </View>
        </View>
        
        {/* {Body} */}
        <ScrollView className="bg-gray-100 px-1">
            {/* {Categories} */}

            <Categories />
            {/* Featured Rows */}
            <FeaturedRow 
                id='123'
                title="Featured"
                description="Paid placements from out partners"
                featuredCategory="category"
            />

            <FeaturedRow 
                id='124'
                title="Tasty Discounts"
                description="Everyone's been enjoying these juicy discounts!"
                featuredCategory="discounts"
            />

            <FeaturedRow 
                id='125'
                title="Offers near you!"
                description="Why not support your local resturants tonight!"
                featuredCategory="offers"
            />
        </ScrollView>

      
    </SafeAreaView>
  )
}


export default HomeScreen;

import React from 'react'
import { View, ScrollView } from 'react-native'
import Slider from "../compoenents/Slider";
import {Heading, Input, Box, HStack, Text, VStack, Icon,Image, } from "native-base"
import MaterialIcons from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";


const HomeScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <Box px="2" mt="3" py="6" backgroundColor="#fff6fb">
            <Text fontSize="30" fontWeight="semibold">Instamart</Text>
            <Box mt="3">
                <VStack>
                    <VStack w="100%" space={5} alignSelf="center">
                        <Input  
                            placeholder="Search for restaurants, item or more" width="100%" 
                            py="3" px="3" fontSize="14" 
                            backgroundColor="#fff"
                            borderRadius="2"
                            shadow={10}
                            // InputLeftElement={<Icon m="2" ml="3" size="6" color="#ff748c" as={<MaterialIcons name="search" />} />} 
                            InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" 
                            as={<MaterialIcons name="search" />} />}    
                        />
                    </VStack>
                </VStack>
            </Box>
        </Box>
        <Box px="4">
            <Image
                // size={130} 
                // borderRadius={10} 
                width="100%"
                resizeMode="contain"
                source={require(`../images/m.jpeg`)} 
                alt="Alternate Text" />
        </Box>
        <Box px="4">
            <Text fontWeight={"semibold"} fontSize="17">Shop by category</Text>
            <HStack alignItems="center" justifyContent="space-around">
                <VStack justifyContent="center">
                    <Image mt="2" 
                        size={70} 
                        source={require(`../images/c.jpeg`)} 
                        alt="Alternate Text" />
                    <Text textAlign="center" color="#999">Daily, Bread</Text>
                </VStack>
                <VStack justifyContent="center">
                <Image mt="2" 
                        size={70} 
                        source={require(`../images/c.jpeg`)} 
                        alt="Alternate Text" />
                    <Text textAlign="center" color="#999">Daily, Bread</Text>
                </VStack>
                <VStack justifyContent="center">
                <Image mt="2" 
                        size={70} 
                        source={require(`../images/c.jpeg`)} 
                        alt="Alternate Text" />
                    <Text textAlign="center" color="#999">Daily, Bread</Text>
                </VStack>
                <VStack justifyContent="center">
                <Image mt="2" 
                        size={70} 
                        source={require(`../images/c.jpeg`)} 
                        alt="Alternate Text" />
                    <Text textAlign="center" color="#999">Daily, Bread</Text>
                </VStack>
            </HStack>
            <HStack alignItems="center" justifyContent="space-around"> 

                <VStack justifyContent="center" >
                <Image mt="2" 
                        size={70} 
                        source={require(`../images/c.jpeg`)} 
                        alt="Alternate Text" />
                    <Text textAlign="center" color="#999">Daily, Bread</Text>
                </VStack>
                <VStack justifyContent="center" >
                <Image mt="2" 
                        size={70} 
                        source={require(`../images/c.jpeg`)} 
                        alt="Alternate Text" />
                    <Text textAlign="center" color="#999">Daily, Bread</Text>
                </VStack>
                <VStack justifyContent="center" >
                <Image mt="2" 
                        size={70} 
                        source={require(`../images/c.jpeg`)} 
                        alt="Alternate Text" />
                    <Text textAlign="center" color="#999">Daily, Bread</Text>
                </VStack>
                <VStack justifyContent="center" >
                    <Image mt="2" 
                        size={70} 
                        source={require(`../images/c.jpeg`)} 
                        alt="Alternate Text" />
                    <Text textAlign="center" color="#999">Daily, Bread</Text>
                </VStack>
            </HStack>
        </Box>
        <Box mt="4" px="4" py="3" backgroundColor="#fff">
            <Text fontWeight={"semibold"} fontSize="17">Must try this week</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Box mr="5">
                        <Image
                            size={"2xl"} 
                            borderRadius={5} 
                            // width="100%"
                            resizeMode="contain"
                            source={require(`../images/ll.jpeg`)} 
                            alt="Alternate Text" />
                    </Box>
                    <Box mr="5">
                        <Image
                            size={"2xl"} 
                            borderRadius={5} 
                            // width="100%"
                            resizeMode="contain"
                            source={require(`../images/ll.jpeg`)} 
                            alt="Alternate Text" />
                    </Box>
                    <Box mr="5">
                        <Image
                            size={"2xl"} 
                            borderRadius={5} 
                            // width="100%"
                            resizeMode="contain"
                            source={require(`../images/ll.jpeg`)} 
                            alt="Alternate Text" />
                    </Box>
                    <Box mr="5">
                        <Image
                            size={"2xl"} 
                            borderRadius={5} 
                            // width="100%"
                            resizeMode="contain"
                            source={require(`../images/ll.jpeg`)} 
                            alt="Alternate Text" />
                    </Box>
                    <Box mr="5">
                        <Image
                            size={"2xl"} 
                            borderRadius={5} 
                            // width="100%"
                            resizeMode="contain"
                            source={require(`../images/ll.jpeg`)} 
                            alt="Alternate Text" />
                    </Box>
                    <Box mr="5">
                        <Image
                            size={"2xl"} 
                            borderRadius={5} 
                            // width="100%"
                            resizeMode="contain"
                            source={require(`../images/ll.jpeg`)} 
                            alt="Alternate Text" />
                    </Box>
            </ScrollView>
            
        </Box>
        <Box px="4">
                <Text fontWeight={"semibold"} fontSize="17" mb="3">In focus Today</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                // width="100%"
                                resizeMode="stretch"
                                source={require(`../images/jj.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                // width="100%"
                                resizeMode="stretch"
                                source={require(`../images/jj.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                // width="100%"
                                resizeMode="stretch"
                                source={require(`../images/jj.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                // width="100%"
                                resizeMode="stretch"
                                source={require(`../images/jj.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                // width="100%"
                                resizeMode="stretch"
                                source={require(`../images/jj.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                // width="100%"
                                resizeMode="stretch"
                                source={require(`../images/jj.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                </ScrollView>
        </Box>
        <Box mt="4" px="4" py="3" backgroundColor="#fff">
                <Text fontWeight={"semibold"} fontSize="17" mb="3">Curated for your needs</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                // width="100%"
                                height="450"
                                resizeMode="stretch"
                                source={require(`../images/bb.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                height="450"
                                resizeMode="stretch"
                                source={require(`../images/bb.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                height="450"
                                resizeMode="stretch"
                                source={require(`../images/bb.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                height="450"
                                resizeMode="stretch"
                                source={require(`../images/bb.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                height="450"
                                resizeMode="stretch"
                                source={require(`../images/bb.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                height="450"
                                resizeMode="stretch"
                                source={require(`../images/bb.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                </ScrollView>
        </Box>
        <Box mt="4" px="4" py="3" backgroundColor="#fff">
            <Text fontWeight={"semibold"} fontSize="17" mb="3">Household Favourites</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5}
                                height="300"
                                resizeMode="stretch"
                                source={require(`../images/l.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                height="300"
                                resizeMode="stretch"
                                source={require(`../images/l.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                height="300"
                                resizeMode="stretch"
                                source={require(`../images/l.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                height="300"
                                resizeMode="stretch"
                                source={require(`../images/l.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                height="300"
                                resizeMode="stretch"
                                source={require(`../images/l.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box mr="5">
                            <Image
                                size={"2xl"} 
                                borderRadius={5} 
                                height="300"
                                resizeMode="stretch"
                                source={require(`../images/l.jpeg`)} 
                                alt="Alternate Text" />
                        </Box>
                </ScrollView>
        
        </Box>
    </ScrollView>
    )
}

export default HomeScreen

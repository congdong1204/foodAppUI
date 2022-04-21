import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../assets/colors/colors'
import categoriesData from '../assets/data/categoriesData'
import popularData from '../assets/data/popularData'

Feather.loadFont()
MaterialCommunityIcons.loadFont()

const Home = props => {
    const renderCategoryItem = ({item}) => {
        return (
            <View style={[
                    styles.categoryItemWrapper,
                    {
                        backgroundColor: item.selected ? colors.primary : 'white',
                        marginLeft: item.id == 1 ? 20 : 0
                    }
                ]}
            >
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[
                        styles.categorySelectWrapper,
                        {
                            backgroundColor: item.selected ? 'white' : colors.secondary
                        }
                    ]}
                >
                    <Feather
                        name='chevron-right'
                        size={10}
                        style={styles.categorySelectIcon}
                        color={item.selected ? 'black' : 'white'}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Header */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image
                            source={require('../assets/images/profile.png')}
                            style={styles.profileImage }
                        />
                        <Feather name='menu' size={24} color={colors.textDark} />
                    </View>
                </SafeAreaView>

                {/* Titles */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubtitle}>Food</Text>
                    <Text style={styles.titlesTitle}>Delivery</Text>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <Feather name='search' size={16} color={colors.textDark}/>
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search...</Text>
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map(item => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => props.navigation.navigate('Details', {
                                item: item
                            })}
                        >
                            <View style={styles.popularCardWrapper}>
                                <View>
                                    <View>
                                        <View style={styles.popularTopWrapper}>
                                            <MaterialCommunityIcons name='crown' size={12} color={colors.primary}/>
                                            <Text style={styles.popularTopText}>top of the week</Text>
                                        </View>
                                        <View style={styles.popularTitlesWrapper}>
                                            <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                            <Text style={styles.popularTitlesWeight}>Weight {item.weight}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.popularAddPizzaButton}>
                                            <Feather name='plus' size={10} color={colors.textDark} />
                                        </View>
                                        <View style={styles.popularRatingWrapper}>
                                            <MaterialCommunityIcons name='star' size={10} color={colors.textDark} />
                                            <Text style={styles.popularRating}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.popularCardRight}>
                                    <Image source={item.image} style={styles.popularCardImage} />
                                </View> 
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center'
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark
    },
    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30
    },
    search: {
        flex: 1,
        marginLeft: 12,
        borderBottomWidth: 2,
        borderBottomColor: colors.textLight
    },
    searchText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textLight,
        marginBottom: 5
    },
    categoriesWrapper: {
        marginTop: 30
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        marginLeft: 20
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20
    },
    categoryItemWrapper: {
        marginRight: 20,
        width: 105,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        marginHorizontal: 20
    },
    categoryItemTitle: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 14
    },
    categorySelectWrapper: {
        marginTop: 20,
        width: 26, 
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 13
    },
    categorySelectIcon: {

    },
    popularWrapper: {
        paddingHorizontal: 20
    },
    popularTitle: {
        fontSize: 16, 
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark,
        marginBottom: 10
    },
    popularCardWrapper: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginBottom: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingTop: 20,
        paddingLeft: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.textDark,
        fontSize:14
    },
    popularTitlesWrapper: {
        marginTop: 20
    },
    popularTitlesTitle: {
        fontSize: 14,
        color: colors.textDark,
        fontFamily: 'Montserrat-SemiBold'
    },
    popularTitlesWeight: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: colors.textLight,
        marginTop: 5
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    popularAddPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        marginLeft: -20
    },
    popularRatingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    popularRating: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        marginLeft: 5,
        color: colors.textDark
    },
    popularCardRight: {
        marginLeft: 40
    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain'
    },
})

export default Home
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../assets/colors/colors'

MaterialCommunityIcons.loadFont()
Feather.loadFont()
const Details = props => {
    console.log(props.route.params)

    const renderIngredientsItem = ({ item }) => (
        <View style={[
                styles.ingredientItemWrapper,
                {
                    marginLeft: item.id == 1 ? 20 : 0
                }
            ]}
        >
            <Image source={item.image} style={styles.ingredientImage} />
        </View>
    )
    
    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name='chevron-left' size={12} color={colors.textDark} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name='star' size={12} color={'white'} />
                    </View>
                </View>
            </SafeAreaView>

            {/* Titles */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.title}>{props.route.params.item.title}</Text>
            </View>

            {/* Price */}
            <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>${props.route.params.item.price}</Text>
            </View>

            {/* Pizza Info */}
            <View style={styles.infoWrapper}>
                <View style={styles.infoLeftWrapper}>
                     <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Size</Text>
                        <Text style={styles.infoItemText}>{props.route.params.item.sizeName} {props.route.params.item.sizeNumber}</Text>
                     </View>
                     <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Crust</Text>
                        <Text style={styles.infoItemText}>{props.route.params.item.crust}</Text>
                     </View>
                     <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Delivery in</Text>
                        <Text style={styles.infoItemText}>{props.route.params.item.deliveryTime} min</Text>
                     </View>
                </View>
                <View>
                    <Image source={props.route.params.item.image} style={styles.itemImage} />
                </View>
            </View>

            {/* Ingredients */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                    <FlatList
                        data={props.route.params.item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            {/* Place an order */}
            <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>Place an order</Text>
                    <Feather name='chevron-right' size={18} color={'black'} />
                </View>
            </TouchableOpacity>
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
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerLeft: {
        padding: 16,
        borderColor: colors.textLight,
        borderWidth: 2,
        borderRadius: 10
    },
    headerRight: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.primary
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark,
        width: '50%'
    },
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    priceText: {
        fontSize: 32,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.price
    },
    infoWrapper: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoLeftWrapper: {
        paddingLeft: 20,
    },
    infoItemWrapper: {
        marginBottom: 20
    },
    infoItemTitle: {
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        color: colors.textLight
    },
    infoItemText: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.textDark
    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50
    },
    ingredientsWrapper: {
        marginTop: 40
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark
    },
    ingredientsListWrapper: {
        paddingVertical: 20
    },
    ingredientItemWrapper: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    ingredientImage: {
        resizeMode: 'contain'
    },
    orderWrapper: {
        marginTop: 30,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderText: {
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark,
        marginRight: 10
    },
})

export default Details
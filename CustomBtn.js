import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CustomBtn({ title, flex,onPress}) {
    return (
        <TouchableOpacity style={[styles.btn, { flex: flex }]} onPress={onPress}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        elevation:3,
        borderColor:'#E9D4FF',


    }
})
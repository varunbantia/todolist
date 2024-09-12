/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import TodoScreen from './src/Screen/TodoScreen';



const App = () => {

    return (
        <SafeAreaView>


            <View>
                
                <TodoScreen />


            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

})


export default App;

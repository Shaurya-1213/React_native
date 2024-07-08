import React from 'react'
import { Button, Text, View, ViewComponent } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
    <Text style={{padding: 50,
                  fontSize: 24,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'blue',
    }}>Home Screen</Text>
    <View style={{padding: 10}} >
    <Button title="Go to Profile" onPress={() => alert('Button pressed')} />
      </View>
    </View>
    
    )
}

export default HomeScreen
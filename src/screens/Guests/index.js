/* eslint-disable prettier/prettier */
import {Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles.js';


const GuestsScreen = (props) => {

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  
  return (
    <View>
      {/* Row 1 Adult Starts*/}
        <View style={styles.row}>
        {/* titles */}
            <View>
                <Text style={{fontWeight: 'bold' , color: 'black' , fontSize : 18}}>Adults</Text>
                <Text> Ages 13 or above</Text>
            </View>
            {/* button with value */}
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {/* - */}
                <Pressable
                style={styles.button}
                onPress={ () => setAdults(Math.max(0, adults - 1))}
                >
                  <Text style={{fontSize: 15, alignItems: 'center'}}>--</Text>
                </Pressable>
                {/* value */}
                <Text style={{marginHorizontal: 15}}>{adults}</Text>
                {/* + */}
                <Pressable
                style={styles.button}
                onPress={ () => setAdults(adults + 1)}
                >
                  <Text style={{fontSize: 15}}>+</Text>
                </Pressable>
            </View>
        </View>
      {/* Row 1 Adult Ends */}

      {/* Row 2 Children Starts*/}
      <View style={styles.row}>
        {/* titles */}
            <View>
                <Text style={{fontWeight: 'bold' , color: 'black' , fontSize : 18}}>Children</Text>
                <Text> Ages 2-12</Text>
            </View>
            {/* button with value */}
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {/* - */}
                <Pressable
                style={styles.button}
                onPress={ () => setChildren(Math.max(0, children - 1))}
                >
                  <Text style={{fontSize: 15, alignItems: 'center'}}>--</Text>
                </Pressable>
                {/* value */}
                <Text style={{marginHorizontal: 15}}>{children}</Text>
                {/* + */}
                <Pressable
                style={styles.button}
                onPress={ () => setChildren(children + 1)}
                >
                  <Text style={{fontSize: 15}}>+</Text>
                </Pressable>
            </View>
        </View>
      {/* Row 2 Children Ends */}

      {/* Row 3 Infants Starts*/}
      <View style={styles.row}>
        {/* titles */}
            <View>
                <Text style={{fontWeight: 'bold' , color: 'black' , fontSize : 18}}>Infants</Text>
                <Text>Under 2</Text>
            </View>
            {/* button with value */}
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {/* - */}
                <Pressable
                style={styles.button}
                onPress={ () => setInfants(Math.max(0, infants - 1))}
                >
                  <Text style={{fontSize: 15, alignItems: 'center'}}>--</Text>
                </Pressable>
                {/* value */}
                <Text style={{marginHorizontal: 15}}>{infants}</Text>
                {/* + */}
                <Pressable
                style={styles.button}
                onPress={ () => setInfants(infants + 1)}
                >
                  <Text style={{fontSize: 15}}>+</Text>
                </Pressable>
            </View>
        </View>
      {/* Row 3 Infants Ends */}
    </View>
  );
};

export default GuestsScreen;

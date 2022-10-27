import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomBtn from './CustomBtn'

const App = () => {



  const [data, setData] = useState([]);
  const [result, setResult] = useState('0');
  const nums = data.toString();
  const [sambul, setSambul] = useState('');


  // create this function for replace charater
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  function replaceAll(str, match, replacement) {
    return str.replace(new RegExp(escapeRegExp(match), 'g'), () => replacement);
  }
  const num = replaceAll(nums, ',', '');
  const expression = replaceAll(num, '**', '^');

  
  


  const factorial = (n) => {
    if (n === 0) return 1;
    let f = 1;
    for (let i = 1; i < n; i++) {
      f = f * (i + 1);
    }
    return f;
  }

  return (
    // Screen of Caculator
    <View style={styles.screen}>
      {/*Display Express & Result */}
      <View style={styles.display}>
        <Text style={styles.txtRE}>Result:</Text>
        <Text style={styles.txt}>{result ? result : '0'}</Text>
        <Text style={styles.txtRE}>Expression:</Text>
        <Text style={styles.txt}>{sambul ? sambul : ''}{num ? expression : '0'}</Text>
      </View>

      {/* All Number & Expression */}
      <View style={styles.viewBtn}>

        {/* Row 1 : ( log , ln , X^n , root , ! ) */}
        <View style={styles.rowflex}>
          <CustomBtn title='log' flex={1} onPress={() => {
            setResult(Math.log10(eval(num)))
            setSambul('log');

          }} />
          <CustomBtn title='ln' flex={1}
            onPress={() => {
              setResult(Math.log10(eval(num)));
              setSambul('ln');
            }} />
          <CustomBtn title='X^n' flex={1} onPress={() => {
            setData([...data, '**'])
            setSambul('x^n: ');
          }} />
          <CustomBtn title='root' flex={1}

            onPress={() => {
              setResult(Math.sqrt(eval(num)))
              setSambul('root');
            }} />
          <CustomBtn title='n!' flex={1} onPress={() => {
            setResult(factorial(eval(num)))
            setSambul('n!: ');
          }} />
        </View>

        {/* Row 2 : ( sin , cos , tan ) */}
        <View style={styles.rowflex}>
          <CustomBtn title='sin' flex={2} onPress={() => {
            setResult(Math.sin(Math.PI * (num / 180)))
            setSambul('sin');
          }} />
          <CustomBtn title='cos' flex={1} onPress={() => {
            setResult(Math.cos(Math.PI * (num / 180)))
            setSambul('cos')
          }} />
          <CustomBtn title='tan' flex={2} onPress={() => {
            setResult(Math.tan(Math.PI * (num / 180)))
            setSambul('tan');
          }} />
        </View>

        {/* Row 3 : ( 7 , 8 , 9 , + , <) */}
        <View style={styles.rowflex}>
          <CustomBtn title='7' flex={1} onPress={() => { setData([...data, '7']) }} />
          <CustomBtn title='8' flex={1} onPress={() => { setData([...data, '8']) }} />
          <CustomBtn title='9' flex={1} onPress={() => { setData([...data, '9']) }} />
          <CustomBtn title='+' flex={1} onPress={() => { setData([...data, '+']) }} />
          <CustomBtn title='<' flex={1} onPress={() => { expression = removeItem(expression) }} />
        </View>

        {/* Row 4 : ( 4 , 5 , 6 , - , C ) */}
        <View style={styles.rowflex}>
          <CustomBtn title='4' flex={1} onPress={() => { setData([...data, '4']) }} />
          <CustomBtn title='5' flex={1} onPress={() => { setData([...data, '5']) }} />
          <CustomBtn title='6' flex={1} onPress={() => { setData([...data, '6']) }} />
          <CustomBtn title='-' flex={1} onPress={() => { setData([...data, '-']) }} />
          <CustomBtn title='C' flex={1} onPress={() => {
            setData([null])
            setResult();
            setSambul('')
          }} />
        </View>

        {/* Row 5,6 */}
        <View style={{ flex: 2, flexDirection: 'row' }}>
          {/* Row 5 : ( 3 , 2 , 1 , x) */}
          <View style={{ flex: 4, }}>
            <View style={styles.rowflex}>
              <CustomBtn title='1' flex={1} onPress={() => { setData([...data, '1']) }} />
              <CustomBtn title='2' flex={1} onPress={() => { setData([...data, '2']) }} />
              <CustomBtn title='3' flex={1} onPress={() => { setData([...data, '3']) }} />
              <CustomBtn title='X' flex={1} onPress={() => { setData([...data, '*']) }} />
            </View>

            {/* Row 6 : ( 0 , . , / )*/}
            <View style={styles.rowflex}>
              <CustomBtn flex={1} />
              <CustomBtn title='0' flex={1} onPress={() => { setData([...data, '0']) }} />
              <CustomBtn title='.' flex={1} onPress={() => { setData([...data, '.']) }} />
              <CustomBtn title='/' flex={1} onPress={() => { setData([...data, '/']) }} />
            </View>

          </View>
          {/* Result btn ( = )  */}
          <CustomBtn title="=" flex={1} onPress={() => {
            try {
              setData([null])
              setResult(eval(num));
              setSambul('')
            } catch (error) {
              setResult('Invalid');
            }

          }} />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
  },

  display: {
    flex: 1,
    backgroundColor: '#E9D4FF',
    justifyContent: 'space-around',
  },
  txtRE: {
    fontSize: 15,
  },

  txt: {
    fontSize: 50,
    flexWrap: 'nowrap',
    alignSelf: 'center',
    height: 70,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#F4F4F4',
    borderWidth: 1,
    elevation: 2

  },

  viewBtn: {
    flex: 2,
    flexDirection: 'column',
  },

  stylebtn: {
    flex: 1,
  },
  rowflex: {
    flex: 1, flexDirection: 'row'
  },

})


export default App;
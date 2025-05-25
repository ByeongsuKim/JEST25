import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const boxWidth = width / 3;
const boxHeight = height / 3;

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden /> {/* 상태 표시줄 숨기기 */}

      {Array.from({ length: 9 }, (_, index) => (
        <View key={index} style={[styles.box, { width: boxWidth, height: boxHeight }]}>
          {index === 0 ? ( // 5번째 칸에 버튼 추가
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('a')}>
              <Text style={styles.buttonText}>
                GotoA
              </Text> {/* 🔹 `<Text>` 내부에 텍스트 추가 */}
            </TouchableOpacity>
          ) : index === 5 ? (  
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('b')}>
              <Text style={styles.buttonText}>
                GotoB
              </Text> {/* 🔹 `<Text>` 내부에 텍스트 추가 */}
            </TouchableOpacity>
          ) : index === 6 ? (  
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('c')}>
              <Text style={styles.buttonText}>
                GotoC
              </Text> {/* 🔹 `<Text>` 내부에 텍스트 추가 */}
            </TouchableOpacity>
          ) : (
            <Text style={styles.text}>{index + 1}</Text>
          )}
        </View>
      ))}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#aaa',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

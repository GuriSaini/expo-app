import react,{useState,useRef} from 'react'
import { StyleSheet, View, FlatList,Animated } from "react-native";
import slides from "../dummydata/slides";
import NextButton from './NextButton';
import OnboardingItem from "./OnboardingItem";
import Paginator from './Paginator';


const OnBoarding = () => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current
    const viewableItemsChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current
   
    

  return (
    <View style={styles.container}>
      <View style={{flex:3}}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
            useNativeDriver:false
        })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
      </View>
      <Paginator data={slides} scrollX={scrollX}/>
       <NextButton />
   
    </View>
  );
};
export default OnBoarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white"
  },
});

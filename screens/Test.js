import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LottieView from 'lottie-react-native';
import {set} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

export default function Test({navigation, route}) {
  const carouselRef = useRef(null);
  const [active, setActive] = useState(0);
  const [start, setStart] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerArray, setAnswerArray] = useState([]);
  const [coronafinal, setCoronaFinal] = useState(0);
  const [healthfinal, setHealthFinal] = useState(0);
  const [stressfinal, setStressFinal] = useState(0);
  const [placibofinal, setPlaceboFinal] = useState(0);

  const data = [
    {
      ani: true,
      key: 0,
      animation: require('../assets/animations/Test/Zero.json'),
      question: 'Are you experiencing Ichie Throught or Dry Cough ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',

      //descript: 'Know about various moods',
    },
    {
      ani: true,
      key: 1,
      animation: require('../assets/animations/Test/One.json'),
      //image: require('../assets/OnBoarding/2.png'),
      question: 'Are you experiencing a fever ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
      //descript: 'Understand your mood with an assesment',
    },
    {
      ani: true,
      key: 2,
      animation: require('../assets/animations/Test/two.json'),
      question: 'Are you experiencing a loss of smell ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
      //descript: 'Know if you are good as you are or need help',
    },
    {
      ani: true,
      key: 3,
      animation: require('../assets/animations/Test/three.json'),
      question: 'Are you a dibetic or heart patient ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },

    {
      ani: true,
      key: 4,
      animation: require('../assets/animations/Test/four.json'),
      question:
        'Are you feeling any heart palpatations or difficulty in breathing ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: true,
      key: 5,
      animation: require('../assets/animations/Test/five.json'),
      question:
        'Have you travelled anywhere internationally in last 28-25 Days ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: true,
      key: 6,
      animation: require('../assets/animations/Test/six.json'),
      question:
        'Have you been near any person which you know have contracted Covid-19 ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 7,
      animation: '../aasets/animations/Test/seven.json',
      question:
        'How often have you been upset because of something that happened unexpectedly? ',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 8,
      animation: '../aasets/animations/Test/eight.json',
      question: 'How often have you felt nervous and “stressed”?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 9,
      animation: '../aasets/animations/Test/nine.json',
      question:
        'How often have you felt confident about your ability to handle your personal problems? ',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 10,
      animation: '../aasets/animations/Test/ten.json',
      question: 'how often have you felt that things were going your way? ',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 11,
      animation: '../aasets/animations/Test/eleven.json',
      question:
        'How often have you found that you could not cope with all the things that you had to do? ',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 12,
      animation: '../aasets/animations/Test/twelve.json',
      question:
        'In the last month, how often have you been able to control irritations in your life?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 13,
      animation: '../aasets/animations/Test/thirteen.json',
      question:
        'how often have you been angered because of things that were outside of your control? ',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 14,
      animation: '../aasets/animations/Test/Forteen.json',
      question:
        'How often do you feel pain or tension in head,chest,stomach,muscles.?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 15,
      animation: '../aasets/animations/Test/fifteen.json',
      question:
        'Have you been experiencing any digestive problems such as, diarrhoea, constipation, nausea, vomiting ',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 16,
      animation: '../aasets/animations/Test/sixteen.json',
      question:
        'Have you been feeling faster heartbeats and blood pressure rise.',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 17,
      animation: '../aasets/animations/Test/seventeen.json',
      question:
        'How is your sleeping schedule now compared to your traditional bed time ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 18,
      animation: '../aasets/animations/Test/eighteen.json',
      question: 'How afraid are you about your loved ones saftey ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 19,
      animation: '../aasets/animations/Test/nineteen.json',
      question: 'Are you staying alone or with your loved ones ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 20,
      animation: '../aasets/animations/Test/tweenty.json',
      question:
        'When did you install arogyasetu app or any other Covid-19 symptom tracker ?',
      optionOne: 'Very little',
      optionsTwo: 'A little',
      optionsThree: 'To some extent',
      optionsFour: 'To a very great extent',
    },
    {
      ani: false,
      key: 21,
      animation: '../aasets/animations/Test/tweenty.json',
      question: 'Get Results',
      optionOne: '',
      optionsTwo: '',
      optionsThree: '',
      optionsFour: '',
    },
  ];

  const result = () => {};

  const resposeFont = (per) => {
    const screenHeight = Math.round(Dimensions.get('window').width);

    return (screenHeight / 100) * per;
  };

  const onShowResult = () => {
    var array = answerArray;
    var avgone =
      array[0] +
      array[1] +
      array[2] +
      array[3] +
      array[4] +
      array[5] +
      array[6] / 7;
    var avgtwo =
      (array[7] +
        array[8] +
        array[9] +
        array[10] +
        array[11] +
        array[12] +
        array[13]) /
      7;
    var avgthree =
      (array[14] +
        array[15] +
        array[16] +
        array[17] +
        array[18] +
        array[19] +
        array[20]) /
      7;
    var corona = (avgone / 28) * 100;
    var stress = (avgtwo / 28) * 100;
    var health = (avgthree / 28) * 100;

    var placibo = ((avgone + avgthree) / 14) * 100;
    setHealthFinal(health);
    setCoronaFinal(corona);
    setStressFinal(stress);
    setPlaceboFinal(placibo);
    console.log(corona);
    console.log(stress);
    console.log(health);
    navigation.navigate('Result', {
      health: health,
      corona: corona.toFixed(2),
      stress: stress.toFixed(2),
      placibo: placibo.toFixed(2),
    });
  };

  const onSelectOptionOne = (val) => {
    var array = answerArray;
    array.push(val);
    setAnswerArray(array);
    setActive(active + 1);
    console.log(answerArray);
  };
  const onSelectOptionTwo = (val) => {
    var array = answerArray;
    array.push(val);
    setAnswerArray(array);
    setActive(active + 1);
    console.log(answerArray);
  };
  const onSelectOptionThree = (val) => {
    var array = answerArray;
    array.push(val);
    setAnswerArray(array);
    setActive(active + 1);
    console.log(answerArray);
  };
  const onSelectOptionFour = (val) => {
    var array = answerArray;
    array.push(val);
    setAnswerArray(array);
    setActive(active + 1);
    console.log(answerArray);
  };

  const OnSkip = () => {
    setActive(2);
  };
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.itemWrap}>
        <View style={styles.instructBlock}>
          <Text style={{textAlign: 'center'}}>
            Please read the following Questions and Answer how you feel about
            them
          </Text>
        </View>
        <View
          style={styles.subContainer}
          shadowOffset={{height: 2}}
          shadowColor="black"
          shadowOpacity={0.2}>
          <Text style={styles.questionNoText}>Question No: {active}</Text>
          <View style={styles.questionBox}>
            <Text style={styles.questiontext}>{item.question}</Text>
          </View>
          {item.ani ? (
            <LottieView
              source={item.animation}
              autoPlay
              loop
              style={styles.animation}
            />
          ) : (
            <View style={styles.animation}></View>
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.mcqButtonOne}>
              <Text>Option 1</Text>
            </View>

            <View style={styles.mcqButtonTwo}>
              <Text>Option 2</Text>
            </View>
          </View>
        </View>
        <View style={styles.mcqContainer}>
          <TouchableOpacity
            style={styles.mcqOptions}
            onPress={() => onSelectOptionOne(1)}>
            <Text>{item.optionOne}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mcqOptions}
            onPress={() => onSelectOptionTwo(2)}>
            <Text>{item.optionsTwo}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mcqOptions}
            onPress={() => onSelectOptionThree(3)}>
            <Text>{item.optionsThree}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mcqOptions}
            onPress={() => onSelectOptionFour(4)}>
            <Text>{item.optionsFour}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return start === true ? (
    <LoginController />
  ) : (
    <View style={styles.container}>
      <View style={styles.body}>
        <Carousel
          ref={carouselRef}
          data={data}
          renderItem={_renderItem}
          hasParallaxImages={false}
          onSnapToItem={(index) => setActive(index)}
          sliderWidth={width}
          itemWidth={width}
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.9}
          firstItem={active}
        />

        {/* get started */}
        {active === 21 ? (
          <View style={styles.startWrap}>
            <TouchableOpacity style={styles.start}>
              <Text style={styles.startText} onPress={() => onShowResult()}>
                Show result
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      {/* footer */}
      {active < 21 ? (
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Pagination
              dotsLength={20}
              activeDotIndex={active}
              dotStyle={{backgroundColor: '#017728'}}
            />
          </View>
          <View style={styles.footerRight}>
            <TouchableOpacity
              onPress={() => setActive(active + 1)}></TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const responseHeight = (per) => {
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (screenHeight / 100) * per;
};

const responseWidth = (per) => {
  const screenWidth = Math.round(Dimensions.get('window').width);

  return (screenWidth / 100) * per;
};

const resposeFont = (per) => {
  const screenHeight = Math.round(Dimensions.get('window').width);

  return (screenHeight / 100) * per;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#f9f5f5',
  },

  //body
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemWrap: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    paddingHorizontal: 30,
  },
  itemTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 60,
  },
  itemDescript: {
    textAlign: 'center',
    fontSize: 20,
    color: 'gray',
    marginTop: 20,
  },

  startWrap: {
    height: 100,
  },
  start: {
    backgroundColor: '#017728',
    width: 200,
    borderRadius: 10,
  },
  startText: {
    textAlign: 'center',
    color: 'white',
    paddingVertical: 14,
  },

  //footer
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
  },
  footerLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  footerRight: {
    paddingHorizontal: 30,
  },
  nextText: {
    color: '#017728',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subContainer: {
    width: responseWidth(80),
    height: responseHeight(49),
    backgroundColor: '#f9f5f5',
    borderRadius: 20,
    marginTop: responseHeight(2),
    padding: responseWidth(7),
  },
  instructBlock: {
    marginTop: responseHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    width: responseWidth(70),
  },
  questionNoText: {
    fontSize: resposeFont(3),
    fontWeight: 'bold',
  },
  questiontext: {
    fontSize: resposeFont(4),
    //fontWeight: 'bold',
    marginTop: responseHeight(0.5),
  },
  questionBox: {
    height: responseHeight(8),
  },
  animation: {
    height: responseHeight(29),
    width: responseWidth(29),
    alignSelf: 'center',
  },
  mcqContainer: {
    height: responseHeight(23),
    width: responseWidth(80),
    padding: responseWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
    //borderColor: 'black',
    // borderWidth: 1,
    marginTop: responseHeight(1),
  },
  mcqButtonOne: {
    height: responseHeight(4),
    width: responseWidth(30),
    backgroundColor: '#bfdbff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  mcqButtonTwo: {
    height: responseHeight(4),
    width: responseWidth(30),
    backgroundColor: '#bfdbff',
    marginLeft: responseWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  mcqOptions: {
    borderColor: 'black',
    borderWidth: 0.3,
    height: responseHeight(4.5),
    width: responseWidth(75),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responseHeight(1.5),
  },
  exmptyView: {
    height: responseHeight(25),
    width: responseWidth(29),
    alignSelf: 'center',
  },
});

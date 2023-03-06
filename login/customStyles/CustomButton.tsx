import * as React from 'react';
import { Pressable,Text } from "react-native";

import tw from 'twrnc';

interface CustomButtonProps{
  onPress:any;
  text:string;
}
const CustomButton: React.FC<CustomButtonProps> = ({ onPress, text} ) =>{


  return(
      <Pressable onPress={onPress}
      style={tw`bg-[#8067AD] h-40px mt-15px items-center ml-32px mr-32px rounded-full shadow-lg`}
      >
        <Text style={tw`text-white top-10% text-lg `}>{text}</Text>
      </Pressable>  
    );
};
export default CustomButton;
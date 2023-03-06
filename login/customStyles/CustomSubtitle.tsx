import React from 'react';
import {
  Text,
} from 'react-native';

import tw from 'twrnc';

export default function CustomSubtitle(props:any) {
  return (
    <Text style={tw`text-[#969696] text-sm  w-100 ml-32px pt-16px`}>
      {props.children}
    </Text>
  );
}
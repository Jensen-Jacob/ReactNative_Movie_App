import { icons } from "@/constants/icons";
import { Image, Text, View } from "react-native";

import React from "react";

const StarRating = ({ vote_average, vote_count }: StarRating) => {
  return (
    <View className="flex-row items-center justify-start gap-x-1">
      <Image source={icons.star} className="size-4" />
      {/* <Text className="text-white text-xs">{vote_average.toFixed(1)}</Text> */}
      <Text className="text-white text-xs font-bold">
        {Math.round(vote_average / 2)} ({vote_count})
      </Text>
    </View>
  );
};

export default StarRating;

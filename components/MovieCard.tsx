import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity
        // className="bg-secondary rounded-lg p-3 mb-3"
        // style={{ flex: 1, aspectRatio: 0.7 }}
        className="w-[30%]"
      >
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://via.placeholder.com/600x400/1a1a1a/ffffff.png?text=No+Image",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text
          className="text-white text-sm font-bold mt-2"
          // style={{ justifyContent: "center" }}
          numberOfLines={1}
        >
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          {/* <Text className="text-white text-xs">{vote_average.toFixed(1)}</Text> */}
          <Text className="text-white text-xs font-bold">
            {Math.round(vote_average / 2)} ({vote_count})
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-light-300 text-xs mt-1 font-medium">
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text className="text-xs font-medium text-light-300 uppercase">
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

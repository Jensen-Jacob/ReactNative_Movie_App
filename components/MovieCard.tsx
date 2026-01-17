import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
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
          className="w-full h-40 rounded-md mb-2"
          resizeMode="cover"
        />
        <Text
          className="text-white text-sm"
          style={{ justifyContent: "center" }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

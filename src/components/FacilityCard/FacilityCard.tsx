import { Text, Image, TouchableOpacity } from "react-native";
import { FacilityCardProps } from "./type";

export default function FacilityCard({
  name,
  capacity,
  image,
  onPress,
}: FacilityCardProps) {
  return (
    <TouchableOpacity
      className="bg-white rounded-lg shadow p-4 mb-4"
      onPress={onPress}
    >
      <Image
        source={image}
        className="w-full h-32 rounded-lg mb-2"
        resizeMode="cover"
      />
      <Text className="text-lg font-heading mb-1">{name}</Text>
      <Text className="text-gray-500 font-sans">Capacity: {capacity}</Text>
    </TouchableOpacity>
  );
}

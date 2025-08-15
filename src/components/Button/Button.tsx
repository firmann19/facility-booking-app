import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "./type";

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-blue-500 py-3 rounded-lg items-center"
      onPress={onPress}
    >
      <Text className="text-white font-heading text-lg">{title}</Text>
    </TouchableOpacity>
  );
}

import { TextInput, View, Text } from "react-native";
import { InputProps } from "./type";

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
}: InputProps) {
  return (
    <View className="mb-4">
      <Text className="text-gray-500 font-sans mb-1">{label}</Text>
      <TextInput
        className="bg-white rounded p-2 border border-gray-300 font-sans"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
}

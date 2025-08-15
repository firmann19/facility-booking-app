import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext/BookingContext";
import Button from "../components/Button/Button";
import { RootStackParamList } from "../navigation/AppNavigator/type";

type Props = NativeStackScreenProps<RootStackParamList, "BookingDetail">;

export default function BookingDetailScreen({ route, navigation }: Props) {
  const { bookingId } = route.params;
  const { bookings } = useContext(BookingContext);

  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Text className="text-lg font-sans text-red-500">
          Booking not found
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-heading mb-4">Booking Confirmed!</Text>
      <Text className="text-gray-700 font-sans mb-2">
        Facility: {booking.facilityName}
      </Text>
      <Text className="text-gray-700 font-sans mb-2">
        Name: {booking.userName}
      </Text>
      <Text className="text-gray-700 font-sans mb-2">
        Participants: {booking.participants}
      </Text>
      <Text className="text-gray-700 font-sans mb-2">
        Date: {booking.date.toLocaleDateString()}{" "}
        {booking.date.toLocaleTimeString()}
      </Text>

      <View className="mt-6">
        <Button title="Back to Home" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}

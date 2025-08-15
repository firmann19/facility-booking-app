import { View, Text, Platform, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { facilities } from "../services/mockData/mockData";
import { useState, useContext } from "react";
import { BookingContext } from "../context/BookingContext/BookingContext";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import DateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { RootStackParamList } from "../navigation/AppNavigator/type";

type Props = NativeStackScreenProps<RootStackParamList, "Booking">;

export default function BookingScreen({ route, navigation }: Props) {
  const { facilityId } = route.params;
  const facility = facilities.find((f) => f.id === facilityId);

  const [date, setDate] = useState<Date>(new Date());
  const [userName, setUserName] = useState<string>("");
  const [participants, setParticipants] = useState<string>("");

  const { addBooking } = useContext(BookingContext);

  if (!facility) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Text className="text-lg font-sans text-red-500">
          Facility not found
        </Text>
      </View>
    );
  }

  const handleBooking = () => {
    const numParticipants = parseInt(participants, 10);

    if (!userName.trim()) {
      Alert.alert("Validation", "Please enter your name");
      return;
    }
    if (!participants || isNaN(numParticipants) || numParticipants <= 0) {
      Alert.alert("Validation", "Please enter valid number of participants");
      return;
    }
    if (numParticipants > facility.capacity) {
      Alert.alert("Validation", `Maximum capacity is ${facility.capacity}`);
      return;
    }

    const bookingId = Date.now();

    addBooking({
      id: bookingId,
      facilityId,
      facilityName: facility.name,
      userName: userName.trim(),
      participants: numParticipants,
      date,
    });

    navigation.navigate("BookingDetail", { bookingId });
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === "set" && selectedDate) {
      setDate(selectedDate);
    }
  };

  const showAndroidPicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: (event, selectedDate) => {
        if (event.type === "set" && selectedDate) {
          const newDate = new Date(selectedDate);

          DateTimePickerAndroid.open({
            value: newDate,
            onChange: (timeEvent, selectedTime) => {
              if (timeEvent.type === "set" && selectedTime) {
                newDate.setHours(selectedTime.getHours());
                newDate.setMinutes(selectedTime.getMinutes());
                setDate(newDate);
              }
            },
            mode: "time",
            is24Hour: true,
          });
        }
      },
      mode: "date",
    });
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-heading mb-2">{facility.name}</Text>
      <Text className="text-gray-500 font-sans mb-4">
        Capacity: {facility.capacity}
      </Text>

      <Input
        label="Your Name"
        placeholder="Enter your name"
        value={userName}
        onChangeText={setUserName}
      />
      <Input
        label="Number of Participants"
        placeholder="Enter number"
        keyboardType="numeric"
        value={participants}
        onChangeText={setParticipants}
      />

      <Text className="text-gray-500 font-sans mb-2 mt-4">
        Pick date and time:
      </Text>
      {Platform.OS === "android" ? (
        <Button title={date.toLocaleString()} onPress={showAndroidPicker} />
      ) : (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="spinner"
          onChange={onChange}
          style={{ width: "100%" }}
        />
      )}

      <View className="mt-6">
        <Button title="Confirm Booking" onPress={handleBooking} />
      </View>
    </View>
  );
}

import { View, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { facilities } from "../services/mockData/mockData";
import FacilityCard from "../components/FacilityCard/FacilityCard";
import { RootStackParamList } from "../navigation/AppNavigator/type";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <FlatList
        data={facilities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FacilityCard
            name={item.name}
            capacity={item.capacity}
            image={item.image}
            onPress={() =>
              navigation.navigate("Booking", { facilityId: item.id })
            }
          />
        )}
      />
    </View>
  );
}

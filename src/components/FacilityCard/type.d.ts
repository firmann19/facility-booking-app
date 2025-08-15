import { ImageSourcePropType } from "react-native";

export type FacilityCardProps = {
  name: string;
  capacity: number;
  image: ImageSourcePropType;
  onPress: () => void;
};

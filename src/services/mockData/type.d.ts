import { ImageSourcePropType } from "react-native";

export type Facility = {
  id: number;
  name: string;
  capacity: number;
  image: ImageSourcePropType;
};

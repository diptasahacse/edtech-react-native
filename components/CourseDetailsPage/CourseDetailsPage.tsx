import { View, Text } from "react-native";

interface IProps {
  id: number;
}
const CourseDetailsPage = ({ id }: IProps) => {
  return (
    <View>
      <Text>CourseDetailsPage</Text>
    </View>
  );
};

export default CourseDetailsPage;

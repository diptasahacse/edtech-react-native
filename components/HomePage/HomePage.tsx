import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useGetCourseCategories } from "@/src/lib/core-react/hooks/public/useCourseCategories";
import { CategoryCollectionModel } from "@/src/models/categoryCollectionModel";
import HomePageSkeleton from "./Skeletons/HomePageSkeleton";
import CategoryWithCourses from "./CategoryWithCourses";

const HomePage = () => {
  const { data, error, isLoading } = useGetCourseCategories();

  const courseCategories = data
    ? new CategoryCollectionModel(data.data)
        .getData()
        .getCourseCategories()
        .getData()
    : undefined;

  if (isLoading) {
    return <HomePageSkeleton />;
  }

  if (error) {
    return <View><Text>Error</Text></View>;
  }

  if (courseCategories) {
    return (
      <View style={styles.container}>
        <FlatList
          data={courseCategories}
          keyExtractor={(item) => item.getId().toString()}
          renderItem={({ item }) => (
            <CategoryWithCourses category={item} key={item.getId()} />
          )}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});

export default HomePage;

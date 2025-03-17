import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { CategoryModel } from "../../src/models/categoryCollectionModel";
import CourseCard from "./CourseCard";
interface IProps {
  category: CategoryModel;
}
export default function CategoryWithCourses({ category }: IProps) {
  const courses = category.getCourse();
  
  return (
    <View>
      <Text>{category.getCategoryName()}</Text>
      <View>
        {courses.map((course) => {
          return <CourseCard key={course.getId()} course={course} />;
        })}
      </View>
    </View>
  );
}



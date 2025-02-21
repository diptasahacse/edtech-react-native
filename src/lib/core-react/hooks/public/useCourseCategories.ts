import { useState } from "react";
import { useService } from "../../contexts";
import QueryString from "qs";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
export const useGetCourseCategories = () => {
  const COURSE_CATEGORIES_KEY = "course_categories";

  let url = "/api/course-categories";

  const { courseService } = useService();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [COURSE_CATEGORIES_KEY, url],
    queryFn: () => courseService.courseResource.getCategories({}),
    placeholderData: keepPreviousData,
  });

  return {
    isLoading,
    error,
    data,
    refetch,
  };
};

import { useState } from "react";
import { useService } from "../../contexts";
import QueryString from "qs";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
export const useGetCourse = (query: Record<string, unknown>) => {
  const COURSE_KEY = "courses";

  let url = `/api/courses?${QueryString.stringify(query)}`;

  const { courseService } = useService();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [COURSE_KEY, url],
    queryFn: () => courseService.courseResource.getCourses(query),
    placeholderData: keepPreviousData,
  });

  return {
    isLoading,
    error,
    data,
    refetch,
  };
};

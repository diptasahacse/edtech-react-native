import { ICategoryCollection } from "@/src/types/categoryCollection";
import BaseResource from "../baseResource";
import QueryString from "qs";
import { ICourseCollection } from "@/src/types/courseCollection";
class CourseResource extends BaseResource {
  getCategories(query: Record<string, unknown>, customHeaders = {}) {
    const path = `/api/course-categories`;
    return this.client.request<ICategoryCollection>(
      "GET",
      path,
      undefined,
      {},
      customHeaders
    );
  }
  getCourses(query: Record<string, unknown>, customHeaders = {}) {
    const path = `/api/courses?${QueryString.stringify(query)}}`;
    return this.client.request<ICourseCollection>(
      "GET",
      path,
      undefined,
      {},
      customHeaders
    );
  }
}

export default CourseResource;

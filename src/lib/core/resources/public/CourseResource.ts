import { ICategoryCollection } from "@/src/types/categoryCollection";
import BaseResource from "../baseResource";
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
}

export default CourseResource;

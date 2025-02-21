import BaseService from "../../apiServices/baseService";
import { CourseResource } from "../../resources/public";
class CourseService extends BaseService {
  public courseResource: CourseResource;
  constructor() {
    super();
    this.courseResource = new CourseResource(this.config);
  }
}

export default CourseService;

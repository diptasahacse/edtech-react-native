import {
  ICategory,
  ICategoryCollection,
  ICategoryCollectionData,
  ICourseCategories,
} from "../types/categoryCollection";
import { CourseModel } from "./courseCollectionModel";

export class CategoryModel {
  private readonly id: number;
  private readonly category_name: string;
  private readonly category_image: string;
  private readonly category_status: number;
  private readonly course: CourseModel[];
  private readonly created_at: string;
  private readonly updated_at: string;
  private readonly deleted_at: string | null;

  constructor(data: ICategory) {
    this.id = data.id;
    this.category_name = data.category_name;
    this.category_image = data.category_image;
    this.category_status = data.category_status;
    this.course = data.course.map((course) => new CourseModel(course));
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.deleted_at = data.deleted_at;
  }
  getId(): number {
    return this.id;
  }
  getCategoryName(): string {
    return this.category_name;
  }
  getCategoryImage(): string {
    return this.category_image;
  }
  getCategoryStatus(): number {
    return this.category_status;
  }
  getCourse(): CourseModel[] {
    return this.course;
  }
  getCreatedAt(): string {
    return this.created_at;
  }
  getUpdatedAt(): string {
    return this.updated_at;
  }
  getDeletedAt(): string | null {
    return this.deleted_at;
  }
}

export class CourseCategoriesModel {
  private readonly data: CategoryModel[];

  constructor(courseCategories: ICourseCategories) {
    
    this.data = courseCategories.data.map(
      (category) => new CategoryModel(category)
    );
  }
  getData() {
    return this.data;
  }
}

export class CategoryCollectionDataModel {
  private readonly course_categories: CourseCategoriesModel;
  private readonly course_image_path: string;
  private readonly course_category_image_path: string;

  constructor(data: ICategoryCollectionData) {
    this.course_categories = new CourseCategoriesModel(data.course_categories);
    this.course_image_path = data.course_image_path;
    this.course_category_image_path = data.course_category_image_path;
  }
  getCourseCategories() {
    return this.course_categories;
  }
  getCourseImagePath() {
    return this.course_image_path;
  }
  getCourseCategoryImagePath() {
    return this.course_category_image_path;
  }
}
export class CategoryCollectionModel {
  private readonly success: boolean;
  private readonly message_type: string;
  private readonly message: string;
  private readonly data: CategoryCollectionDataModel;
  private readonly code: number;
  constructor(data: ICategoryCollection) {
    this.success = data.success;
    this.message_type = data.message_type;
    this.message = data.message;
    this.data = new CategoryCollectionDataModel(data.data);
    this.code = data.code;
  }
  getSuccess() {
    return this.success;
  }
  getMessageType() {
    return this.message_type;
  }
  getMessage() {
    return this.message;
  }
  getData() {
    return this.data;
  }
  getCode() {
    return this.code;
  }
}

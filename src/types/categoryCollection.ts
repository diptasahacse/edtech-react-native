import { ICourse } from "./courseCollection";
import { IPagination } from "./pagination";

export interface ICategory {
  id: number;
  category_name: string;
  category_image: string;
  category_status: number;
  course: ICourse[];
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ICourseCategories {
  data: ICategory[];
}

export interface ICategoryCollectionData {
  course_categories: ICourseCategories;
  course_image_path: string;
  course_category_image_path: string;
}

export interface ICategoryCollection {
  success: boolean;
  message_type: string;
  message: string;
  data: ICategoryCollectionData;
  code: number;
}
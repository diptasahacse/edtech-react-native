import { ICategory } from "./categoryCollection";

export interface ICourse {
  id: number;
  title_en: string;
  title_bn: string;
  description_en: string;
  description_bn: string;
  course_category_id: number;
  instructor_id: number;
  type: string; // Assuming courses can be either free or paid
  price: string;
  old_price: string | null;
  subscription_price: string | null;
  start_from: string | null;
  duration: string | null;
  lesson: string | null;
  prerequisites_en: string | null;
  prerequisites_bn: string | null;
  difficulty: string;
  course_code: string | null;
  image: string;
  thumbnail_image: string;
  thumbnail_video: string;
  tag: string;
  status: number;
  language: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  course_category?: ICategory
}

export interface ICourseData {
  courses: ICourse[] | ICourse;
  course_image_path: string;
  course_category_image_path: string;
}
export interface ICourseCollection {
  success: true;
  message_type: string;
  message: string;
  code: number;
  data: ICourseData;
}

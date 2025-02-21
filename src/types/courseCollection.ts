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
}

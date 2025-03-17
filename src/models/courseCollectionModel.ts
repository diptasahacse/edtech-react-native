import {
  ICourse,
  ICourseCollection,
  ICourseData,
} from "../types/courseCollection";

export class CourseModel {
  private readonly id: number;
  private readonly title_en: string;
  private readonly title_bn: string;
  private readonly description_en: string;
  private readonly description_bn: string;
  private readonly course_category_id: number;
  private readonly instructor_id: number;
  private readonly type: string;
  private readonly price: string;
  private readonly old_price: string | null;
  private readonly subscription_price: string | null;
  private readonly start_from: string | null;
  private readonly duration: string | null;
  private readonly lesson: string | null;
  private readonly prerequisites_en: string | null;
  private readonly prerequisites_bn: string | null;
  private readonly difficulty: string;
  private readonly course_code: string | null;
  private readonly image: string;
  private readonly thumbnail_image: string;
  private readonly thumbnail_video: string;
  private readonly tag: string;
  private readonly status: number;
  private readonly language: string;
  private readonly created_at: string;
  private readonly updated_at: string;
  private readonly deleted_at: string | null;

  constructor(data: ICourse) {
    this.id = data.id;
    this.title_en = data.title_en;
    this.title_bn = data.title_bn;
    this.description_en = data.description_en;
    this.description_bn = data.description_bn;
    this.course_category_id = data.course_category_id;
    this.instructor_id = data.instructor_id;
    this.type = data.type;
    this.price = data.price;
    this.old_price = data.old_price;
    this.subscription_price = data.subscription_price;
    this.start_from = data.start_from;
    this.duration = data.duration;
    this.lesson = data.lesson;
    this.prerequisites_en = data.prerequisites_en;
    this.prerequisites_bn = data.prerequisites_bn;
    this.difficulty = data.difficulty;
    this.course_code = data.course_code;
    this.image = data.image;
    this.thumbnail_image = data.thumbnail_image;
    this.thumbnail_video = data.thumbnail_video;
    this.tag = data.tag;
    this.status = data.status;
    this.language = data.language;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.deleted_at = data.deleted_at;
  }
  getId(): number {
    return this.id;
  }
  getTitleEn(): string {
    return this.title_en;
  }
  getTitleBn(): string {
    return this.title_bn;
  }
  getDescriptionEn(): string {
    return this.description_en;
  }
  getDescriptionBn(): string {
    return this.description_bn;
  }
  getCourseCategoryId(): number {
    return this.course_category_id;
  }
  getInstructorId(): number {
    return this.instructor_id;
  }
  getType(): string {
    return this.type;
  }
  getPrice(): string {
    return this.price;
  }
  getOldPrice(): string | null {
    return this.old_price;
  }
  getSubscriptionPrice(): string | null {
    return this.subscription_price;
  }
  getStartFrom(): string | null {
    return this.start_from;
  }
  getDuration(): string | null {
    return this.duration;
  }
  getLesson(): string | null {
    return this.lesson;
  }
  getPrerequisitesEn(): string | null {
    return this.prerequisites_en;
  }
  getPrerequisitesBn(): string | null {
    return this.prerequisites_bn;
  }
  getDifficulty(): string {
    return this.difficulty;
  }
  getCourseCode(): string | null {
    return this.course_code;
  }
  getImage(): string {
    return this.image;
  }
  getThumbnailImage(): string {
    return this.thumbnail_image;
  }
  getThumbnailVideo(): string {
    return this.thumbnail_video;
  }
  getTag(): string {
    return this.tag;
  }
  getStatus(): number {
    return this.status;
  }
  getLanguage(): string {
    return this.language;
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

export class CourseDataModel {
  private readonly courses: CourseModel | CourseModel[];
  private readonly course_image_path: string;
  private readonly course_category_image_path: string;

  constructor(data: ICourseData) {
    this.courses = Array.isArray(data.courses)
      ? data.courses.map((course) => new CourseModel(course))
      : new CourseModel(data.courses);
    this.course_image_path = data.course_image_path;
    this.course_category_image_path = data.course_category_image_path;
  }

  getCourses(): CourseModel | CourseModel[] {
    return this.courses;
  }
  getCourseImagePath(): string {
    return this.course_image_path;
  }
  getCourseCategoryImagePath(): string {
    return this.course_category_image_path;
  }
}
export class CourseCollectionModel {
  private readonly success: true;
  private readonly message_type: string;
  private readonly message: string;
  private readonly code: number;
  private readonly data: CourseDataModel;

  constructor(data: ICourseCollection) {
    this.success = data.success;
    this.message_type = data.message_type;
    this.message = data.message;
    this.code = data.code;
    this.data = new CourseDataModel(data.data);
  }

  
  getSuccess(): true {
    return this.success;
  }
  getMessageType(): string {
    return this.message_type;
  }
  getMessage(): string {
    return this.message;
  }
  getCode(): number {
    return this.code;
  }
  getData(): CourseDataModel {
    return this.data;
  }
}


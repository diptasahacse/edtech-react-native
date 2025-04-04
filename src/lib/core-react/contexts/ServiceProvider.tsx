import { createContext, useContext } from "react";
import CourseService from "../../core/services/public/CourseService";
import { AuthService } from "../../core/services/private";

interface IServiceContextState {
  courseService: CourseService;
  authService: AuthService;
}

const ServiceContext = createContext<IServiceContextState | null>(null);

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useCoreService must be used within a CoreServiceProvider");
  }
  return context;
};

interface ServiceProviderProps {
  children: React.ReactNode;
}

export const ServiceProvider = ({ children }: ServiceProviderProps) => {
  const courseService = new CourseService();
  const authService = new AuthService();
  const value: IServiceContextState = {
    courseService,
    authService
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

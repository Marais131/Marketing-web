import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";

// Lazy load all pages except Home for better initial bundle size
const Home = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutDepartment"));
const FacultyPage = lazy(() => import("./pages/FacultyMembers"));
const ActivitiesPage = lazy(() => import("./pages/StudentActivities"));
const AdmissionsPage = lazy(() => import("./pages/AdmissionInfo"));
const ContactPage = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const Articles = lazy(() => import("./pages/NewsArticles"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const AnnouncementDetail = lazy(() => import("./pages/AnnouncementDetail"));
const CurriculumHighlights = lazy(() => import("./pages/CourseHighlights"));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* TooltipProvider 需要單一子元素，使用包裹容器 */}
      <div>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}> 
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A4C7A]"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Layout />}> 
                {/* 預設首頁恢復為 Home */}
                <Route index element={<Home />} />
                <Route path="curriculum" element={<CurriculumHighlights />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="faculty" element={<FacultyPage />} />
                <Route path="activities" element={<ActivitiesPage />} />
                <Route path="articles" element={<Articles />} />
                <Route path="article/:id" element={<ArticleDetail />} />
                <Route path="announcement/:id" element={<AnnouncementDetail />} />
                <Route path="admissions" element={<AdmissionsPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

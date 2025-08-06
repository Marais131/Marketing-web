import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutDepartment";
import FacultyPage from "./pages/FacultyMembers";
import ActivitiesPage from "./pages/StudentActivities";
import AdmissionsPage from "./pages/AdmissionInfo";
import ContactPage from "./pages/ContactUs";
import NotFound from "./pages/NotFoundPage";
import Articles from "./pages/NewsArticles";
import ArticleDetail from "./pages/ArticleDetail";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import CurriculumHighlights from "./pages/CourseHighlights";
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/Marketing-web">
        <Routes>
          <Route path="/" element={<Layout />}>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

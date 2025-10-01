import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingScreen from "@/components/loading-screen";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import FloatingActionButtons from "@/components/floating-action-buttons";
import Home from "@/pages/home";
import Pricing from "@/pages/pricing";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Blogs from "@/pages/blogs";
import BlogDetail from "@/pages/blog-detail";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/blog/:slug" component={BlogDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GoogleAnalytics measurementId={gaId} />
        <LoadingScreen />
        <Toaster />
        <Router />
        <FloatingActionButtons />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

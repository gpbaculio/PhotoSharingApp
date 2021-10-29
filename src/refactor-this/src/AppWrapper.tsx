import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default AppWrapper;

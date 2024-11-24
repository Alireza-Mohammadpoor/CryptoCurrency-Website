// app/components/ClientLayout.js
"use client"; // Mark this as a Client Component

import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

const ClientLayout = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ClientLayout;

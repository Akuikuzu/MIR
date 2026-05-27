'use client';
import type { Metadata } from "next";
import "./globals.css";
// @ts-ignore
import Navbar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { HydrationBoundary, QueryClientProvider, DehydratedState, dehydrate, QueryClient } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  dehydratedState?: DehydratedState | null;
}

export default function RootLayout({ children, dehydratedState }: Props) {

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <html lang="en" className="h-screen antialiased">
      <body className="min-h-screen flex flex-col __bm__extension">
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={dehydratedState}>
            <Navbar />
            {children}
            <Footer />
          </HydrationBoundary>
        </QueryClientProvider>
      </body>
    </html>
  );
}

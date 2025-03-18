"use client";
import {
  QueryClientProvider,
} from "@tanstack/react-query";
import {reactQueryClient} from "@/app/lib/tanstack-client";

export default function QueryProvider(
  {children}: {
    children: React.ReactNode;
  }) {

  return (
    <QueryClientProvider client={reactQueryClient}>{children}</QueryClientProvider>
  );
}

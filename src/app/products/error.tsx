"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="p-6 text-center">
      <h1 className="mt-4 font-semibold text-red-500">{error.message}</h1>
      <button
        onClick={reload}
        className="mt-3 px-4 py-2 text-white bg-amber-700 rounded-full hover:bg-amber-800 transition"
      >
        Try again
      </button>
    </div>
  );
}

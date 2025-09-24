import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-6 rounded-md border border-gray-400 p-6 md:grid-cols-2">
      <div className="flex flex-col space-y-4">
        <div className="aspect-square w-full border border-gray-400 bg-gray-200"></div>
        <div className="h-4 w-1/3 border border-gray-400 bg-gray-200"></div>
        <div className="h-3 w-1/4 border border-gray-400 bg-gray-200"></div>
        <div className="flex w-3/4 items-center justify-between">
          <div className="h-4 w-6 border border-gray-400 bg-gray-200"></div>
          <div className="h-6 w-6 border border-gray-400 bg-gray-200"></div>
          <div className="h-10 w-10 border border-gray-400 bg-gray-200"></div>
          <div className="h-6 w-6 border border-gray-400 bg-gray-200"></div>
          <div className="h-6 w-6 border border-gray-400 bg-gray-200"></div>
        </div>
        <div className="flex w-3/4 items-center gap-2">
          <div className="h-4 w-4 border border-gray-400 bg-gray-200"></div>
          <div className="h-2 flex-1 border border-gray-400 bg-gray-200"></div>
        </div>
        <div className="h-2 w-3/4 border border-gray-400 bg-gray-200"></div>
      </div>
      <div>
        <h2 className="mb-4 text-sm font-semibold">Playlist</h2>
        <ul className="space-y-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <li key={i} className="flex items-center justify-between">
              <div
                className={`h-3 border border-gray-400 bg-gray-200 ${
                  i % 4 === 0
                    ? "w-2/5"
                    : i % 4 === 1
                      ? "w-1/3"
                      : i % 4 === 2
                        ? "w-1/2"
                        : "w-2/5"
                }`}
              ></div>
              <div className="h-4 w-6 border border-gray-400 bg-gray-200"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

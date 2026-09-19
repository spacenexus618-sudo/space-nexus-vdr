export default function FreeToolSkeleton() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto p-8 space-y-4">
        <div className="h-8 bg-gray-800 rounded w-2/3 animate-pulse" />
        <div className="h-4 bg-gray-800 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-800 rounded w-4/5 animate-pulse" />
        <div className="mt-8 space-y-3">
          <div className="h-10 bg-gray-800 rounded animate-pulse" />
          <div className="h-10 bg-gray-800 rounded animate-pulse" />
          <div className="h-10 bg-gray-800 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
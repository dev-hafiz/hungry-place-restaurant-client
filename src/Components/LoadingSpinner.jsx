const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-88px)]">
      <p className="text-4xl font-bold">L</p>
      <div className="w-8 h-8 border-8 border-dashed rounded-full animate-spin mt-3 border-red-500"></div>
      <p className="text-4xl font-bold">
        ading
        <span className=" animate-pulse mt-3 text-red-500">....</span>
      </p>
    </div>
  );
};

export default LoadingSpinner;

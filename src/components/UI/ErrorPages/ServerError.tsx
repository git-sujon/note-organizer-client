const ServerError = () => {
  return (
    <div className="flex justify-center items-center text-5xl font-bold text-center min-h-screen uppercase ">
      <div>
        <p className="text-7xl text-red-700 mb-3">408</p>

        <p className="text-slate-700">Server Timeout</p>
      </div>
    </div>
  );
};

export default ServerError;

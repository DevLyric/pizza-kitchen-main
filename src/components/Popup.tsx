function Popup({ name }: { name: string }) {
  return (
    <div className="absolute h-screen w-screen top-0 flex items-center justify-center bg-gray-500/50 px-6">
      <div className="w-[400px] h-72 text-center py-16 px-5 bg-white border-2 border-dashed border-orange-500 rounded-2xl">
        <h1 className="text-2xl font-semibold">Thank you, {name}</h1>
        <p className="mt-4 mb-10 text-[#a2aab6]">
          We've received your message and will get back to you as soon as
          possible!
        </p>
        <p className="animate-bounce">
          <i className=" text-[#a2aab6]">Redirecting to Home...</i>
        </p>
      </div>
    </div>
  );
}

export default Popup;

export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className=" flex items-center justify-center border-[1px] border-gray-800 rounded-lg h-[90%] w-[50%] ml-64">
      <div className="h-[95%] w-[95%] overflow-x-auto flex flex-col">
        <div className="border-b border-slate-800 fixed bg-black">
          <h2 className="text-white text-4xl">Questions</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

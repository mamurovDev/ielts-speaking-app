export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className=" flex items-center justify-center border-[1px] border-white rounded-lg   w-[50%] ml-64">
      <div className=" w-[95%]  flex flex-col">
        <div className="border-b border-slate-800 fixed bg-black">
          <h2 className="text-white text-4xl">Questions</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

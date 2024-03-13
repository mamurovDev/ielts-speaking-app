interface Question {
  img: string;
  question: string;
}
export const Select = ({ img, question }: Question) => {
  return (
    <div className=" mt-2 flex text-white items-center justify-between border-[1px] border-slate-800 rounded-lg w-[97%] h-32">
      <div className="flex items-center">
        <img src={img} alt={question} className="h-10 rounded" /> {question}
      </div>
      &gt;
    </div>
  );
};

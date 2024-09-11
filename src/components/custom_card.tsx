function CustomCard() {
  return (
    <div className="flex flex-col gap-5 shadow-md border min-w-[330px] rounded-lg cursor-pointer shadow-slate-500">
      <div className=" w-full h-[180px] bg-slate-500 rounded-t-lg">
        {/* image  */}
      </div>
      <div className="flex flex-col gap-5 p-2">
        <h3 className="text-1xl font-bold">Blog Tittle</h3>
        <p className="text-justify text-sm font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus
          sunt aspernatur, suscipit ullam, ea minus aliquam reprehenderit illo
          odit, ab repellendus nulla vitae illum enim pariatur debitis
          molestias! Ab.
        </p>
        <div className="flex flex-row items-start">
          <span className="text-justify text-sm font-sans underline text-blue-900">
            Read More
          </span>
          {/* arrow */}
        </div>
      </div>
    </div>
  );
}

export default CustomCard;

import CustomCard from "@/components/custom_card";

function ForexBlogComponent() {
  return (
    <div className="flex flex-col gap-5 w-full p-5 mt-10">
      <p className="text-left text-4xl">Forex Blog</p>
      <div className="flex flex-row gap-5 overflow-x-scroll pb-14">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
}

export default ForexBlogComponent;

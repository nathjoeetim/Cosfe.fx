import IntroToForexMarket from "@/components/intro-fx";
import ForexBlogComponent from "./forex_blogs";

function ForexExchangePage() {
  return (
    <main className="flex flex-col gap-5 mt-9 text-xl text-slate-300">
      <IntroToForexMarket />
      {/* <ForexBlogComponent /> */}
    </main>
  );
}

export default ForexExchangePage;

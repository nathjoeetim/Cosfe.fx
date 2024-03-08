"use client";
import { RingLoader } from "react-spinners";

export default function ScaleSpinner() {
  return (
    <div className="flex flex-col gap-4 h-[340px] mt-2 overflow-y-scroll items-center justify-center w-full overflow-x-hidden custom-scrollbar ">
      <RingLoader color="#36d7b7" />{" "}
    </div>
  );
}

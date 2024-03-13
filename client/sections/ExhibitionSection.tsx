import Slider from "@/components/Slider/Slider";

const ExhibitionSection = ({ data }: { data: object[] }) => {
  return (
    <div
      className="section flex flex-col items-center justify-center 
      md:scroll-mt-[50px] scroll-mt-[0px] 
       h-screen gap-12 md:my-20 my-0 "
      id="exhibition"
    >
      <div className="flex flex-col items-center gap-4">
        <h6 className="labelLargeLight md:titleLargeSpacedLight onPrimary">
          Exhibition
        </h6>
        <h1 className="displaySmall md:displayMedium onPrimary">
          Exhibition Name Here
        </h1>
        <h6 className="labelLargeLight md:titleMediumLight onPrimary">
          Add Description Here
        </h6>
      </div>

      <div className="w-full flex justify-center items-center ">
        <Slider data={data} />
      </div>
    </div>
  );
};

export default ExhibitionSection;

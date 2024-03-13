import NewspaperSlider from "@/components/Slider/NewspaperSlider";

const NewspaperSection = ({ data }: { data: object[] }) => {
  return (
    <div id="newspaper" className="section scroll-mt-[50px] py-12 md:py-10 ">

      <div className="w-full flex justify-center items-center mt-10">
        <NewspaperSlider data={data} />
      </div>
    </div>
  );
};

export default NewspaperSection;

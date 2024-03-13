import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="section flex flex-col justify-center h-screen mt-12"
    >
      <div className="flex flex-col items-center">
        <h5 className="onPrimary md:titleLargeSpacedLight labelLargeLight">
          {t("title")}
        </h5>
        <h1 className="onPrimary displaySmall md:displayMedium py-4">
          Riad Oueida
        </h1>
        <h6 className="onPrimary labelLargeLight md:titleMediumLight text-center md:w-[75%]">
          {t("description")}
        </h6>
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly items-center mt-8 md:mt-12 gap-12 md:gap-0">
        <div className="text-center w-[373px]">
          <h1 className="displayMedium md:displayLarge onPrimary ">45</h1>
          <h5 className="titleLargeLight onPrimary pt-2">{t("awards")}</h5>
        </div>
        <div className="text-center w-[373px]">
          <h1 className="displayMedium md:displayLarge onPrimary">124</h1>
          <h5 className="titleLargeLight onPrimary pt-2">
            {t("completedProjects")}
          </h5>
        </div>
        <div className="text-center w-[373px]">
          <h1 className="displayMedium md:displayLarge onPrimary">51</h1>
          <h5 className="titleLargeLight onPrimary pt-2">
            {t("soloExhibitions")}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

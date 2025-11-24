import { Fragment } from "react";
import Logo from "../../assets/onboarding/dummy_logo.png";
import WhiteBgTick from "../../Svg/whiteBgTick";
import ProgressDots from "../../components/Auth/ProgressDots";

interface CompanyTypeScreenProps {
  isLongScreen: boolean;
  companyType: string;
  setCompanyType: (type: string) => void;
  handleSubmit: () => void;
  onStepClick: (stepIndex: number) => void;
}

const COMPANY_TYPES = [
  "E-commerce Platform",
  "SaaS Company",
  "Telecommunications Provider",
  "Gaming Company",
  "Travel Agency",
  "Healthcare Services",
];

export default function CompanyTypeScreen({
  isLongScreen,
  companyType,
  setCompanyType,
  handleSubmit,
  onStepClick,
}: CompanyTypeScreenProps) {
  return (
    <Fragment>
      <div
        className={`logo-container flex items-center gap-2 ${
          isLongScreen ? "mb-[154px]" : "mb-[130px]"
        }`}
      >
        <img src={Logo} alt="Logo" width={20} height={20} />
        <p
          className={`font-mona-sans font-semibold text-[#454545] ${
            isLongScreen ? "text-2xl" : "text-xl"
          }`}
        >
          Relayn
        </p>
      </div>

      <form
        className={`input-sections flex flex-col font-google-sans-flex ${
          isLongScreen ? "pr-[124px]" : "pr-[100px]"
        }`}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div
          className={`company-type-container flex flex-col ${
            isLongScreen ? "gap-4 mb-12" : "gap-3 mb-10"
          }`}
        >
          <label
            className="text-[#505050] font-semibold"
            style={{
              lineHeight: "24px",
              letterSpacing: "-0.16px",
            }}
          >
            Kind of company
          </label>
          <div className="flex flex-col gap-3">
            {COMPANY_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setCompanyType(type)}
                className={`flex items-center justify-between px-4 py-3 rounded-[100px] text-sm font-medium transition-colors text-left`}
                style={{
                  backgroundColor: companyType === type ? "#BD338F" : "#FFFFFF",
                  color: companyType === type ? "#FFFFFF" : "#727272",
                  border: companyType === type ? "none" : "0.5px solid #EEEEEE",
                }}
              >
                {type}
                {companyType === type && <WhiteBgTick />}
              </button>
            ))}
          </div>
        </div>

        <button
          className={`px-6 py-3 bg-primary rounded-[1000px] text-white font-semibold`}
          style={{
            lineHeight: "19.2px",
          }}
          type="submit"
        >
          Continue
        </button>

        <ProgressDots currentStep={2} onStepClick={onStepClick} />
      </form>
    </Fragment>
  );
}

import { Fragment } from "react";
import Logo from "../../assets/onboarding/dummy_logo.png";
import { shadowConstant } from "../../utils/styleConstants";

interface BusinessInfoScreenProps {
  isLongScreen: boolean;
  name: string;
  setName: (name: string) => void;
  companyName: string;
  setCompanyName: (name: string) => void;
  companySize: string;
  setCompanySize: (size: string) => void;
  handleSubmit: () => void;
}

const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"];

export default function BusinessInfoScreen({
  isLongScreen,
  name,
  setName,
  companyName,
  setCompanyName,
  companySize,
  setCompanySize,
  handleSubmit,
}: BusinessInfoScreenProps) {
  return (
    <Fragment>
      <div
        className={`logo-container flex items-center gap-2 ${
          isLongScreen ? "mb-[60px]" : "mb-[30px]"
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
          className={`name-input-container flex flex-col ${
            isLongScreen ? "gap-4 mb-8" : "gap-3 mb-6"
          }`}
        >
          <label
            htmlFor="name"
            className="text-[#505050] font-semibold"
            style={{
              lineHeight: "24px",
              letterSpacing: "-0.16px",
            }}
          >
            Your name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Tim Cook"
            className={`px-4 py-3 rounded-[12px] bg-white placeholder:text-[#161616]`}
            style={{
              border: "0.5px solid #C9C9C9",
              boxShadow: shadowConstant as string,
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div
          className={`company-input-container flex flex-col ${
            isLongScreen ? "gap-4 mb-8" : "gap-3 mb-6"
          }`}
        >
          <label
            htmlFor="companyName"
            className="text-[#505050] font-semibold"
            style={{
              lineHeight: "24px",
              letterSpacing: "-0.16px",
            }}
          >
            Your company name
          </label>
          <input
            type="text"
            name="companyName"
            placeholder="Apple, Inc."
            className={`px-4 py-3 rounded-[12px] bg-white placeholder:text-[#161616]`}
            style={{
              border: "0.5px solid #C9C9C9",
              boxShadow: shadowConstant as string,
            }}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div
          className={`company-size-container flex flex-col ${
            isLongScreen ? "gap-4 mb-12" : "gap-3 mb-8"
          }`}
        >
          <label
            className="text-[#505050] font-semibold"
            style={{
              lineHeight: "24px",
              letterSpacing: "-0.16px",
            }}
          >
            How many people work at your company?
          </label>
          <div className="flex flex-wrap gap-3">
            {COMPANY_SIZES.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setCompanySize(size)}
                className={`px-6 py-2 rounded-[100px] text-sm font-medium transition-colors`}
                style={{
                  backgroundColor: companySize === size ? "#BD338F" : "#FFFFFF",
                  color: companySize === size ? "#FFFFFF" : "#505050",
                  border:
                    companySize === size
                      ? "none"
                      : "0.5px solid #E0E0E0",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          className={`px-6 py-3 bg-primary rounded-[1000px] text-white font-semibold w-fit`}
          style={{
            lineHeight: "19.2px",
          }}
          type="submit"
        >
          Continue
        </button>

        <div className={`progress-dots flex gap-3 mt-12`}>
            <div className="w-2 h-2 rounded-full bg-[#E0E0E0]"></div>
            <div className="w-2 h-2 rounded-full bg-[#484848]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E0E0E0]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E0E0E0]"></div>
        </div>
      </form>
    </Fragment>
  );
}

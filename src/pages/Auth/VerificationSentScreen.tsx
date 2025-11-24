import { calculateViewPortHeight } from "../../utils/calculateViewPortHeight";
import Logo from "../../assets/onboarding/dummy_logo.png";
import GreenBgTick from "../../Svg/greenBgTick";
import Refresh from "../../Svg/refresh";

export default function VerificationSentScreen() {
  const { isLongScreen } = calculateViewPortHeight();

  return (
    <div className="flex flex-col w-full h-screen p-6">
      <div
        className={`logo-container flex items-center gap-2 pl-[103px] ${
          isLongScreen ? "pt-[30px]" : "pt-[20px]"
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

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center max-w-[1000px] text-center">
          <div className="mb-8">
            <GreenBgTick />
          </div>

          <h1
            className="font-google-sans-flex font-extrabold text-[#223028] text-5xl mb-4"
            style={{ letterSpacing: "-0.48px" }}
          >
            You’re almost there...
          </h1>

          <p
            className="font-google-sans-flex text-[#717171] font-medium text-lg mb-14 max-w-[500px]"
            style={{ lineHeight: "27px", letterSpacing: "-0.18px" }}
          >
            We've sent you an email to verify your address. Please check your
            inbox to proceed!
          </p>

          <button
            className="flex items-center gap-2 text-[#126439] font-google-sans-flex font-semibold text-base hover:opacity-80 transition-opacity"
            onClick={() => console.log("Resend email")}
          >
            <Refresh />
            Resend email
          </button>
        </div>
      </div>
    </div>
  );
}

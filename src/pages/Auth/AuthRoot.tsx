import { Outlet } from "react-router";
import { shadowConstant } from "../../utils/styleConstants";
import Profile from "../../assets/onboarding/dummy_testimonial.png";
import { calculateViewPortHeight } from "../../utils/calculateViewPortHeight";

export default function AuthRoot() {
  const { isLongScreen } = calculateViewPortHeight();
  return (
    <div className="flex p-6 w-full h-screen">
      <div
        className={`flex-1 ${
          isLongScreen
            ? "pt-[30px] pb-[75px] pl-[127px] pr-[73px]"
            : "pt-[20px] pb-[50px] pl-[100px] pr-[60px]"
        }`}
      >
        <Outlet />
      </div>
      <div
        className={`hidden xl:flex flex-1 flex-col justify-center items-center bg-primary-auth-bg rounded-[16px] ${
          isLongScreen ? "py-[300px]" : "py-[200px]"
        } px-[128px] border border-[#0000001A]`}
      >
        <div
          className="py-6 px-8 rounded-[16px] bg-white border border-[#C9C9C9] flex flex-col gap-6"
          style={{
            boxShadow: shadowConstant as string,
          }}
        >
          <p
            className={`description-text font-google-sans-flex text-[#282828] font-medium text-xl ${
              isLongScreen ? "text-xl" : "text-lg"
            }`}
            style={{
              lineHeight: "36px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Habitasse hendrerit non
            adipiscing lectus. Ac nec aliquam interdum risus augue interdum
            morbi magna. Ligula eget enim adipiscing at faucibus sit.
          </p>
          <div className="profile-testimonial flex items-center gap-2">
            <img src={Profile} alt="Profile" width={40} height={40} />
            <div className="flex flex-col">
              <p
                className={`font-google-sans-flex font-semibold text-[#232323] ${
                  isLongScreen ? "text-xl" : "text-lg"
                }`}
                style={{
                  lineHeight: "30px",
                }}
              >
                John Doe
              </p>
              <p
                className={`font-google-sans-flex text-[#5A5A5A] font-medium ${
                  innerHeight > 1024 ? "text-lg" : "text-base"
                }`}
                style={{
                  lineHeight: "21.6px",
                }}
              >
                People and Customer Success, Acme Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

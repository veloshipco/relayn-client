import { useState, useMemo } from "react";
import { Fragment } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router";
import Logo from "../../assets/onboarding/dummy_logo.png";
import Tick from "../../Svg/tick";
import Google from "../../Svg/google";
import Microsoft from "../../Svg/microsoft";
import { shadowConstant } from "../../utils/styleConstants";
import {
  getPasswordStrength,
  type PasswordStrength,
} from "../../utils/authUtils";

export default function InitialMailScreen({
  isLongScreen,
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
}: {
  isLongScreen: boolean;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: () => void;
}) {
  const [isTypingPassword, setIsTypingPassword] = useState<boolean>(false);
  const passwordStrength = useMemo<PasswordStrength>(() => {
    return isTypingPassword ? getPasswordStrength(password) : "weak";
  }, [password, isTypingPassword]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  console.log("passwordStrength", passwordStrength);

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
      <div
        className={`welcome-header-section flex flex-col ${
          isLongScreen ? "gap-[29px] mb-[50px]" : "gap-4 mb-[30px]"
        }`}
      >
        <p
          className={`font-google-sans-flex font-extrabold text-[#223028] ${
            isLongScreen ? "text-5xl" : "text-[42px]"
          }`}
          style={{
            lineHeight: "48px",
            letterSpacing: "-0.48px",
            alignSelf: "flex-start",
          }}
        >
          Welcome to the modern standard of support
        </p>
        <div
          className={`flex gap-4 font-google-sans-flex text-[#5A5A5A] font-medium ${
            isLongScreen ? "text-lg" : "text-base"
          }`}
          style={{
            lineHeight: "21.6px",
            letterSpacing: "-0.18px",
          }}
        >
          <div className="flex items-center gap-2">
            <Tick />
            <p>Built for scale</p>
          </div>
          <div className="flex items-center gap-2">
            <Tick />
            <p>No credit card required</p>
          </div>
        </div>
      </div>
      <form
        className={`input-sections flex flex-col font-google-sans-flex ${
          isLongScreen ? "pr-[124px]" : "pr-[100px]"
        }`}
        onSubmit={onSubmit}
      >
        <div
          className={`email-input-container flex flex-col ${
            isLongScreen ? "gap-4 mb-8" : "gap-3 mb-6"
          }`}
        >
          <label
            htmlFor="email"
            className="text-[#505050] font-semibold"
            style={{
              lineHeight: "24px",
              letterSpacing: "-0.16px",
            }}
          >
            Your work email
          </label>
          <input
            type="email"
            name="email"
            placeholder="tim.cook@apple.com"
            className={`px-4 py-3 rounded-[12px] bg-white placeholder:text-[#C9C9C9]`}
            style={{
              border: "0.5px solid #C9C9C9",
              boxShadow: shadowConstant as string,
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className={`password-input-container flex flex-col ${
            isLongScreen ? "gap-4" : "gap-3"
          }`}
        >
          <label
            htmlFor="password"
            className="text-[#505050] font-semibold"
            style={{
              lineHeight: "24px",
              letterSpacing: "-0.16px",
            }}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••••••••••••••"
            className={`rounded-[12px] px-4 py-3 bg-white placeholder:text-[#161616]`}
            style={{
              border: "0.5px solid #C9C9C9",
              boxShadow: shadowConstant as string,
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsTypingPassword(true)}
            onBlur={() => setIsTypingPassword(false)}
          />
        </div>
        <button
          className={`px-6 py-3 bg-primary rounded-[1000px] text-white font-semibold ${
            isLongScreen ? "mt-12" : "mt-8"
          }`}
          style={{
            lineHeight: "19.2px",
          }}
          type="submit"
        >
          Continue
        </button>
        <div className="or-separator flex items-center justify-between gap-4 my-4">
          <div className="w-[35%] h-[0.5px] bg-[#C9C9C9]"></div>
          <p className="font-google-sans-flex text-[#5A5A5A] font-medium text-base w-[30%] text-center">
            OR
          </p>
          <div className="w-[35%] h-[0.5px] bg-[#C9C9C9]"></div>
        </div>
        <div className="sso-buttons flex flex-col gap-3">
          <button
            className={`flex items-center justify-center gap-3 px-4 py-3 rounded-[1000px] bg-white font-google-sans-flex font-semibold text-[#232323]`}
            style={{
              border: "0.5px solid #C9C9C9",
              boxShadow: shadowConstant as string,
              lineHeight: "19.2px",
            }}
          >
            <Google />
            Continue with Google
          </button>
          <button
            className={`flex items-center justify-center gap-3 px-4 py-3 rounded-[1000px] bg-white font-google-sans-flex font-semibold text-[#232323]`}
            style={{
              border: "0.5px solid #C9C9C9",
              boxShadow: shadowConstant as string,
              lineHeight: "19.2px",
            }}
          >
            <Microsoft />
            Continue with Microsoft
          </button>
        </div>
        <div
          className={`login-link ${isLongScreen ? "mt-12" : "mt-8"}`}
          style={{
            lineHeight: "19.2px",
            letterSpacing: "-0.16px",
          }}
        >
          <p className="font-google-sans-flex text-base text-[#828282]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#0A0A0A] hover:underline"
            >
              Login now
            </Link>
          </p>
        </div>
      </form>
    </Fragment>
  );
}

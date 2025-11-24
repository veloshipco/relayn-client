import { useState } from "react";
import { useNavigate } from "react-router";
import { calculateViewPortHeight } from "../../utils/calculateViewPortHeight";
import InitialMailScreen from "./InitialMailScreen";
import BusinessInfoScreen from "./BusinessInfoScreen";
import CompanyTypeScreen from "./CompanyTypeScreen";

export default function SignUp() {
  const navigate = useNavigate();
  const [page, setPage] = useState<string>("initialMailScreen");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Business Info State
  const [name, setName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [companySize, setCompanySize] = useState<string>("");

  // Company Type State
  const [companyType, setCompanyType] = useState<string>("");

  const handleInitialMailScreenSubmit = () => {
    console.log(email, password);
    setPage("businessInfoScreen");
  };

  const handleBusinessInfoSubmit = () => {
    console.log(name, companyName, companySize);
    setPage("companyTypeScreen");
  };

  const handleCompanyTypeSubmit = () => {
    console.log(companyType);
    navigate("/verification-sent");
  };

  const { isLongScreen } = calculateViewPortHeight();

  switch (page) {
    case "initialMailScreen":
      return (
        <InitialMailScreen
          isLongScreen={isLongScreen}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleInitialMailScreenSubmit}
        />
      );
    case "businessInfoScreen":
      return (
        <BusinessInfoScreen
          isLongScreen={isLongScreen}
          name={name}
          setName={setName}
          companyName={companyName}
          setCompanyName={setCompanyName}
          companySize={companySize}
          setCompanySize={setCompanySize}
          handleSubmit={handleBusinessInfoSubmit}
        />
      );
    case "companyTypeScreen":
      return (
        <CompanyTypeScreen
          isLongScreen={isLongScreen}
          companyType={companyType}
          setCompanyType={setCompanyType}
          handleSubmit={handleCompanyTypeSubmit}
        />
      );
    default:
      return (
        <InitialMailScreen
          isLongScreen={isLongScreen}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleInitialMailScreenSubmit}
        />
      );
  }
}

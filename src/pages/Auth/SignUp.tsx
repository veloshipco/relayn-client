import { useState } from "react";
import { calculateViewPortHeight } from "../../utils/calculateViewPortHeight";
import InitialMailScreen from "./InitialMailScreen";
import BusinessInfoScreen from "./BusinessInfoScreen";

export default function SignUp() {
  const [page, setPage] = useState<string>("initialMailScreen");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleInitialMailScreenSubmit = () => {
    console.log(email, password);
    setPage("businessInfoScreen");
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
      return <BusinessInfoScreen />;
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

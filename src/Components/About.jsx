import { Redirect } from "react-router-dom";
export const About = () => {
  if (!localStorage.getItem("user_id")) {
    return <Redirect to="Login" />;
  }
  return <>this is about us page</>;
};

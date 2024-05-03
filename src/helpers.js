import { redirect } from "react-router-dom";

const desposeSession = (responseStatus) => {
  if (responseStatus.status >= 400) alert(responseStatus.statusText);
  return redirect("/");
};

export default desposeSession;

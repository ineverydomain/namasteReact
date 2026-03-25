import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Oops... you are not on the right port </h2>
      <h3>
        {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default Error;

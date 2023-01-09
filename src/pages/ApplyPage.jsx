import Apply from "../components/Apply";
import { useEffect } from "react";

const ApplyPage = () => {


  useEffect(() =>{
    window.scrollTo(0,0);
  }, [] )


  return (
    <>
      <Apply />
    </>
  );
};

export default ApplyPage;

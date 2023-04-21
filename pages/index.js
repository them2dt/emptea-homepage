import HomeComponent from "../components/home/Home";
import HomeComponentMobile from "../components/home/HomeMobile";
import { useEffect } from "react";
export default function Index() {
  useEffect(() => {
    console.log("Hello dev!");
  }, []);

  return (
    <>
      <HomeComponent />
      <HomeComponentMobile />
    </>
  );
}

import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
	console.log("Rendered Result");
    
  return (
    <>
      <Summary />
      <Analysis />
    </>
  );
}
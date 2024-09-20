import { padStart } from "lodash";
import { useEffect, useState } from "react";

export function DigitalClockApp() {
  const [val, setVal] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setVal(new Date());
    }, 1000);
  }, []);
  function TimeIs() {
    let hours = padStart(val.getHours(), 2, "0");
    let getHours = (hours) => {
      if (hours > 12) {
        return hours % 12;
      } else if (hours === 12) {
        return "12";
      } else {
        return hours;
      }
    };
    let minutes = padStart(val.getMinutes(), 2, "0");
    let seconds = padStart(val.getSeconds(), 2, "0");
    let AmPm = hours >= 12 ? "PM" : "AM";
    return `${getHours(hours)}:${minutes}:${seconds} ${AmPm}`;
  }
  return (
    <div id="w">
      <div id="wID">{TimeIs()}</div>
    </div>
  );
}

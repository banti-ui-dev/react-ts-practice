import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);
  useEffect(() => {
     const timer = setInterval(() => {
        setSec(prevSec => {
        if (prevSec === 59) { 

          setMin(prevMin => {
            if (prevMin === 59) {
              setHrs(prevHrs => prevHrs + 1);
              return 0;
            }
            return prevMin + 1;
          });

          return 0;
        }

        return prevSec + 1;
      });

    }, 1000);
     return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <p style={{ padding: "5px", border: "1px solid gray" }}>{hrs}</p>
        <p style={{ padding: "5px", border: "1px solid gray" }}>{min}</p>
        <p style={{ padding: "5px", border: "1px solid gray" }}>{sec}</p>
      </div>
      <div>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;

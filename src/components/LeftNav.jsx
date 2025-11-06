import React, { Suspense, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { CircularProgress } from "@heroui/react";

const navItemsPromise = fetch("../navitems.json")
  .then((res) => res.json())
  .catch((error) => {
    console.error(error);
  });

function LeftNav() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Suspense
        fallback={
          <CircularProgress
            aria-label="Loading..."
            color="warning"
            showValueLabel={true}
            size="lg"
            value={value}
          />
        }
      >
        <Navbar navItemsPromise={navItemsPromise} />
      </Suspense>
    </div>
  );
}

export default LeftNav;

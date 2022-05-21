/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useEffect } from "react";
import axios from "axios";

export default function FooBar() {
  const [bar, setBar] = useState([]);
  const [fooInfo, setFooInfo] = useState({});

  let fetchData = async () => {
    let l = await axios
      .get("https://foo_url")
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log(e);
        return "This went wrong: " + e;
      });

    setBar(l["bar"]);
    setFooInfo(l);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{bar}</span>
      <span>{fooInfo}</span>
    </div>
  );
}
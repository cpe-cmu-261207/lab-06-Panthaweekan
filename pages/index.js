import {
  IconChevronDown,
  IconChevronUp,
  IconCurrencyDollarAustralian,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

import { useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import UserCardDetail from "../components/UserCardDetail";

export default function Home() {
  const [inputNum, setInputNum] = useState(1);
  const [data, setData] = useState([]);
  const genUsers = async () => {
    if (inputNum < 1) {
      alert("Invalid number of user");
      return;
    }

    const resp = await axios.get(
      `https://randomuser.me/api/?results=${inputNum}`
    );
    setData(resp.data.results);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          value={inputNum}
          onChange={(event) => setInputNum(event.target.value)}
        />
        <button className="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {data.map((curdata) => (
        <UserCard
          key={curdata.login.sha256}
          name={curdata.name.first + " " + curdata.name.last}
          img={curdata.picture.large}
          email={" " + curdata.email}
          address={
            " " +
            curdata.location.city +
            " " +
            curdata.location.state +
            " " +
            curdata.location.country +
            " " +
            curdata.location.postcode
          }
        />
      ))}

      <p className="text-center mt-3 text-muted fst-italic">
        made by Panthaweekan Somngam 640612093
      </p>
    </div>
  );
}

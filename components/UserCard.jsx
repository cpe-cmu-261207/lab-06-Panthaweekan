import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

import { useState } from "react";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [chevronDown, setChevronDown] = useState(false);
  return (
    <div className="border-bottom" onClick={() => setChevronDown(!chevronDown)}>
      <div className="d-flex align-items-center p-3">
        <img src={props.img} width="90px" className="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {chevronDown ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {chevronDown && (
        <UserCardDetail email={props.email} address={props.address} />
      )}
    </div>
  );
}

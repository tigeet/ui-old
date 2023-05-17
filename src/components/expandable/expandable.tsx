import React, { useState } from "react";
import "./expandable.scss";
import { cls } from "@koido/cls";
import { withClassname } from "@/utils/utils";
enum ContentState {
  EXPANDED = "expanded",
  COLLAPSED = "collapsed",
}

const clsc = withClassname("expandable");
enum ValueType {
  LIST = "list",
  OBJECT = "object",
  STRING = "string",
  NUMBER = "number",
}

type AcceptablePrimitives = string | number;
type AcceptableValues =
  | Array<AcceptablePrimitives>
  | Record<string, AcceptablePrimitives | Array<AcceptablePrimitives>>;

type ExpandableProps = {
  name: string;
  value: AcceptableValues;
};

const delimeter = {
  [ValueType.LIST]: {
    pre: "[",
    post: "]",
  },
  [ValueType.OBJECT]: {
    pre: "{",
    post: "}",
  },
  [ValueType.STRING]: {
    pre: '"',
    post: '"',
  },
  [ValueType.NUMBER]: {
    pre: "",
    post: "",
  },
};
const Expandable = ({ name, value }: ExpandableProps) => {
  const [expanded, toggleExpanded] = useState<boolean>(false);
  const state = expanded ? ContentState.EXPANDED : ContentState.COLLAPSED;
  const valueType: ValueType = Array.isArray(value)
    ? ValueType.LIST
    : typeof value === "object"
    ? ValueType.OBJECT
    : typeof value === "string"
    ? ValueType.STRING
    : ValueType.NUMBER;
  return (
    <div className={clsc()}>
      <span className="name">{name}: </span>
      <span className={clsc("wrapper")}></span>
    </div>
  );
};
export default Expandable;

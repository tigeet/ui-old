type BoolModifier = {
  type: "bool";
  name: string;
};

type KvModifier = {
  type: "kv";
  name: string;
  value: string;
};
type Modifier = BoolModifier | KvModifier;
type AcceptableArgs = null | undefined | string | Modifier[];
type MakeClassnameProps = {
  global: string;
  local?: string;
  modifiers?: Modifier[];
};
const makeClassname = ({
  global,
  local,
  modifiers = [],
}: MakeClassnameProps) => {
  const localSep = "__"; //separates local from global
  const modSep = "_"; // separates modifiers from local/global
  const parsedModifiers = modifiers
    .map((modifier) =>
      modifier.type === "bool"
        ? modifier.name
        : `${modifier.name}-${modifier.value}`
    )
    .join("_");
  const parts = [global];
  if (local) parts.push(localSep, local);
  if (modifiers.length) parts.push(modSep, parsedModifiers);
  return parts.join("");
};

const adapter = (
  global: string,
  arg1: AcceptableArgs,
  arg2: AcceptableArgs
): string | never => {
  if (!arg1 && !arg2) return makeClassname({ global });
  if (typeof arg1 === "string") {
    if (!arg2) {
      return makeClassname({ global, local: arg1 });
    }
    if (Array.isArray(arg2))
      return makeClassname({ global, local: arg1, modifiers: arg2 });

    throw new Error("Invalid signature");
  }

  if (Array.isArray(arg1)) return makeClassname({ global, modifiers: arg1 });

  throw new Error("Invalid signature");
};
const withClassname =
  (global: string) => (arg1?: AcceptableArgs, arg2?: AcceptableArgs) =>
    adapter(global, arg1, arg2);
export { withClassname };

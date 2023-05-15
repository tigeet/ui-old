type Operand = boolean | undefined | null;

const bool = (a: Operand): boolean => !!a;
const implies = (a: Operand, b: Operand): boolean => {
  return a ? bool(b) : true;
};
export { bool, implies };

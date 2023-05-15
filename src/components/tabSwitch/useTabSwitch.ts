import { useRef, useState } from "react";
import { Exception } from "sass";

type Option = string;
type Options = Array<Option>;

type Props = {
  options: Options;
  initialSelect?: Option;
};
type Returns<C> = [
  number,
  (value: string) => void,
  React.MutableRefObject<Array<C | null>>
];
const useTabSwitch = <C extends HTMLElement>({
  options,
  initialSelect,
}: Props): Returns<C> => {
  const initialIndex = initialSelect ? options.indexOf(initialSelect) ?? 0 : 0;
  const [selected, setSelected] = useState<number>(initialIndex);
  const ref = useRef<Array<C | null>>([]);
  const onSelect = (selectedValue: string) => {
    const index = options.indexOf(selectedValue);
    if (index === -1) return;
    setSelected(index);
  };
  return [selected, onSelect, ref];
};

export default useTabSwitch;

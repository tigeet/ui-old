import { useEffect, useRef, useState } from "react";

type Props = {
  container?: HTMLElement;
  onClick: () => void;
};
const useClickOutside = (props: Props) => {
  const container = useRef<HTMLElement | null>();
  useEffect(() => {
    container.current = props.container ?? document.getElementById("root");
  }, [props.container]);

  useEffect(() => {
    console.log("useClickOutside: useEffect", container);
    container.current?.addEventListener("click", props.onClick);
    return () => container.current?.removeEventListener("click", props.onClick);
  }, [container, props.onClick]);
};

export default useClickOutside;

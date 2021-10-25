import React, {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useCallback,
  useRef,
  useState,
} from "react";
import { Transition, TransitionStatus } from "react-transition-group";

const transitionTimeouts = {
  appear: 300,
  enter: 300,
  exit: 300,
};

const transitionClassNames: Record<TransitionStatus, string> = {
  entering: "collapsing",
  entered: "collapse show",
  exiting: "collapsing",
  exited: "collapse",
  unmounted: "",
};

const defaultStyle: CSSProperties = {
  //transition: `all ${transitionTimeouts.appear}ms ease-in-out`,
};

const Collapse = ({
  isOpen,
  tag,
  className,
  navbar,
  children,
}: {
  isOpen: boolean;
  tag?: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  navbar?: boolean;
  children?: ReactNode;
}) => {
  // State
  const [height, setHeight] = useState<number | undefined>(undefined);

  // Ref
  const transitionNodeRef = useRef<HTMLDivElement>(null);

  // Animation functions
  const eventFunction = useCallback(
    (
        state: "onEntering" | "onEntered" | "onExit" | "onExiting" | "onExited",
        ref: RefObject<HTMLDivElement>
      ) =>
      () => {
        if (state === "onEntering") {
          setHeight(ref?.current?.scrollHeight ?? 0);
        }

        if (state === "onEntered") {
          setHeight(undefined);
        }

        if (state === "onExit") {
          console.log("1");
          setHeight(ref.current?.scrollHeight ?? 0);
        }

        if (state === "onExiting") {
          console.log("2");
          setHeight(0);
        }

        if (state === "onExited") {
          console.log("3");
          setHeight(0);
        }
      },
    []
  );

  // Render
  return (
    <Transition
      in={isOpen}
      timeout={transitionTimeouts}
      nodeRef={transitionNodeRef}
      onEntering={eventFunction("onEntering", transitionNodeRef)}
      onEntered={eventFunction("onEntered", transitionNodeRef)}
      onExit={eventFunction("onExit", transitionNodeRef)}
      onExiting={eventFunction("onExiting", transitionNodeRef)}
      onExited={eventFunction("onExited", transitionNodeRef)}>
      {(state) => {
        return (
          <div
            ref={transitionNodeRef}
            className={`${transitionClassNames[state]} ${className} ${
              navbar ? "navbar-collapse" : ""
            }`}
            style={{
              ...defaultStyle,
              ...{
                height: height,
              },
            }}>
            {children}
          </div>
        );
      }}
    </Transition>
  );
};

export default Collapse;

import { useId } from "react";

const ALIGN_CLASSES = {
  start: "left-0",
  center: "left-1/2 -translate-x-1/2",
  end: "right-0",
};

const ARROW_CLASSES = {
  start: "left-6",
  center: "left-1/2 -translate-x-1/2",
  end: "right-6",
};

export const Tooltip = ({ content, children, align = "start" }) => {
  const id = useId();

  return (
    <span className="group relative inline-flex">
      <span aria-describedby={id} className="inline-flex">
        {children}
      </span>
      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute bottom-full mb-3 z-50 w-72 max-w-[calc(100vw-2rem)] ${ALIGN_CLASSES[align]} translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100`}
      >
        <span className="relative block rounded-xl bg-gradient-to-r from-primary-400 to-purple-400 p-px shadow-xl shadow-black/40">
          <span className="block rounded-xl bg-gray-900/95 px-4 py-3 text-left text-sm leading-relaxed text-gray-300 backdrop-blur">
            {content}
          </span>
        </span>
        <span
          className={`absolute top-full -mt-1.5 h-3 w-3 rotate-45 border-b border-r border-gray-700/50 bg-gray-900 ${ARROW_CLASSES[align]}`}
        ></span>
      </span>
    </span>
  );
};

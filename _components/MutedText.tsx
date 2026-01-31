export function MutedText(
  { small, children, italic, uppercase }: {
    small?: boolean;
    italic?: boolean;
    uppercase?: boolean;
    children?: any;
  },
) {
  return (
    <span
      class={`select-none opacity-50${small ? " text-xs" : ""}${uppercase ? " uppercase" : ""}${italic ? " italic" : ""}`}
    >
      {children}
    </span>
  );
}

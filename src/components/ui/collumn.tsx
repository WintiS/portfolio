import { type Signal, component$ } from "@builder.io/qwik";

interface Props {
  text: string;
  colorclass: string;
  heightclass: Signal<string>;
}

export const Collumn = component$((props: Props) => {
  return (
    <div class={"flex w-24 flex-col items-center"}>
      <div
        class={` ${props.heightclass.value} w-[13px] rounded transition-all duration-[1500ms] ${props.colorclass}`}
      ></div>
      <div class={`mb-2 mt-1 w-full bg-white py-1`}></div>
      <span class={" font-light"}>{props.text}</span>
    </div>
  );
});

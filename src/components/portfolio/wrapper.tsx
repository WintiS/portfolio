import { component$, Slot } from "@builder.io/qwik";

interface Props {
  title: string;
}
export const Wrapper = component$((props: Props) => {
  return (
    <div class={"textik w-3/4 md:w-2/3"}>
      <h3 class={"mb-6 text-xl"}>{props.title}</h3>
      <Slot />
    </div>
  );
});

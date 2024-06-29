import { component$ } from "@builder.io/qwik";

interface Props {
  imgurl: string;
}

export const Imageblock = component$((props: Props) => {
  return (
    <div
      class={`h-96 w-1/4 rounded-xl bg-[url('${props.imgurl}')] imageslide bg-cover`}
    ></div>
  );
});

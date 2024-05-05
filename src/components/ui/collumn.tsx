import { component$ } from "@builder.io/qwik";

export const Collumn = component$(() => {
  return (
    <div class={"flex w-24 flex-col items-center"}>
      <div class={"h-72 w-3 rounded bg-primary"}></div>
      <div class={"w-full bg-white py-1"}></div>
      <span class={"text-lg"}>Text</span>
    </div>
  );
});

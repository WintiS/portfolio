import { component$, Slot } from "@builder.io/qwik";

export const Techstack = component$(() => {
  const ul = "<ul>";
  const ule = "</ul>";

  return (
    <div>
      <h3 class={"mb-6 text-xl"}>Použité technologie</h3>
      <ul class={"list-disc"}>
        <span class={"text-primary"}>{ul}</span>
        <div class={"pl-8"}>
          <Slot />
        </div>
        <span class={"text-primary"}>{ule}</span>
      </ul>
    </div>
  );
});

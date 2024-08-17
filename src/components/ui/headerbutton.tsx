import { component$ } from "@builder.io/qwik";
import { LuArrowRight } from "@qwikest/icons/lucide";

export const HeaderButton = component$(() => {
  return (
    <div>
      <a
        href="#projects"
        class={
          " inline-block items-center gap-1 rounded-[5px] border-2 border-primary bg-transparent px-5  py-3 transition-colors hover:bg-primary"
        }
      >
        <p class={"flex items-center gap-2"}>
          Portfolio projektů <LuArrowRight />
        </p>
      </a>
    </div>
  );
});

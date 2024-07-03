import { component$ } from "@builder.io/qwik";
import { LuHeart } from "@qwikest/icons/lucide";
export const Footer = component$(() => {
  return (
    <div class={"mt-2 bg-seconadry py-6 text-sm"}>
      <div class={"mb-3 flex items-center justify-center"}>
        <a
          href={"https://github.com/WintiS"}
          class={"underline underline-offset-2"}
        >
          GitHub
        </a>
      </div>
      <div class={"flex items-center justify-center gap-1"}>
        <LuHeart class={"text-xl"} />
        <span>Vítězslav Šíma 2024</span>
      </div>
    </div>
  );
});

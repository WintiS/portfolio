import { component$, useSignal } from "@builder.io/qwik";
import { LuHeart, LuHeartHandshake } from "@qwikest/icons/lucide";
export const Footer = component$(() => {
  const isUnClicked = useSignal(true);
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
        <div
          class={"cursor-pointer text-xl "}
          onClick$={() => (isUnClicked.value = !isUnClicked.value)}
        >
          {isUnClicked.value ? (
            <LuHeart />
          ) : (
            <LuHeartHandshake class={"transition-all hover:text-2xl"} />
          )}
        </div>

        <span>Vítězslav Šíma 2024</span>
      </div>
    </div>
  );
});

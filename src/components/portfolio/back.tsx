import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuArrowUpRight } from "@qwikest/icons/lucide";

export const ReturnBack = component$(() => {
  return (
    <div class={"flex items-center justify-center pb-6"}>
      <Link href="/#form" class={"flex items-center text-primary"}>
        Nezávazně mi napište <LuArrowUpRight />
      </Link>
    </div>
  );
});

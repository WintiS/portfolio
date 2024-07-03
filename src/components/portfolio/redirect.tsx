import { component$ } from "@builder.io/qwik";
import { LuExternalLink } from "@qwikest/icons/lucide";

interface Props {
  url: string;
}

export const Redirect = component$((props: Props) => {
  return (
    <div>
      <a
        href={`https://${props.url}`}
        class={
          "flex items-center gap-1 text-primary transition-colors hover:text-white"
        }
      >
        {props.url} <LuExternalLink />
      </a>
    </div>
  );
});

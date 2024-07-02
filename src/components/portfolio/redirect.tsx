import { component$ } from "@builder.io/qwik";

interface Props {
  url: string;
}

export const Redirect = component$((props: Props) => {
  return (
    <div>
      <a
        href={`https://${props.url}`}
        class={"text-primary transition-colors hover:text-white"}
      >
        {props.url}
      </a>
    </div>
  );
});

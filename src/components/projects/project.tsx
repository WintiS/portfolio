import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuArrowRight } from "@qwikest/icons/lucide";

interface Props {
  bgimgurl: string;
  name: string;
  webhref?: string;
  documentationhref: string;
  backgeoundpos: string;
}
export const Project = component$((props: Props) => {
  return (
    <Link
      href={props.documentationhref}
      class={`mt-5 flex h-44 w-full flex-col items-center justify-center rounded-xl bg-gradient-to-r from-black to-black bg-cover`}
      style={`background-image:
          linear-gradient(to bottom, rgba(23, 23, 23, 0.65), rgba(23, 23, 23, 0.65)),
          url('${props.bgimgurl}');
           background-position: ${props.backgeoundpos};`}
    >
      <h3 class={"mt-5 text-xl"}>{props.name}</h3>

      <div class={"mt-2 text-xs "}>
        {props.webhref ? (
          <div>
            <span>Link</span>
            <span>Case Study</span>
          </div>
        ) : (
          <span class={"flex items-center gap-1"}>
            Case Study
            <LuArrowRight class={"text-lg"} />
          </span>
        )}
      </div>
    </Link>
  );
});

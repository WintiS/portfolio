import { component$ } from "@builder.io/qwik";

interface Props {
  heading: string;
  content: string;
}
export const SmallCell = component$((props: Props) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" class="overflow-hidden">
        {/* */}
        <li class="relative pb-10">
          <div
            class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-primary"
            aria-hidden="true"
          ></div>
          <div class="group relative flex items-start" aria-current="step">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-white"></span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-primary">
                {props.heading}
              </span>
              <span class="text-sm text-gray-500">{props.content}</span>
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
});

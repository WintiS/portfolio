import { component$ } from "@builder.io/qwik";

interface Props {
  type: string;
  placeholder: string;
  name: string;
}
export const BeutyInput = component$((props: Props) => {
  return (
    <div>
      <label
        for={"email"}
        class={"block text-sm font-medium leading-6 text-white"}
      >
        {props.name}
      </label>
      <div class={"mt-2"}>
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          class={
            "block w-full rounded-lg border-0 bg-background py-2 text-white shadow-sm ring-1 ring-inset ring-background placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          }
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
});

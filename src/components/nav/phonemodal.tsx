import { type Signal, component$ } from "@builder.io/qwik";
import { Modal } from "@qwik-ui/headless";

interface Props {
  menustate: Signal<boolean>;
}

export const Phonemodal = component$((props: Props) => {
  return (
    <Modal
      bind:show={props.menustate}
      class={"w-[100vw] backdrop:backdrop-brightness-110"}
    >
      <div
        class={
          "sheet fixed top-[12vh] h-[88vh] w-full bg-background text-white"
        }
      >
        <nav
          class={
            "flex h-full flex-col gap-12 px-12 pl-20 pt-16 text-lg font-light"
          }
        >
          <ul>
            <a href="/#services">Služby</a>
          </ul>
          <ul>
            <a href="/#projects">Portfolio</a>
          </ul>
          <ul>
            <a href="/#aboutme">O mně</a>
          </ul>
          <ul>
            <a href="/#form" class={"rounded bg-seconadry px-4 py-3"}>
              Kontaktujte mě
            </a>
          </ul>
        </nav>
      </div>
    </Modal>
  );
});

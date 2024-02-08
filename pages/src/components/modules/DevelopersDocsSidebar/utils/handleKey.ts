import { AppDispatch } from "@/stores";
import { setSidebarIsOpenState } from "@/stores/reducers/docsSidebar";

interface HandleKeyProps {
  ev: KeyboardEvent;
  dispatch: AppDispatch;
}

/**
 * Handles keyboard events and dispatches actions based on the key pressed.
 *
 * @param {HandleKeyProps} props - The properties for handling the keyboard event.
 * @param {KeyboardEvent} props.ev - The keyboard event object.
 * @param {AppDispatch} props.dispatch - The dispatch function from the AppDispatch type.
 * @returns {void}
 */
export default function handleKey({ dispatch, ev }: HandleKeyProps): void {
  if (ev.key == "/") {
    ev.preventDefault();
    dispatch(setSidebarIsOpenState(true));
  }
  if (ev.key == "Escape") {
    ev.preventDefault();
    dispatch(setSidebarIsOpenState(false));
  }
}

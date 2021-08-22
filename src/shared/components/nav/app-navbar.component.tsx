import { useReducer } from "react";
import produce from "immer";
import { IconType } from "react-icons";
import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import { useLocationStore } from "features/location/location.store";

import { DesktopNav } from "./desktop-nav.component";
import { MobileNav } from "./mobile-nav.component";
import { NavModals } from "./nav-modals.component";

// Types
export type TModalName = "exit" | "reset" | "settings" | "stopwatch";
type TState = Record<TModalName, boolean>;

const initialState: TState = {
  exit: false,
  reset: false,
  settings: false,
  stopwatch: false,
};

// Reducer
type TAction = {
  type: "Toggle Modal";
  payload: TModalName;
};

// Reducer
function reducer(state: TState, action: TAction): TState {
  return produce(state, (draft) => {
    switch (action.type) {
      case "Toggle Modal":
        const modalName = action.payload;
        draft[modalName] = !state[modalName];
    }
  });
}

// Component
interface IProps {
  exitUrl?: string;
  handleReset?: () => void;

  blockCounter?: {
    count: number;
    icon?: IconType;
  };
}

export interface IAppNavbarProps extends IProps {
  currentStep: number;
  toggleModal: (modalName: TModalName) => void;
}
export function AppNavbar(props: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentStep } = useLocationStore();
  const numColumns = useBreakpointValue({ base: 2, sm: 3 });

  function toggleModal(modalName: TModalName) {
    dispatch({ type: "Toggle Modal", payload: modalName });
  }

  return (
    <>
      <SimpleGrid
        as="nav"
        columns={numColumns}
        mt={{ base: 3, md: 5 }}
        mb={{ base: 5, md: 10 }}
        alignItems="center"
      >
        <DesktopNav
          currentStep={currentStep}
          toggleModal={toggleModal}
          {...props}
        />
        <MobileNav
          currentStep={currentStep}
          toggleModal={toggleModal}
          {...props}
        />
        <NavModals
          handleReset={props.handleReset}
          modalState={state}
          toggleModal={toggleModal}
          exitUrl={props.exitUrl}
        />
      </SimpleGrid>
    </>
  );
}

import { useState } from "react";
import { Modal, ModalOverlay } from "@chakra-ui/react";

import { THookType } from "hook/redux/hook.types";
import { HookTypes } from "./hook-types.component";
import { HookSelect } from "./hook-select.component";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (hook: string) => void;
}
export function HookSelectModal(props: IProps) {
  const [hookType, setHookType] = useState<THookType>("common");
  const [mode, setMode] = useState<"type" | "select">("type");

  function chooseHookType(type: THookType) {
    setHookType(type);
    setMode("select");
  }

  function handleHookSelect(hook: string) {
    props.onSelect(hook);
    props.onClose();
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size={mode === "type" ? "lg" : "6xl"}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      {mode === "type" && <HookTypes onSelect={chooseHookType} />}
      {mode === "select" && (
        <HookSelect
          onSelect={handleHookSelect}
          hookType={hookType}
          goBack={() => setMode("type")}
        />
      )}
    </Modal>
  );
}

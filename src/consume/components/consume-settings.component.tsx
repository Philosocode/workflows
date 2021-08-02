import { FaCog } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import {
  ButtonGroup,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Switch,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { useToggle } from "shared/hooks/use-toggle.hook";
import { ModalContent } from "modal/components/modal-content.component";
import { ModalWrapper } from "modal/components/modal-wrapper.component";
import { IconButton } from "shared/components/icon-button.component";
import { Button } from "shared/components/button/button.component";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectConsumeState } from "consume/redux/consume.selectors";
import { updateSettings } from "consume/redux/consume.slice";

interface IFormProps {
  studyBlockTime: number;
  shouldPlayAlarm: boolean;
}
export function ConsumeSettings() {
  const [modalShowing, toggleModal] = useToggle(false);
  const { shouldPlayAlarm, studyBlockTime } =
    useAppSelector(selectConsumeState);

  const dispatch = useAppDispatch();

  const { control, register, getValues } = useForm<IFormProps>({
    mode: "onChange",
  });

  function submitForm() {
    dispatch(updateSettings(getValues()));
    toggleModal();
  }

  const focusBorderColor = useColorModeValue("green.500", "green.200");

  return (
    <>
      <IconButton
        aria-label="Settings"
        icon={<FaCog />}
        onClick={toggleModal}
      />
      <ModalWrapper isOpen={modalShowing} onClose={toggleModal}>
        <ModalContent
          header="Settings"
          body={
            <form>
              <VStack spacing={7} alignItems="start">
                <FormControl id="studyBlockTime">
                  <FormLabel>Study Block Time (minutes):</FormLabel>
                  <Controller
                    name="studyBlockTime"
                    control={control}
                    defaultValue={studyBlockTime}
                    render={({ field }) => (
                      <NumberInput
                        {...field}
                        maxW="100px"
                        mr="2rem"
                        min={0}
                        max={25}
                        focusBorderColor={focusBorderColor}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    )}
                  />
                </FormControl>

                <FormControl id="shouldPlayAlarm">
                  <FormLabel>Should Play Alarm:</FormLabel>
                  <Switch
                    colorScheme="green"
                    size="lg"
                    defaultChecked={shouldPlayAlarm}
                    {...register("shouldPlayAlarm")}
                  />
                </FormControl>
              </VStack>
            </form>
          }
          footer={
            <>
              <ButtonGroup spacing={5}>
                <Button onClick={submitForm}>Save</Button>
                <Button colorScheme="gray" onClick={toggleModal}>
                  Cancel
                </Button>
              </ButtonGroup>
            </>
          }
        />
      </ModalWrapper>
    </>
  );
}

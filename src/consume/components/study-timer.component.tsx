import { useAppSelector } from "shared/redux/store";
import {
  selectMaterialType,
  selectStudyBlockTime,
} from "consume/redux/consume.selectors";

import { Message } from "message/components/message.component";
import { Timer } from "timer/components/timer.component";

interface IProps {
  onNext: () => void;
}
export function StudyTimer(props: IProps) {
  const materialType = useAppSelector(selectMaterialType);
  const studyBlockTime = useAppSelector(selectStudyBlockTime);
  const studyMessage =
    materialType === "reading"
      ? `Read for ${studyBlockTime} minutes. Depending on the material, this may be a few paragraphs, or 1-2 pages`
      : `Watch for ${studyBlockTime} minutes.`;

  return (
    <>
      <Message>{studyMessage}</Message>
      <Timer duration={studyBlockTime} goToMenu={props.onNext} />
    </>
  );
}

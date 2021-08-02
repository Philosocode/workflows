import { useAppSelector } from "shared/redux/store";
import { selectConsumeState } from "consume/redux/consume.selectors";

import { Message } from "message/components/message.component";
import { Timer } from "timer/components/timer.component";
import { useHistory } from "react-router-dom";

export function StudyTimer() {
  const history = useHistory();
  const { materialType, step, studyBlockTime } =
    useAppSelector(selectConsumeState);

  const studyMessage =
    materialType === "reading"
      ? `Read for ${studyBlockTime} minute(s). Depending on the material, this may be a few paragraphs, or 1-2 pages`
      : `Watch for ${studyBlockTime} minute(s).`;

  return (
    <>
      <Message>{studyMessage}</Message>
      <Timer
        duration={studyBlockTime}
        onDone={() => history.push(`/consume/${step + 1}/menu`)}
      />
    </>
  );
}

import React, { useState } from "react";
import ReactMde, { getDefaultToolbarCommands } from "react-mde";
import { useColorMode } from "@chakra-ui/react";
import Showdown from "showdown";

import { TMarkdownEditorTab } from "./editor.types";
import lightStyles from "./markdown-editor.module.css";
import darkStyles from "./markdown-editor-dark.module.css";

const toolbarCommands = getDefaultToolbarCommands();

// remove the strikethrough command
toolbarCommands[0].pop();

// remove image
toolbarCommands[1].pop();

// remove to do
toolbarCommands[2].pop();

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

interface IProps {
  value: string;
  initialTab?: TMarkdownEditorTab;
  setValue?: (value: string) => void;
  placeholder?: string;
}
export interface IMarkdownEditorProps extends IProps {}
export const MarkdownEditor: React.FC<IProps> = ({
  initialTab,
  value,
  setValue,
  placeholder,
}) => {
  const [selectedTab, setSelectedTab] = useState<TMarkdownEditorTab>(
    initialTab ?? "write",
  );
  const { colorMode } = useColorMode();
  const styles = colorMode === "light" ? lightStyles : darkStyles;

  return (
    <ReactMde
      classes={{
        textArea: styles.textarea,
        toolbar: styles.toolbar,
        preview: styles.preview,
      }}
      childProps={{
        textArea: {
          placeholder,
        },
      }}
      value={value}
      onChange={setValue ? setValue : () => {}}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
      generateMarkdownPreview={(markdown) =>
        Promise.resolve(converter.makeHtml(markdown))
      }
      toolbarCommands={toolbarCommands}
    />
  );
};

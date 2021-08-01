import React, { useState } from "react";
import ReactMde, { getDefaultToolbarCommands } from "react-mde";
import Showdown from "showdown";

import { TMarkdownEditorTab } from "editor/shared/editor.types";
import styles from "editor/components/markdown-editor.module.css";

const toolbarCommands = getDefaultToolbarCommands();

// remove the strikethrough command
toolbarCommands[0].pop();

// remove to do command
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
export const MarkdownEditor: React.FC<IProps> = ({
  initialTab,
  value,
  setValue,
  placeholder,
}) => {
  const [selectedTab, setSelectedTab] = useState<TMarkdownEditorTab>(
    initialTab ?? "write",
  );

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

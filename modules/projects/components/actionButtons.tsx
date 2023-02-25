import Button from "@mui/material/Button";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PublicIcon from "@mui/icons-material/Public";
import type { SafeTypes } from "data/failSafe";
import useStore from "store/store";

interface ActionInterface {
  data: SafeTypes;
  variant?: "default" | "withText";
}

const ActionButtons = ({ data, variant }: ActionInterface) => {
  const SetNotice = useStore((state) => state.setNotification);
  const copyLink = () => {
    navigator.clipboard.writeText(data.clone_url).then(() => {
      SetNotice({
        activation: true,
        msg: "Coppied to Clipboard",
        status: "success",
      });
    });
  };

  return (
    <>
      <Button href={data.html_url} target="_blank" referrerPolicy="no-referrer">
        <GitHubIcon /> {variant==="withText"? "View Source":null}
      </Button>
      <Button onClick={copyLink}>
        <ContentCopyIcon /> {variant==="withText"? "Clone":null}
      </Button>
      {data.homepage && (
        <Button
          href={data.homepage}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <PublicIcon /> {variant==="withText"? "Visit":null}
        </Button>
      )}
    </>
  );
};

export default ActionButtons;

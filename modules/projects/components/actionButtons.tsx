import Button from "@mui/material/Button";
import useStore from "store/store";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import type { FC } from "react";
import type { ActionInterface } from "types/projectPageType";

const ActionButtons: FC<ActionInterface> = ({ data, variant }) => {
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
        <GitHubIcon /> {variant === "withText" ? "View Source" : null}
      </Button>
      <Button onClick={copyLink}>
        <ContentCopyIcon /> {variant === "withText" ? "Clone" : null}
      </Button>
      {data.homepage && (
        <Button
          href={data.homepage}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <PublicIcon /> {variant === "withText" ? "Visit" : null}
        </Button>
      )}
    </>
  );
};

export default ActionButtons;

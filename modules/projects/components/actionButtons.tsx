import Button from "@mui/material/Button";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PublicIcon from "@mui/icons-material/Public";

const ActionButtons = () => {
  return (
    <>
      <Button>
        <GitHubIcon />
      </Button>
      <Button>
        <ContentCopyIcon />
      </Button>
      <Button>
        <PublicIcon />
      </Button>
    </>
  );
};

export default ActionButtons;

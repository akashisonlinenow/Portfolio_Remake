import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

interface SkletionProps {
  width: number;
}

const SkeletonPlaceHolder: React.FC<SkletionProps> = ({ width }) => {
  return (
    <>
      <Stack direction={"column"} gap={2}>
        <Skeleton variant="rectangular" width={width} height={"8vw"} />
        {"Lorem ipsum dolor.".split(" ").map((e) => (
          <React.Fragment key={e}>
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Skeleton variant="circular" width={"5vw"} height={"5vw"} />
              <Skeleton
                variant="rectangular"
                width={`calc(${width}px - 6.5vw`}
                height={"5vw"}
              />
            </Stack>
            <Stack direction={"column"} alignItems={"center"} spacing={1}>
              <Skeleton variant="rectangular" width={width} height={"2vw"} />
              <Skeleton variant="rectangular" width={width} height={"2vw"} />
            </Stack>
          </React.Fragment>
        ))}
      </Stack>
    </>
  );
};

export default SkeletonPlaceHolder;

// TODO: Change Lorem Ipsum for mapping
// TODO: Type Still Remaining Here

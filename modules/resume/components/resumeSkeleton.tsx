import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

interface SkletionProps {
  width: number;
}

const SkeletonPlaceHolder: React.FC<SkletionProps> = ({ width }) => {
  return (
    <>
      <Stack direction={"column"} gap={2}>
        <Skeleton
          // sx={{ bgcolor: "grey.700" }}
          variant="rectangular"
          width={width}
          height={"10vw"}
        />
        {"Lorem ipsum dolor.".split(" ").map((e) => (
          <React.Fragment key={e}>
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Skeleton
                // sx={{ bgcolor: "grey.700" }}
                variant="circular"
                width={"4vw"}
                height={"4vw"}
              />
              <Skeleton
                // sx={{ bgcolor: "grey.700" }}
                variant="rectangular"
                width={`calc(${width}px - 4.5vw`}
                height={"5.5vw"}
              />
            </Stack>
            <Stack direction={"column"} alignItems={"center"}>
              <Skeleton variant="text" width={width} height={"1.5rem"} />
              <Skeleton variant="text" width={width} height={"1.5rem"} />
            </Stack>
          </React.Fragment>
        ))}
      </Stack>
    </>
  );
};

export default SkeletonPlaceHolder;

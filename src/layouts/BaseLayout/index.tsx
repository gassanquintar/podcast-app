import { FC, ReactNode, JSX } from "react";
import { Box, CssBaseline } from "@mui/material";

interface IProps {
  children?: ReactNode;
}

/**
 * BaseLayout component is used to render the base layout of the application.
 * @param {IProps} props
 * @returns {JSX.Element}
 */
const BaseLayout: FC<IProps> = ({ children }: IProps): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <Box>{children}</Box>
    </>
  );
};

export default BaseLayout;

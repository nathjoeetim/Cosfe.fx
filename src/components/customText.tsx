import { ReactNode } from "react";
import styled from "styled-components";

interface CustomTextProps {
  children: ReactNode;
}

function CustomText({ children }: CustomTextProps) {
  return <CustomTextComponent>{children}</CustomTextComponent>;
}

export default CustomText;

const CustomTextComponent = styled.span`
  color: gold;
`;

import { css } from "styled-components";
import { sideways, boxSize, marg, pad } from "../../../maps";

export default css`
  height: ${(props) => (props.h ? props.h : props.sqr ? props.sqr : "auto")};
  width: ${(props) => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  min-height: ${(props) => (props.minH ? props.minH : "none")};
  max-width: ${(props) => (props.maxW ? props.maxW : "none")};
  min-width: ${(props) => (props.minW ? props.minW : "none")};
  max-height: ${(props) => (props.maxH ? props.maxH : "none")};
  margin: ${(props) => (props.m ? props.m : marg)};
  padding: ${(props) => (props.p ? props.p : pad)};
  box-sizing: ${(props) => (props.boxSize ? props.boxSize : boxSize)};
`;

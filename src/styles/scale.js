import styled from 'styled-components';
import { colours } from '../styles/variables';

export const Wrapper = styled.section`
  margin: 4em;
  overflow: hidden;
  position: relative;
`;

export const Ruler = styled.section`
  // height: 4rem;
  // width: 100%;
  // background-color: rgb(115,199,192);
  // background-image: linear-gradient(to right, rgba(0,0,0,0.25) 6px, transparent 6px), linear-gradient(to right, transparent 12px, rgba(0,0,0,0.25) 12px, rgba(0,0,0,0.25) 14px, transparent 14px, transparent 20px, rgba(0,0,0,0.25) 20px, rgba(0,0,0,0.25) 22px, transparent 22px, transparent 28px, rgba(0,0,0,0.25) 28px, rgba(0,0,0,0.25) 30px, transparent 30px, transparent 36px, rgba(0,0,0,0.25) 36px, rgba(0,0,0,0.25) 38px, transparent 38px);
  // background-repeat: repeat-x;
  // background-size: 44px 30px, 44px 20px;
  // background-position: 8px bottom;
  // border-bottom: 2px solid rgba(0,0,0,0.25);
`;

const Face = styled.section`
  width: 1rem;
  height: 1rem;
  background-size: contain;
  opacity: 0.5;
  transform-origin: center center;
  position: absolute;
`;

export const SadEnd = styled(Face)`
  background: ${colours.teal};
  left: 0rem;
`;

export const HappyEnd = styled(Face)`
  background: pink;
  right: 0rem;
`;

export const Marker = styled(Face)`
  background: green;
  position: absolute;
  top: -4rem;
  left: -4rem;
`;

export const MarkerWrapper = styled.div`
  height: 4rem;
  width: 100%;
  position: relative;
  transition: all 300ms;
  transform: translateX(${props => props.scaleValue}%);
`;
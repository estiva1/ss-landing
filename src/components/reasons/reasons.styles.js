import styled, { css } from "styled-components";
import { device } from "../../breakpoints.styles";
import FramerMagnetic from "../../utils/framer-animations/framer-magnetic/framer-magnetic.component";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f1fbfe;
`;

export const ReasonsContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 130px;

  gap: 50px;
  overflow: hidden;

  @media ${device.xl} {
    padding: 100px 80px;
  }
  @media ${device.lg} {
    padding: 80px 60px;
  }
  @media ${device.smd} {
    padding: 60px 50px;
  }
  @media ${device.sm} {
    padding: 60px 30px;
  }
  @media ${device.xs} {
    padding: 60px 15px;
    gap: 40px;
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media ${device.xs} {
    gap: 3px;
  }
`;

export const Heading = styled.h2`
  color: #000;
  text-align: center;
  font-family: Titillium Web;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0;

  @media ${device.xs} {
    font-size: 1.5rem;
    line-height: 132%;
  }
`;

export const Paragraph = styled.span`
  color: #4e5969;
  text-align: center;
  font-family: Titillium Web;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;

  @media ${device.xs} {
    font-size: 1rem;
  }
`;

export const SelectWrapper = styled.div`
  display: none;

  @media ${device.md} {
    display: block;
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const TabsWrapper = styled.div`
  padding: 4px;
  border-radius: 42px;
  border: 1px solid #e6e6e6;
  margin-bottom: 50px;
  width: max-content;
  align-self: center;

  @media ${device.md} {
    display: none;
  }
`;

export const Columns = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-flow: row wrap;
  margin-inline: -10px;

  > *:nth-last-child(-n + 2) {
    margin-bottom: -40px;
  }

  @media ${device.sm} {
    > *:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }

    > *:nth-last-child(-n + 1) {
      margin-bottom: -40px;
    }
  }
`;

export const ColumnContainer = styled.div`
  width: 33.33%;
  padding-inline: 10px;
  padding-bottom: 40px;

  &:last-child {
    width: 100%;
  }

  @media ${device.sm} {
    width: 50%;

    &:last-child {
      width: 50%;
    }
  }
`;

export const ReasonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const ReasonText = styled.span`
  color: #4e5969;
  text-align: center;
  font-family: Titillium Web;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;

  @media ${device.xs} {
    line-height: 136%;
  }
`;

export const IconRoundBox = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: #fff;

  @media ${device.xs} {
    width: 72px;
    height: 72px;
  }
`;

export const MobileButtonBox = styled(FramerMagnetic)`
  @media ${device.xs} {
    align-self: stretch;
  }
`;

const applyIconStyles = () => {
  return css`
    background-size: cover;
    background-repeat: no-repeat;
  `;
};
export const Icon1 = styled.span`
  ${applyIconStyles};
  min-width: 44px;
  min-height: 47px;
  width: 44px;
  height: 47px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='44' height='47' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='1.51' d='M26.2 36.48H10.98a1.5 1.5 0 0 1-1.51-1.51V2.47c0-.83.67-1.5 1.5-1.5h17.39m-2.18 35.5v-.06c0-.66.5-1.22 1.16-1.29v0c.5-.05.93-.39 1.1-.87l.15-.47c.15-.43.04-.9-.27-1.2v0a1.18 1.18 0 0 1-.01-1.65l.25-.27a1.37 1.37 0 0 1 1.8-.15l.1.06c.38.28.9.3 1.32.07v0c.34-.2.56-.56.6-.95l.02-.25a1.5 1.5 0 0 1 1.5-1.38h.03m-7.75 8.42v.24c0 .66.54 1.2 1.2 1.2v0c.47 0 .9.28 1.1.73l.23.57c.19.46.14 1-.15 1.42l-.26.38c-.35.52-.3 1.22.15 1.67v0c.52.53 1.37.53 1.9 0l.11-.13c.38-.39.96-.5 1.47-.3v0c.52.23.84.75.8 1.31l-.02.37c-.06.78.58 1.44 1.36 1.41v0a1.32 1.32 0 0 0 1.27-1.32v-.3c0-.6.37-1.14.93-1.36l.18-.08c.42-.16.9-.07 1.23.24v0c.48.45 1.23.4 1.67-.09l.11-.13c.41-.47.44-1.16.07-1.66l-.07-.1a1.48 1.48 0 0 1-.23-1.28l.01-.06c.16-.54.61-.95 1.17-1.06l.11-.02a1.5 1.5 0 0 0 1.23-1.38l.02-.34a1.29 1.29 0 0 0-1.29-1.37v0a1.3 1.3 0 0 1-1.24-.95l-.03-.11c-.12-.43-.03-.9.24-1.25l.18-.23c.42-.55.38-1.32-.09-1.83l-.05-.06a1.34 1.34 0 0 0-1.93-.05l-.08.08c-.37.36-.93.43-1.38.19v0c-.36-.2-.59-.55-.62-.95l-.03-.43a1.5 1.5 0 0 0-1.5-1.4h-.02m0 0V7.54m0 0h-4.07a1.5 1.5 0 0 1-1.5-1.5V.95m5.57 6.57L28.37.96M13.92 12.97H29.4m-15.48 4.2H29.4M13.92 21.4H29.4m-15.48 4h9.35m10.67 7.39c-2.01 0-3.6 1.82-3.6 4 0 2.19 1.59 4 3.6 4 2 0 3.59-1.81 3.59-4 0-2.18-1.58-4-3.6-4Z'/%3e%3cdefs%3e%3clinearGradient id='a' x1='9.48' x2='51.79' y1='.96' y2='31.8' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon2 = styled.span`
  ${applyIconStyles};
  min-width: 47px;
  min-height: 44px;
  width: 47px;
  height: 44px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='47' height='44' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='1.14' d='M1 28.44V4.6c0-.23.19-.42.42-.42h43.6c.24 0 .42.19.42.42v23.85M1 28.44v4.1c0 .24.19.43.42.43h17.95M1 28.44h44.44m0 0v4.1c0 .24-.18.43-.42.43h-17.2M5.31 21.82l5.34-5.24c.1-.1.24-.15.38-.12l7.36 1.56c.14.03.3-.01.4-.12l5.53-5.8a.42.42 0 0 1 .48-.08l9.4 4.28c.16.07.34.05.46-.06l6.55-5.67m-21.85 22.4-.74 6.29m.74-6.3h8.44m0 0 .64 6.3m-13.62 0h17.31'/%3e%3cdefs%3e%3clinearGradient id='a' x1='1' x2='35.13' y1='4.17' y2='47.4' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon3 = styled.span`
  ${applyIconStyles};
  min-width: 47px;
  min-height: 46px;
  width: 47px;
  height: 46px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='47' height='46' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='1.5' d='M7.83 15.26v6.22m3.41-5.32v5.32m3.52-8.13v8.13m3.41-6.22v6.22m3.31-9.43v9.43m3.62-7.12v7.12m2.09 5.53a15.08 15.08 0 0 0 4.54-10.85A15.28 15.28 0 0 0 16.36 1 15.28 15.28 0 0 0 1 16.16a15.3 15.3 0 0 0 15.36 15.27c4.21 0 8.04-1.69 10.83-4.42Zm0 0 5.44 5.42m0 0-2.3 2.13a.4.4 0 0 0-.02.58l8.44 8.73.01.01c.16.15 3.08 2.74 5.62.2 2.59-2.59-.35-5.37-.4-5.42 0 0 0 0 0 0l-8.65-8.37a.4.4 0 0 0-.57 0l-2.13 2.14Z'/%3e%3cdefs%3e%3clinearGradient id='a' x1='1' x2='45.19' y1='1' y2='45.44' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon4 = styled.span`
  ${applyIconStyles};
  min-width: 47px;
  min-height: 44px;
  width: 47px;
  height: 44px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='47' height='44' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='1.2' d='M8.4 27v-2.16a.41.41 0 0 0-.4-.4H1.4a.41.41 0 0 0-.41.4v14.92c0 .23.18.4.41.4H8c.23 0 .42-.17.42-.4V37.6m0-10.6h2c.16 0 .3-.08.38-.21a6.26 6.26 0 0 1 6.26-2.94M8.4 27v10.6m21.19-9.67c0-2.64-2.5-2.5-2.76-2.47h-3.31m6.07 2.47c0 2.7-2.62 2.68-2.77 2.67h-5.77m8.54-2.67 6.68-6.06M8.41 37.6s18 .3 20.36.1c2.32-.2 15.1-15.5 15.62-16.13l.05-.04c.25-.23 2.08-1.96.07-3.78-2.03-1.84-3.79.05-4 .28a.51.51 0 0 1-.03.04l-4.2 3.8m0 0V9.21a.41.41 0 0 0-.41-.41h-5.86m0 0V4.58a.41.41 0 0 0-.41-.41h-5.66a.41.41 0 0 0-.41.4v8.44M30 8.8v18.5m-6.48-1.85h-2.89a.48.48 0 0 1-.33-.15 5.45 5.45 0 0 0-3.26-1.46m6.48 1.61V13.01m0 0h-6.07a.41.41 0 0 0-.41.42v10.42'/%3e%3cdefs%3e%3clinearGradient id='a' x1='1' x2='36.22' y1='4.17' y2='47.64' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon5 = styled.span`
  ${applyIconStyles};
  min-width: 45px;
  min-height: 44px;
  width: 45px;
  height: 44px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='45' height='44' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='1.2' d='M.6 20.72a2.55 2.55 0 0 1 2.52-2.43 2.58 2.58 0 0 1 2.67 2.43 2.64 2.64 0 0 1-2.67 2.76A2.61 2.61 0 0 1 .6 20.72Zm23.05-.4a2.55 2.55 0 0 1 2.51-2.43 2.58 2.58 0 0 1 2.68 2.43 2.64 2.64 0 0 1-2.68 2.76 2.61 2.61 0 0 1-2.51-2.76Zm13.37-7.58a2.55 2.55 0 0 1 2.51-2.43 2.58 2.58 0 0 1 2.68 2.43 2.64 2.64 0 0 1-2.68 2.75 2.61 2.61 0 0 1-2.51-2.75Zm-22.85.5a2.55 2.55 0 0 1 2.52-2.44 2.58 2.58 0 0 1 2.67 2.44 2.64 2.64 0 0 1-2.67 2.75 2.61 2.61 0 0 1-2.52-2.75Z'/%3e%3cpath stroke='url(%23b)' stroke-linecap='round' stroke-width='1.17' d='m6 19.39 7.87-4.6m5.5.5 4.28 3.2m5.39.5 7.78-4.6m-6.68 10.88a11.94 11.94 0 0 0 0-16.56 12.13 12.13 0 0 0-17.46 0 11.94 11.94 0 0 0 0 16.56 12.13 12.13 0 0 0 17.46 0Zm0 0 4.09 4.2m0 0-1.92 2a.4.4 0 0 0 .01.56l6.2 5.91s0 0 0 0c.01.02 2.8 2.69 4.69.7 1.88-1.98-.17-3.96-.2-3.99 0 0 0 0 0 0l-6.72-6.53a.4.4 0 0 0-.54 0l-1.52 1.34Z'/%3e%3cdefs%3e%3clinearGradient id='a' x1='0' x2='8.67' y1='9.71' y2='35.54' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='b' x1='5.99' x2='40.2' y1='5' y2='42.82' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon6 = styled.span`
  ${applyIconStyles};
  min-width: 44px;
  min-height: 46px;
  width: 44px;
  height: 46px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='44' height='46' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='1.49' d='M38.07 9.12V44.6c0 .22-.19.41-.42.41H6.41A.41.41 0 0 1 6 44.6V1.4c0-.22.19-.41.41-.41h24.67m6.99 8.12h-6.58a.41.41 0 0 1-.41-.41V1m6.99 8.12-7-8.12M11.56 20.74l7.68-4.2a.41.41 0 0 1 .45.04l5.42 4c.14.1.31.1.46.02l7.27-4.18M11.55 26.91h21.28m-21.28 5.55h21.28M11.55 38h15.52'/%3e%3cdefs%3e%3clinearGradient id='a' x1='6' x2='47.89' y1='1' y2='31.53' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon7 = styled.span`
  ${applyIconStyles};
  min-width: 44px;
  min-height: 46px;
  width: 44px;
  height: 46px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='44' height='46' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='1.49' d='M14.3 23.47v4.13m3.12-8.26v8.26m3.22-5.24v5.24m3.03-9.57v9.57m3.83 3.83a11.99 11.99 0 0 1-20.46-8.36 12.05 12.05 0 0 1 11.79-12.3 12.1 12.1 0 0 1 8.67 20.66Zm0 0 3.93 3.73m0 0L29.5 37.1a.4.4 0 0 0 0 .57l6.46 6.17s0 0 0 0c.04.03.44.4 1.03.7m-5.56-9.37 1.73-1.82a.4.4 0 0 1 .57-.01l1.9 1.83m1.36 9.38c.93.5 2.35.87 3.5-.4 1.86-2.05-.15-4.38-.29-4.53l-.01-.02-4.57-4.43M37 44.54H2.4a.4.4 0 0 1-.4-.4V1.4c0-.22.18-.4.4-.4h24m9.23 34.16V10.78m0 0H26.8a.4.4 0 0 1-.4-.4V1m9.23 9.78L26.4 1'/%3e%3cdefs%3e%3clinearGradient id='a' x1='2' x2='45.72' y1='1' y2='40.02' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon8 = styled.span`
  ${applyIconStyles};
  min-width: 46px;
  min-height: 44px;
  width: 46px;
  height: 44px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='46' height='44' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='1.31' d='M30.74 35.85H1.41a.41.41 0 0 1-.41-.41V9.69m37.23 26.16h6.36c.23 0 .41-.19.41-.41V9.69m-44 0V2.41A.4.4 0 0 1 1.41 2h43.18a.4.4 0 0 1 .41.41v7.28m-44 0h44M33.2 5.18v1.74m3.7-1.74v1.74m3.69-1.74v1.74M5.82 23.02v3.6m2.77-5.85v5.85m9.23-2.88v2.88m2.87-5.85v5.85m2.77-3.6v3.6m2.77-6.57v6.57m8.82-2.88v2.88m2.87-5.85v5.85m2.67-3.6v3.6m-11.7 3.56a9.79 9.79 0 0 1-6.97 2.9 9.69 9.69 0 0 1-9.74-9.03 9.91 9.91 0 0 1 9.74-10.56 9.77 9.77 0 0 1 6.98 16.7Zm0 0 3.08 3.1m0 0-1.36 1.46a.41.41 0 0 0 0 .57l4.73 4.73.03.03c.18.2 2.13 2.45 3.89.5 1.84-2.06 0-3.8 0-3.8s0 0 0 0L34 31.8a.41.41 0 0 0-.57.01l-1.47 1.46Z'/%3e%3cdefs%3e%3clinearGradient id='a' x1='1' x2='40.12' y1='2' y2='45.73' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon9 = styled.span`
  ${applyIconStyles};
  min-width: 46px;
  min-height: 44px;
  width: 46px;
  height: 44px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='46' height='44' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='.7' d='M10.91 18.82v5.57m3.44-6.88v6.88m3.44-4.66v4.66m3.54-8.1v8.1m3.34-5.97v5.97m3.54-4.66v4.66m3.44-6.88v6.88m3.54-8.9v8.9M4.84 30.35V8.4c0-.22.18-.4.4-.4h35.41c.22 0 .4.18.4.4v21.95m-36.2 0H1.47a.39.39 0 0 0-.39.47c.18.78.6 2.33 1.33 3.18.88 1.02 2.9 1.76 3.27 1.9l.13.02h34.66c.05 0 .1-.01.14-.03.37-.14 2.24-.9 3.07-1.9.7-.85 1.08-2.4 1.23-3.18a.39.39 0 0 0-.39-.46h-3.47m-36.22 0H18.7a.4.4 0 0 1 .32.16l.77 1c.08.1.2.16.32.16h6.05a.4.4 0 0 0 .35-.2l.57-.92a.4.4 0 0 1 .34-.2h13.64'/%3e%3cdefs%3e%3clinearGradient id='a' x1='1' x2='26.26' y1='8' y2='47.81' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon10 = styled.span`
  ${applyIconStyles};
  min-width: 44px;
  min-height: 46px;
  width: 44px;
  height: 46px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='44' height='46' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='1.49' d='m25 32.17 11.14-7.83a.4.4 0 0 0 .17-.33v-4.68m-11.3 12.84V42a.4.4 0 0 1-.23.36l-4.68 2.35a.4.4 0 0 1-.6-.37V32.17m5.5 0h-5.5m0 0L8.19 24.45A.4.4 0 0 1 8 24.1v-4.73m0 0v-4.53c0-.22.18-.4.4-.4h9.17M8 19.37l28.31-.05m0 0v-4.48a.4.4 0 0 0-.4-.4H17.57m-7.23-6.22V12m7.23-1.22v3.66m11.62-6.2V12m-2.14-8.35v3.87M20.02 1v3.77M14 4.06c-1.31 0-2.01 1.43-1.94 2.75.07 1.21.72 2.44 1.94 2.44s1.87-1.23 1.93-2.44c.08-1.32-.62-2.75-1.93-2.75Zm9.47 3.15c-1.31 0-2 1.44-1.93 2.75.06 1.22.71 2.45 1.93 2.45s1.87-1.23 1.94-2.45c.07-1.3-.63-2.75-1.94-2.75ZM32.85 1c-1.31 0-2 1.44-1.93 2.75.07 1.22.71 2.44 1.93 2.44s1.87-1.22 1.94-2.44C34.86 2.44 34.17 1 32.85 1Z'/%3e%3cdefs%3e%3clinearGradient id='a' x1='8' x2='48.05' y1='1' y2='26.77' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon11 = styled.span`
  ${applyIconStyles};
  min-width: 44px;
  min-height: 45px;
  width: 44px;
  height: 45px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='44' height='45' fill='none'%3e%3cpath fill='url(%23a)' d='M1.67 22.4a.75.75 0 1 0 .75 1.29l-.75-1.3Zm40-22.4-8.62.03 4.33 7.44L41.66 0ZM.24 30.13v13.45h1.5V30.13H.25Zm1.17 14.62h6.25v-1.5H1.42v1.5Zm7.42-1.17V30.13h-1.5v13.45h1.5ZM7.67 28.97H1.42v1.5h6.25v-1.5Zm4.05-5.51v20.12h1.5V23.46h-1.5Zm1.17 21.29h6.25v-1.5H12.9v1.5Zm7.41-1.17V23.46h-1.49v20.12h1.5ZM19.14 22.3H12.9v1.49h6.25v-1.5Zm3.95-5.72v27h1.49v-27h-1.5Zm1.16 28.17h6.26v-1.5h-6.26v1.5Zm7.42-1.17v-27h-1.5v27h1.5Zm-1.16-28.16h-6.26v1.49h6.26v-1.5ZM34.45 10v33.57h1.5V10.01h-1.5Zm1.17 34.74h6.25v-1.5h-6.25v1.5Zm7.41-1.17V10.01h-1.49v33.57h1.5ZM41.87 8.85h-6.25v1.49h6.25v-1.5ZM2.42 23.69 36.24 4.02l-.75-1.29L1.67 22.4l.75 1.29ZM43.03 10c0-.64-.52-1.16-1.16-1.16v1.49a.33.33 0 0 1-.33-.33h1.5Zm-1.16 34.74c.64 0 1.16-.52 1.16-1.17h-1.49c0-.18.15-.33.33-.33v1.5Zm-7.42-1.17c0 .65.52 1.17 1.17 1.17v-1.5c.18 0 .32.15.32.33h-1.49ZM35.95 10c0 .18-.15.33-.33.33v-1.5c-.65 0-1.17.53-1.17 1.17h1.5Zm-4.28 6.57c0-.64-.52-1.16-1.16-1.16v1.49a.33.33 0 0 1-.33-.33h1.49Zm-1.16 28.17c.64 0 1.16-.52 1.16-1.17h-1.5c0-.18.16-.33.34-.33v1.5Zm-7.42-1.17c0 .65.52 1.17 1.16 1.17v-1.5c.18 0 .33.15.33.33h-1.5Zm1.49-27c0 .18-.15.33-.33.33v-1.5c-.64 0-1.16.53-1.16 1.17h1.49Zm-4.27 6.88c0-.64-.53-1.16-1.17-1.16v1.49a.33.33 0 0 1-.33-.33h1.5Zm-1.17 21.29c.64 0 1.16-.52 1.16-1.17h-1.49c0-.18.15-.33.33-.33v1.5Zm-7.42-1.17c0 .65.52 1.17 1.17 1.17v-1.5c.18 0 .32.15.32.33h-1.49Zm1.5-20.12c0 .18-.15.33-.33.33v-1.5c-.65 0-1.17.53-1.17 1.17h1.5Zm-4.38 6.67c0-.64-.52-1.16-1.17-1.16v1.5a.33.33 0 0 1-.33-.34h1.5ZM7.67 44.75c.65 0 1.17-.52 1.17-1.17h-1.5c0-.18.15-.33.33-.33v1.5ZM.25 43.58c0 .65.52 1.17 1.17 1.17v-1.5c.18 0 .33.15.33.33H.25Zm1.5-13.45c0 .18-.15.33-.33.33v-1.49c-.65 0-1.17.52-1.17 1.16h1.5Z'/%3e%3cdefs%3e%3clinearGradient id='a' x1='1' x2='44.91' y1='0' y2='41.21' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;
export const Icon12 = styled.span`
  ${applyIconStyles};
  min-width: 45px;
  min-height: 44px;
  width: 45px;
  height: 44px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='45' height='44' fill='none'%3e%3cpath stroke='url(%23a)' stroke-linecap='round' stroke-width='1.2' d='M.6 20.72a2.55 2.55 0 0 1 2.52-2.43 2.58 2.58 0 0 1 2.67 2.43 2.64 2.64 0 0 1-2.67 2.76A2.61 2.61 0 0 1 .6 20.72Zm23.05-.4a2.55 2.55 0 0 1 2.51-2.43 2.58 2.58 0 0 1 2.68 2.43 2.64 2.64 0 0 1-2.68 2.76 2.61 2.61 0 0 1-2.51-2.76Zm13.37-7.58a2.55 2.55 0 0 1 2.51-2.43 2.58 2.58 0 0 1 2.68 2.43 2.64 2.64 0 0 1-2.68 2.75 2.61 2.61 0 0 1-2.51-2.75Zm-22.85.5a2.55 2.55 0 0 1 2.52-2.44 2.58 2.58 0 0 1 2.67 2.44 2.64 2.64 0 0 1-2.67 2.75 2.61 2.61 0 0 1-2.52-2.75Z'/%3e%3cpath stroke='url(%23b)' stroke-linecap='round' stroke-width='1.17' d='m6 19.39 7.87-4.6m5.5.5 4.28 3.2m5.39.5 7.78-4.6m-6.68 10.88a11.94 11.94 0 0 0 0-16.56 12.13 12.13 0 0 0-17.46 0 11.94 11.94 0 0 0 0 16.56 12.13 12.13 0 0 0 17.46 0Zm0 0 4.09 4.2m0 0-1.92 2a.4.4 0 0 0 .01.56l6.2 5.91s0 0 0 0c.01.02 2.8 2.69 4.69.7 1.88-1.98-.17-3.96-.2-3.99 0 0 0 0 0 0l-6.72-6.53a.4.4 0 0 0-.54 0l-1.52 1.34Z'/%3e%3cdefs%3e%3clinearGradient id='a' x1='0' x2='8.67' y1='9.71' y2='35.54' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='b' x1='5.99' x2='40.2' y1='5' y2='42.82' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;

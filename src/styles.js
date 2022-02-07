import { createGlobalStyle, css, keyframes } from 'styled-components';

export const sizes = {
  desktopContentWidth: '1440px',
  desktopContentWidthLarge: '1720px',
  desktopShrinkBreakpoint: '1370px',
  dtSmallMax: '1024px',
  dtBreakpointMin: '992px',
  tbBreakpointMax: '991px',
  tbBreakpointMin: '768px',
  spBreakpointMax: '767px',
  xsBreakpointMax: '320px',
  xsBreakpointMin: '220px',
  marginBetweenComponentsDt: '355px',
  marginBetweenComponentsSp: '24px',
  marginBetweenComponentsTb: '97px',
};

export const backgrounds = {
  lightBlue: '#0079FF',
  lynch: '#697C9A',
  kashmirBlue: '#4B6A9B',
  ebonyClay: '#2B3442',
  zircon: '#F6F8FF',
  azureRadiance: '#0079FF',
  bigStone: '#141D2F',
  cloudBurst: '#1E2A47',
};

export const mixins = {
  contentWide: css`
    margin-left: auto;
    margin-right: auto;
    max-width: 730px;
    width: ${sizes.desktopContentWidth};

    @media (max-width: ${sizes.spBreakpointMax}) {
      max-width: calc(100% - 30px);
    }
  `,

  contentWideLarge: css`
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 100px);
    width: ${sizes.desktopContentWidthLarge};

    @media (max-width: ${sizes.dtSmallMax}) {
      max-width: calc(100% - 30px);
    }

    @media (max-width: ${sizes.tbBreakpointMax}) {
      max-width: calc(100% - 50px);
    }

    @media (max-width: ${sizes.spBreakpointMax}) {
      max-width: calc(100% - 40px);
    }
  `,

  componentMargin: css`
    margin-bottom: ${sizes.marginBetweenComponentsDt};

    @media (max-width: ${sizes.spBreakpointMax}) {
      margin-bottom: ${sizes.marginBetweenComponentsSp};
    }
  `,

  componentStandardBorderRadius: css`
    border-radius: 15px;
  `,

  componentBorderRadius: css`
    border-radius: 0 0 40px 0;
  `,

  componentBorderRadiusSmall: css`
    border-radius: 0 0 24px 0;
  `,
};

export const animations = {
  fadeIn: keyframes`
        0% { opacity: 0; }
        100% { opacity: 1; }
    `,
};

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${backgrounds.zircon};
        font-family: Space Mono, Verdana, sans-serif;
        font-weight: 400;
        font-size: 15px;
        margin: 0;
        padding: 0;
    }

    h1 {
        color: ${backgrounds.ebonyClay};
        font-family: Space Mono, Verdana, sans-serif;
        font-size: 26px;
        font-weight: 700;
        line-height: 1.4;

        @media (max-width: ${sizes.tbBreakpointMax}) {
            font-size: 50px;
            line-height: 1.35;
        }

        @media (max-width: ${sizes.spBreakpointMax}) {
            font-size: 7vw;
        }
    }

    h2 {
        color: ${backgrounds.ebonyClay};
        font-family: Space Mono, Verdana, sans-serif;
        font-size: 22px;
        line-height: 1.2;

        @media (max-width: ${sizes.tbBreakpointMax}) {
            font-size: 44px;
            line-height: 1.25;
        }

        @media (max-width: ${sizes.spBreakpointMax}) {
            font-size: 6.5vw;
        }
    }

    h3 {
        color: ${backgrounds.azureRadiance};
        font-family: Space Mono, Verdana, sans-serif;
        font-size: 16px;
        line-height: 1;

        @media (max-width: ${sizes.tbBreakpointMax}) {
            font-size: 40px;
            line-height: 1.35;
        }

        @media (max-width: ${sizes.spBreakpointMax}) {
            font-size: 6vw;
        }
    }

    h4 {
        color: ${backgrounds.kashmirBlue};
        font-family: 'Space Mono', Verdana, sans-serif;
        font-size: 13px;
        line-height: 1;

        @media (max-width: ${sizes.tbBreakpointMax}) {
            font-size: 40px;
            line-height: 1.35;
        }

        @media (max-width: ${sizes.spBreakpointMax}) {
            font-size: 6vw;
        }
    }

    button {
      background: ${backgrounds.azureRadiance};
      border: none;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      font-family: Space Mono, Verdana, sans-serif;
      padding: 13px 24px;
    }

    input {
      background: white url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIESURBVHgBrVXLUQJBEH29lqVVHjQDMQMyECPQDNQI9KaUB7EsS7hhBEgEYgRiBpgBZsBJpSwYX/fMIuwu/33UDsPQs697uue1YBrK7hAOJT4niFDgyp6tD9GB2POMR3nHApDUyrUrcGzwn1Kw6HHskqwXfhc594SO6xu0e5DPxUnUe6AVvG7zJXf4odd16SUcKXE85e6zQFZBVe7mk1y5Yx5LyzwfcFNNnjAPGrXgjbPCLCIZGYPGESPQ8O/lA4tinAjcm5GnKHzf0lC9uVyKQFEVzdeRnYBjMVy6vTSJ9+QMmoNHaWIVKNEQdXN0i7lKkQgubKZG62AbPofCkk+ROJakoiavWAcV0eNqW+knjiziR0nayAddG3ewO0kSX6w8SQY4mCTxNzofIgnvGaA3SeLlooA8EOf3N0Q0IollxEvK6qgw2V7vUjIUk3j9WQd9HIdZ6ipEJgNx6a0ajV5o72SXb2ynSRSblBOFysKN28cy0Dvh8GK3nYeWJfueRPVKSKSGA3qyKJFGsGXCWrQovpF5oSWxSYWyYnONaiPbM/N+m3IkdgJath0+ReuafYplIvHZnfFfun27VS8l1L6WaRRKdbz3XLuGCW0GUZokRtmpmp5YQYyrgpd07fEtfKE54fUUoukkyehiqKzPtp0aUb5QorJz/NZjH3XGfFGVcyA0MeIPVn/H39/FFBQAAAAASUVORK5CYII=) no-repeat left;
      background-position: 20px;
      border: none;
      border-color: #979797;
      padding: 24px 60px;
      width: inherit;

      ::placeholder {
        font-family: Space Mono;
      }
    }
`;

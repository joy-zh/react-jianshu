import { createGlobalStyle } from 'styled-components'

export const GlobalIconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1604989775333'); /* IE9 */
    src: url('./iconfont.eot?t=1604989775333#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1604989775333') format('woff'),
    url('./iconfont.ttf?t=1604989775333') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1604989775333#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  .fill {
    fill: ${({ theme: { colors } }) => colors.success};
  }
`

export const Success: React.FC<{ className?: string }> = (props) => (
  <Wrapper
    className={`success ${props.className}`}
    fill="none"
    height="25"
    viewBox="0 0 24 25"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="fill"
      d="M11.852 24.293c1.609 0 3.12-.309 4.535-.926a11.855 11.855 0 003.75-2.531 12.203 12.203 0 002.543-3.75c.617-1.422.925-2.938.925-4.547 0-1.61-.308-3.121-.925-4.535a12.021 12.021 0 00-2.543-3.75 11.76 11.76 0 00-3.75-2.543A11.295 11.295 0 0011.84.785c-1.61 0-3.125.309-4.547.926a11.797 11.797 0 00-3.738 2.543 12.02 12.02 0 00-2.543 3.75C.402 9.418.098 10.93.098 12.539c0 1.61.304 3.125.914 4.547a12.203 12.203 0 002.543 3.75 12.033 12.033 0 003.75 2.531c1.422.617 2.937.926 4.547.926zm0-1.512c-1.422 0-2.75-.265-3.985-.797a10.347 10.347 0 01-3.258-2.203 10.346 10.346 0 01-2.203-3.258 10.154 10.154 0 01-.785-3.984c0-1.414.262-2.738.785-3.973a10.409 10.409 0 012.192-3.27 10.093 10.093 0 013.257-2.202 10.025 10.025 0 013.985-.797c1.422 0 2.75.265 3.984.797a10.092 10.092 0 013.258 2.203 10.217 10.217 0 012.215 3.27 9.942 9.942 0 01.797 3.972c0 1.414-.266 2.742-.797 3.984a10.185 10.185 0 01-2.192 3.258 10.31 10.31 0 01-3.27 2.203c-1.241.532-2.57.797-3.983.797zm-1.278-4.687c.297 0 .54-.137.727-.41l5.695-8.907a1.76 1.76 0 00.14-.27c.048-.1.071-.198.071-.292a.6.6 0 00-.223-.48.761.761 0 00-.504-.188c-.25 0-.46.133-.632.398l-5.309 8.39-2.707-3.339a.823.823 0 00-.316-.27.73.73 0 00-.352-.082.674.674 0 00-.492.211.708.708 0 00-.2.504c0 .18.071.368.212.563l3.14 3.762c.11.14.223.246.34.316a.904.904 0 00.41.094z"
    />
  </Wrapper>
)
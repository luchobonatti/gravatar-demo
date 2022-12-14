import styled, { css } from 'styled-components'

import { RadioButton } from '@/src/components/form/RadioButton'

const Wrapper = styled.div<{ disabled?: boolean }>`
  align-items: center;
  column-gap: 8px;
  display: grid;
  grid-template-columns: ${({ theme: { checkBox } }) => checkBox.dimensions} 1fr;
  max-width: fit-content;

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          cursor: pointer;
        `}
`

const Label = styled.span`
  color: ${({ theme: { colors } }) => colors.textColor};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.2;
  position: relative;
  top: 1px;
`

export const LabeledRadioButton: React.FC<{
  active?: boolean
  disabled?: boolean
  onClick?: () => void
}> = ({ active, children, disabled, onClick, ...restProps }) => (
  <Wrapper disabled={disabled} onClick={onClick} {...restProps}>
    <RadioButton active={active} disabled={disabled} />
    <Label>{children}</Label>
  </Wrapper>
)

import styled from 'styled-components'
import { cores } from '../../globalStyles'
import { Props } from './index'

//configuração CSS do container.
export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
`

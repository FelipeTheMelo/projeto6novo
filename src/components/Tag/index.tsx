import { TagContainer } from './styles'

//Configuração de tipagem das Propriedades.
export type Props = {
  children: string
}

//Const principal da tag.
const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

//Exportações
export default Tag

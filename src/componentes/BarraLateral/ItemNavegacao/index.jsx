import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  align-items: center;
  color: ${(props) => (props.$ativo ? '#7B78E5' : '#D9D9D9')};
  cursor: pointer;
  display: flex;
  font-family: ${(props) => (props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular')};
  font-size: 24px;
  gap: 22px;
  line-height: 29px;
  margin-bottom: 30px;
`;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;

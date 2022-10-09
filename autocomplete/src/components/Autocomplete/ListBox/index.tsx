import * as S from './styles';

interface IListBox {
  children: React.ReactNode;
  onScreen: boolean;
}

export const ListBox = ({ children, onScreen }: IListBox) => {
  if (!onScreen) return <></>;
  return <S.BoxWrapper>{children}</S.BoxWrapper>;
};

export default ListBox;

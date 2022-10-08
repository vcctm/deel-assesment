import { Option } from '..';
import * as S from './styles';

interface IListItem<T> {
  option: Option<T>;
  onClick: any;
}

export const ListItem = <T,>({ option, onClick }: IListItem<T>) => {
  return (
    <S.ItemWrapper onClick={(event) => onClick(event, option)}>
      {option.title}
    </S.ItemWrapper>
  );
};

export default ListItem;

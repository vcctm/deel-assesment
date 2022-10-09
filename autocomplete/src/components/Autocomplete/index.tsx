import { RefObject, useEffect, useRef, useState } from 'react';
import { Input } from './Input';
import ListBox from './ListBox';
import ListItem from './ListItem';
import { AutocompleteWrapper } from './styles';

export type Option<DataType> = {
  id: Extract<keyof DataType, string>;
  title: string;
};

interface IAutocompleteProps<T> {
  options: Option<T>[];
  placeHolder: string;
  onSelect: any;
}

export const Autocomplete = <T,>({
  options,
  placeHolder,
  onSelect,
}: IAutocompleteProps<T>) => {
  const inputRef = useRef<HTMLInputElement>();
  const [value, setValue] = useState<string>('');
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([...options]);
  const [defaultOptions, setDefaultOptions] = useState([...options]);

  useEffect(() => {
    setDefaultOptions([...options]);
    setFilteredOptions([...options]);
  }, [options]);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
    if (value.length <= 0) return setFilteredOptions([...defaultOptions]);
    setFilteredOptions(
      options.filter((product: any) =>
        product.title.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const handleSelectOption = (
    event: React.MouseEventHandler<HTMLButtonElement> | undefined,
    option: Option<T>,
  ) => {
    setValue(option.title);
    onSelect(option);
    setFilteredOptions(
      options.filter((product: any) =>
        product.title.toLowerCase().includes(option.title.toLowerCase()),
      ),
    );
    setShowOptions(false);
  };

  /*
    this is a hack to handle event change,
    styled component input unfortunally
    don't allow to use 'onBlur prop'
  */
  useEffect(() => {
    const externalEventHandler = (e: any) => {
      if (!showOptions) return;
      const node: any = inputRef.current;
      if (node && node.contains(e.target)) {
        return;
      }
      setShowOptions(false);
    };
    if (showOptions) {
      document.addEventListener('click', externalEventHandler);
    } else {
      document.removeEventListener('click', externalEventHandler);
    }
    return () => {
      document.removeEventListener('click', externalEventHandler);
    };
  }, [showOptions]);

  return (
    <AutocompleteWrapper data-testid='autcomplete-id'>
      <Input
        ref={inputRef as RefObject<HTMLInputElement>}
        onChange={handleOnChangeInput}
        value={value ?? ''}
        placeHolder={placeHolder}
        onFocus={() => setShowOptions(true)}
      />
      <ListBox onScreen={showOptions}>
        {filteredOptions.map((p) => (
          <ListItem option={p} onClick={handleSelectOption} key={p.id} />
        ))}
      </ListBox>
    </AutocompleteWrapper>
  );
};

export default Autocomplete;

import { StylesConfig } from 'react-select';
import { qt } from '../../context';

export const stylesSelect: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    padding: 20,
    borderBottom: `1px solid ${qt('grays')(3)}`,
    color: `${qt('blacks')(1)}`,
    background: state.isSelected ? `${qt('yellows')(0)}` : `${qt('whites')(0)}`,
    fontFamily: `${qt('body')}`,
    ':hover': {
      backgroundColor: state.isSelected
        ? `${qt('yellows')(0)}`
        : `${qt('whites')(1)}`,
    },
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? `${qt('yellows')(1)}` : `${qt('grays')(2)}`,
    boxShadow: state.isFocused ? `0 0 0 1px ${qt('yellows')(1)}` : '',
    ':hover': {
      borderColor: `${qt('yellows')(1)}`,
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    opacity: state.isDisabled ? 0.5 : 1,
    fontFamily: `${qt('body')}`,
    color: `${qt('blacks')(1)}`,
  }),
  placeholder: () => ({
    fontFamily: `${qt('body')}`,
    color: `${qt('grays')(1)}`,
  }),
};

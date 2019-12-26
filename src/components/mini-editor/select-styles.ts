import { StylesConfig } from 'react-select';
import { qt } from '../query';

export const stylesSelect: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    padding: '20px',
    borderBottom: `1px solid ${qt('grays')(3)}`,
    color: `${qt('blacks')(1)}`,
    background: state.isSelected ? `${qt('blues')(0)}` : `${qt('whites')(0)}`,
    fontFamily: `${qt('body')}`,
    ':hover': {
      backgroundColor: state.isSelected
        ? `${qt('blues')(0)}`
        : `${qt('whites')(1)}`,
    },
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? `${qt('blues')(0)}` : `${qt('grays')(2)}`,
    boxShadow: state.isFocused ? `0 0 0 1px $${qt('blues')(0)}` : '',
    ':hover': {
      borderColor: `${qt('blues')(2)}`,
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

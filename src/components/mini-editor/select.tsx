/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
import { Label } from '@theme-ui/components';
import Select, { StylesConfig } from 'react-select';

import { EditorSelectProps, SelectOptionProps } from '.';
import { qt } from '../../query';

const stylesLabel: SxStyleProp = {
  p: `${qt('spaces')(3)}px 0`,
  fontFamily: `${qt('body')}`,
  fontSize: `${qt('fontSizes')(0)}px`,
  color: `${qt('blacks')(1)}`,
};

export const stylesSelect: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    padding: `${qt('spaces')(5)}px`,
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
    borderWidth: '2px',
    boxShadow: state.isFocused ? `0 0 0 1px ${qt('blues')(0)}` : '',
    cursor: 'pointer',
    ':hover': {
      borderColor: `${qt('blues')(0)}`,
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

export const EditorSelect: React.FC<EditorSelectProps> = (props): JSX.Element =>
  props.currentValue &&
  props.options && (
    <Fragment>
      <Label sx={stylesLabel}>{props.label}</Label>
      <Select
        placeholder={`Select a ${props.label}`}
        value={props.currentValue}
        styles={stylesSelect}
        options={props.options}
        isSearchable={true}
        onChange={e => props.onChange(e as SelectOptionProps, props.label)}
      />
    </Fragment>
  );

EditorSelect.displayName = 'EditorSelect';

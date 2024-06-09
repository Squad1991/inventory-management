import { css } from '@compiled/react';
import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { CSSObjectWithLabel, DropdownIndicatorProps, components } from 'react-select';
import AsyncSelect from 'react-select/async';

interface MovieOption {
  label: string;
  value: string;
}

const paddingResetStyles = {
  paddingTop: 0,
  paddingBottom: 0,
};

const customStyles = {
  valueContainer: (base: CSSObjectWithLabel) => ({
    ...base,
    ...paddingResetStyles,
  }),
  dropdownIndicator: (base: CSSObjectWithLabel) => ({
    ...base,
    ...paddingResetStyles,
  }),
  input: (base: CSSObjectWithLabel) => ({
    ...base,
    ...paddingResetStyles,
  }),
  clearIndicator: (base: CSSObjectWithLabel) => ({
    ...base,
    ...paddingResetStyles,
  }),
  control: (base: CSSObjectWithLabel) => ({
    ...base,
    borderRadius: '2rem',
    height: 25,
    minHeight: 25,
  }),
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const DropdownIndicator = (props: DropdownIndicatorProps<MovieOption, true>) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaCameraRetro />
    </components.DropdownIndicator>
  );
};

const MovieSearch = () => (
  <AsyncSelect
    placeholder="Search movie by name..."
    components={{ DropdownIndicator }}
    css={css({
      width: '100%',
    })}
    styles={customStyles}
    isSearchable
    options={options}
  />
);

export default MovieSearch;

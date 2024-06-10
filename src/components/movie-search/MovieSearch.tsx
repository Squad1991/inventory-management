import { css } from '@compiled/react';
import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  OptionProps,
  SingleValue,
  components,
} from 'react-select';
import AsyncSelect from 'react-select/async';
import Box from '~src/components/common/primitive/Box';
import Stack from '~src/components/common/primitive/Stack';
import TextOverflow from '~src/components/common/primitive/TextOverflow';
import { fetchData } from '~src/components/common/utils/API';
import { formatDate } from '~src/components/common/utils/date-utils';
import MoviePoster from '~src/components/movie-poster/MoviePoster';
import { Movie, PaginatedResponse } from '~src/routes/home/types';

interface MovieOption {
  label: string;
  value: Movie;
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
    borderRadius: '0.5rem',
    height: 30,
    width: '100%',
    minHeight: 30,
  }),
};

const DropdownIndicator = (props: DropdownIndicatorProps<MovieOption, false>) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaCameraRetro />
    </components.DropdownIndicator>
  );
};

const CustomOption = (props: OptionProps<MovieOption>) => {
  return (
    <div
      css={css({
        display: 'flex',
        overflowX: 'hidden',
        borderBlockEnd: '1px solid #e0e0e0',
        paddingBlockStart: '0.5rem',
        paddingInlineStart: '0.5rem',
        paddingBlockEnd: '0.5rem',
        cursor: 'pointer',
      })}
      onClick={() => props.selectOption(props.data)}
      {...props}
    >
      <MoviePoster
        width={70}
        height={70}
        alt={props.data.value.original_title}
        src={`${props.data.value.poster_path || props.data.value.backdrop_path}`}
      />
      <Stack>
        <TextOverflow text={props.data.value.original_title} />
        {props.data.value.release_date && (
          <Box>{formatDate(new Date(props.data.value.release_date))}</Box>
        )}
      </Stack>
    </div>
  );
};

const MovieSearch = () => {
  const navigate = useNavigate();

  const loadMovie = async (inputValue: string, callback: (options: MovieOption[]) => void) => {
    if (!inputValue || inputValue.length < 3) {
      return Promise.resolve([]);
    }
    const { results } = await fetchData<PaginatedResponse<Movie>>({
      url: `https://api.themoviedb.org/3/search/movie?query=${inputValue}`,
    });

    return results.map(movie => ({
      label: movie.title,
      value: movie,
    }));
  };

  const navigateToMovie = (option: SingleValue<MovieOption>) => {
    navigate(`/movie/${option?.value.id}`);
  };

  return (
    <AsyncSelect
      placeholder="Search movie by name..."
      components={{ DropdownIndicator, Option: CustomOption }}
      css={css({ width: '100%' })}
      value={null}
      loadOptions={loadMovie}
      closeMenuOnSelect
      styles={customStyles}
      isSearchable
      isMulti={false}
      noOptionsMessage={({ inputValue }) =>
        inputValue.length < 3
          ? 'Please enter at least 3 characters to search for a movie'
          : 'No movies found'
      }
      onChange={navigateToMovie}
    />
  );
};

export default MovieSearch;

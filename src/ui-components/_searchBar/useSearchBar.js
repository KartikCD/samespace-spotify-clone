import * as React from 'react';
import { debounce } from 'lodash';

export default function useSearchBar(queryBlock, queryParameters, timer) {
  const [search, setSearch] = React.useState("");

  const onSearch = React.useCallback((searchString) => {
    queryBlock({
      variables: {
        ...queryParameters,
        search: searchString
      }
    })
  }, [queryBlock, queryParameters]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceCallback = React.useCallback(debounce(onSearch, timer || 300), [onSearch, debounce, timer])

  React.useEffect(() => {
    debounceCallback(search)
  }, [search, debounceCallback]);

  const onChange = React.useCallback((e) => {
    setSearch(e.target.value);
  }, [setSearch]);

  const onClick = React.useCallback(() => {
    onSearch(search)
  }, [search, onSearch]);

  return {
    onChange,
    search,
    onClick
  }

}
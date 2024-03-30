import { useMemo, useState, useLayoutEffect } from "react";
// import { objectToString } from "../utils/object";
import _ from "lodash";
import { useSearchParams } from "react-router-dom";

export default ({
  initialFilters = {},
  withQueryParams = true,
  withInitQueryParams = true,
} = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(initialFilters);

  if (withInitQueryParams) {
    useLayoutEffect(() => {
      const params = {};

      searchParams.forEach((value, key) => {
        params[key] = value;
      });

      setFilters((prev) => ({
        ...prev,
        ...params,
      }));
    }, []);
  }

  const updateCurrentFilterValue = (name, value) => {
    const obj = {};
    obj[name] = typeof value === "string" ? value : JSON.stringify(value);

    const updatedFilterValue = {
      ...filters,
      ...obj,
    };

    setFilters(updatedFilterValue);

    if (withQueryParams) setSearchParams(updatedFilterValue);
  };

  const resetFilterValues = () => {
    setFilters({});

    if (withInitQueryParams) setSearchParams();
  };

  const urlSerachParams = useMemo(
    () => (filters ? "?" + new URLSearchParams(filters).toString() : ""),
    [filters]
  );

  return {
    filters,
    updateCurrentFilterValue,
    resetFilterValues,
    urlSerachParams,
  };
};

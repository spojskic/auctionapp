export const NOTIFICATION_SUCCESS = "success";
export const NOTIFICATION_FAIL = "fail";

export const SORT_BY = [
  {
    value: "productName",
    label: "Default Sorting",
    sortBy: "productName",
    orderBy: "asc",
  },
  {
    value: "startDate",
    label: "Added: New to Old",
    sortBy: "startDate",
    orderBy: "desc",
  },
  {
    value: "endDate",
    label: "Time left",
    sortBy: "endDate",
    orderBy: "asc",
  },
  {
    value: "startPrice",
    label: "Price: Low to High",
    sortBy: "startPrice",
    orderBy: "asc",
  },
  {
    value: "highPrice",
    label: "Price: High to Low",
    sortBy: "startPrice",
    orderBy: "desc",
  },
];

export const GRID = "grid";
export const LIST = "list";

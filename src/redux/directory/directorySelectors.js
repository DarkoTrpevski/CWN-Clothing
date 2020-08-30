import { createSelector } from 'reselect';

//Level 1 Deep
const selectDirectory = (state) => state.directory;
//Level 2 Deep
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)
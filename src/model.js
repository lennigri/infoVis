import { action, thunk } from 'easy-peasy';
import { patentColorTheme, rDColorTheme } from './charttools/useColorTheme';

const model = {
  // state
  data: null,
  selectedYear: 2005,
  view: 0,
  scheme: patentColorTheme(),
  // actions
  setData: action((state, data) => {
    state.data = data;
    console.log('New data object set.');
  }),
  setSelectedYear: action((state, year) => {
    state.selectedYear = year;
    console.log('New selected year set.');
  }),
  setView: action((state, view) => {
    state.view = view;
    console.log('New view set.');
  }),
  setScheme: action((state, scheme) => {
    state.scheme = scheme;
    console.log('New scheme set.');
  }),
  // thunks
  changeView: thunk((actions, view) => {
    actions.setView(view);
    if (view === 1) {
      actions.setScheme(rDColorTheme());
    } else {
      actions.setScheme(patentColorTheme());
    }
  }),
};

export default model;
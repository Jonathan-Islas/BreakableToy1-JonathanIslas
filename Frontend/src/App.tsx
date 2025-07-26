import { styled } from '@mui/system';
import './App.css'
import { Box, Typography } from '@mui/material'
import { SearchFrame } from './components/searchAndFilters/SearchFrame';
import { TableFrame } from './components/tasks/TableFrame';
import { MetricsFrame } from './components/metrics/MetricsFrame';

//Main frame that contains the web app and its components
const MainFrame = styled(Box)({
  height: '100svh',
  boxSizing: 'border-box',
  paddingLeft: '5%',
  paddingRight: '5%',
  paddingTop: '2%',
  paddingBottom: '2%',
  gap: '0.75rem',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
  // I shall Delete this line when done with visual representation of space
  border: '1px solid red'
});

function App() {



  return (
    <MainFrame>
      <SearchFrame />
      <TableFrame />
      <MetricsFrame />
    </MainFrame>
  )
}

export default App

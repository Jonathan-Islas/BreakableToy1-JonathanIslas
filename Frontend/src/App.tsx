import { height, styled } from '@mui/system';
import './App.css'
import { Box, Typography } from '@mui/material'
import { SearchFrame } from './components/searchAndFilters/SearchFrame';
import { TableFrame } from './components/tasks/TableFrame';
import { MetricsFrame } from './components/metrics/MetricsFrame';
import { NewToDoModal } from './components/newToDoModal/NewToDoModal';
import { TodosProvider } from './services/api/ToDoContext';

//Main frame that contains the web app and its components
const MainFrame = styled(Box)({
  height: '100svh',
  // height: {xs: 'fit-content', md:'100svh', lg: '100svh'},
  width: '100svw',
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
  // border: '1px solid red',
  overflowY: { xs: 'auto', sm: 'auto' },
  '@media(max-width: 500)': {
    height: 'fit-content'
  }
});

function App() {



  return (
    <TodosProvider>
      <MainFrame>
        <SearchFrame />
        <TableFrame />
        <MetricsFrame />
        <NewToDoModal />
      </MainFrame>
    </TodosProvider>
  )
}

export default App

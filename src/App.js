import './components/App.css';
import { useStoreActions } from 'easy-peasy';
import { Container, Box, CircularProgress, Divider, Typography } from '@mui/material';
import Boxspacer from './components/Boxspacer';
import Appbar from './components/Appbar';
import Topcard from './components/Topcard';
import ChoroplethToggle from './components/ChoroplethToggle';
import TimeSlider from './components/TimeSlider';
import Colormode from './components/Colormode';
import Impressum from './components/Impressum';
import Choropleth from './components/Choropleth/Choropleth';
import Bubblechart from './components/Bubblechart/Bubblechart';
import { useData } from './datatools/useData';
import { useMapData } from './datatools/useMapData';
import { usePatentCategoryData } from './datatools/usePatentCategoryData';

function App() {
  const setData = useStoreActions((actions) => actions.setData);
  const setMapData = useStoreActions((actions) => actions.setMapData);

  const data = useData();
  const mapData = useMapData();
  const categoryData = usePatentCategoryData();
  console.log('Sucessfully loaded data.');

  if (!data || !mapData || !categoryData) {
    return (
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ mt: 50 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  setData(data);
  setMapData(mapData);

  return (
    <div className='App'>
      <Appbar />
      <Colormode />
      <main>
        <Boxspacer />
        <Container>
          <Topcard />
        </Container>
        <Boxspacer />
        <Container>
          <ChoroplethToggle />
          <Container>
            <Box
              sx={{
                // boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <Choropleth />
            </Box>
          </Container>
          <TimeSlider />
          <Boxspacer />
          <Container>
            <Box
              sx={{
                // boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                mb: 6,
              }}
            >
              <Bubblechart />
            </Box>
          </Container>
        </Container>
      </main>
      <footer className='Footer'>
        <Divider />
        <Typography variant='h6' align='center' gutterBottom>
          Thanks for reading.
        </Typography>
        <Impressum />
        <Typography variant='subtitle1' align='center' color='textSecondard'>
          This page is brought to you by MMT.
        </Typography>
      </footer>
    </div>
  );
}

export default App;

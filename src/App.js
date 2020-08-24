import React from 'react';
import AppBarMain from './component/AppBarMain';
import { Typography, Box } from '@material-ui/core';
import TicketRaise from './component/TicketRaise';


function App() {
  return (
    <div className="App">
      <AppBarMain />
      <Box m={2}>
        <Typography variant="h5" gutterBottom>
          Please choose or describe your Issue below.
        </Typography>
        
        <TicketRaise />
      </Box>




    </div>
  );
}

export default App;

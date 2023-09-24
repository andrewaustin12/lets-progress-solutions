import React from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const BottomButton = () => {
  return (
    <div className='button-container'>
      <Button variant="contained"
        color="primary"
        size="large"
        style={{
          color: '#4178c5',
          borderRadius: '50px', /* Make it rounded */
          backgroundColor: '#000', /* Purple color */
          opacity: 0.8, /* Opaque button */
          textTransform: 'none', // Prevent all capital letters
        }}
      >
        <EditIcon style={{ paddingRight: '15px' }}/>
        Customize Chrome
      </Button>
    </div>
  )
}

export default BottomButton
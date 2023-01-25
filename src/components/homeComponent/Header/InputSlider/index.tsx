import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { PasswordDetailsContext } from '@/global/context';
import { ChangeEvent, useContext } from 'react';
// import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled(MuiInput)`
  width: 70px;
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  box-shadow: #e3e3e3;
`;

export default function InputSlider() {
  const { passwordInfo, setPasswordInfo } = useContext(PasswordDetailsContext);
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPasswordInfo((prev) => ({ ...prev, length: Number(newValue) }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let tmpLength = event.target.value === '' ? '' : Number(event.target.value);
    setPasswordInfo((prev) => ({ ...prev, length: Number(tmpLength) }));
  };

  const handleBlur = () => {
    if (passwordInfo.length < 10) {
      setPasswordInfo((prev) => ({ ...prev, length: 10 }));
    } else if (passwordInfo.length > 100) {
      setPasswordInfo((prev) => ({ ...prev, length: 100 }));
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Input
            value={passwordInfo.length}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 10,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid item xs>
          <Slider
            value={
              typeof passwordInfo.length === 'number' ? passwordInfo.length : 10
            }
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

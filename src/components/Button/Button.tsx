import React from 'react';
import { Button as MuiButton } from '@mui/material';
import ThemeProvider from '../../theme';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <ThemeProvider>
      <MuiButton variant="contained">{props.label}</MuiButton>
    </ThemeProvider>
  );
};

export default Button;

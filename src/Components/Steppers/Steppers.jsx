import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';

const steps = [
  'Select Your Service',
  'Fill the form',
  'Schedule calendly call  ',
];

function StepIcon(props) {
  const { icon } = props;

  const icons = {
    1: <CheckCircleIcon />,
    2: <GroupIcon />,
    3: <AddIcon />,
  };

  return (
    <div>
      {icons[String(icon)]}
    </div>
  );
}

export default function HorizontalLinearAlternativeLabelStepper() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

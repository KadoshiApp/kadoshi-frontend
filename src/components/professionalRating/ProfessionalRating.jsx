import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  1: 'Poor',
  2: 'Ok',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    // display: 'flex',
    textAlign: 'center'
  },
});

const ProfessionalRating = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name=""
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}


export default ProfessionalRating;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      display: 'flex',
    },
  },
}));

const PaginationBox = ({ info, filterPage }) => {
  const classes = useStyles();

  return (
    <Box>
      <Pagination
        className={classes.root}
        count={info.pages}
        color='primary'
        showFirstButton
        showLastButton
        size='medium'
        boundaryCount={2}
        onChange={(e, page) => filterPage(page)}
      ></Pagination>
    </Box>
  );
};

export default PaginationBox;

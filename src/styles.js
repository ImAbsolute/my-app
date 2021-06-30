import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  up: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 54,
    padding: '0 30px',
    marginLeft: 10,
  },
  down: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    color: 'white',
    height: 54,
    padding: '0 30px',
    marginLeft: 10,
  },
}));

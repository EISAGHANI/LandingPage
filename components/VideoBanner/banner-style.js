import { makeStyles } from 'tss-react/mui';

const bannerStyles = makeStyles({ uniqId: 'banner' })((theme, _params, classes) => ({
  root: {
    display: 'block',
    position: 'relative',
    background: theme.palette.common.black,
    height: 800,
    [theme.breakpoints.down('sm')]: {
      height: 640
    }
  },
  video: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    '& img': {
      width: '100%',
      minHeight: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      [theme.breakpoints.down('lg')]: {
        minWidth: '100%',
        width: 'auto',
        height: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        left: -320
      }
    },
    '& iframe': {
      width: '100%'
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    width: '100%',
    height: '100%',
    zIndex: 10
  },
  caption: {
    position: 'absolute',
    width: '100%',
    zIndex: 11,
    textAlign: 'center',
    color: theme.palette.common.white,
    top: '40%',
    [theme.breakpoints.down('sm')]: {
      top: '30%'
    },
    '& h2': {
      fontFamily: 'Roboto Condensed',
    },
    '&:hover': {
      [`& .${classes.btnPlay}`]: {
        opacity: 0.5
      }
    }
  },
  arrow: {
    marginTop: theme.spacing(5),
    border: '1px dashed #fff',
    '& svg': {
      fill: theme.palette.common.white,
    }
  },
  btnPlay: {
    position: 'absolute',
    top: -120,
    left: '50%',
    transform: 'translate(-50%)',
    width: 80,
    height: 80,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    border: '1px dashed #fff',
    '& i': {
      color: theme.palette.common.white,
      fontSize: 40,
      width: 40,
      height: 40,
      position: 'relative',
      top: -3,
      '&[class="ion-ios-play-outline"]': {
        left: 4
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default bannerStyles;

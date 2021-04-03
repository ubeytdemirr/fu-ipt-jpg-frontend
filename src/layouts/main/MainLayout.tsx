import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
 
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import TuneIcon from '@material-ui/icons/Tune';
 
import Tabs from "components/tabs"
import useStyles from "./styles"
import { Button } from '@material-ui/core';
import { Close, CloudDownload, CloudUpload } from '@material-ui/icons';

export default function PersistentDrawerLeft(props:any) {
  const classes = useStyles();
 
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="primary"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <TuneIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            JPEG
          </Typography>
          <Button
          startIcon={<CloudUpload style={{color:"#fff"}} />}
          style={{color:"#fff",border:"1px solid #fff"}}  variant="outlined">
            
            Yükle</Button>
            <Button
             style={{marginLeft:"1em"}}
            color="secondary"
          startIcon={<CloudDownload style={{color:"#fff"}} />}
             variant="contained">
            
            İndir</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <Close/>
          </IconButton>
        </div>
        <Divider />
        <Tabs/>    
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
          {props.children}
      </main>
    </div>
  );
}

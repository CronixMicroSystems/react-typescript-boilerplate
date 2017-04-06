export const SIDEBAR_STYLE = {
  root: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    overflow: 'hidden'
  },
  sidebar: {
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    transition: 'transform .3s ease-out',
    overflowY: 'auto',
    zIndex: '1000'
  },
  content: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    overflow: 'auto',
    transition: 'left .3s ease-out,right .3s ease-out'
  },
  overlay: {
    zIndex: '1',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    opacity: '0px',
    visibility: 'hidden',
    transition: 'opacity .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  dragHandle: {
    zIndex: '1',
    position: 'fixed',
    top: '0px',
    bottom: '0px',
  }
}

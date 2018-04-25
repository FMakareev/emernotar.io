var modal = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: '#FDF396',
  zIndex: 99999,
  pointerEvents: 'auto',
  overflowY: 'auto'
}

var container = {
  width: '40%',
  height: '100%',
  position: 'absolute',
  margin: '0 auto 0 50%',
  padding: '90px 20px 0 0',
  background: '#FDF396'
}

var close = {
  background: '#606061',
  color: '#FFFFFF',
  lineHeight: '25px',
  position: 'absolute',
  right: '-12px',
  textAlign: 'center',
  top: '-10px',
  width: '24px',
  textDecoration: 'none',
  fontWeight: 'bold',
  borderRadius: '12px',
  boxShadow: '1px 1px 3px #000',
  cursor: 'pointer'
}

export default {
  modal,
  container,
  close
}

import {
  DEPLOY, 
  DESTROY, 
  DID_DEPLOY, 
  KUBAM_ERROR,
  MAKE_ISO_IMAGES,
  FINISHED_MAKING_ISO_IMAGES,
} from '../actions'

const deploy = (state = {
  fetching: false, 
  msg: "", 
  error: "", 
  }, action) => {
  switch (action.type) {
    case DEPLOY: 
      return Object.assign({}, state, {
        fetching: true,
        error: "",
      })
    case DESTROY: 
      return Object.assign({}, state, {
        fetching: true,
        error: "",
      })
    case KUBAM_ERROR: 
      return Object.assign({}, state, {
        fetching: false,
        error: action.error,
      })
    case DID_DEPLOY: 
      return Object.assign({}, state, {
        msg: action.msg,
        fetching: false,
        error: "",
      })
     case MAKE_ISO_IMAGES:
      return Object.assign({}, state, {
        error: "",
        fetching: true,
      })
    case FINISHED_MAKING_ISO_IMAGES:
      return Object.assign({}, state, {
        fetching: false,
      })
    
    default:
      return state
  }
}
export default deploy

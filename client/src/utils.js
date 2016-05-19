import { SERVER_URL } from './constants'
import axios from 'axios'

const url = (_path)=>{
  let part = _path[0] == '/' ? _path.substring(1) : _path;
  return `${SERVER_URL}/${part}`;
};

// ====================================
// ========== Utilities ===============
// ====================================

export default {
  ajax(method,path, data){
    return axios[method.toLowerCase()](url(path),data)
  }
}
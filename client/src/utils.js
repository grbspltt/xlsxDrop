import { SERVER_URL, AUHSD_ACCOUNTING_URL } from './constants'
import axios from 'axios'

const url = (_path)=>{
  let part = _path[0] == '/' ? _path.substring(1) : _path;
  return `${SERVER_URL}/${path}`;
};

// ====================================
// ========== Utilities ===============
// ====================================

export default {
  ajax(method,path, data){
    return axios[method](url(path),data)
  }
}
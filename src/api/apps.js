import parseISO from 'date-fns/parseISO';
import axios from './axios';

export default function appsApi() {
  return {
    loadList: () => axios.post('https://dev-inapp.brainlyads.com/api-ui/v1/apps', {})
      .then(resp => resp.data.data.map(item => ({
        ...item,
        created_at: item.created_at ? parseISO(item.created_at) : null,
        deleted_at: item.created_at ? parseISO(item.deleted_at) : null,
        updated_at: item.updated_at ? parseISO(item.updated_at) : null,
      })))
  };
}

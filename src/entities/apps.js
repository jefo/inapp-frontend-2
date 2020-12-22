import format from 'date-fns/format';
import { map } from 'rxjs/operators';
import { createEntityStore, createEntityQuery } from '@datorama/akita';
import createAppsDataService from '../api/apps.js';
import { createActionFactory } from './helpers';

export default function appsEntityFactory(cfg = {
  dataService: createAppsDataService(),
}) {
  const entityStore = createEntityStore({}, { name: 'notifications' });
  const query = createEntityQuery(entityStore);
  const { loadAllAction } = createActionFactory({ entityStore })

  return {
    loadAll: async () => {
      const loadAll = loadAllAction(cfg.dataService.loadList);
      return loadAll();
    },
    selectAll: () => query.selectAll()
      .pipe(
        map(
          apps => apps.map(app => ({
            ...app,
            created_at: app.created_at ? format(app.created_at, 'MMM, dd yyyy') : '',
            updated_at: app.updated_at ? format(app.updated_at, 'MMM, dd yyyy') : '',
          })),
        )
      ),
  };
}

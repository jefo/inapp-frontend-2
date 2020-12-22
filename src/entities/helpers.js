export const createActionFactory = (cfg = {}) => {
  const { entityStore } = cfg;

  return {
    updateAction: (doRequest) => async (id, data) => {
      entityStore.setLoading(true);
      entityStore.update(id, data); // todo: rollback if error
      try {
        await doRequest(data);
      } catch (e) {
        entityStore.setError(e);
        throw e;
      } finally {
        entityStore.setLoading(false);
      }
    },
    createAction: (doRequest) => async (data) => {
      entityStore.setLoading(true);
      try {
        const created = await doRequest(data);
        entityStore.add({ id: created.id, ...data });
        return created;
      } catch (e) {
        entityStore.setError(e);
        throw e;
      } finally {
        entityStore.setLoading(false);
      }
    },
    deleteAction: (doRequest) => async (params) => {
      entityStore.setLoading(true);
      entityStore.remove(params.id);
      try {
        await doRequest(params);
      } catch (e) {
        entityStore.setError(e);
        throw e;
      } finally {
        entityStore.setLoading(false);
      }
    },
    loadAllAction: (doRequest) => async (...args) => {
      entityStore.setLoading(true);
      try {
        const data = await doRequest(...args);
        entityStore.set(data);
      } catch (e) {
        entityStore.setError(e);
        throw e;
      } finally {
        entityStore.setLoading(false);
      }
    },
    loadByIdAction: (doRequest) => async (id) => {
      entityStore.setLoading(true);
      try {
        const data = await doRequest(id);
        entityStore.replace(id, data);
      } catch (e) {
        entityStore.setError(e);
        throw e;
      } finally {
        entityStore.setLoading(false);
      }
    },
  }
};

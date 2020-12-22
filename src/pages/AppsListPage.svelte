<style>
  .app-grid-box {
    font-size: 16px;
  }

  .active {
    background-color: #ECF7FA;
  }

  .paused {
    background-color: #F7F1F6;
  }
</style>
<script>
  import { getContext } from 'svelte';
  import { map } from 'rxjs/operators';
  import copy from 'copy-text-to-clipboard';
  import Layout from '../components/_Layout.svelte';
  import Header from '../components/Header.svelte';
  import Card from '../components/Card/Card.svelte';
  import CardHeader from '../components/Card/Header.svelte';
  import Button from '../components/Button.svelte';
  import IconButton from '../components/IconButton.svelte';
  import Grid from '../components/DataGrid/Grid.svelte';
  import SortableGrid from '../components/DataGrid/SortableGrid.svelte';
  import Cell from '../components/DataGrid/Cell.svelte';
  import Row from '../components/DataGrid/Row.svelte';
  import HeaderCell from '../components/DataGrid/HeaderCell.svelte';
  import HeaderRow from '../components/DataGrid/HeaderRow.svelte';
  import ActionsCell from '../components/DataGrid/ActionsCell.svelte';
  import PlayButton from '../components/PlayButton.svelte';

  const { appsEntity } = getContext('entities');
  const appsList = appsEntity.selectAll()
    .pipe(
      map(apps => apps.map(app => ({
        ...app,
        created_at: app.created_at || '---',
        updated_at: app.updated_at || '---',
      }))),
    );

  appsEntity.loadAll();

  const columns = [
    { pl: 15, align: 'left', prop: 'name', label: 'Name', sortable: true },
    { prop: 'id', label: 'ID', sortable: true, },
    { prop: 'adUnits', label: 'Ad units', sortable: true, },
    { prop: 'apiKey', label: 'API key', sortable: true, },
    { prop: 'adMobId', label: 'AdMob ID', sortable: true, },
    { pl: 7, align: 'left', prop: 'created', label: 'Created', sortable: true, },
    { pl: 7, align: 'left', prop: 'modified', label: 'Modified', sortable: true, },
    { pl: 7, align: 'left', prop: 'status', label: 'Status', sortable: true, },
    { pl: 36, align: 'left', label: 'Action', sortable: false, },
  ];

  const order = [
    { by: 'name', direction: 'desc' },
    { by: 'id', direction: 'desc' },
    { by: 'adUnits', direction: 'desc' },
    { by: 'apiKey', direction: 'desc' },
    { by: 'adMobId', direction: 'desc' },
    { by: 'created', direction: 'desc' },
    { by: 'modified', direction: 'desc' },
  ];
</script>

<Layout>
  <Card>
    <CardHeader>
      <div class="font-extrabold text-2xl">Current Apps</div>
      <div slot="control">
        <Button primary size="small">ADD NEW APP</Button>
      </div>
    </CardHeader>
    <div class="app-grid-box pb-40 relative mt-22 px-12 sm:px-15">
      <SortableGrid
        order={order}
        columns={columns}
        gridProps={{
          columnsTemplate: 'minmax(auto, 196px) minmax(auto, 78px) minmax(auto, 100px) minmax(auto, 126px) minmax(auto, 129px) minmax(auto, 135px) minmax(auto, 130px) minmax(auto, 112px) 1fr',
        }}>
        {#each $appsList as app}
          <Row large>
            <Cell align="left" pl={15}>
              <strong>{app.name}</strong>
            </Cell>
            <Cell>{app.id}</Cell>
            <Cell>---</Cell>
            <Cell relative>
              <div class="truncate w-32 pr-2">
                {app.api_key}
              </div>
              <div class="absolute" style="right: 10px;">
                <IconButton on:click={() => copy(app.api_key)} flat icon="copy" />
              </div>
            </Cell>
            <Cell>
            <div class="truncate w-32 pr-2">
              {app.admob_app_id}
            </div>
              <div class="absolute" style="right: 10px;">
                <IconButton on:click={() => copy(app.admob_app_id)} flat icon="copy" />
              </div>
            </Cell>
            <Cell align="left" pl={6}>{app.created_at}</Cell>
            <Cell align="left" pl={6}>{app.updated_at}</Cell>
            <Cell align="left">
              <div
                class:active={app.is_active}
                class:paused={!app.is_active}
                class="pl-8 h-full w-full flex items-center"
              >
                {app.is_active ? 'Active' : 'Paused'}
              </div>
            </Cell>
            <ActionsCell align="left" pl={8}>
              <div class="flex justify-between w-full">
                <PlayButton />
                <div class="flex flex-initial">
                  <div class="mr-5">
                    <IconButton px={1} icon="eye_grey" size="xs" />
                  </div>
                  <div class="mr-5">
                    <IconButton px={1} icon="pen_square" size="xs" />
                  </div>
                  <div class="mr-5">
                    <IconButton px={1} icon="trash_empty" size="xs" />
                  </div>
                </div>
              </div>
            </ActionsCell>
          </Row>
        {/each}
      </SortableGrid>
    </div>
  </Card>
</Layout>

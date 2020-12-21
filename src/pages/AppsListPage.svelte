<script>
  import Layout from '../components/_Layout.svelte';
  import Header from '../components/Header.svelte';
  import Card from '../components/Card/Card.svelte';
  import CardHeader from '../components/Card/Header.svelte';
  import Button from '../components/Button.svelte';
  import IconButton from '../components/IconButton.svelte';
  import Grid from '../components/DataGrid/Grid.svelte';
  import Cell from '../components/DataGrid/Cell.svelte';
  import Row from '../components/DataGrid/Row.svelte';
  import HeaderCell from '../components/DataGrid/HeaderCell.svelte';
  import HeaderRow from '../components/DataGrid/HeaderRow.svelte';
  import ActionsCell from '../components/DataGrid/ActionsCell.svelte';
  import PlayButton from '../components/PlayButton.svelte';
</script>

<Layout>
  <Card>
    <CardHeader>
      Current Apps
      <div slot="control">
        <Button primary size="small">ADD NEW APP</Button>
      </div>
    </CardHeader>
    <div class="relative mt-22 px-12 sm:px-15">
      <Grid columnsTemplate={'minmax(auto, 196px) minmax(auto, 78px) minmax(auto, 100px) minmax(auto, 126px) minmax(auto, 129px) minmax(auto, 135px) minmax(auto, 130px) minmax(auto, 112px) 1fr'}>
        <HeaderRow>
          <HeaderCell pl={15} align="left">Name</HeaderCell>
          <HeaderCell>ID</HeaderCell>
          <HeaderCell>Ad units</HeaderCell>
          <HeaderCell>API key</HeaderCell>
          <HeaderCell>AdMob ID</HeaderCell>
          <HeaderCell align="left" pl={15}>Created</HeaderCell>
          <HeaderCell align="left" pl={15}>Modified</HeaderCell>
          <HeaderCell align="left" pl={15}>Status</HeaderCell>
          <HeaderCell pl={36}>Action</HeaderCell>
        </HeaderRow>
        <Row large>
          <Cell align="left" pl={15}>Candy crush</Cell>
          <Cell>3</Cell>
          <Cell>10</Cell>
          <Cell>f2frf34f34r534t45gt54hg4h45h4h4545gvvevqre43g43</Cell>
          <Cell>ca-app-wtf-test-da</Cell>
          <Cell align="left" pl={15}>Mar, 30 2020</Cell>
          <Cell align="left" pl={15}>Dec 02, 2020</Cell>
          <Cell align="left" pl={15}>Active</Cell>
          <ActionsCell align="left" pl={8}>
            <div class="mr-11">
              <PlayButton />
            </div>
            <div class="mr-5">
              <IconButton px={1} icon="pen_square" size="xs" />
            </div>
            <div class="mr-5">
              <IconButton px={1} icon="trash_empty" size="xs" />
            </div>
          </ActionsCell>
        </Row>
      </Grid>
    </div>
  </Card>
</Layout>

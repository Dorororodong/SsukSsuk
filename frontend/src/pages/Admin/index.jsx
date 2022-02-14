import { Grid } from '@mui/material';
import AdminBoardList from '../../components/Board/AdminBoardList/';
import Layout from '../../layout/';
import { ViewContext } from '../../context/ViewContext';
import Wrapper from './styles';

const Admin = () => {
  return (
    <ViewContext.Provider>
      <Layout>
        <Wrapper>
          <Grid
            container
            direction="row"
            className="top-box"
            justifyContent="space-between"
            alignItems="end"
          ></Grid>
          <AdminBoardList />
        </Wrapper>
      </Layout>
    </ViewContext.Provider>
  );
};

export default Admin;

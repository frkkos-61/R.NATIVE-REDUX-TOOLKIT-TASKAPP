import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {BASE_URL} from '../../service/urls';

const getUsers = createAsyncThunk('users/getUsers', async params => {
  const response = await getRequest(BASE_URL, params);
  console.log(response.data);
  return response.data.results;
});

export {getUsers};

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

export const getCityID = createAsyncThunk('city', async city => {
  try {
    const res = await axios.get(
      `https://trackapi.nutritionix.com/v2/locations?q=ankara&distance=150m&limit=1`,
      {
        headers: {
          'x-app-id': '7992b614',
          'x-app-key': 'ab289c4028b0d94832f595a2667b2fea',
        },
      },
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
  }

  await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
});

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    city: '',
    cityID: '',
    restaurants: [],
    isLoading: false,
    isError: null,
  },
  reducers: {
    setLocation: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [getCityID.fulfilled]: (state, action) => {
      state.cityID = action.payload;
    },
  },
});

export const {setLocation} = restaurantSlice.actions;
export default restaurantSlice.reducer;

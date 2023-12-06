import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../services/client";

export const getData = createAsyncThunk("getData", async () => {
  const data = await client.get(`/pages`);
  return data;
});

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { useGetCategoriesQuery } from "../features/apiSlice";
import { CategoryList } from "../components/CategoryList";
import { useState } from "react";

export const Categories = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  

  
  

  // const token=useAppSelector((state)=>state.loggedIn.token);
  return (
    <Box>

      <Typography variant="h7">Categories</Typography>
      {data && <CategoryList categories={data.result.categories} />}
     
    </Box>
  );
};

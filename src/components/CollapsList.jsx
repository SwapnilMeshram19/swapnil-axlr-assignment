import { Collapse, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { useGetProductMutation } from "../features/apiSlice";

export const CollapsList = ({ open, subCat, cat_name }) => {
  const [cat, setCat] = useState([]);
  const [getProduct]=useGetProductMutation();
  const dispatch=useAppDispatch();
  const handleOnClick = async (cate) => {
    setCat((preState) => [...preState, cate]);
    const body = {
      category_slug: cat,
    };
    let res = await getProduct(body)
    dispatch(res.data.result.product_list)
  };

  return (
    <Collapse
      in={open}
      timeout="auto"
      unmountOnExit
      sx={{ backgroundColor: "white" }}
    >
      {subCat.length > 0 ? (
        subCat.map((subcat) => (
          <ListItem
            disablePadding
            key={subcat.id}
            onClick={() => handleOnClick(subcat.subcategory_name)}
          >
            <ListItemText
              secondary={subcat.subcategory_name}
              primeryTypographyProps={{
                fontSize: "0.6rem",
                fontWeight: "600",
                lineHeight: "10px",
                mb: "2px",
              }}
              sx={{
                padding: "0px",
                fontSize: "0.7rem",
                color: "black",
                fontWeight: "700",
              }}
            />
          </ListItem>
        ))
      ) : (
        <ListItem
          disablePadding
          onClick={() => handleOnClick(cat_name)}
          key={cat_name}
        >
          <ListItemText
            secondary={cat_name}
            sx={{
              padding: "0px",
              fontSize: "0.6rem",
              color: "black",
              fontWeight: "700",
            }}
          />
        </ListItem>
      )}
    </Collapse>
  );
};

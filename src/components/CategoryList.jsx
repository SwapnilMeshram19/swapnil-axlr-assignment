import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { CollapsList } from "./CollapsList";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export const CategoryList = ({ categories}) => {
  const [open, setOpen] = useState({});

  const handleClick = (index) => {
    setOpen({ [index]: !open[index] });
  };
  return (
    <Box sx={{ width: "19rem", p: "1rem" }}>
      {categories &&
        categories.map((cat, index) => (
          <Box
            sx={{
              backgroundColor: "white",
              p: "1rem",
              m: "0.5rem",
              boxShadow: "2px 2px 10px 2px #cfcfcf",
            }}
            key={cat.id}
          >
            <List disablePadding sx={{ textAlign: "left", cursor: "pointer" }}>
              <ListItem
                disableGutters
                secondaryAction={
                  <IconButton aria-label="comment">
                    {open[index] ? (
                      <RemoveIcon sx={{ color: "rgb(50,167,156)" }} />
                    ) : (
                      <AddIcon sx={{ color: "rgb(50,167,156)" }} />
                    )}
                  </IconButton>
                }
                onClick={() => handleClick(index)}
              >
                <ListItemText
                  primary={cat.cat_name}
                  primaryTypographyProps={{
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    lineHeight: "10px",
                    mb: "2px",
                  }}
                />
              </ListItem>
              {open[index] && <Divider sx={{ mb: "1rem" }} />}

              <CollapsList
                open={open[index]}
                subCat={cat.subcategories}
                cat_name={cat.cat_name}
                sx={{ backgroundColor: "white" }}
              />
            </List>
          </Box>
        ))}
    </Box>
  );
};

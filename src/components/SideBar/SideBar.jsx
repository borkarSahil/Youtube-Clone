import React from 'react';
import { Stack } from "@mui/material";

import { categories } from "../../utils/constants";

// const selectedCategory = "New";


function SideBar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      background:"#fff"
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#fff",
          color: "#000",
        }}
        key={category.name}
      >
        <span > {category.icon} </span>
        <span > {category.name} </span>
      </button>
    ))}
  </Stack>
  )
}

export default SideBar;
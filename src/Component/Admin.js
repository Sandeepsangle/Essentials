import React, { useEffect, useState } from 'react'
import {Grid} from '@mui/material'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {RiAdminLine} from 'react-icons/ri'
const Admin = () => { 
  const columns = [
    { field: "id", headerName: "id", width: 50 },
    { field: "image", headerName: "image", width: 100,height:100, editable: true ,
    renderCell: (params) => <img src={params.value} />,
    },
    { field: "name", headerName: "name", width: 150,},
    { field: "category", headerName: "category", width: 150},
    {field: "price",headerName: "price",type: "number",width: 110, editable: true,},
    { field: "availableQuantity", headerName: "availableQuantity", width: 150,editable: true},
    { field: "description", headerName: "description", width: 150},
  ];
    const [menuData, setMenuData] = useState();
    const [loader,setLoader] = useState(false)
    useEffect(()=>{
        setMenuData(JSON.parse(localStorage.getItem('menudata')))
        setLoader(true)
        console.log("price and available quantity is editable")
        console.log("double Click on column to edit")
      },[])
  return (
    <>
    <div className='h3 text-success mb-3'>
       <RiAdminLine className='d-inline'/>
       Admin Logged,in
       <a href='/' type='button' 
       onClick={()=>{localStorage.removeItem('name')}}
       style={{ width: "250px", float: "right" }}
       >Logout</a>
       </div>
       {loader && <Box sx={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={menuData}
          columns={columns}
          onCellEditCommit={(value) => {
            let array = menuData.map((r) => {
              if (r.id == value.id) {
                return { ...r, [value.field]: value.value };
              } else {
                return { ...r };
              }
            });
              localStorage.setItem('menudata',JSON.stringify(array))
              setMenuData(array);
          }}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box> 
      }
    </>
  )
}

export default Admin
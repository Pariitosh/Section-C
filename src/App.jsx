import { useState } from "react";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SettingsIcon from "@mui/icons-material/Settings";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar, heIL } from "@mui/x-data-grid";
function CircularProgressWithLabel({value,color,tcolor}) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress style={{height:"5vh",width:"5vw"}}  variant='determinate' color={color} value={80}   />
      <Box
        sx={{
          left:'1.3vw',
          height:"5vh",
          width:"5vw",
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{fontSize:'2vh',display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',color:{tcolor}}}  variant="caption" component="div" color={tcolor}>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
export default function App() {
  const columns = [
    { field: "customerName", headerName: "Customer Name", width: 180,color:"red" },
    { field: "company", headerName: "Company", width: 180 },
    { field: "phoneNumber", headerName: "Phone Number", width: 180 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "country", headerName: "Country", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <Button variant="outlined" color={params.row.color}>
          {params.row.status}
        </Button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      customerName: "Jane Cooper",
      company: "Microsoft",
      phoneNumber: "(225)555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
      color: "success",
    },
    {
      id: 2,
      customerName: "Floyd Milies",
      company: "Yahoo",
      phoneNumber: "(205)555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
      color: "error",
    },
    {
      id: 3,
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302)555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive",
      color: "error",
    },
    {
      id: 4,
      customerName: "Marvin McKinney",
      company: "Tesla",
      phoneNumber: "(252)555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "Active",
      color: "success",
    },
    {
      id: 5,
      customerName: "Jerome Bell",
      company: "Google",
      phoneNumber: "(629)555-0129",
      email: "jerome@google.com",
      country: "Reunion",
      status: "Active",
      color: "success",
    },
    {
      id: 6,
      customerName: "Kathryn Murphy",
      company: "Microsoft",
      phoneNumber: "(406)555-0120",
      email: "kathryn@microsoft.com",
      country: "Coracao",
      status: "Active",
      color: "success",
    },
    {
      id: 7,
      customerName: "John Smith",
      company: "Apple Inc.",
      phoneNumber: "(555)123-4567",
      email: "john@apple.com",
      country: "United States",
      status: "Inactive",
      color: "error",
    },
    {
      id: 8,
      customerName: "Emily Davis",
      company: "Google LLC",
      phoneNumber: "(555)987-6543",
      email: "emily@google.com",
      country: "United States",
      status: "Active",
      color: "success",
    },
    {
      id: 9,
      customerName: "Michael Johnson",
      company: "Amazon.com",
      phoneNumber: "(555)789-0123",
      email: "michael@amazon.com",
      country: "United States",
      status: "Active",
      color: "success",
    },
    {
      id: 10,
      customerName: "Sophia Lee",
      company: "Facebook, Inc.",
      phoneNumber: "(555)345-6789",
      email: "sophia@facebook.com",
      country: "United States",
      status: "Active",
      color: "success",
    },
    {
      id: 11,
      customerName: "William Brown",
      company: "Tesla, Inc.",
      phoneNumber: "(555)234-5678",
      email: "william@tesla.com",
      country: "United States",
      status: "Active",
      color: "success",
    },
    {
      id: 12,
      customerName: "Olivia White",
      company: "Netflix, Inc.",
      phoneNumber: "(555)456-7890",
      email: "olivia@netflix.com",
      country: "United States",
      status: "Active",
      color: "success",
    },
  ];
  return (
    <div className="main">
      <section className="left">
        <img src="logo(1).png"></img>
        <div className="leftbtn1">
          {" "}
          <CallMissedOutgoingIcon />
          <h5> Reports</h5>
        </div>
        <div className="leftbtn2">
          <WidgetsIcon />
          <h5>Workspaces</h5>
        </div>
        <div className="leftbtn3">
          <SettingsIcon />
          <h5>Settings</h5>
        </div>
      </section>
      <section className="right">
        <div className="top">
          <h1 style={{ fontSize: "4vh" }}>Orders</h1>
          <Button
            style={{ width: "8vw", height: "5vh" }}
            title="+ Add Orders"
            variant="contained"
          >
            + Add Orders
          </Button>
        </div>
        <div className="stats">
          <div className="leftstats">
            <h1>All customers</h1>
            <div className="charts">
              <div className="circle1">
              <CircularProgressWithLabel value={85} tcolor={'#5F27CD'} color={'secondary'}></CircularProgressWithLabel>
                <p style={{color:"#A7A7A7"}}>Current Customers</p>

                </div>
              <div className="circle2">
              <CircularProgressWithLabel value={66} tcolor={'#16C098'} color={'success'}></CircularProgressWithLabel>
              <p style={{color:"#A7A7A7"}}>New Customers</p>
                </div>
              <div className="circle3">
              <CircularProgressWithLabel value={90} tcolor={'red'} color={'error'}></CircularProgressWithLabel>
              <p style={{color:"#A7A7A7"}}>Target Customers</p>
              </div>
              <div className="circle4">
                <CircularProgressWithLabel value={30} tcolor={'red'} color={'error'}></CircularProgressWithLabel>
                <p style={{color:"#A7A7A7"}}>Retarget Customers</p>
              </div>
            </div>
          </div>
          <div className="rightstats">
            <h1>Stats Overview</h1>
            <Box sx={{ width: "10vw", height: "5vh", marginTop: "0vh" }}>
            <h2 style={{color:"#A7A7A7"}}>Active</h2>
              <LinearProgress
              sx={{height:"1.5vh",borderRadius:"10px",width:'20vw'}}
                variant="determinate"
                color="success"
                value={63}
              />
            </Box>
            <h2 style={{color:"#A7A7A7"}} >Inactive</h2>
            <LinearProgress
            sx={{height:"1.5vh",borderRadius:"10px", width:'20vw'}}
             variant="determinate" color="error" value={83} />
             
          </div>
        </div>
        <p style={{marginLeft:"5vw",color:"#16C098",marginTop:"5vh"}}>Active members</p>
        <div className="table">
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 6 },
              },
            }}
            pageSizeOptions={[6, 12]}
            slotProps={{ toolbar: { showQuickFilter: true } }}
          />
        </div>
      </section>
    </div>
  );
}

import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from "@/state/api";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

type Props = {};

const Row3 = (props: Props) => {
  const { data: kpiData } = useGetKpisQuery()
  const { data: productData } = useGetProductsQuery() 
  const { data: transactionData } = useGetTransactionsQuery()
  return (
    <>
      <DashboardBox gridArea="g" bgcolor="#fff">
        <BoxHeader title="List of products" sideText={`${productData?.length}`}/>
        <Box>
        <DataGrid></DataGrid>  
        </Box>
        
      </DashboardBox>
      <DashboardBox gridArea="h" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="i" bgcolor="#fff"></DashboardBox>
      <DashboardBox gridArea="j" bgcolor="#fff"></DashboardBox>
    </>
  );
};

export default Row3;

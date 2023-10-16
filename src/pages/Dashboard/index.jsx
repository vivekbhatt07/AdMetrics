import React from "react";
import { PageContainer } from "../../layout";
import { PrimaryContainer } from "../../components/containers";
import { Table } from "../../components/metrics";
import { usersAdInsightData, productsAdInsightData } from "../../data";

const Dashboard = () => {
  return (
    <PageContainer>
      <div className="flex flex-row gap-8">
        <div className="basis-1/2">
          <PrimaryContainer title="Ad Insights">
            {<Table bodyData={productsAdInsightData} />}
          </PrimaryContainer>
        </div>
        <div className="basis-1/2">
          <PrimaryContainer title="Ad Insights" />
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;

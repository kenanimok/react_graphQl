import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../../queries/graphql";
import { Table, Pagination } from "antd";

function Listpage() {
  const [page, setPage] = useState(0);

  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    variables: {
      // offset: page * 10,
      offset: 0,
      limit: 10,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const columns = [
    {
      title: "Mission Name",
      dataIndex: "mission_name", // ตรงกับชุดข้อมูลที่ได้จาก GraphQL query
      key: "mission_name",
    },
    {
      title: "Launch Date",
      dataIndex: "launch_date_utc", // ตรงกับชุดข้อมูลที่ได้จาก GraphQL query
      key: "launch_date_utc",
    },
    {
      title: "Rocket Name",
      dataIndex: "rocket.rocket_name", // ตรงกับชุดข้อมูลที่ได้จาก GraphQL query
      key: "rocket_name",
    },
    {
      title: "Launch Success",
      dataIndex: "launch_success", // ตรงกับชุดข้อมูลที่ได้จาก GraphQL query
      key: "launch_success",
      render: (success) => (success ? "Successful" : "Failed"),
    },
  ];

  const OnChangePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Table dataSource={data.launches} columns={columns} pagination={false} />
      <Pagination
        current={page}
        pageSize={10}
        total={100}
        onChange={OnChangePage}
      />
    </div>
  );
}

export default Listpage;

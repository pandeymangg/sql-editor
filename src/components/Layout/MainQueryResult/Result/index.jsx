import React from "react";
import classes from "./styles.module.css";

const Result = ({ result }) => {
  return (
    <>
      <table
        className={`${classes.tableStyle} sm:my-2 mb-10 h-full w-full text-center text-xs sm:text-base border-4 shadow-md border-gray-100 overflow-x-auto border-collapse`}
      >
        <thead>
          <tr className="bg-white text-gray-900">
            <th className="border-2 border-gray-100 text-sm text-gray-600 font-medium">
              Order ID
            </th>
            <th className="border-2 border-gray-100 text-sm text-gray-600 font-medium">
              Customer Id
            </th>
            <th className="border-2 border-gray-100 text-sm text-gray-600 font-medium">
              Employee Id
            </th>
            <th className="border-2 border-gray-100 text-sm text-gray-600 font-medium">
              Ordered Date
            </th>
            <th className="border-2 border-gray-100 text-sm text-gray-600 font-medium">
              Shipped Date
            </th>
            <th className="border-2 border-gray-100 text-sm text-gray-600 font-medium">
              Freight
            </th>
            <th className="border-2 border-gray-100 text-sm text-gray-600 font-medium">
              Ship Name
            </th>
            <th className="border-2 border-gray-100 text-sm text-gray-600 font-medium">
              Ship Address
            </th>
          </tr>
        </thead>
        <tbody>
          {result &&
            result.map((row, index) => {
              const orderedDate = row.orderDate.split(" ")[0];
              const shippedDate = row.shippedDate.split(" ")[0];
              return (
                <tr key={index}>
                  <td className="border border-gray-100 text-gray-700">
                    {row.orderID}
                  </td>
                  <td className="border border-gray-100">{row.customerID}</td>
                  <td className="border border-gray-100">{row.employeeID}</td>
                  <td className="border border-gray-100">{orderedDate}</td>
                  <td className="border border-gray-100">{shippedDate}</td>
                  <td className="border border-gray-100">{row.freight}</td>
                  <td className="border border-gray-100">{row.shipName}</td>
                  <td className="border border-gray-100">
                    {row.shipAddress.city}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Result;

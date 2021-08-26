import React from "react";
import classes from "./styles.module.css";

const Result = ({ result }) => {
  return (
    <>
      <table
        className={`${classes.tableStyle} sm:my-2 mb-10 h-full w-full text-center text-xs sm:text-base border-4 shadow-md border-gray-100 dark:border-darkBorder overflow-x-auto border-collapse`}
      >
        <thead>
          <tr className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-50">
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Order ID
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Customer Id
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Employee Id
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Ordered Date
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Shipped Date
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Freight
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Ship Name
            </th>
            <th className="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Ship Address
            </th>
          </tr>
        </thead>
        <tbody>
          {result &&
            result.map((row, index) => {
              return (
                <tr key={index}>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.orderID}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.customerID}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.employeeID}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.orderDate}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.shippedDate}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.freight}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.shipName}
                  </td>
                  <td className="border border-gray-100 dark:border-darkBorder">
                    {row.shipAddress}
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

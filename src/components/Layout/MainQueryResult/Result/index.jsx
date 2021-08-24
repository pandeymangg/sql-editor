import React from "react";

const Result = ({ result }) => {
  return (
    <>
      <table className="w-full mt-2 sm:my-2 h-full text-center text-xs sm:text-base table-auto">
        <thead>
          <tr className="bg-gray-100 text-gray-900">
            <th className="border border-black">Order ID</th>
            <th className="border border-black">Customer Id</th>
            <th className="border border-black">Employee Id</th>
            <th className="border border-black">Ordered Date</th>
            <th className="border border-black">Shipped Date</th>
            <th className="border border-black">Freight</th>
            <th className="border border-black">Ship Name</th>
            <th className="border border-black">Ship Address</th>
          </tr>
        </thead>
        <tbody>
          {result &&
            result.map((row, index) => {
              const mod = index % 2;
              const orderedDate = row.orderDate.split(" ")[0];
              const shippedDate = row.shippedDate.split(" ")[0];
              return (
                <tr className={mod && "bg-gray-200"}>
                  <td className="border border-black">{row.orderID}</td>
                  <td className="border border-black">{row.customerID}</td>
                  <td className="border border-black">{row.employeeID}</td>
                  <td className="border border-black">{orderedDate}</td>
                  <td className="border border-black">{shippedDate}</td>
                  <td className="border border-black">{row.freight}</td>
                  <td className="border border-black">{row.shipName}</td>
                  <td className="border border-black">
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

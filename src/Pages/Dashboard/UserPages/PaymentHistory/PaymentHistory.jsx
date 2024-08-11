import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useAuth();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await fetch(
        `https://hungry-place-restaurant-server.vercel.app/payments/${user.email}`
      );

      return res.json();
    },
  });

  console.log(payments);

  return (
    <>
      <Helmet>
        <title>Dashboard | Payment History</title>
      </Helmet>

      <div className="w-full px-6">
        <h3 className="sub-heading mt-12">Payment History</h3>
        <h3 className="text-2xl ">Total Payments : {payments.length}</h3>

        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Email</th>
                  <th>Transaction Id</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>
                      <p className="bg-green-500 text-white py-2 px-4 rounded-md">
                        {payment?.email}
                      </p>
                    </td>
                    <td>
                      <p className="bg-red-400 text-white py-2 px-4 rounded-md">
                        {payment?.transactionId}
                      </p>
                    </td>
                    <td>
                      <p className="bg-sky-500 text-white py-2 px-4 rounded-md">
                        $ {payment?.price}
                      </p>
                    </td>
                    <td className="  text-green-800 font-bold">
                      {payment?.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;

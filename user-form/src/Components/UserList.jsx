import jsonData from "../data.json"

function UserList({ userData }) {

  const tableRows = userData.map((info) => {
    return (
      <tr>
        <td className="text-white py-3"> {} </td>
        <td className="text-white py-3"> {info.fname} </td>
        <td className="text-white py-3"> {info.lname} </td>
        <td className="text-white py-3"> {info.email} </td>
        <td className="text-white py-3"> {info.occupation} </td>
        <td className="text-white py-3"> {info.dob} </td>
        <td className="text-white py-3"> {info.interestedField} </td>
      </tr>
    );
  });

  return (
    <div className="text-center">
      <h3 className="mt-4 text-decoration-underline fw-bolder">
        LIST OF USERS
      </h3>
      <table className="table table-stripped">
        <thead>
          <tr className="mb-5">
            <td className="text-danger text-decoration-underline fs-5 fw-bold">
              S.N
            </td>
            <td className="text-danger text-decoration-underline fs-5 fw-bold">
              First name
            </td>
            <td className="text-danger text-decoration-underline fs-5 fw-bold">
              Last Name
            </td>
            <td className="text-danger text-decoration-underline fs-5 fw-bold">
              Email
            </td>
            <td className="text-danger text-decoration-underline fs-5 fw-bold">
              Occupation
            </td>
            <td className="text-danger text-decoration-underline fs-5 fw-bold">
              DOB
            </td>
            <td className="text-danger text-decoration-underline fs-5 fw-bold">
              Interested Field
            </td>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default UserList;

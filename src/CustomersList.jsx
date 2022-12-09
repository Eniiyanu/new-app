import React, { Component } from "react";

export class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Oluwaferanmi",
        Phone: "0913346440",
        address: { city: "Ibadan" },
        photo:"https://picsum.photos/id/1060/50" 
      },
      { id: 2, name: "Toluwanimi", Phone: null, address: { city: "Akure" }, photo:"https://picsum.photos/id/1040/50" },
      { id: 3, name: "Praise", Phone: "0913364540", address: { city: "Oyo" }, photo:"https://picsum.photos/id/1040/50"  },
      { id: 4, name: "John", Phone: null, address: { city: "Abuja" } , photo:"https://picsum.photos/id/900/50" },
      { id: 5, name: "James", Phone: "0913340445", address: { city: "Lagos" }, photo:"https://picsum.photos/id/1045/50"  },
    ],
  };


// customerNameStyle = (custName) =>{
//     if (custName.startsWith("J"))return "green-highlight border-left";
//     else if (custName.startsWith("P"))return "red-highlight border-right";
//     else return{};
// };


  render() {
    return (
      <div>
        {" "}
        <h4 className=" m-1 p-1">
          {this.state.pageTitle}
          <span className="badge text-bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button onClick={this.onRefreshClick} className="btn btn-info">
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Address</th>
              
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (Phone) => {
    if (Phone) return Phone;
    else {
      return <div className="bg-warning p-2">No Phone Number</div>;
    }
  };


getCustomerRow = () => {
  return this.state.customers.map((cust) => {
    return (
      <tr key={cust.id}>
        <td>{cust.id}</td>
        <td><img src={cust.photo} alt="user"/>
        <div>
            <button className="btn btn-sm btn-secondary" onClick={() =>{this.onChangePictureClick(cust);}}>Change Picture</button>
        </div>
        </td>
        <td >
        {cust.name}</td>
        <td>{this.getPhoneToRender(cust.Phone)}</td>
        <td>{cust.address.city}</td>
        
      </tr>
    );
  });
};

onChangePictureClick =(cust,index) =>{
    // console.log(cust);
    // console.log(index);
var custArr = this.state.customers;
custArr[index].photo = "https://picsum.photos/id/1045/60"


this.setState({customers:custArr});

};
}
export default CustomersList;

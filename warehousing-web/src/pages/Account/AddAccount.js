// import React from 'react';
// import Header from '../../components/Menu/Header';
// import Footer from '../components/Menu/Footer';
// import Sidebar from '../../components/Menu/Sidebar';
// import '../assets/css/side-menu.css';

// function AddProduct() {
//     return (
//         <>
//         <Header/>
//         <Sidebar/>
//         <div class="content">
//             <div className="card">
//                 <div className="card-content">
//                     <div className="content">
//                         <div className="field">
//                             <label className="">Product Name</label>
//                                 <div className="control">
//                                     <input className="input is-link" type="text" placeholder="Input product name.." />
//                                 </div>
//                             <label className="">Product Category</label>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option>Select product category</option>
//                                         <option>Select product category</option>
//                                     </select>
//                                 </div>
//                             <label className="">Price</label>
//                                 <div className="control">
//                                     <input className="input is-link" type="number" placeholder="Input product price.." />
//                                 </div>
//                             <label className="">Quantity</label>
//                                 <div className="control">
//                                     <input className="input is-link" type="number" placeholder="Input product quantity.." />
//                                 </div>
//                             <label className="">Date</label>
//                                 <div className="control">
//                                     <input className="input is-link" type="text" placeholder="Input date.." />
//                                 </div>
//                             <label className="">Stock Type</label>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option>IN</option>
//                                         <option>OUT</option>
//                                     </select>
//                                 </div>
//                             <label className="">Expired Date</label>
//                                 <div className="control">
//                                     <input className="input is-link" type="date" placeholder="Input expired date.." />
//                                 </div>
//                             <label className="">Province</label>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option>Select Province</option>
//                                     </select>
//                                 </div>
//                             <label className="">City</label>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option>Select City</option>
//                                     </select>
//                                 </div>
//                             <label className="">Warehouse</label>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option>Select Warehouse</option>
//                                     </select>
//                                 </div>
//                             <label className="">Shelves</label>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option>Select Shelves</option>
//                                     </select>
//                                 </div>
//                             <label className="">Shelves Category</label>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option>Select Category</option>
//                                     </select>
//                                 </div>
//                             <label className="">Photo</label>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option>Upload File</option>
//                                     </select>
//                                 </div>
//                             <button>Submit</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <Footer />
//         </>
//     )
// }

// export default AddProduct;



// import React from 'react';
// import Header from '../../components/Menu/Header';
// import Sidebar from '../../components/Menu/Sidebar';
// import { useHistory } from 'react-router-dom';

// function Add() {
//     const history = useHistory();
//     const handleClose = () => {
//         history.push(`/account`); 
//     }
//     return (
//         <>
//         <Header/>
//         <Sidebar />
//             <div className="p-2">
//                 <div className="row justify-content ">
//                     <div className="card col-12">
//                             <div className="container">
//                             <h4 className="text-center p-3">Add User</h4>
//                                 <div class="row">
//                                     <div class="col">
//                                         <div className="col-md-12">
//                                             <div className="form-group">
//                                                 <div className="row col-md-12">
//                                                     <label className="col-md-6 p-2">First Name</label>
//                                                     <input 
//                                                         type="text"
//                                                         className="form-control col-md-6"
//                                                         name="name"
//                                                         autocomplete="off"
//                                                         />
//                                                 </div>
//                                             </div>
//                                         </div>
                                    
//                                         <div className="col-md-12">
//                                             <div className="form-group">
//                                                 <div className="row col-md-12">
//                                                     <label className="col-md-6 p-2">Email</label>
//                                                     <input 
//                                                         type="text"
//                                                         className="form-control col-md-6"
//                                                         name="name"
//                                                         autocomplete="off"
//                                                         />
//                                                 </div>
//                                             </div>
//                                         </div>
                                    
//                                         <div className="col-md-12">
//                                             <div className="form-group">
//                                                 <div className="row col-md-12">
//                                                     <label className="col-md-6 p-2">Password</label>
//                                                     <input 
//                                                         type="text"
//                                                         className="form-control col-md-6"
//                                                         name="name"
//                                                         autocomplete="off"
//                                                         />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="col">
//                                         <div className="col-md-12">
//                                             <div className="form-group">
//                                                 <div className="row col-md-12">
//                                                     <label className="col-md-6 p-2">Last Name</label>
//                                                     <input 
//                                                         type="text"
//                                                         className="form-control col-md-6"
//                                                         name="name"
//                                                         autocomplete="off"
//                                                         />
//                                                 </div>
//                                             </div>
//                                         </div>
                                    
//                                         <div className="col-md-12">
//                                             <div className="form-group">
//                                                 <div className="row col-md-12">
//                                                     <label className="col-md-6 p-2">Role</label>
//                                                     <input 
//                                                         type="text"
//                                                         className="form-control col-md-6"
//                                                         name="name"
//                                                         autocomplete="off"
//                                                         />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         <div className="modal-footer mt-3">
//                             <button className="btn btn-sm" style={{backgroundColor:"#073590", color:"white"}} onClick="">Save</button>
//                             <button className="btn btn-sm btn-secondary" onClick={handleClose}>Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Add;
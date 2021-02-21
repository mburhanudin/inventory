// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import Header from '../components/Menu/Header';
// // import Footer from '../components/Menu/Footer';
// // import Sidebar from '../components/Menu/Sidebar';
// // import './Product.css';

// // function AddProduct() {
// //     const [productName, setProductName] = useState(null);
// //     const [productCategory, setProductCategory] = useState(null);
// //     const [productPrice, setProductPrice] = useState(null);
// //     const [productQuantity, setProductQuantity] = useState(null);
// //     const [inputDate, setInputDate] = useState(null);
// //     const [stockType, setStockType] = useState(null);
// //     const [productExpDate, setProductExpDate] = useState(null);
// //     const [province, setProvince] = useState(null);
// //     const [city, setCity] = useState(null);
// //     const [warehouse, setWarehouse] = useState(null);
// //     const [shelves, setShelves] = useState(null);
// //     const [shelvesCategory, setShelvesCategory] = useState(null);
// //     const [productPhoto, setProductPhoto] = useState(null);
// //     const 


// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log("submitted.");

// //         const data = {
// //             productName: productName,
// //             productCategory: productCategory,
// //             productPrice: productPrice,
// //             productQuantity: productQuantity,
// //             inputDate: inputDate,
// //             stockType: stockType,
// //             productExpDate: productExpDate,
// //             province: province,
// //             city: city,
// //             warehouse: warehouse,
// //             shelvves: shelves,
// //             shelvesCategory: shelvesCategory,
// //             productPhoto: productPhoto,
// //         };

// //         let formdata = new FormData();
// //         formdata.append('photos', productPhoto);
// //         console.log(productPhoto);

// //         const config = {
// //             headers: {
// //                 "Content-Type": "multipart/form-data"
// //             }
// //         };

// //         axios.post("https://inventorymanagementsystem-api.herokuapp.com/api/v1/products", data, formdata, config)
// //             .then((response) => {
// //                 alert("The file is successfully uploaded!");
// //                 console.log(response);
// //             })
// //             .catch((error) => {
// //                 alert("The file is unseccessfully uploaded!");
// //                 console.log(error);
// //             })
// //     };

// //     return (
// //         <>
// //         <Header/>
// //         <Sidebar/>
// //         <div class="content">
// //             <div className="card">
// //                 <div className="card-content">
// //                     <div className="form" onSubmit={handleSubmit}>
// //                         <div className="field">
// //                             <h4 className="product-form">Add Product Data</h4>

// //                             <label className="">Product Name</label>
// //                                 {/* <div className="control"> */}
// //                                     <input className="input is-link" type="text" placeholder="Input product name.." onChange={(e) => setProductName(e.target.value)}/>
// //                                 {/* </div> */}
// //                             <label className="">Product Category</label>
// //                                 <br/>
// //                                 <div className="select is-link">
// //                                     <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
// //                                         <option value="" disabled selected>Select Product Category</option>
// //                                         <option>Select product category</option>
// //                                         <option>Select product category</option>
// //                                     </select>
// //                                 </div>
// //                             <br/>
// //                             <label className="">Price</label>
// //                                 <br/>
// //                                 <div className="control">
// //                                     <input className="input is-link" type="number" placeholder="Input product price.." />
// //                                 </div>
// //                             <label className="">Quantity</label>
// //                                 <br/>
// //                                 <div className="control">
// //                                     <input className="input is-link" type="number" placeholder="Input product quantity.." />
// //                                 </div>
// //                             <label className="">Date</label>
// //                                 <br/>
// //                                 <div className="control">
// //                                     <input className="input is-link" type="text" placeholder="Input date.." />
// //                                 </div>
// //                             <label className="">Stock Type</label>
// //                                 <br/>
// //                                 <div className="select is-link">
// //                                     <select>
// //                                         <option>IN</option>
// //                                         <option>OUT</option>
// //                                     </select>
// //                                 </div>
// //                             <br/>
// //                             <label className="">Expired Date</label>
// //                                 <br/>
// //                                 <div className="control">
// //                                     <input className="input is-link" type="date" placeholder="Input expired date.." />
// //                                 </div>
// //                             <label className="">Province</label>
// //                                 <br/>
// //                                 <div className="select is-link">
// //                                     <select className="mdb-select md-form" searchable="Search here...">
// //                                         <option value="" disabled selected>Select Province</option>
// //                                         <option>Province A</option>
// //                                     </select>
// //                                 </div>
// //                             <br/>
// //                             <label className="">City</label>
// //                                 <br/>
// //                                 <div className="select is-link">
// //                                     <select>
// //                                         <option value="" disabled selected>Select City</option>
// //                                         <option>Select City</option>
// //                                     </select>
// //                                 </div>
// //                             <br/>
// //                             <label className="">Warehouse</label>
// //                                 <br/>
// //                                 <div className="select is-link">
// //                                     <select>
// //                                         <option value="" disabled selected>Select Warehouse</option>
// //                                         <option>Select Warehouse</option>
// //                                     </select>
// //                                 </div>
// //                             <br/>
// //                             <label className="">Shelves</label>
// //                                 <br/>
// //                                 <div className="select is-link">
// //                                     <select>
// //                                         <option value="" disabled selected>Select Shelves</option>
// //                                         <option>Select Shelves</option>
// //                                     </select>
// //                                 </div>
// //                             <br/>
// //                             <label className="">Shelves Category</label>
// //                                 <br/>
// //                                 <div className="select is-link">
// //                                     <select>
// //                                         <option value="" disabled selected>Select Shelves Category</option>
// //                                         <option>Select Category</option>
// //                                     </select>
// //                                 </div>
// //                             <br/>
// //                             <label className="">Photo</label>
// //                                 <br/>
// //                                 <div className="control">
// //                                     <input className="input is-link" type="file" placeholder="Upload photo here" onChange={(e) => setProductPhoto(e.target.files[0])} />
// //                                 </div>
// //                             <br/>
// //                             <br/>
// //                             <button type="submit">Submit</button>
// //                         </div>
// //                         </div>
// //                 </div>
// //             </div>
// //         </div>
// //         <Footer />
// //         </>
// //     )
// // }

// // export default AddProduct;




// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from '../components/Menu/Header';
// import Footer from '../components/Menu/Footer';
// import Sidebar from '../components/Menu/Sidebar';
// import './Product.css';

// function AddProduct() {
//     const [name, setName] = useState("");
//     const [category_id, setCategory_Id] = useState(0);
//     const [price, setPrice] = useState(0);
//     const [quantity, setQuantity] = useState(0);
//     const [createdAt, setCreatedAt] = useState(0);
//     const [type, setType] = useState("");
//     const [expDate, setExpDate] = useState(0);
//     const [province, setProvince] = useState(null);
//     const [city, setCity] = useState(null);
//     const [warehouse, setWarehouse] = useState(null);
//     const [shelves, setShelves] = useState(null);
//     const [shelvesCategory, setShelvesCategory] = useState(null);
//     const [photo, setPhoto] = useState(null);


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("submitted.");

//         const url = "https://inventorymanagementsystem-api.herokuapp.com/api/v1/products";
//         const data = {
//             name: name,
//             category_id: category_id,
//             price: price,
//             quantity: quantity,
//             createdAt: createdAt,
//             type: type,
//             expDate: expDate,
//             province: province,
//             city: city,
//             warehouse: warehouse,
//             shelves: shelves,
//             shelvesCategory: shelvesCategory,
//             photo: photo,
//         };

//         let formdata = new FormData();
//         formdata.append('photos', photo);
//         console.log(photo);

//         axios(url, data, formdata, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//             .then((response) => {
//                 alert("Data is successfully uploaded!");
//                 console.log(response);
//             })
//             .catch((error) => {
//                 alert("Data is unseccessfully uploaded!");
//                 console.log(error);
//             })
//     };

//     return (
//         <>
//         <Sidebar/>
//         <div class="content">
//             <div className="card">
//                 <div className="card-content">
//                     <div className="form" onSubmit={handleSubmit}>
//                         <div className="field">
//                             <h4 className="product-form">Add Product Data</h4>

//                             <label className="">Product Name</label>
//                                 {/* <div className="control"> */}
//                                     <input className="input is-link" type="text" placeholder="Input product name.." onChange={(e) => setName(e.target.value)}/>
//                                 {/* </div> */}
//                             <label className="">Product Category</label>
//                                 <br/>
//                                 <div className="select is-link">
//                                     <select value={data.category_id} onChange={(e) => setCategory_Id(e.target.value)}>
//                                         <option value="" disabled selected>Select Product Category</option>
//                                         <option>Select product category</option>
//                                     </select>
//                                 </div>
//                             <br/>
//                             <label className="">Price</label>
//                                 <br/>
//                                 <div className="control">
//                                     <input className="input is-link" type="number" placeholder="Input product price.." onChange={(e) => setPrice(e.target.value)} />
//                                 </div>
//                             <label className="">Quantity</label>
//                                 <br/>
//                                 <div className="control">
//                                     <input className="input is-link" type="number" placeholder="Input product quantity.." onChange={(e) => setQuantity(e.target.value)}/>
//                                 </div>
//                             <label className="">Date</label>
//                                 <br/>
//                                 <div className="control">
//                                     <input className="input is-link" type="text" placeholder="Input date.." onChange={(e) => setCreatedAt(e.target.value)}/>
//                                 </div>
//                             <label className="">Stock Type</label>
//                                 <br/>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option>IN</option>
//                                         <option>OUT</option>
//                                     </select>
//                                 </div>
//                             <br/>
//                             <label className="">Expired Date</label>
//                                 <br/>
//                                 <div className="control">
//                                     <input className="input is-link" type="date" placeholder="Input expired date.." onChange={(e) => setExpDate(e.target.value)}/>
//                                 </div>
//                             <label className="">Province</label>
//                                 <br/>
//                                 <div className="select is-link">
//                                     <select className="mdb-select md-form" searchable="Search here...">
//                                         <option value="" disabled selected>Select Province</option>
//                                         <option>Province A</option>
//                                     </select>
//                                 </div>
//                             <br/>
//                             <label className="">City</label>
//                                 <br/>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option value="" disabled selected>Select City</option>
//                                         <option>Select City</option>
//                                     </select>
//                                 </div>
//                             <br/>
//                             <label className="">Warehouse</label>
//                                 <br/>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option value="" disabled selected>Select Warehouse</option>
//                                         <option>Select Warehouse</option>
//                                     </select>
//                                 </div>
//                             <br/>
//                             <label className="">Shelves</label>
//                                 <br/>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option value="" disabled selected>Select Shelves</option>
//                                         <option>Select Shelves</option>
//                                     </select>
//                                 </div>
//                             <br/>
//                             <label className="">Shelves Category</label>
//                                 <br/>
//                                 <div className="select is-link">
//                                     <select>
//                                         <option value="" disabled selected>Select Shelves Category</option>
//                                         <option>Select Category</option>
//                                     </select>
//                                 </div>
//                             <br/>
//                             <label className="">Photo</label>
//                                 <br/>
//                                 <div className="control">
//                                     <input className="input is-link" type="file" placeholder="Upload photo here" onChange={(e) => setPhoto(e.target.files[0])} />
//                                 </div>
//                             <br/>
//                             <br/>
//                             <button type="submit">Submit</button>
//                         </div>
//                         </div>
//                 </div>
//             </div>
//         </div>
//         <Footer />
//         </>
//     )
// }

// export default AddProduct;
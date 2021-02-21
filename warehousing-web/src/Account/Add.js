import React from 'react';
import Header from '../components/Menu/Header';
import Sidebar from '../components/Menu/Sidebar';
import { useHistory } from 'react-router-dom';

function Add() {
    const history = useHistory();
    const handleClose = () => {
        history.push(`/account`); 
    }
    return (
        <>
        <Sidebar />
            <div className="p-2">
                <div className="row justify-content ">
                    <div className="card col-12">
                            <div className="container">
                            <h4 className="text-center p-3">Add User</h4>
                                <div class="row">
                                    <div class="col">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <div className="row col-md-12">
                                                    <label className="col-md-6 p-2">First Name</label>
                                                    <input 
                                                        type="text"
                                                        className="form-control col-md-6"
                                                        name="name"
                                                        autocomplete="off"
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <div className="row col-md-12">
                                                    <label className="col-md-6 p-2">Email</label>
                                                    <input 
                                                        type="text"
                                                        className="form-control col-md-6"
                                                        name="name"
                                                        autocomplete="off"
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <div className="row col-md-12">
                                                    <label className="col-md-6 p-2">Password</label>
                                                    <input 
                                                        type="text"
                                                        className="form-control col-md-6"
                                                        name="name"
                                                        autocomplete="off"
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <div className="row col-md-12">
                                                    <label className="col-md-6 p-2">Last Name</label>
                                                    <input 
                                                        type="text"
                                                        className="form-control col-md-6"
                                                        name="name"
                                                        autocomplete="off"
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="form-group">
                                            <div className="row col-md-12">
                                            <label className="col-md-6">Role</label>
                                                <select
                                                    className="form-control col-md-6">
                                                        <option value="1">Admin</option>
                                                        <option value="2">Supervisor</option>
                                                        <option value="3">Management</option>
                                                        <option value="4">Entry</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="modal-footer mt-3">
                            <button className="btn btn-sm" style={{backgroundColor:"#073590", color:"white"}} onClick="">Save</button>
                            <button className="btn btn-sm btn-secondary" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Menu/Sidebar';
import DataGrid, { Column, Pager, Paging, SearchPanel, Sorting} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { useHistory } from 'react-router-dom';

function Category() {
    const history = useHistory();

    const [categoryId, setCategoryId] = useState(null);
    const [categoryName, setCategoryName] = useState(null);
    const [categoryData, setCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        setIsLoading(true);
        // getData();
        setIsLoading(false);
    }, []);

    const pageSizes = [5, 10, 20];

    const data = {
        categoryId: categoryId,
        categoryName: categoryName
    };

    const user = localStorage.getItem('user');
    let res = JSON.parse(user);
    console.log("user", user);
    console.log(res.data);
    const token = res.data;

    const config = {
        method: 'get',
        url: 'https://inventorymanagementsystem-api.herokuapp.com/api/v1/categories',
        headers: { 
          'authorization': token
        },
        data : data
    }

    axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
        .catch(function (error) {
        console.log(error);
    });


    return (
        <>
        <Sidebar />
        <div className="p-5">
        <div className="row justify-content ">
                <div className="card col-12">
                    <h4 className="text-center p-3">Category</h4>
                    <div className="row mb-3">
                        <div className="col-md-2">
                            <button className="btn btn-sm" style={{backgroundColor:"#073590", color:"white"}} onClick="">+ Add</button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <DataGrid
                            dataSource={data}
                            showBorders={true}>
                        <SearchPanel visible={true} highlightCaseSensitive={false} />
                        {/* <Paging defaultPageSize={10}/>
                        <Pager
                            showPageSizeSelector={true}
                            allowedPageSizes={[5,10,20]}
                            showInfo={true} /> */}
                        
                        <Column dataField="name" caption="Category ID" />
                        <Column dataField="role" caption="Category Name" />
                        <Column dataField="id" alignment="center" caption="Action" cellRender="" />


                        {isLoading && <p>Loading Data...</p>}
                        {isLoading && data.map((data) => (
                            <div key={data.id}>
                                <Column dataType="number">{data.id}</Column>
                                <Column dataType="string">{data.category_name}</Column>

                                <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                                <Paging defaultPageSize={10} />
                            </div>
                        ))}

                        </DataGrid>
                        <br />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Category;
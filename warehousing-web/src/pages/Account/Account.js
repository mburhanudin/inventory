import React, {useRef, useState, useEffect} from 'react';
import Header from '../../components/Menu/Header';
import Sidebar from '../../components/Menu/Sidebar';
import DataGrid, { Column, Pager, Paging, SearchPanel, Sorting} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { useHistory } from 'react-router-dom';

function Account() {
    const history = useHistory();
    const add = () => {
        history.push(`/account/add`); 
    }

    return (
        <>
        <Sidebar />
        <div className="p-5">
        <div className="row justify-content ">
                <div className="card col-12">
                    <h4 className="text-center p-3">List User</h4>
                    <div className="row mb-3">
                        <div className="col-md-2">
                            <button className="btn btn-sm" style={{backgroundColor:"#073590", color:"white"}} onClick={add}>+ Add User</button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <DataGrid
                            dataSource=""
                            showBorders={true}>
                        <SearchPanel visible={true} highlightCaseSensitive={false} />
                        <Paging defaultPageSize={10}/>
                        <Pager
                            showPageSizeSelector={true}
                            allowedPageSizes={[5,10,20]}
                            showInfo={true} />
                        
                        <Column dataField="name" caption="Name"/>
                        <Column dataField="email" caption="Email"/>
                        <Column dataField="role" caption="Role"/>
                        <Column dataField="id" alignment="center" caption="Action" cellRender=""/>

                        </DataGrid>
                        <br />
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

// export default Account;



// import React, {useRef, useState, useEffect} from 'react';
// import Header from '../../components/Menu/Header';
// import Sidebar from '../../components/Menu/Sidebar';
// import DataGrid, { Column, Pager, Paging, SearchPanel, Sorting} from 'devextreme-react/data-grid';
// import 'devextreme/dist/css/dx.common.css';
// import 'devextreme/dist/css/dx.light.css';
// import { useHistory } from 'react-router-dom';

// function Account() {
//     const history = useHistory();
//     const add = () => {
//         history.push(`/account/add`); 
//     }

//     return (
//         <>
//         <Header/>
//         <Sidebar />
//         <div className="p-2">
//         <div className="row justify-content ">
//                 <div className="card col-12">
//                     <h4 className="text-center p-3">List User</h4>
//                     <div className="row mb-3">
//                         <div className="col-md-2">
//                             <button className="btn btn-sm" style={{backgroundColor:"#073590", color:"white"}} onClick={add}>+ Add User</button>
//                         </div>
//                     </div>
//                     <div className="table-responsive">
//                         <DataGrid
//                             dataSource=""
//                             showBorders={true}>
//                         <SearchPanel visible={true} highlightCaseSensitive={false} />
//                         <Paging defaultPageSize={10}/>
//                         <Pager
//                             showPageSizeSelector={true}
//                             allowedPageSizes={[5,10,20]}
//                             showInfo={true} />
                        
//                         <Column dataField="name" caption="Name"/>
//                         <Column dataField="email" caption="Email"/>
//                         <Column dataField="role" caption="Role"/>
//                         <Column dataField="id" alignment="center" caption="Action" cellRender=""/>

//                         </DataGrid>
//                         <br />
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//         </>
//     )
// }

// export default Account;
import React, {useRef, useState, useEffect} from 'react';
import Header from '../components/Menu/Header';
import Sidebar from '../components/Menu/Sidebar';
import DataGrid, { Column, Pager, Paging, SearchPanel, Sorting} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { useHistory } from 'react-router-dom';

function Report() {
    const history = useHistory();
  
    return (
        <>
        <Sidebar />
        <div className="p-5">
        <div className="row justify-content ">
                <div className="card col-12">
                    <h4 className="text-center p-3">Report</h4>
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
                        <Column dataField="email" caption=""/>
                        <Column dataField="role" caption=""/>
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

export default Report;
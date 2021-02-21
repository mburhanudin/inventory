import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Menu/Sidebar";
import DataGrid, {
  Column,
  Pager,
  Paging,
  SearchPanel,
  Sorting,
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { useHistory } from "react-router-dom";
import request from "../../helpers/request";

const pageSizes = [5, 10, 20];

const columns = [
  "id",
  "name",
  "category_id",
  "price",
  "quantity",
  "createdAt",
  "type",
  "expDate",
  "photo",
];

function Product() {
  const history = useHistory();

  const [name, setName] = useState(null);
  const [category_id, setCategoryId] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  const [type, setType] = useState(null);
  const [expDate, setExpDate] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState([]);

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const { data } = await request.get("/products");

      setResponse(data.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="p-5">
        <div className="row justify-content ">
          <div className="card col-12">
            <h4 className="text-center p-3">List Product</h4>
            <div className="row mb-3">
              <div className="col-md-2">
                <button
                  className="btn btn-sm"
                  style={{ backgroundColor: "#073590", color: "white" }}
                  onClick="/product/:pages"
                >
                  + Add
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <DataGrid
                dataSource={response}
                showBorders={true}
                defaultColumns={columns}
              >
                <SearchPanel visible={true} highlightCaseSensitive={false} />
                <Paging defaultPageSize={10} />
                <Pager
                  showPageSizeSelector={true}
                  allowedPageSizes={[5, 10, 20]}
                  showInfo={true}
                />

                <Column dataField="name" caption="User" />
                <Column dataField="name" caption="Product Name" />
                <Column dataField="id" caption="Prod.Category" />
                <Column dataField="role" caption="Price" />
                <Column dataField="role" caption="Quantity" />
                <Column dataField="role" caption="Date" />
                <Column dataField="role" caption="Stock Type" />
                <Column dataField="role" caption="Expired Date" />
                <Column dataField="role" caption="Photo" />
                <Column
                  dataField="id"
                  alignment="center"
                  caption="Action"
                  cellRender=""
                />

                {isLoading && <p>Loading Data...</p>}
                {isLoading ||
                  response.map((data) => (
                    <div key={data.id}>
                      <Column dataType="string">{data.id}</Column>
                      <Column dataType="string">{data.name}</Column>
                      <Column dataType="string">{data.category_id}</Column>
                      <Column dataType="number">{data.price}</Column>
                      <Column dataType="number">{data.quantity}</Column>
                      <Column dataType="date">{data.createdAt}</Column>
                      <Column dataType="string">{data.type}</Column>
                      <Column dataType="date">{data.expDate}</Column>
                      <Column dataType="string">{data.photo}</Column>

                      <Pager
                        allowedPageSizes={pageSizes}
                        showPageSizeSelector={true}
                      />
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
  );
}

export default Product;

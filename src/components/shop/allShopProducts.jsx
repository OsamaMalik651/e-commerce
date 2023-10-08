import { LiaAngleDownSolid } from "react-icons/lia";
import { FaFilter } from "react-icons/fa6";
import SingleProductUi from '../../components/shared/SingleProductUi';
import Pagination from "./Pagination";
import { AllProductsItems } from "../../config/data";

/*======================================*/
/*======================================*/
/*======================================*/

const AllShopProducts = ({
    products,
    params,
    updateFilter,
    priceQuery,
    min,
    selectQuery,
    handleShowSmallSideBar,
    paginationQuery,
    currentPage,
    setCurrentPage,
    activePagination,
    setActivePagination,renderedProducts,
    pages,
    orderedProducts,arrayToRender,filteredProductsArray }) => {



    return (
        <div className="left">
            <div className="top-part">
                {
                    products.length > 0
                    &&
                    <>
                        <p className="pages-number mb-0">
                            Showing page <span>{currentPage}</span> of <span>{pages}</span> pages
                        </p>
                    </>
                }

                {/* this btn will show the sidebar section in small devices */}
                <button className="show-sidebar" onClick={handleShowSmallSideBar}><FaFilter /> Filters</button>
                {
                    products.length > 0 &&
                    <div className="select-box">
                        <select
                            name=""
                            id="start"
                            onChange={(e) => updateFilter("sortBy", e.target.value)}
                            defaultValue={
                                selectQuery === "highToLow"
                                    ? "highToLow"
                                    : selectQuery === "lowToHigh"
                                        ? "lowToHigh"
                                        : "default"
                            }
                        >
                            <option value="default" >Default</option>
                            <option value="lowToHigh">Price, Low to High</option>
                            <option value="highToLow" >Price, High to Low</option>
                        </select>
                        <LiaAngleDownSolid />
                    </div>
                }

            </div>
            <div className="all-shop-products-box">
            {renderedProducts}

                {/* put the pagination NOT in parent comp , in order to keep the style */}
                {/* <Pagination
                    pages={pages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    updateFilter={updateFilter}
                    paginationQuery={paginationQuery}
                    activePagination={activePagination}
                    setActivePagination={setActivePagination}
                /> */}

            </div>
        </div>
    )
}

export default AllShopProducts;
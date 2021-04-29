import NewData from "./SearchData.js"
import ShowData from "./SearchShowData.js"


function SearchApp() {
    return (
        <div className="SearchApp">
            <div className="row">
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                </div>
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    
                        {NewData.map(function (x) {
                            return <ShowData NewData={x}></ShowData>
                        })}
                    
                </div>
            </div>
        </div>
    );
}

export default SearchApp;

import "../style.css"

export function Card(props){
    return(
        <div class="card col-3" id="card">
            <div class="card ">
                <img src={props.obj.thumbnail} class="card-img-top" alt="logo/"  />
                <div class="card-body">
                    <h5 class="card-title">
                        {props.obj.title}
                    </h5>
                    <p class="card-text">
                        {props.obj.price}
                    </p>
                    <button type="button" class="btn btn-primary">Add to Cart</button>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}
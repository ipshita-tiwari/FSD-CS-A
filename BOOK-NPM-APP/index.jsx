import ReactDOM from 'react-dom/client'

function App(){
    return(
        <div>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )
}

function Book(){
    return(
        <div>
            <img src="" width="200" height="200" alt="Book Image"/>
            <h3>Title : Physics</h3>

            <button>Add to Cart</button>
        </div>
    )
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>)
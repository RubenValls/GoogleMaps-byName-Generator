const Map = (props) => {

    return (        
        <div class="container mt-4">
            <iframe title="GoogleMap" src={props.link} height="400px" class="w-100 rounded"></iframe>
        </div>
    );
}

export default Map;

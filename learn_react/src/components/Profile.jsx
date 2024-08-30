export default function Profile(props) {
    const url = "https://i.imgur.com/MK3eW3As.jpg";
    const name = "Skillup Labs";


    function selectProfile(name) {
        console.log(name);

    }
    
    return (
        <img onClick={() => selectProfile(props.name)}  className={`rounded-full border-4 border-${props.color}-500`} src={props.url || url} alt={props.name || name} />
    );
}
import { useState } from "react";
import Profile from "./Profile";
function Profiles() {
      const [selectedProfileName, setSelectedProfileName] = useState('Welcome to Skillup Labs');
    

    function selectProfile(name) {
        console.log(name);
        setSelectedProfileName(name);


    }

    return(
        <section className="shadow p-8 bg-white flex flex-col gap-2">
            <div className="flex gap-2">
                <Profile url="https://i.imgur.com/1bX5QH6.jpg"  selectProfile={selectProfile} color="green" name="San" />
                <Profile url="https://i.imgur.com/1bX5QH6.jpg"  selectProfile={selectProfile} color="blue" name="man" />
                <Profile url="https://i.imgur.com/1bX5QH6.jpg"  selectProfile={selectProfile} color="pink" name="son" />
                <Profile url="https://i.imgur.com/1bX5QH6.jpg"  selectProfile={selectProfile} color="purple" name="niki" />
            </div>
            <h3 className="text-xl">{selectedProfileName}</h3>
            
        </section>

    )
}
export default Profiles;
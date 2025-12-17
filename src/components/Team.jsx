import MemberCard from "./MemeberCard";

function Team() {const members = [
                { Name: "Alice", Role: "Developer", Bio: "Loves coding and coffee." },
                { Name: "Bob", Role: "Designer", Bio: "Passionate about user experience." },
                { Name: "Charlie", Role: "Product Manager", Bio: "Ensures everything runs smoothly." }
            ];
    return(
        <div>
        {members.map((memeber, index) => (
            <MemberCard
                key={index}
                Name={memeber.Name}
                Role={memeber.Role}
                Bio={memeber.Bio}
            />      

        ))}  </div>

    );
}
export default Team;
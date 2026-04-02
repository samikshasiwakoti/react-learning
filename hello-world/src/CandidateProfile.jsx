export const CandidateProfile =()=>
{
    const name = "Peter Parker";
    const role = "WEb Developer";
    const yearsofExperience = 5;
    const isAvailabe = true
    return(
        <>
        <h2>{name}</h2>
        <p>{role} with {yearsofExperience} years of experience</p>
        <p>
            Started in {2025 - yearsofExperience}
        </p>
        <p>
            Status:{isAvailabe? "Availabe for hire": "Not availabe"}
        </p>
        <p>Contact: {name.toLowerCase().replace(" ",".")}@email.com</p>
        </>
    );
};
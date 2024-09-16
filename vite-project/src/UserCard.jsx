import PropTypes from "prop-types"

const userData = [
    {
        name : "Mammooty",
        city : "Kochi",
        description : "Full stack developer",
        skills : ["Django","Docker","React","UI/UX","Redux","Figma","GraphQl","Redis","microservice"],
        online : true,
        profile : "images/1.jpeg",
    },
    {
        name : "Mammath",
        city : "Malappuram",
        description : "Front end developer",
        skills : ["React","UI/UX","Redux","Figma"],
        online : false,
        profile : "images/2.jpeg",
    },
    {
        name : "Mammunji",
        city : "kollam",
        description : "Back end developer",
        skills : ["Django","Docker","DRF","Node","GraphQl","Redis","microservice"],
        online : true,
        profile : "images/3.jpeg",
    }
]


function User(props){
    return <div className="card-container"> 
            {/* <span className="pro online">ONLINE</span> */}
            {/* <img src="images/download (1).jpeg" className="img" alt="user" /> */}
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} className="img" alt="user" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="button">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
            
                {/* <ul>
                    <li>Django</li>
                    <li>Django</li>
                    <li>Django</li>
                    <li>Django</li>
                    <li>Django</li>
                    <li>Django</li>
                </ul> */}
                <ul>
                    {props.skills.map((skill,index)=>(
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>


    </div>
}


const UserCard = () => {
  return (
    
    //   <User name="Mammooty" city="Kannur" description="Front end developer" skills={["Django","Docker","React","UI/UX","Redux","Figma"]} online = {false} profile="images/2.jpeg"/>

    <>
    {
        userData.map((user,index) => (
            <User key={index} name = {user.name} 
            city = {user.city}
            description = {user.description}
            profile = {user.profile}
            online = {user.online}
            skills = {user.skills} />
            
        ))
    }
    </>
 
  )
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    city : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    online : PropTypes.bool.isRequired,
    skills : PropTypes.arrayOf(PropTypes.string).isRequired,
    profile : PropTypes.string.isRequired,
}

export default UserCard

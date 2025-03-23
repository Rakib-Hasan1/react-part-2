export default function Friend ({friend}) {
    console.log(friend)
    const {name, email, phone} = friend;
    return(
        <div className="cart">
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
            <p>Phone No : {phone}</p>
        </div>
    )
}
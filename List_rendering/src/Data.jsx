import './App.css'

function Data() {
    let list_data = [
        {"name": "Ramesh", "age": 18},
        {"name": "Saajan", "age": 22},
        {"name": "Kaalu", "age": 32},
        {"name": "Prasad", "age": 26}
    ];

    return (
        <>
            <div className="main">
                {list_data.map((person, index) => (
                    <div className="info">
                        <h3>{person.name}</h3>
                        <p>{person.age}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Data;

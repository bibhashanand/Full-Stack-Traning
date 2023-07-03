function listgroup()
{
    const items =[
        'Delhi',
        'Noida',
        'Ghaziabad',
        'Banglore',
        'Mumbai',
        'Patna',
        'Haryana',
        'Pune',
        'Prayagraj',
        'Bhuvneshwar'
    ];

    if (items.length == 0)
        return <p>No item found</p>;
        

return (
<ol className="list-group list-group-numbered">
    {items.map(item=> (
    <li className="list-group-item" key={item}>{item}</li>
    ))}
</ol>
);
}

export default listgroup;
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
        'Prayagraj'
    ];
    {items.map(item=><li>{item}</li>)}
return (
<ol className="list-group">
    {items.map(item=><li className="list-group-item">{item}</li>)}
</ol>
);
}

export default listgroup;
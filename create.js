db.inventory.insertOne(
    {item: "canvas", qty: 100, tags: ["marsh mello"], size:{h: 28, w: 35.5, uom: "cm"}},

)
db.inventory.insertMany(
    {item: "canvas", qty: 100, tags: ["marsh mello"], size:{h: 28, w: 35.5, uom: "cm"}},
    {item: "parrot", qty: 100, tags: ["yellow"], size:{h: 28, w: 35.5, uom: "cm"}},
    {item: "Smaller", qty: 100, tags: ["smooth"], size:{h: 28, w: 35.5, uom: "cm"}},
    {item: "Smarterthan any one", qty: 100, tags: ["cotton"], size:{h: 28, w: 35.5, uom: "cm"}}
)
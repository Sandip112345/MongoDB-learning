db.inventory.find().skip(1) // skip the first output
db.inventory.find().skip(2) // skip the secont output
db.inventory.find().limit(2)    // limit the output to two
db.inventory.find().sort({qty: 1}) // increasing order
db.inventory.find().sort({qty: -1}) // decreasing order
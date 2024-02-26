const {MongoClient} = require(id= "mongodb");

const uri = 'mongodb://127.0.0.1'

const client = new MongoClient(uri)

const data1 = {
    name: "Designer Handbag1",
    company: "xyz",
    price: 3466,
    colors: ["#00000", "#cc6600"],
    image: "abc",
    category: "qaz",
    isFeatured: "true"
}

const main = async () => {
    await client.connect()
    const db = client.db(dbName= "shop")
    const collection = db.collection(name= "products")
    await collection.insertOne(data1)
    const data = await collection.find({price: {$gt: 1200}}).toArray()
    const dataa = await collection.find({price: {$eq: 3466}}).toArray()
    console.log(data)
    console.log(dataa)
    return "done"
}

main().then(console.log()).catch((e) => console.log(e) ).finally(() => client.close())
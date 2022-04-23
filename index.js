const express=require('express')
const PORT=5500;

const app=express();
app.use(express.json());

//room details list to admin in hotel
const roomList=[];

//room already booked
const bookedRooms=[];


//creating a room detail
app.post("/details", (req, res)=>{
    roomList.push(req.body)
    res.send('Details added')
})

//booking room
app.post('/booking', (req,res)=>{
    if(req.body){
        let roomFilter=bookedRooms.filter(item=>item.roomNumber==req.body.roomNumber);
        if(roomFilter.length>0){
            res.send("Room already booked")
        }else{
            bookedRooms.push(req.body);
            res.send("Room booked successfully")
        }
    }else{
        res.send("Server problem... try again")
    }
})


app.get('/bookedrooms', (req,res)=>{
    if(bookedRooms.length>0){
        res.send(bookedRooms)
    }else{
        res.send('All room are avilable')
    }
})

app.listen(PORT)